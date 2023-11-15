import React, { useCallback, useContext, useEffect } from 'react'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mode from './components/Mode';
import useTheme from '../hooks/useTheme';


export default function ChatPage() {
  let {theme} = useTheme()
  return (
    <>
      <div className={`relative flex  justify-center items-center h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <Mode/>
          <div className='w-8/12 h-[700px] bg-white shadow-md rounded-lg opacity-10'>

          </div>
      </div>
    </>
  )
}
