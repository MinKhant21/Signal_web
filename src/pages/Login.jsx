import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import VerifyOtp from '../components/VerifyOtp'
export default function Login() {
    const [showVerify,setShowVerify] = useState(false)
    const HandleShowVerify = (value) =>{
        setShowVerify(value)
    }
  return (
    <div className='container h-screen flex justify-center items-center '>
       {
        showVerify === false ?
        <LoginForm HandleShowVerify={HandleShowVerify}/>
        :
        <VerifyOtp/>
       }
    </div>
  )
}
