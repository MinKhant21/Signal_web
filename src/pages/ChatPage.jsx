import React, { useCallback, useContext, useEffect } from 'react'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mode from './components/Mode';
import useTheme from '../hooks/useTheme';

import SettingSvg from '../../src/assets/images/setting.svg'
import onlineGif from '../assets/gif/online.gif'
import offLinePng from '../assets/gif/offline.png'
export default function ChatPage() {
  let {theme} = useTheme()
  return (
    <>
      <div className={`relative flex  justify-center items-center h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} ` }>
          <Mode/>
          <div className='md:w-8/12 sm:w-full h-[700px] shadow-2xl rounded-lg  flex justify-center items-center' >
            {/* Slide */}
            <div className=' h-full w-4/12 p-4 rounded-md border-r-2'>
                {/* MyAccount */}
                <div className=' flex justify-between items-center '>
                    <img className=' rounded-full w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
                    <div>
                      <h2>KaungMinKhant</h2>
                      <span>kaung@gmail.com</span>
                    </div>
                    <div className=' float-right'>
                      <img src={SettingSvg} alt="" />
                    </div>
                </div>
                <div className=' relative mt-5 mb-2'>
                    <div className=' absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-non'>
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input type="text" className=' w-full rounded-lg p-1 ps-10 border' />
                </div>
                <div className=' border-b-2'></div>
                {/* ChatList */}
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

              
            </div>
            {/* ChatBox */}
            <div className=' w-full h-full'>
              {/* Chat Header */}
              <div className=' w-full h-[70px] border-b-2'>
                    <img className='ml-4 mt-2 float-left rounded-full w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
              </div>
            </div>

          </div>
      </div>
    </>
  )
}
