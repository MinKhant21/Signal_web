import React from 'react'
import PersonalAddIcon from '../assets/svg/add.svg'
import Popup from 'reactjs-popup'
import './PopUp.css'
import AddForm from './Form/AddForm'
export default function AddPeople() {
  return (
    <div className="relative mb-5 mr-4 ">
        
        <Popup trigger={<img src={PersonalAddIcon}  className="animate-bounce opacity-75 absolute bottom-0 right-0 p-3 cursor-pointer bg-indigo-500 shadow-lg rounded-full text-white font-sans"/>} 
        modal
        >
            {close => (
                <div className=" p-4  w-96 shadow-lg rounded-lg">
                <button className=" text-2xl rounded-full" onClick={close}>
                    &times;
                </button>
                <div className=" text-center font-sans text-2xl font-semibold "> Add Friends Form </div>
                <hr className=' mt-2 mb-2' />
                <div className="content">
                <div>
                    <AddForm/>
                </div>
                </div>
               
                </div>
    )}
        </Popup>
    </div>
  )
}
