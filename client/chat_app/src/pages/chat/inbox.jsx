import React from 'react'
import Messages from './components/messages'
import Users from './components/users'

const Inbox = () => {
    return (
        <>
            <div className="h-full flex">
                <Users />
                <Messages />
            </div>
        </>
    )
}

export default Inbox