import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { useState,useEffect } from 'react';

const Protectedroute = () => {
  const [isloggedin,setisloggedin]=useState(false);
  
    useEffect(()=>{
      const tokener=localStorage.getItem('token');
      console.log(tokener);
      if(tokener){
        setisloggedin(true);
  
      }
  
    },[])
  return (
    isloggedin?<Outlet/>:<Navigate to="/login"/>
  )
}

export default Protectedroute
