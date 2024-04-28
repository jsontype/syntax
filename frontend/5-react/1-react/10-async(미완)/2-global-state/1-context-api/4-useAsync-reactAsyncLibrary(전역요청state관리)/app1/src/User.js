import React from 'react'
import axios from 'axios'
// 1. react-async의 useAsync 함수를 임포트한다.
import { useAsync } from 'react-async'

async function getUser ({ id }) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return response.data
}

function User ({ id }) {
    // 2. 받는 타입을 배열에서 객체로 바꾸어야 한다.
    const { data: user, error, isLoading } = useAsync({
        promiseFn: getUser,
        id,
        watch: id
    })

    if (isLoading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!user) return null

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    )
}

export default User
