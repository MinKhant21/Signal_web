import React, { useEffect, useState } from 'react'

export default function VerifyOtp() {
   
   const [one,setOne] = useState('')
   const [two,setTwo] = useState('')
   const [three,seTthree] = useState('')
   const [four,setFour] = useState('')
   const [five,setFive] = useState('')
   const [six,setSix] = useState('')
   const [error,setError] = useState('')

   let otp = one+two+three+four+five+six
   
   useEffect(()=>{
        if(otp.length == 6 && six){
            console.log("do")
        }
        if(otp.length < 6 && !six){
            setError("Please Fill Your OTP Received Code ")
        }
       setError(preStae=>preStae = '')

   },[otp,six])
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
            <input className="m-2 border h-10 w-10 text-center form-control rounded cursor-auto" type="text" onChange={e=>setOne(e.target.value)} id="first" maxlength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" onChange={e=>setTwo(e.target.value)} id="first" maxlength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>seTthree(e.target.value)} id="first" maxlength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setFour(e.target.value)} id="first" maxlength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setFive(e.target.value)} id="first" maxlength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"onChange={e=>setSix(e.target.value)} id="first" maxlength="1" /> 
        </div>
        {
            error && 
            <p>{error}</p>
        }
        </div>
        <div className='flex-block w-6/12 float-right mt-4'>
            <p  className='p-3 text-center bg-cyan-400 color-black rounded-md cursor-pointer'>Continue</p>
        </div>
    </div>
  )
}
