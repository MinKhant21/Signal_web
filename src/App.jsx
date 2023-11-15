import React, { useState } from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  )
}
