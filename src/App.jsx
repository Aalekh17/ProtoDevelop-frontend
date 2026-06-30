import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar.jsx'
import Projects from './components/Projects.jsx'
import Hostproj from './components/Hostproj.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Favourites from './components/Favourites.jsx'
import Projdetails from './components/Projdetails.jsx'
import Tutorials from './components/Tutorials.jsx'
import Cover from './Cover.jsx'
import Myprojects from './components/Myprojects.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const App = () => {

  const [isloggedin,setisloggedin]=useState(false);

  

    useEffect(()=>{
      const tokener=localStorage.getItem('token');
      if(typeof (tokener) === 'string' && tokener.trim()!==''){
        const decoded=jwtDecode(tokener);
      console.log(decoded);
      if(tokener){
      setisloggedin(true);
      }
      else{
        console.log('no valid token')
      }
    }
    

    },[])


  return (
    <BrowserRouter>
      <Routes>
        {!isloggedin ? (
          <>
            <Route path="/" element={<Cover/>}/>
            <Route path="/tutorials" element={<Navigate to="/"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/hostproject" element={<Navigate to="/"/>}/>
            <Route path="/getproject" element={<Navigate to="/"/>}/>
            <Route path="/getproject/:id" element={<Navigate to="/"/>}/>
            <Route path="/favourites" element={<Navigate to="/"/>}/>
            <Route path="/myproj" element={<Navigate to="/"/>}/>
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/getproject"/>}/>
            <Route path="/tutorials" element={<Tutorials/>}/>
            <Route path="/login" element={<Navigate to="/getproject"/>}/>
            <Route path="/signup" element={<Navigate to="/getproject"/>}/>
            <Route path="/hostproject" element={<Hostproj/>}/>
            <Route path="/getproject" element={<><Navbar isloggedin={isloggedin}/><Projects isloggedin={isloggedin}/></>}/>
            <Route path="/getproject/:id" element={<Projdetails/>}/>
            <Route path="/favourites" element={<><Navbar isloggedin={isloggedin}/><Favourites/></>}/>
            <Route path="/myproj" element={<><Navbar isloggedin={isloggedin}/><Myprojects/></>}/>
          </>
        )}
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
