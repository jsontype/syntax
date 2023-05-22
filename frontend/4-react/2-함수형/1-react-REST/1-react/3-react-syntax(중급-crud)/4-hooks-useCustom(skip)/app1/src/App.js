import React, { useRef, useReducer, useMemo, useCallback } from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './hooks/useInputs'

// API로부터 fetch해서 받아올 초기값 (가상)
const initialState = {
    users: [
        {
            id: 1,
            username: 'admin',
            email: 'admin@test.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'test@test.com',
            active: false
        },
        {
            id: 3,
            username: 'yang',
            email: 'yang@test.com',
            active: false
        }
    ]
}

// 리듀서를 쓰기 위한 첫번째 준비 - 액션 타입별 액션 설정 : useReducer를 사용하는 부분
function reducer(state, action) {
    switch (action.type) {
        // 사용자 추가하는 액션타입
        case 'CREATE_USER':
            return { 
                users: state.users.concat(action.user)
            }

        // 사용자 수정하는 액션타입
        case 'TOGGLE_USER':
            return {
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            }

        // 사용자 삭제하는 액션타입
        case 'REMOVE_USER':
            return {
                ...state, 
                users: state.users.filter(user => user.id !== action.id)
            }

        // 사용자 조회하는 액션타입
        default:
            return state
    }
}

export default function App() {
    // 리듀서를 쓰기 위한 두번째 준비 - 번수 선언 : useReducer를 사용하는 부분
    // const [state, 액션] = [리듀서, 초기값]
    // onEvent함수에서 dispath.type를 주면 -> reducer에서 맞아떨어지는 action.type별 함수를 리턴값으로 부르고 -> 이를 실행해서 각 prop에 넣어준다.
    const [state, dispatch] = useReducer(reducer, initialState);

    // 리랜더링 되지 않는 변수 설정
    const nextId = useRef(4);

    // ★비구조화 할당 문법 : 아래와 같이 하면, state에서 필요한 값들을 추출하여 각 컴포넌트에게 prop으로 전달할 수 있다.
    const { users } = state

    // Custom Hooks
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    })

    // 추가하는 로직 : useReducer를 사용하는 부분
    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        })
        // 새 항목을 추가할 때, input form의 값 리셋 처리 (useInputs.js에서 가져옴) 
        reset()
        nextId.current += 1
    }, [username, email, reset])

    // 활성 사용자로 변경하는 로직 : useReducer를 사용하는 부분
    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    }, [])

    // 삭제하는 로직 : useReducer를 사용하는 부분
    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    }, [])

    // 최적화 : "users 배열이 바뀔 때만" 활성 사용자수 구하는 로직을 호출해서 count에 담음
    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        <>
            {/* 유저추가 폼 표시 */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            {/* 유저리스트 표시 */}
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />

            {/* 활성 사용자수 표시 */}
            <div>활성사용자 수 : {count}</div>
        </>
    ) 
}

// 활성 사용자수 구하는 로직
function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...')
    return users.filter(user => user.active).length
}
