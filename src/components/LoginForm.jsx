import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import '../features/authSlice'
import { useNavigate } from 'react-router-dom'
import LoginInput from './Form/LoginInput'
export default function LoginForm() {
    const Navigate = useNavigate()
    let token = localStorage.getItem("token")

    useEffect(()=>{
        if(token){
          Navigate("/")
        }
      },[token])
   
  return (
    <div className="p-10 shadow-lg shadow-indigo-500/40  rounded-md ">
    <div className='mb-4'>
        <p className='text-xl font-bold font-serif mb-2'>Phone number</p>
        <span className='font-serif'>
            Enter your phone number to get started
        </span>
    </div>
    <LoginInput/>
    
</div> 
  )
}
