import React, { useEffect } from 'react'
import { useUsersState, useUsersDispatch, getUser } from './UsersContext'

function User ({ id }) {
    // state를 가져온다.
    const state = useUsersState()
    // dispatch 를 가져온다.
    const dispatch = useUsersDispatch()

    // useEffect를 사용해서 id값이 바뀔 때마다, getUser() 함수를 호출한다.
    useEffect(() => {
        // 여기서 getUser() 함수를 호출 할 때에는 두번째 파라미터에 현재 props로 받아온 id값을 넣어준다.
        getUser(dispatch, id)
    }, [dispatch, id])

    const { data: user, loading, error } = state.user

    if (loading) return <div>로딩중..</div>
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
