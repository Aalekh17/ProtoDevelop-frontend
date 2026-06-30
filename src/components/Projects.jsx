import  React,{ useEffect, useState }from 'react'
import './projects.css'
import protoLogo from '../assets/proto.png'
import axios from 'axios';
import { Link,NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../utils/api';


const Projects = () => {
  const [proje,setproje]= useState([]);
  useEffect(()=>{
    axios.get(`${API_BASE_URL}/getproject`)
    .then((response)=>{
      setproje(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  const token=localStorage.getItem('token');

  const handlepost=((project)=>{
    axios.post(`${API_BASE_URL}/postfav`,{
      id:project._id
    },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(response=>{
      alert('Added to Favourites');
    })
    .catch(error=>{
      console.log(error);
      alert('Error adding to Favourites');
    })
  })

  return (
      <div id="projback">
      {proje.map((item)=>{
        return(
      <div id="boxproj">
      <div id="leftproj">
        <img src={typeof item.image === 'string' && item.image.startsWith('data:') ? item.image : `${API_BASE_URL}${item.image}`}
      alt={item.name} id="imgproj" />
      </div>
      <div id="rightproj">
        <div id="title">{item.name}</div>
        {/* <div id="desc">{item.description}</div> */}
        <div id="desc">Project Admin : {item.admin?.name}</div>
        <div id="butt">
          <NavLink to={`/getproject/${item._id}`}><button id="details">Details</button></NavLink>
          <NavLink to="/favourites">
            <button id="fav-but" onClick={()=>handlepost(item)}>Add to Favourites</button>
          </NavLink>
        </div>
      </div>
    </div>
        )
      })}
      </div>
   
  )
}

export default Projects
