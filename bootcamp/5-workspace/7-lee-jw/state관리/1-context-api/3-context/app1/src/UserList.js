import React, { useContext } from 'react'
import { UserDispatch } from './App'

const User = React.memo(function User({ user }) {
    // 3. useContext Hook 사용 : 이제, User 컴포넌트에서 바로 dispatch 를 사용 할건데, 그렇게 하기 위해서는 useContext 라는 Hook 을 사용해서 우리가 만든 UserDispatch Context 를 조회해야한다.
    const dispatch = useContext(UserDispatch)

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id });
                }}
            >
                {user.username}
            </b>
            
            &nbsp;<span>({user.email})</span>

            <button
                onClick={() => {
                    dispatch({ type: 'REMOVE_USER', id: user.id });
                }}
            >
                삭제
            </button>
        </div>
    )
})

function UserList({ users }) {
    return (
        <div>
        {users.map(user => (
            <User user={user} key={user.id} />
        ))}
        </div>
    )
}

export default React.memo(UserList)
