import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import openSocket from 'socket.io-client'
import ChatMessage from '../components/Chat/ChatMessage'
import ChatMainBar from '../components/Form/ChatMainBar'
export default function ChatRoom() {
    const [user,setUser] = useState('')
    const [phone,setPhone] = useState('null')
    const [chat,setChat] = useState('')
    const toUser = useSelector(state=>state.chat.user)
    const baseUrl = useSelector(state=>state.auth.baseUrl)
    const messages = useSelector(state=>state.chat.messages)

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
      <div className=" shadow-md rounded-md">
      <div className="w-full">
        <div className="relative flex items-center p-3 border-b border-gray-300">
          <img className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
          <span className="block ml-2 font-bold text-gray-600">{user}</span> 
          {/* <b classNameName='float-right'><small >{phone}</small></b> */}
          <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
          </span>
        </div>
        <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
        <div className="relative w-full p-6 overflow-y-auto">
          <ChatMessage/>
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
    {/* <p>Not Have Phone</p> */}
       
    </>
  )
}
