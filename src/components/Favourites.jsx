import React, {useEffect,useState} from 'react'
import projlogo from '../assets/Untitled.png'
import './favourites.css'
import axios from 'axios';
import { Link,NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../utils/api';


const Favourites = () => {
  const [favproj,setfavproje]=useState([]);

  useEffect(()=>{
    axios.get(`${API_BASE_URL}/getfav`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    .then((response)=>{
      setfavproje(response.data.favourites);
    })
    .catch((error)=>{
      console.log('error occured',error);
    })
  },[])
  const handleproj=((project)=>{
    axios.post(`${API_BASE_URL}/postmyproj`,{
      id:project._id
    },{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    .then(response=>{
      alert('Added to My Projects');
    })
    .catch(error=>{
      console.log(error);
      alert('Error adding to My Projects');
    })
  })

  const handledeletefav = async (faven) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deletefav/${faven._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log("Delete response:", response.data);
      
      if (response.data.success) {
        // Refresh favourite items after successful deletion
        const favResponse = await axios.get(`${API_BASE_URL}/getfav`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setfavproje(favResponse.data.favourites);
      }
    } catch (error) {
      console.log('Error deleting favourite item:', error);
    }
  }

  return (
    <div id="fav-back">
      <p id="fav-head">Projects I would Like to Work On...</p>
      {favproj.map((favi)=>{
        return(
          <div id="favcard">
        <img src={typeof favi.image === 'string' && favi.image.startsWith('data:') ? favi.image : `${API_BASE_URL}${favi.image}`}
      alt={favi.name} id="favimg"/>
        <div id="favcontent">
          <p id="fav-tit">{favi.name}</p>

          <div id="fav-buttons">
            <NavLink to="/myproj"><button onClick={()=>handleproj(favi)} id="join-btn">Join Project</button></NavLink>
            <button onClick={()=>handledeletefav(favi)} id="remove-fav">Remove from Favourites</button>
          </div>
        </div>
      </div>
        )
      })}
      
    </div>
  )
}

export default Favourites
