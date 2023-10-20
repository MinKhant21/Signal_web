import React from 'react'
import Search from '../../components/Search'
import ChatList from '../../components/ChatList'
import MyAccount from '../../components/MyAccount'
export default function SideBar() {
  return (
    <>
       <div class="bg-[#F9F9F9] lg:col-span-1">
        <div>
            <MyAccount/>
        </div>
            <div class="mx-3 my-3">
                <div class="relative text-gray-600">
                    <Search/>
                </div>
            </div>
            <ChatList/>
        </div>
    </>
  )
}
