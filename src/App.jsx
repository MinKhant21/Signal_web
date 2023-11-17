import React, { useState } from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContextProvider} from './contexts/AuthContext';
import {ThemeContextProvider} from './contexts/ThemeContext';
import Routes from './router';
import { ChatContextProvider } from './contexts/ChatContext';

export default function App() {
  
  return (
    <>
      <AuthContextProvider>
        <ChatContextProvider>
          <ThemeContextProvider>
            <Routes/>
            <ToastContainer/>
          </ThemeContextProvider>
        </ChatContextProvider>
      </AuthContextProvider>
    </>
  )
}
