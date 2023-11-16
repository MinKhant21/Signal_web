import React, { useEffect, useState } from 'react'
import SettingSvg from '../../assets/images/setting.svg'
import Dropdown from './Dropdown'
import 'firebase/auth';
import { auth } from '../../firebase';
import useGetUsers from '../../hooks/useGetUsers';
export default function MyAccount() {
     let [currentUser,setCurrentUser] = useState(null)
     let {getCurrentUser} = useGetUsers();
     
     useEffect(()=>{
          let user = getCurrentUser()
          setCurrentUser(user)
     },[getCurrentUser])
  return (
    <>
     <div className=' flex justify-between items-center '>
          <img className=' rounded-full w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
          <div>
               <h2>{currentUser.displayName}</h2>
               <span>{currentUser.email}</span>
          </div>
          <Dropdown/>
          </div>
          <div className=' relative mt-5 mb-2'>
          <div className=' absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-non'>
               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
               </svg>
          </div>
          <input type="text" className=' w-full rounded-lg p-1 ps-10 border' />
          </div>
          <div className=' border-b-2'></div>
    </>
  )
}
