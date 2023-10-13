import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import '../features/authSlice'
export default function LoginForm({HandleShowVerify}) {
    const [countryCode , setCountryCode] = useState('')
    const [phoneNumber , setPhonNumber] = useState('')
    // const apiUrl = useSelector(state=>state.auth.apiUrl)
    console.log(countryCode)
    const HandleLoginForm = (e) => {
        e.preventDefault();
        const data = {
            countryCode,
            phoneNumber
        }
        // console.log(apiUrl)
         fetch("http://127.0.0.1:4200/api/login", {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data)
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Request succeeded with JSON response');
            })
            .catch(function(error) {
                console.log('Request failed');
            });
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
                <select className='p-3 bg-cyan-200 outline-none hover:border-2 border-indigo-200 border-b-indigo-500' onChange={e =>setCountryCode(e.target.value)}>
                    <option value="+95">+95</option>
                    <option value="+95">+15</option>
                    <option value="+95">+45</option>
                    <option value="+95">+55</option>
                </select>
            </div>
            <div className=''>
                <input type="text" placeholder='9*********' className='p-3 bg-cyan-200 outline-none hover:border-2 border-indigo-200 border-b-indigo-500 ' onChange={e => setPhonNumber(e.target.value)}  />
            </div>
            
        </div>
        <div className='flex-block w-6/12 float-right mt-4'>
            <p onClick={HandleLoginForm} className='p-3 text-center bg-cyan-400 color-black rounded-md cursor-pointer'>Continue</p>
        </div>
    </div>
  )
}
