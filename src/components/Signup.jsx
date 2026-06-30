import React from 'react'
import protologo from '../assets/proto.png'
import './signup.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../utils/api';

const Signup = () => {

  const navigate=useNavigate();

  const da={name:'',email:'',password:'',confirmpassword:''};

  const [data,setdata]=useState(da);

  const handledata=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }


  const handlesignup=(e)=>{
    e.preventDefault();
    axios.post(`${API_BASE_URL}/postuserdata`,data).then((res)=>console.log(res.data))
    .catch(error=>console.log('error occured',error))

  }

  const handleclick=()=>{
    navigate('/login');
  }

  return (
    <div id="signup-back">
      <img src={protologo} alt="logo" id="signup-logo"/>
      <div id="signup-form-back">
        <p id="signup-head">Register to ProtoDevelop!!</p>
      <form onSubmit={handlesignup} id="signup-form">
        <label htmlFor="name" id="name-label">Name:</label>
        <input type="text" placeholder='Name' id="name" name="name" value={data.name} onChange={handledata}/>
        
        <label htmlFor="email" id="email-label">Email:</label>
        <input type="email" placeholder='Email' id="email" name="email" value={data.email} onChange={handledata}/>
        <br />
        <label htmlFor="password" id="pass-label">Password:</label>
        <input type="password" id="password" placeholder='Password' name="password" value={data.password} onChange={handledata}/>
        <br />
        <label htmlFor="confirmpassword" id="pass-label">Confirm Password:</label>
        <input type="password" id="password" placeholder='Confirm Password' name="confirmpassword" value={data.confirmpassword} onChange={handledata}/>
        <br />
        <button type="submit" onClick={handleclick}  id="signup-button">Register</button>
      </form>
      </div>
    </div>
  )
}

export default Signup
