import React from 'react'
import './hostproj.css'
import protoLogo from '../assets/proto.png'
import axios from 'axios'
import {useState} from 'react';
import { Link,useNavigate,NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../utils/api';



const Hostproj = () => {

  const navigate = useNavigate();

  const data={name:'',description:'',tag:'',link:'',image:''};
  const[inputdata,setdata]=useState(data);

  const handledata=(e)=>{
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setdata({...inputdata,[e.target.name]:value})
  }
  const handleupload=(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', inputdata.name);
    formData.append('description', inputdata.description);
    formData.append('tag', inputdata.tag);
    formData.append('link', inputdata.link);
    if (inputdata.image instanceof File) {
      formData.append('image', inputdata.image);
    }

    axios.post(`${API_BASE_URL}/addproject`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch(err=>{
      console.log("STATUS:", err.response?.status);
      console.log("DATA:", err.response?.data);
      console.log(err);
    })

  }

  return (
    <div id="host">
      <p id="hostit">HOST YOUR PROJECT/IDEA...</p>
      <form onSubmit={handleupload} id="hostform">
        <label htmlFor="name" id="boxi">Project Name:</label><br />
        <input id="name" type="text" placeholder='Project Name' name='name' onChange={handledata} value={inputdata.name} />
        <br />
        <label htmlFor="description" id="boxi">Project Description:</label><br />
        <textarea id="description" type="text" placeholder='Project Description' name='description' onChange={handledata} value={inputdata.description} />
        <br />
        <label htmlFor="tags" id="boxi">Project Tags:</label><br />
        <input id="tags" type="text" placeholder='Project Tags' name='tag' onChange={handledata} value={inputdata.tag} />
        <br />
        <label htmlFor="link" id="boxi">Project Link:</label><br />
        <input id="links" type="text" placeholder='Project Link' name='link' onChange={handledata} value={inputdata.link} />
        <br />
        <label htmlFor="image" id="boxi">Project Image:</label><br />
        <input id="but-image" type="file" placeholder='Project Image' name='image' onChange={handledata}  />
        <br /><br />
        
          <button type="submit" id="hostbut">Host Project</button>
        
      </form>
    </div>
  )
}

export default Hostproj
