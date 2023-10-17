import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Layout/Nav'
import ChatRoom from './ChatRoom'
export default function Home() {
    const Navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(!token){
            Navigate("login")
        }
    },[token])
  return (
    <>
    <div class="container mx-auto">
      <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
        <Nav/>
        <ChatRoom/>
      </div>
    </div>
        
    </>
  )
}
