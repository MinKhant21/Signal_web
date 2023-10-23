import React, { useState } from 'react'

export default function ChatInput({HandleInput}) {
    // const [message , setMessage] = useState('')
    // const HandleEvent = (e) =>{
    //     setMessage(e.target.value)
    // }
  
  return (
    <input type="text" placeholder="Message"
    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
    name="message" required onChange={(e)=>HandleInput(e.target.value)}
    />
  )
}
