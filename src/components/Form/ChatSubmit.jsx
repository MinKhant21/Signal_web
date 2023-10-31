import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import openSocket from 'socket.io-client'
import {setMessageClaer} from "../../features/chatSlice"

export default function ChatSubmit() {

  const baseUrl = useSelector(state=>state.auth.baseUrl)
  const apiUrl = useSelector(state=>state.auth.apiUrl)
  const toUser = useSelector(state=>state.chat.user)

  const dispatch = useDispatch()
  const message = useSelector(state=>state.chat.message)
  let io = openSocket(`${baseUrl}`)
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let token = localStorage.getItem('token')
  const HandleChatMessage = async (e) => {
    e.preventDefault();
    
     let roomId =  localStorage.getItem('roomId') 
    await fetch(`${apiUrl}/chat`,{
      method:"GET",
      headers:{
        "Content-Type" : "application/json",
        "x-auth-token" : token
      } 
    }).then(data=>{
      io.emit('chat',{
        fromUser : userInfo,
        toUser : toUser,
        roomId : roomId,
        message : message
      })
      dispatch(setMessageClaer())
    })
    
  }
 
  return (
    <button type="submit" onClick={HandleChatMessage}>
            <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor">
            <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
    </button>
  )
}
