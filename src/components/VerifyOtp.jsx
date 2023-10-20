import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VerifyOtp() {
   const Navigate = useNavigate()
   
   const [error,setError] = useState('')
    
   const [otp,setOtp] = useState('')

   const HandleOtp = (e) => {
        e.preventDefault()
        const localOtp = localStorage.getItem('otp')
        if(JSON.parse(localOtp) === otp){
            setError('')
            Navigate('/')
        }else{
            setError('Dont match OTP code please try again')
        }
   }
 
  return (
    <div className="p-10 shadow-lg shadow-indigo-500/40  rounded-md ">
        <div className='mb-4'>
            <p className='text-xl font-bold font-serif mb-2'>OTP Verification</p>
            <span className='font-serif'>
                Enter the OTP you received at
                <br />
                <small className='text-center'><b>+95*******87</b></small> 
            </span>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                <input className="m-2 border h-10 w-10 text-center form-control rounded cursor-auto" type="text" onChange={e=>setOtp(prevState => prevState+e.target.value)} id="first" maxlength="1" /> 
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" onChange={e=>setOtp(prevState => prevState+e.target.value)} id="first" maxlength="1" /> 
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setOtp(prevState => prevState+e.target.value)} id="first" maxlength="1" /> 
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setOtp(prevState => prevState+e.target.value)} id="first" maxlength="1" /> 
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setOtp(prevState => prevState+e.target.value)} id="first" maxlength="1" /> 
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setOtp(prevState => prevState+e.target.value)} id="first" maxlength="1" /> 
            </div>
        </div>
        {
            error  &&  
                <p className=' text-sm text-red-600'>{error}</p>
        }
        <div className='flex-block w-6/12 float-right mt-4'>
            <p onClick={HandleOtp} className='p-3 text-center bg-cyan-400 color-black rounded-md cursor-pointer'>Continue</p>
        </div>
    </div>
  )
}
