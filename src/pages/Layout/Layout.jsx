import React from 'react'
import { Outlet, useLocation } from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
export default function Layout() {
    const location = useLocation();
  return (
    <>
        <div >
            <SwitchTransition>
                <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
                    <div className="p-4 max-w-6xl mx-auto">
                        <Outlet/>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    </>
  )
}
