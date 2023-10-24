import React from 'react'
import Search from '../../components/Search'
import ChatList from '../../components/ChatList'
import PersonalAddIcon from '../../assets/svg/add.svg'
import MyAccount from '../../components/MyAccount'
import AddPeople from '../../components/AddPeople'
export default function SideBar() {
  return (
    <>
       <div className="bg-[#F9F9F9] lg:col-span-1 mr-4 shrink-0 shadow-md rounded-md ">
        <div>
            <MyAccount/>
        </div>
            <div className="mx-3 my-3">
                <div className="relative text-gray-600">
                    <Search/>
                </div>
            </div>
            <ChatList/>
            <AddPeople/>
        </div>
        
    </>
  )
}
