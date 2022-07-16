import React from 'react'
import './UserList.css'

export default function UserList({users, onRemove}) {
    const render = users
        .filter((user) => { return !user.out })
        .map((user) => { return (
            <div key={user.no}>
                <h2 className='red'>{user.no}번 고객</h2>
                <div>Id: {user.id}</div>
                <div>Email: {user.email}</div>
                <button onClick={() => { onRemove(user.no) }}>삭제</button>
                <hr />
            </div>
        )
    })

    return (
        <div>{render}</div>
    )
}
