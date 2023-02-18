import React, { useEffect } from 'react'
import { message_store } from '../store';

const Users = () => {
    // store calls
    const get_users = message_store(state => state.get_users);
    const users = message_store(state => state.users);
    // fetching user from database
    useEffect(() => {
        get_users()
    }, [get_users])
  return (
    <>
          <div className="h-full w-96 overflow-y-scroll bg-slate-50 border-r flex flex-col">
              <div className="h-16 border-b px-4 flex items-center justify-start space-x-4">
                  <div className="px-4 py-4 border-b-4 border-b-blue-500">Recent</div>
              </div>
              {
                  users.length !== 0 &&
                  users.map(user => {
                      return (
                          <div
                              className="px-5 py-4 flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                              <img src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user.name}&size=64&`}
                                  className="h-12 w-12 border-2 border-white rounded-full" alt={user.name} />
                              <div className="ml-4">
                                  <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> {user.name}
                                  </p>
                                  <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
    </>
  )
}

export default Users