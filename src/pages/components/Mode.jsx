import React, { useContext } from 'react'
import DarkSvg from '../../assets/images/dark.svg'
import LightSvg from '../../assets/images/light.svg'
import { ThemeContext } from '../../contexts/ThemeContext'
import useTheme from '../../hooks/useTheme'

export default function Mode() {
     let {theme,changTheme} = useTheme()
    
     return (
          <>
               <div className={`absolute top-20 right-28 animate-bounce p-3 rounded-full cursor-pointer 
                    ${theme === "dark" ?"bg-white " : "bg-black"}`} 
                    >
                    {theme === 'dark' && <img src={LightSvg} alt="" onClick={()=>changTheme('light')} />}
                    {theme === 'light' && <img src={DarkSvg} alt="" onClick={()=>changTheme('dark')} />}
               </div>
          </>
     )
}
