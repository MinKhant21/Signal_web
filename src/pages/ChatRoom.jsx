import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import openSocket from 'socket.io-client'
import ChatMessage from '../components/Chat/ChatMessage'
import ChatMainBar from '../components/Form/ChatMainBar'
export default function ChatRoom() {
    const [user,setUser] = useState(null)
    const [phone,setPhone] = useState(null)
    const [chat,setChat] = useState('')
    const toUser = useSelector(state=>state.chat.user)
    const baseUrl = useSelector(state=>state.auth.baseUrl)
    useEffect(()=>{
      let io = openSocket(`${baseUrl}`)
      io.on('chat',(data)=>{
        console.log(data)
        setChat(data)
      })
      setUser(toUser.name)
      setPhone(toUser.phoneNumber)
    },[toUser,baseUrl,openSocket])

    
  return (
    <>
    {
      user &&
      <div class=" lg:col-span-2 lg:block">
      <div class="w-full">
        <div class="relative flex items-center p-3 border-b border-gray-300">
          <img class="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
          <span class="block ml-2 font-bold text-gray-600">{user}</span> 
          {/* <b className='float-right'><small >{phone}</small></b> */}
          <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
          </span>
        </div>
        <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
        <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
          <ChatMessage message={chat}/>
          {
            chat && 
            <div className='relative max-w-xl px-4 py-2 text-gray-700 rounded shadow '>
              <span className="block">
              {chat}
              </span>
            </div>
          }
        </div>
            
        </div>
        <ChatMainBar/>
      </div>
    </div>
    }
    <p>Not Have Phone</p>
       
    </>
  )
}
