import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <>
            <div className="h-full lg:w-64 border-r pt-10 px-5">
                <p className="text-xs font-medium text-gray-400">MAIN</p>
                <div
                    className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center justify-center lg:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className='hidden lg:block'>Dashboard</span>
                </div>
                <p className="text-xs font-medium text-gray-400 mt-8 hidden lg:block">APPLICATIONS</p>
                <p className="text-xs font-medium text-gray-400 mt-8 lg:hidden">APP</p>
                <Link to='/chat' className="mt-4 py-1.5 text-sm font-medium  text-blue-500 group cursor-pointer flex items-center justify-center lg:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5   mr-4  stroke-blue-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">

                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className='hidden lg:block' >Messages</span>
                </Link>
                <div
                    className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center justify-center lg:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className='hidden lg:block' >Contacts</span>
                </div>
                <div
                    className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center justify-center lg:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">

                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className='hidden lg:block' >Meeting</span>
                </div>
               
                <div
                    className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center justify-center lg:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">

                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className='hidden lg:block' >Session</span>
                </div>
                <div
                    className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center justify-center lg:justify-start">
                    <BiLogOut className="text-[1.3rem] mr-[1rem] text-gray-400"/>
                    <span className='hidden lg:block' >Logout</span>

                </div>
            </div>
        </>
    )
}

export default SideBar