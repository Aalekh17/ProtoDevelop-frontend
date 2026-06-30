import React, { useEffect, useState } from 'react'
import ui from '../assets/ui.png'
import './projdetails.css'
import axios from 'axios';
import { useParams,Link,NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../utils/api';

const Projdetails = () => {

  const {id}=useParams();
  const [item,setitem]=useState([]);

  useEffect(()=>{
    axios.get(`${API_BASE_URL}/project/${id}`)
    .then((response)=>{
      setitem(response.data);
    })
    .catch(error=>{
      console.log("error while fetching project details",error);
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

  const handleproj=((project)=>{
    axios.post(`${API_BASE_URL}/postmyproj`,{
      id:project._id
    },{
      headers:{
        Authorization:`Bearer ${token}`
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

  return (
    <div id="det-back">
      {[item].map((items)=>{
        return(
          <div>
      <div id="det-top">
        <div id="det-title">{items.name}</div>
        <img src={typeof items.image === 'string' && items.image.startsWith('data:') ? items.image : `${API_BASE_URL}${items.image}`}
      alt={items.name} id="det-img" />
      </div>
      <div id="det-content">

        
        <div id="det-desc"><h3>Project Description:</h3>{items.description}</div>
        <div id="det-info">
          <div id="det-members">{items.members?.length} Members</div>
          {items.members?.map((member) => (
              <div key={member._id}># 
              {member.name}
              </div>
    ))}</div>
    <div id="det-info">
        <div id="det-tags">Project Tags : {items.tag}</div>
        <div id="det-github">Project Github Link : {items.link}</div>
        </div>
        <div id="det-lead">Project Lead Details:<br/>
          <div>
          Name : {items.admin?.name}<br />
          Email : {items.admin?.email}
        </div></div>
        
          
        <div id="det-buttons">
          <NavLink to="/myproj"><button onClick={()=>handleproj(items)} id="join-btn">Join Project</button></NavLink>
          <NavLink to="/favourites"><button onClick={()=>handlepost(items)} id="favourite-btn">Add to Favourites</button></NavLink>
        </div>

      </div>
      </div>
      )
      })}
      
    </div>
  )
}

export default Projdetails
