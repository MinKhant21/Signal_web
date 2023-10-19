import React, { useEffect } from 'react'
export default function MyAccount() {

    const user = JSON.parse(localStorage.getItem('userInfo'))
    
    const HandleLogOut = () =>{
        localStorage.clear();
        window.location.reload(true)
    }
  return (
    <p
        class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 ">
        <img class="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
        <div class="w-full pb-2">
            <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-600">{user.name} <br />
                {user.phoneNumber}</span>
                <span className='p-3 rounded-md shadow-md bg-red-100 cursor-pointer hover:bg-red-200 focus:outline-none' onClick={HandleLogOut}>Logout</span>
            </div>
        </div>
    </p>
  )
}
