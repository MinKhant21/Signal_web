import React from 'react'
import MyAccount from './MyAccount'
import ChatList from './ChatList'

export default function SideBar() {
  return (
     <div className=' h-full w-5/12 p-4 rounded-md border-r-2'>
          <MyAccount/>
          <ChatList/>
     </div>
  )
}
