import React from 'react'
import { Dropdown } from 'flowbite-react';
import '../style.css'
import useSignOut from '../../hooks/useSignOut';

export default function Drop() {
     let {signOut} = useSignOut();
     const HandleSignOut = () => {
          signOut()
     }
     return (
          <div className=' float-right '>
               <Dropdown placeholder='right'>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item onClick={HandleSignOut}>Sign out</Dropdown.Item>
               </Dropdown>
          </div>
     )
}
