import React, { useContext, useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import VerifyOtp from '../components/VerifyOtp'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
export default function Login() {
    const [showVerify,setShowVerify] = useState(false)
    const Navigate = useNavigate()
  
    const HandleShowVerify = (value) =>{
        setShowVerify(preState=>console.log(preState))
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
