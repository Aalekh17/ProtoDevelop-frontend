import React,{useState,useEffect} from 'react'
import './myprojects.css'
import proto from '../assets/Untitled.png'
import axios from 'axios';
import { Link,NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../utils/api';


const Myprojects = () => {

  const [myproj,setmyproje]=useState([]);

  useEffect(()=>{
    axios.get(`${API_BASE_URL}/getmyproj`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    .then((response)=>{
      setmyproje(response.data.myproject);
    })
    .catch((error)=>{
      console.log('error occured',error);
    })
  },[])

  const handledeletemyproj = async (my) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deletemyproj/${my._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log("Delete response:", response.data);
      
      if (response.data.success) {
        // Refresh cart items after successful deletion
        const myResponse = await axios.get(`${API_BASE_URL}/getmyproj`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setmyproje(myResponse.data.cart);
      }
    } catch (error) {
      console.log('Error deleting cart item:', error);
    }
  }

  return (
    <div id="myproj-back">
      <p id="myproj-head">Projects I am Currently Working On...</p>
      {myproj.map((my)=>{
        return(
      <div id="myproj-card">
        <img src={typeof my.image === 'string' && my.image.startsWith('data:') ? my.image : `${API_BASE_URL}${my.image}`}
      alt={my.name} id="myproj-img" />
        <div id="myproj-content">
          <div id="myproj-title">{my.name}</div>
          <div id="myproj-link"><p id="link-head">Github Link:</p>{my.link}</div>
          <div id="myproj-buttons">
            <button onClick={()=>handledeletemyproj(my)} id="myproj-leave">Leave Project</button>
            <NavLink to={`/getproject/${my._id}`}><button id="myproj-details">View Details</button></NavLink>
            
          </div>
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Myprojects
