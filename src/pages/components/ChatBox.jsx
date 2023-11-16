import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'

export default function ChatBox() {
  return (
    <>
     <div className=' w-full h-full'>
          <ChatHeader/>
          <ChatBody/>
          <ChatInput/>
     </div>
    </>
  )
}
