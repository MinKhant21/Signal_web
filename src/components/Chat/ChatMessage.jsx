import React from 'react'
import { useSelector } from 'react-redux'

export default function ChatMessage() {
  const messages = useSelector(state=>state.chat.messages)
  console.log(messages)
  return (
    <ul class="space-y-2">
      <li class="flex justify-start">
        <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
          <span class="block">Hi</span>
        </div>
      </li>      
    </ul>
    
  )
}
