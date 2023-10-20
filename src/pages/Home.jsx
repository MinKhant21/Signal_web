import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from './Layout/SideBar'
import ChatRoom from './ChatRoom'
import { useSelector } from 'react-redux'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
  // const user = useContext(AuthContext)
  // console.log(user)
    const Navigate = useNavigate()
    const token = localStorage.getItem('token')
    const baseUrl = useSelector(state=>state.auth.baseUrl)
    useEffect(()=>{
        if(!token){
            Navigate("login")
        }
        
    },[token,baseUrl])
  return (
    <>
      <div class="container mx-auto">
        <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
          <SideBar/>
          <ChatRoom/>
        </div>
      </div>
    </>
  )
}
