import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from './Layout/SideBar'
import ChatRoom from './ChatRoom'
import { useSelector } from 'react-redux'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
  const Navigate = useNavigate();
  const user = useContext(AuthContext)
  useEffect(()=>{
    if(!user.user){
      Navigate('/login')
    }
  },[user])
  return (
    <>
      <div class="container mx-auto mt-5">
        <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
          <SideBar/>
          <ChatRoom/>
        </div>
      </div>
    </>
  )
}
