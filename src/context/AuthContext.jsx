// create COntext 
//create Component

import React, { createContext } from "react";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  return(
    <AuthContext.Provider value={{name : "kmk"}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext,AuthContextProvider}