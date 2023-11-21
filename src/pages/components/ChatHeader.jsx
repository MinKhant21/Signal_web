import React, { useContext } from 'react'
import { ChatContext } from '../../contexts/ChatContext'

export default function ChatHeader() {
  let {userInfo} = useContext(ChatContext)
  
  return (
    <>
      <div className=' w-full h-[70px] border-b-2 flex justify-between items-center'>
          <img className='ml-4 mt-2  rounded-full w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
          <div className=''>
            <h2>
              {
                userInfo &&
                <p>
                  {userInfo.displayName}
                </p>
              }
            </h2>
            <p>online</p>
          </div>
          <div className=' mr-4 shadow-xl bg-zinc-300 p-2 rounded-full'>
            {/* <img src={VideoSvg} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-blue-500" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/></svg>
          </div>
        </div>
    </>
  )
}
