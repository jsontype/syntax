import React, { useRef, useReducer, useMemo, useCallback } from 'react'
import useInputs from './hooks/useInputs'
import UserList from './UserList'
import CreateUser from './CreateUser'

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

// 리듀서를 쓰기 위한 첫번째 준비 - 액션 타입별 액션 설정 : useReducer를 적용할 부분
function reducer(state, action) {
    switch (action.type) {
        // 사용자 추가하는 액션타입 : state 객체의 불변성을 지키기 위해 push가 아니라 concat을 사용해서 state 배열에 추가
        case 'CREATE_USER':
            return {
                users: state.users.concat(action.user)
            }
        // 사용자 수정하는 액션타입 : state 객체의 불변성을 지키기 위해 spread 연산자 사용
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            }
        // 사용자 삭제하는 액션타입 : state 객체의 불변성을 지키기 위해 spread 연산자 사용
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
    // 커스텀 훅
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: ''
    })

    // 리듀서를 쓰기 위한 두번째 준비 : 변수를 선언한다.
    // const [state, action] = useReducer[reducer, state의 초기값]
    const [state, dispatch] = useReducer(reducer, initialState)

    // 리랜더링 되지 않는 변수 설정
    const nextId = useRef(4)

    // ★비구조화 할당 문법 : 아래와 같이 하면, state에서 필요한 값들을 추출하여 각 컴포넌트에게 prop으로 전달할 수 있다.
    const { users } = state

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
        onReset()
        nextId.current += 1
    }, [username, email, onReset])

    // 최적화 : "users 배열이 바뀔 때만" 활성 사용자수 구하는 로직을 호출해서 count에 담음
    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        // 3. Context 값 지정하기 : Context를 만들면 Provider라는 컴포넌트가 들어있는데 이 컴포넌트 안의 value안에 값을 넣어서 Context의 값을 정할 수 있다.
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



// 1. Context 만들기 : React.createContext() 라는 함수를 사용해서, UserDispatch 라는 이름으로 내보내준다. 
// () 안에는 Context의 값을 따로 지정하지 않을 경우 사용되는 기본값을 넣어준다.
// 이렇게 내보내는 작업을 해주면, 나중에 사용하고 싶을 때 다음과 같이 불러와서 사용 할 수 있다. 
// import { UserDispatch } from './App'
export const UserDispatch = React.createContext(null)
