import { createContext, useEffect, useReducer } from "react";

let ChatContext = createContext();

let ChatReducer = (state,action) => {
     switch (action.type) {
          case "CHANGE_USER":
               return {...state,userInfo:action.payload}
          default:
               return state
     }
}

const ChatContextProvider = ({children}) =>{
     let [state,dispatch] = useReducer(ChatReducer,{
          userInfo:null
     })

     let ChangeUser = (user) => {
          dispatch({type:"CHANGE_USER",payload:user})
     }
     return(
          <ChatContext.Provider value={{...state,ChangeUser}}>{children}</ChatContext.Provider>
     )
}

export {ChatContext , ChatContextProvider}


