import React from 'react'

import onlineGif from '../../assets/gif/online.gif'
import offLinePng from '../../assets/gif/offline.png'
export default function ChatList() {
  return (
    <>
     <div className=' flex justify-around items-center mt-5 mb-3 cursor-pointer rounded-lg shadow-md hover:shadow-lg pb-2'>
          <img className=' rounded-full w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
          <div>
               <div className=''>Kaung Min Khant</div>
               <div className=' flex  items-center '>
               <img className='w-6' src={onlineGif} alt="" />
               <span>Online</span>
               </div>
          </div>
          </div>

          <div className=' flex justify-around items-center mt-5 mb-3 cursor-pointer rounded-lg hover:shadow-lg shadow-md pb-2'>
          <img className=' rounded-full w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
          <div>
               <div className=''>Kaung Min Khant</div>
               <div className=' flex  items-center '>
               <img className='w-6' src={offLinePng} alt="" />
               <span>Offline</span>
               </div>
          </div>
          </div>
    </>
  )
}
