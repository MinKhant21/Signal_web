import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGetUser from '../hooks/useGetUser'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import ChatPeople from './Chat/ChatPeople'
export default function ChatList() {
    const apiUrl = useSelector(state=>state.auth.apiUrl)
    
    let {users,error,loading} = useGetUser(apiUrl)
    
  return (
    <>
        {
            !loading ? 
            
            <ul className="overflow-auto h-[32rem]">
                <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
                {
                    users.map(user=>
                        <ChatPeople user={user.user_two_id[0]}/>
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
