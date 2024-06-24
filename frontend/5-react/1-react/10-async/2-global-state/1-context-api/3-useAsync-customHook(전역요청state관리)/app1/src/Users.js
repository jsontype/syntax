// 1. "리듀서, 유즈리듀서 훅, API 호출 로직"을 useAsync 커스텀 Hook에서 처리하도록 수정한다. 
// 2. 리스트를 클릭하면 상세 유저정보를 볼 수 있는 User 컴포넌트를 도입하도록 수정한다.
import React, { useState } from 'react'
import axios from 'axios'
import useAsync from './useAsync' // 1. useAsync 커스텀 Hook 임포트
import User from './User'

// 1. useAsync 에서는 Promise의 결과를 바로 data에 담기 때문에, 요청을 한 이후 response에서 data를 추출하여 반환하는 함수를 따로 만들었다.
async function getUsers () {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
}

function Users () {
    const [userId, setUserId] = useState(null)
    const [state, refetch] = useAsync(getUsers, [], true) // 1. useAsynce의 결과물을 초기값으로 담는다. (skip은 true이므로 실행하지 않는다.)
    const { loading, data: users, error } = state // 1. state.data 를 users 키워드로 조회

    if (loading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return <button onClick={refetch}>불러오기</button>

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
            <button onClick={refetch}>다시 불러오기</button>
            {/* 2. User 컴포넌트 도입해서, 리스트의 유저를 클릭하면 해당 유저 정보를 아래에 렌더링한다. */}
            {userId && <User id={userId} />}
        </>
    )
}

export default Users
