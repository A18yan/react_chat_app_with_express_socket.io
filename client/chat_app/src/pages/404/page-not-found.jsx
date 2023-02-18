import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center select-none">
        <div className="flex items-center gap-x-4">
          <p className="text-[5rem] -translate-y-2">:(</p>
          <div className="text-center">
            <p className='text-[2rem] '>Nothing</p>
            <p className='text-[1.5rem] '>here</p>
          </div>
        </div>
        <p className="hover:cursor-pointer">go home</p>
      </div>
    </>
  )
}

export default PageNotFound