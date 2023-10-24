import React from 'react'

import { Outlet, useLocation} from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
import SideBar from './SideBar';
import ChatRoom from '../ChatRoom';
export default function Layout() {
    const location = useLocation();
   
  return (
    <>
    <div class="container mx-auto">
        <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
          <SideBar/>
          <div className=' lg:col-span-2 lg:block'>
          <SwitchTransition>
                <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
                    <div className="p-4 max-w-6xl mx-auto">
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
