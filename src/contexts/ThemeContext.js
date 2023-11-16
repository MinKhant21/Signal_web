import { createContext, useReducer } from "react";

let ThemeContext  = createContext();

let ThemeReducer = (state,action) => {
     switch (action.type) {
          case "CHANGE_THEME":
               return {...state,theme:action.payload}
          default:
               break;
     }
}

const ThemeContextProvider = ({children}) => {

     let [state,dispatch] = useReducer(ThemeReducer,{
          theme:"light"
     })

     let changTheme = (theme) => {
          dispatch({type:"CHANGE_THEME" , payload : theme})
     }

     return(
          <ThemeContext.Provider value={{...state,changTheme}}>{children}</ThemeContext.Provider>
     )
}

export {ThemeContext,ThemeContextProvider}