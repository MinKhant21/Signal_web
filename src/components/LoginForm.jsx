import React, { useState } from 'react'

export default function LoginForm() {
    const [countryCode , setCountryCode] = useState('')
    const [phoneNumber , setPhonNumber] = useState('')

    const HandleLoginForm = (e) => {
        e.preventDefault();
        const data = {
            countryCode,
            phoneNumber
        }
        
    }
  return (
    <div className="p-10 shadow-lg shadow-indigo-500/40  rounded-md ">
        <div className='mb-4'>
            <p className='text-xl font-bold font-serif mb-2'>Phone number</p>
            <span className='font-serif'>
                Enter your phone number to get started
            </span>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div>
                <select className='p-3 bg-cyan-200 outline-none hover:border-2 border-indigo-200 border-b-indigo-500'>
                    <option value="+95">+95</option>
                    <option value="+95">+15</option>
                    <option value="+95">+45</option>
                    <option value="+95">+55</option>
                </select>
            </div>
            <div className=''>
                <input type="text" placeholder='9*********' className='p-3 bg-cyan-200 outline-none hover:border-2 border-indigo-200 border-b-indigo-500 '  />
            </div>
            
        </div>
        <div className='flex-block w-6/12 float-right mt-4'>
            <p className='p-3 text-center bg-cyan-400 color-black rounded-md cursor-pointer'>Continue</p>
        </div>
    </div>
  )
}
