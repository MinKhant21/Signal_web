import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setMessage} from '../../features/chatSlice'
export default function ChatInput() {
  const msg = useSelector(state=>state.chat.message)
    const dispatch = useDispatch()
    const HandleInput = (e) =>{
      dispatch(setMessage(e.target.value))
    }
  
  return (

    <input type="text" placeholder="Message"
    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
    name="message" value={msg}  required    onChange={HandleInput}
    />
  )
}
