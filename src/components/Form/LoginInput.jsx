import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginInput() {
    const [countryCode , setCountryCode] = useState('')
    const [phoneNumber , setPhonNumber] = useState('')
    const [name , setName] = useState('')
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")
    const navigate =  useNavigate()
    
    const HandleLoginForm = (e) => {
        e.preventDefault();
        setLoading(true)
        if(countryCode && phoneNumber){
            setError('')
            postLogin()
        }else{
            setLoading(false)
            setError('CountryCode and Phone Number required')
        }
    }
    const postLogin = async() => {
        const data = {
            countryCode,
            phoneNumber,
            name,
        }
        await fetch("http://127.0.0.1:4200/api/login", {
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
                if(data.status == "200"){
                    localStorage.setItem('userInfo',JSON.stringify(data.data))
                    localStorage.setItem('otp',JSON.stringify(data.otp))
                    localStorage.setItem('token',data.token)
                    setLoading(false)
                    if(loading === false){
                        // HandleShowVerify(true)
                        navigate('/verify')
                    }
                }
                console.log('Request succeeded with JSON response');
            })
            .catch(function(error) {
                setError(error)
            });
    }
  return (
    <div>
         <div className='mb-4'>
            <input type="text" placeholder='Enter Your Name' className=' w-full p-3 bg-cyan-200 outline-none cursor-auto ' onChange={e => setName(e.target.value)}  />
        </div>
        <div className='flex justify-center items-center gap-5'>
        
            <div>
                <select className='p-3 bg-cyan-200 outline-none ' onChange={e =>setCountryCode(e.target.value)}>
                    <option value="+95">+95</option>
                    <option value="+95">+15</option>
                    <option value="+95">+45</option>
                    <option value="+95">+55</option>
                </select>
            </div>
            <div className=''>
                <input type="text" placeholder='9*********' className='p-3 bg-cyan-200 outline-none  ' onChange={e => setPhonNumber(e.target.value)}  />
            </div>
        </div>
        {error ? <span className=' text-sm font-serif text-red-600'>{error}</span> : 
    ""
    }
    <div className='flex-block w-6/12 float-right mt-4'>
       {!loading &&  <p onClick={HandleLoginForm} className='p-3 text-center bg-cyan-400 color-black rounded-md cursor-pointer'>Continue</p>}
       {loading && <p className='p-3 text-center bg-cyan-400 color-black rounded-md cursor-pointer'>Sending.....</p>}
    </div>
    </div>
  )
}