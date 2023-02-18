import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../navigation/app-bar/app-bar'
import SideBar from '../navigation/sidebar/sidebar'

const Layout = () => {
    return (
        <>
            <div className=" h-[100svh] bg-white flex flex-col rounded-xl overflow-hidden shadow-xl"  >
                <AppBar />
                <div className="h-full flex">
                    <SideBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout