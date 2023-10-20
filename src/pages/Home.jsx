import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Layout/Nav'
import ChatRoom from './ChatRoom'
import { useSelector } from 'react-redux'
import EditSvg from '../assets/svg/edit.svg'
export default function Home() {
    const Navigate = useNavigate()
    const token = localStorage.getItem('token')
    const baseUrl = useSelector(state=>state.auth.baseUrl)
    useEffect(()=>{
        if(!token){
            Navigate("login")
        }
        
    },[token,baseUrl])
  return (
    <>
    <div class="container mx-auto">
      <div class="min-w-full   rounded-lg lg:grid lg:grid-cols-3 gap-10 mt-10 shadow-lg">
        <div className=' lg:col-span-1 bg-[#F9F9F9]'>
          <div className='container mx-auto'>

            {/* My Info Block */}

            <div className="p-4 flex justify-around ">
              <img className="object-cover w-12 h-12 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
              <div>
                <h3 className=' font-serif text-lg font-semibold text-[#789BEF]'>Kaung Min Khant</h3>
                <span className='text-md font-serif'>094022312</span>
              </div>
              <div>
                <img src={EditSvg} className=' cursor-pointer'  alt="" />
              </div>
            </div>

            {/* Search Bar Block */}

            <div class="mx-3 my-3 shadow-md">
                <div class="relative text-gray-600">
                <div>
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" class="w-6 h-6 text-gray-300">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </span>
                  <input type="search" class="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
                  placeholder="Search" required />
                </div>
                </div>
            </div>

            {/* <div className='border border-t-slate-400 mt-3 mb-3'></div> */}
             
             {/* Friend Block */}

              <div className="p-4 flex justify-around rounded-md shadow-md mb-3 mt-3 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
              <img className="object-cover w-12 h-12 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
              <div>
                <h3 className=' font-serif text-md font-semibold text-[#4479f5] '>Kaung Min Khant</h3>
                <span className='text-md font-serif'>094022312</span>
              </div>
              <div className='float-right'>
                <small>10:00AM</small>
                <div className='flex justify-end items-center  '>
                    <p className=''>1</p>
               
                </div>
              </div>
              </div>

              <div className="p-4 flex justify-around shadow-md mb-3 mt-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img className="object-cover w-12 h-12 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
              <div>
                <h3 className=' font-serif text-md font-semibold text-[#789BEF]'>Kaung Min Khant</h3>
                <span className='text-md font-serif'>094022312</span>
              </div>
              <div className='float-right'>
                <small>10:00AM</small>
                <div className='flex justify-end items-center  '>
                    <p className=''>1</p>
               
                </div>
              </div>
              </div>

              <div className="p-4 flex justify-around shadow-md mb-3 mt-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img className="object-cover w-12 h-12 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
              <div>
                <h3 className=' font-serif text-md font-semibold text-[#789BEF]'>Kaung Min Khant</h3>
                <span className='text-md font-serif'>094022312</span>
              </div>
              <div className='float-right'>
                <small>10:00AM</small>
                <div className='flex justify-end items-center  '>
                    <p className=''>1</p>
               
                </div>
              </div>
              </div>

              <div className="p-4 flex justify-around shadow-md mb-3 mt-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img className="object-cover w-12 h-12 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
              <div>
                <h3 className=' font-serif text-md font-semibold text-[#789BEF]'>Kaung Min Khant</h3>
                <span className='text-md font-serif'>094022312</span>
              </div>
              <div className='float-right'>
                <small>10:00AM</small>
                <div className='flex justify-end items-center  '>
                    <p className=''>1</p>
               
                </div>
              </div>
              </div>

          </div>

        </div>
        <dir className="w-full border ">
          <div >
            1
          </div>
        </dir>
      </div>
    </div>
        
    </>
  )
}
