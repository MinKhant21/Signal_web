import React, { useCallback, useContext, useEffect } from 'react'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mode from './components/Mode';
import useTheme from '../hooks/useTheme';

import SettingSvg from '../../src/assets/images/setting.svg'
import VideoSvg from '../../src/assets/images/video.svg'
import onlineGif from '../assets/gif/online.gif'
import offLinePng from '../assets/gif/offline.png'
import SideBar from './components/SideBar';
import ChatBox from './components/ChatBox';
export default function ChatPage() {
  let {theme} = useTheme()
  return (
    <>
      <div className={`relative flex  justify-center items-center h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} ` }>
          <Mode/>
          <div className='md:w-8/12 sm:w-full h-[700px] shadow-2xl rounded-lg  flex justify-center items-center' >
            <SideBar/>
            <ChatBox/>
          </div>
      </div>
    </>
  )
}
