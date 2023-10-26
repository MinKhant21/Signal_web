import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function AddForm() {
    const apiUrl = useSelector(state=> state.auth.apiUrl)
    const token = localStorage.getItem('token')
    const [phoneNumber , setPhoneNumber] = useState('')
    const HandleAddForm = async (e) => {
        e.preventDefault();
        const options = {
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "x-auth-token" :token
            },
            body : JSON.stringify({phoneNumber:phoneNumber})
        }
        await fetch(`${apiUrl}/add-friend`,options)
        .then(data=>console.log(data))
    }
  return (
    <div className="m-4 flex">
        <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="09*********" onChange={(e)=> setPhoneNumber(e.target.value)}/>
        <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold  uppercase border-yellow-500 border-t border-b border-r" onClick={HandleAddForm}>Add </button>
    </div>
  )
}
