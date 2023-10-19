import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setInfo,setMessages} from "../../features/chatSlice"

export default function ChatPeople({user}) {
    const apiUrl = useSelector(state=>state.auth.apiUrl)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const HandleSelectUser = async (user) => {
        // localStorage.setItem('chat-to',phoneNumber)
        await fetch(`${apiUrl}/history?id=${user._id}`,{
            method:"GET",
            headers:{
                "Content-type" : "application/json",
                'x-auth-token' : token
            }
        })
        .then(res=>{
            if(res.status ==="200"){
                console.log(res.messages)
                 dispatch(setMessages(res.messages))
                dispatch(setInfo(user))
            }
        })
      
    }
  return (
    <li>
        <p onClick={()=>HandleSelectUser(user)}
        className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
        <img className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
        <div className="w-full pb-2">
            <div className="flex justify-between">
            <span className="block ml-2 font-semibold text-gray-600">{user.phoneNumber}</span>
            <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
            </div>
            <span className="block ml-2 text-sm text-gray-600">bye</span>
        </div>
        </p>
    </li> 
  )
}
