import React from 'react'
import Search from '../../components/Search'
import ChatList from '../../components/ChatList'
import MyAccount from '../../components/MyAccount'
export default function Nav() {
  return (
    <>
       <div class="border-r border-gray-300 lg:col-span-1">
        <div>
            <MyAccount/>
        </div>
          <div class="mx-3 my-3">
            <div class="relative text-gray-600">
                <Search/>
            </div>
          </div>
          <ul class="overflow-auto h-[32rem]">
            <h2 class="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
            <ChatList/>
          </ul>
        </div>
    </>
  )
}
