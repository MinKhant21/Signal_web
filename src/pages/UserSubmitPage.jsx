import React, { useState } from 'react'
import EyeOnSvg from '../assets/images/eye_on.svg'
import EyeOffSvg from '../assets/images/eye_off.svg'
import useFormSubmit from '../hooks/useFormSubmit';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
    let [show,setShow] = useState(false);
    let [page,setPage] = useState(true);
    let [isDisabled, setIsDisabled] = useState(false);
    let navigate = useNavigate();

    let [email,setEmail] = useState('');
    let [password , setPassword] = useState('');

    let {error,loading,signUpAndsignIn} = useFormSubmit();
    
    let FormHandle = async (e) => {
      e.preventDefault();
      setIsDisabled(true)
      if(!page){
        let user = await signUpAndsignIn(email,password,"Register")
        console.log(user)
        if(user){
          if(error){
            toast.error(error)
            setIsDisabled(false)
          }
          setIsDisabled(false)
          toast('Login Successfully!!')
          navigate('/chat')
        }
      }else if(page){
        let user = await signUpAndsignIn(email,password,"Login")
        if(user){
          if(error){
            toast.error(error)
            setIsDisabled(false)
          }
          setIsDisabled(false)
          toast('Login Successfully!!')
          navigate('/chat')
        }
      }
    }

    
    return (
      <>
        <div className=' flex items-center justify-center h-screen'>
              <div className='w-[500px] h-[500px] p-4 bg-white shadow-md rounded-lg '>
              <div className="">
                  <div className="p-8  mx-auto">
                    <div className="bg-white rounded-t-lg p-8">
                      <p className="text-center text-sm text-gray-400 font-light">Sign in with</p>
                      <div>
                        <div className="flex items-center justify-center space-x-4 mt-3">
                          <button
                            className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              className="w-6 h-6 mr-3"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                              ></path>
                            </svg>
                            Github
                          </button>
                          <button
                            className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mr-3"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                              />
                              <path
                                fill="#e53935"
                                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                              />
                              <path
                                fill="#4caf50"
                                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                              />
                              <path
                                fill="#1565c0"
                                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                              />
                            </svg>
                            Google
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* User Submit Toggle  Block*/}
                    <form  onSubmit={FormHandle}>
                      <div className=' mt-4 '>
                        <label htmlFor="" className=''>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className='border mt-2 rounded-sm shadow-md  w-full px-3 py-1 ' placeholder=' Enter Your Email'  />
                      </div>
                      <div className=' mt-4 '>
                        <label htmlFor="" className=''>Password</label>
                        <div className='relative flex items-center'>
                          <input 
                            type={show ? 'text' : 'password'} 
                            className='border mt-2 rounded-sm shadow-md w-full px-3 py-1 focus:outline-none focus:ring focus:border-blue-300' 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Your Password' 
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            {
                                  show ?
                                  <img src={EyeOnSvg} alt="" className="mt-2 cursor-pointer" onClick={()=>setShow(show=!show)} />
                                  :
                                  <img src={EyeOffSvg} alt="" className="mt-2 cursor-pointer" onClick={()=>setShow(show=!show)} />
                            }
                          </div>
                        </div>
                      </div>
                    
                      <div className=' mt-5 '>
                        {
                          !isDisabled ?
                          <input type="submit" value={page ? 'Login' : 'Register'} className='border mt-2 cursor-pointer   w-full   text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'/>
                          :
                          <button  disabled type="button" class="border mt-2 cursor-pointer   w-full   text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                            {page ? 'Login' : 'Register'} 
                          </button>
                        }
                        
                      </div>
                      <div className='mt-3 float-right'>
                        <span className=' cursor-pointer font-semibold text-blue-600' onClick={()=>setPage(page=!page)}>
                          { !page ?
                            "Login back"
                            :
                            "Create Account ?"
                          }
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        </div>
        <ToastContainer/>
      </>
    )
}
