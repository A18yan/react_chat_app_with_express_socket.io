import React from 'react'

const AppBar = () => {
    return (
        <>
            <div className=" border-b px-5 py-1 flex justify-between items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="-149.1 -248.49675 1292.2 1490.9805">
                        <g transform="translate(-15 -11.5)">
                            <linearGradient y2="1005.5" x2="512" y1="11.5" x1="512" gradientUnits="userSpaceOnUse" id="a">
                                <stop offset="0" stopColor="#00b2ff" />
                                <stop offset="1" stopColor="#006aff" />
                            </linearGradient>
                            <path
                                d="M512 11.5c-280 0-497 205.1-497 482.1 0 144.9 59.4 270.1 156.1 356.6 8.1 7.3 13 17.4 13.4 28.3l2.7 88.4c.9 28.2 30 46.5 55.8 35.2l98.6-43.5c8.4-3.7 17.7-4.4 26.5-2 45.3 12.5 93.6 19.1 143.9 19.1 280 0 497-205.1 497-482.1S792 11.5 512 11.5z"
                                fill="url(#a)" fillRule="evenodd" clipRule="evenodd" />
                            <path
                                d="M213.6 634.6l146-231.6c23.2-36.8 73-46 107.8-19.9l116.1 87.1c10.7 8 25.3 7.9 35.9-.1l156.8-119c20.9-15.9 48.3 9.2 34.2 31.4L664.5 614c-23.2 36.8-73 46-107.8 19.9l-116.1-87.1c-10.7-8-25.3-7.9-35.9.1L247.8 666c-20.9 15.9-48.3-9.2-34.2-31.4z"
                                fillRule="evenodd" clipRule="evenodd" fill="#fff" />
                        </g>
                    </svg></span>
                <div className=" w-1/2 relative focus-within:shadow-lg">
                    <div className="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-300 mr-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Search.."
                            className=" w-full outline-none placeholder:text-slate-300 font-semibold" />
                    </div>
                    {/* <div className="absolute w-full border bg-white">
                            <div className="px-4 py-1 flex justify-between items-center border-b">
                                <p className="text-sm font-medium text-slate-600">Recent Search</p>
                                <p className="text-xs text-slate-400 cursor-pointer">Clear All</p>

                            </div>
                        </div> */}
                </div>
                <div className="flex space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-400 " fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <img src="https://source.unsplash.com/random/500x500/?face" className="h-10 w-10 rounded-full" alt="" />

                </div>

            </div>
        </>
    )
}

export default AppBar