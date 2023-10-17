import React from 'react'
import { useSelector } from 'react-redux'
import useGetUser from '../hooks/useGetUser'
import Spinner from './Spinner'
export default function ChatList() {
    const apiUrl = useSelector(state=>state.auth.apiUrl)
    let {users,error,loading} = useGetUser(apiUrl)
    console.log(typeof users)
  return (
    <>
        {
            !loading ? 
            
            <ul className="overflow-auto h-[32rem]">
                <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
                {
                    users.map(user=>
                        <li>
                            <a
                            className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                            <img className="object-cover w-10 h-10 rounded-full"
                                src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                            <div className="w-full pb-2">
                                <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-gray-600">{user.phoneNumber}</span>
                                <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
                                </div>
                                <span className="block ml-2 text-sm text-gray-600">bye</span>
                            </div>
                            </a>
                        </li> 
                    )
                }
                
            </ul>
            :
            <div className='flex justify-center items-center mx-auto h-96'>
                <Spinner/>
            </div>
        }
    </>
  )
}