import React from 'react'
import protologo from '../assets/proto.png'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import {Link,NavLink, useNavigate} from 'react-router-dom'
import { API_BASE_URL } from '../utils/api';

const Login = () => {

  const navigate=useNavigate();


  const data={email:'',password:''}

  const [logined,setlogin]=useState(data);

  const handledata=(e)=>{
    setlogin({...logined,[e.target.name]:e.target.value})
  }


  const handlelogin=(e)=>{
    e.preventDefault();
    axios.post(`${API_BASE_URL}/postlogindata`,logined).then((res)=>(console.log(res.data),
  localStorage.setItem('token',res.data.token)))
    .catch(error=>console.log('error occured',error))
    

  }

  return (
    <div id="logback">
      <img src={protologo} alt="Proto Logo" id="logolog"/>
      <div id="logformback">
        <p id="loghead">Welcome Back!</p>
      <form onSubmit={handlelogin} id="logform">
        <label htmlFor="email" id="email-label">Email:</label>
        <input type="text" placeholder='Email' id="email" name="email" onChange={handledata}/>
        <br />
        <label htmlFor="password" id="pass">Password:</label>
        <input type="password" placeholder='Password' id="password" name="password" onChange={handledata}/>
        <br />
        <button type="submit" id="loginbut">Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
