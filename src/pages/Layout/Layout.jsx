import React from 'react'

import { Outlet, useLocation} from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
import SideBar from './SideBar';
import ChatRoom from '../ChatRoom';
export default function Layout() {
    const location = useLocation();
   
  return (
    <>
    <div class="container  mx-auto mt-24">
        <div class="min-w-full  border rounded lg:grid lg:grid-cols-3">
          <SideBar/>
          <div className=' lg:col-span-2 lg:block'>
          <SwitchTransition>
                <CSSTransition timeout={300} classNames="fade" key={location.pathname}>
                    <div className="">
                        <Outlet/>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            {/* <ChatRoom/> */}
          </div>
        </div>
      </div>
       
    </>
  )
}
