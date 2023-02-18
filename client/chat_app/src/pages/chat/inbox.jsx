import React from 'react'
import Messages from './components/messages'
import Users from './components/users'

const Inbox = () => {
    return (
        <>
            <div className="h-full w-[100%] flex">
                <Users />
                <Messages />
            </div>
        </>
    )
}

export default Inbox