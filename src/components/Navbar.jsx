import React,{ useEffect } from 'react'
import './navbar.css'
import protoLogo from '../assets/proto.png'
import { NavLink,useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import axios from 'axios';

const Navbar = () => {
  const navigate=useNavigate();
  const handleclick=(e)=>{
    localStorage.removeItem('token');
    console.log('token removed');
    navigate('/');

  }
  const [name,setname]=useState('');
  const [isloggedin,setisloggedin]=useState(false);
  useEffect(()=>{
      const tokener=localStorage.getItem('token');
      let decoded=null;
      if(typeof (tokener) === 'string' && tokener.trim()!==''){
        decoded=jwtDecode(tokener);
      console.log(decoded);
      
      if(tokener){

      setisloggedin(true);
      setname(decoded.name)
      }
      else{
        console.log('no valid token')
      }
    }
    },[])

  return (
      <div>
        {isloggedin ? (
          <div id="navbar">
        <div id="left"> 
          <img src={protoLogo} alt="logo" id="image"/>
          <p id="log">ProtoDevelop</p>
        </div>
        <div id="right">
          <NavLink to="/tutorials" id="link">Tutorials</NavLink>
          <NavLink to="/hostproject" id="link">Host</NavLink>
          <NavLink to="/getproject" id="link">Projects</NavLink>
          <NavLink to="/myproj" id="link">My Projects</NavLink>
          <NavLink to="/favourites" id="link">Favourites</NavLink>
          <div id="logout">
            <div id="lll">Hi, {name}</div>
          <button onClick={handleclick} id="link1">Logout</button>
          </div>
        </div>
      </div>
        ):(
          navigate('/login')
        )
          }
      </div>

  )
}

export default Navbar
