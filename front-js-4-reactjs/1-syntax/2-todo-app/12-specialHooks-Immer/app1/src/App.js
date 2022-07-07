import React, { useRef, useReducer, useMemo, useCallback } from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './hooks/useInputs'

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

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                user.id === action.id ? { ...user, active: !user.active } : user
                )
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        default:
            return state
    }
}

// 1. Context 만들기 : React.createContext() 라는 함수를 사용해서, UserDispatch 라는 이름으로 내보내준다. () 안에는 Context의 값을 따로 지정하지 않을 경우 사용되는 기본값을 넣어준다.
// 이렇게 내보내는 작업을 해주면, 나중에 사용하고 싶을 때 다음과 같이 불러와서 사용 할 수 있다. import { UserDispatch } from './App'
export const UserDispatch = React.createContext(null)

function App() {
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: ''
    })

    const [state, dispatch] = useReducer(reducer, initialState)

    const nextId = useRef(4)

    const { users } = state

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        })
        onReset()
        nextId.current += 1
    }, [username, email, onReset])

    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        // 2. Context 값 지정하기 : Context를 만들면 Provider라는 컴포넌트가 들어있는데 이 컴포넌트 안의 value안에 값을 넣어서 Context의 값을 정할 수 있다.
        // 이렇게 설정해주고 나면 Provider 에 의하여 감싸진 컴포넌트 중 어디서든지 Context의 값을 다른 곳에서 바로 조회해서 사용 할 수 있다. 
        // 지금은 우선 App 컴포넌트 에서 Context 를 만들고, 사용하고, 내보내는 작업을 해준다.
        // 여기까지 한다면 UserDispatch라는 Context를 만들어서, 어디서든지 dispatch를 꺼내 쓸 수 있도록 준비를 해준 것이다.
        // App 에서 onToggle 과 onRemove 를 지우고, UserList 에게 props를 전달하는것도 지운다.
        <UserDispatch.Provider value={dispatch}>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} />
            <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
    )
}

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...')
    return users.filter(user => user.active).length
}

export default App
