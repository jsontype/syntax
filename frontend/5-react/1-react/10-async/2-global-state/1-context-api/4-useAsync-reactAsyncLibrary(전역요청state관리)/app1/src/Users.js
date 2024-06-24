import React, { useState } from 'react'
import axios from 'axios'
// 1. react-async의 useAsync 함수를 임포트한다.
import { useAsync } from 'react-async'
import User from './User'

async function getUsers () {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
}

function Users () {
    const [userId, setUserId] = useState(null)
    // 2. 받는 타입을 배열에서 객체로 바꾸어야 한다.
    const { data: users, error, isLoading, run } = useAsync({
        deferFn: getUsers
    })

    if (isLoading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return <button onClick={run}>불러오기</button>

    return (
        <>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={run}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    )
}

export default Users
