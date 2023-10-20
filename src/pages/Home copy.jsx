import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Layout/Nav'
import ChatRoom from './ChatRoom'
import { useSelector } from 'react-redux'

export default function Home() {
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
        <Nav/>
        <ChatRoom/>
      </div>
    </div>
    </>
  )
}
