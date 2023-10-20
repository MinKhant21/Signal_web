// create COntext 
//create Component

import React, { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext()

const AuthReducer = (state,action) => {
  switch(action.type){
    case "LOGIN_USER" :
      return { ...state,user:action.payload}
    case "LOGOUT_USER" :
      return { ...state,user:action.payload}
    default:
      return state
  }
}

const AuthContextProvider = ({children}) => {
  let [state,dispatch] = useReducer(AuthReducer,{user:null})

  useEffect(()=>{
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    let token = localStorage.getItem('token')

    if(userInfo){
      dispatch({type :"LOGIN_USER",payload : userInfo})
    }else{
      dispatch({type : "LOGOUT_USER",payload : userInfo})
    }
  },[])

  return(
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext,AuthContextProvider}