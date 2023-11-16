import React from 'react'
import { Dropdown } from 'flowbite-react';
import '../style.css'

export default function index() {
  return (
    <div className=' float-right '>
          <Dropdown>
               <Dropdown.Item>Dashboard</Dropdown.Item>
               <Dropdown.Item>Settings</Dropdown.Item>
               <Dropdown.Item>Earnings</Dropdown.Item>
               <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
     </div>
  )
}
