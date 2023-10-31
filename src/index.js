import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider } from 'react-auth-kit'
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   
        <Provider store={store}>
             <AuthContextProvider>
                <RouterProvider router={router}/>
            </AuthContextProvider>
        </Provider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
