import React, { createContext, useReducer, useContext } from 'react'
import {
    createAsyncDispatcher, // getUsers(), getUser()의 중복제거 처리용 dispatch 함수
    createAsyncHandler, // usersReducer(state, action)의 중복제거 처리용 dispatch 함수
    initialAsyncState // usersReducer(state, action)의 중복제거 처리용 state 함수
} from './asyncActionUtils'
import * as api from './api' // api 파일에서 내보낸 모든 함수들을 불러옴



// <!-- 2. usersReducer를 리팩토링한 부분 Start -->
// UsersContext에서 사용할 기본 state
const initialState = {
    users: initialAsyncState,
    user: initialAsyncState
}

// UsersContext에서 사용할 유틸 함수
const usersHandler = createAsyncHandler('GET_USERS', 'users')
const userHandler = createAsyncHandler('GET_USER', 'user')

// 위에서 만든 객체와 유틸 함수들을 사용하여 리듀서 작성 : 각 요청에 대하여 3가지 (시작, 성공, 실패) 액션을 처리하는 함수를 만들었다.
function usersReducer (state, action) {
    // 하단의 switch 문에서는, 만약 return 또는 break를 하지 않으면, 여러개의 case 에 대하여 동일한 코드를 실행해준다. 
    switch (action.type) {
        // GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR 액션이 발생하게 된다면 각각 usersHandler(state, action)을 호출해서 반환을 해준다.
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action)
        // GET_USER, GET_USER_SUCCESS, GET_USER_ERROR 액션이 발생하게 된다면 각각 userHandler(state, action)을 호출해서 반환을 해준다.
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action)
        // 그 외 지정되지 않은 액션 타입의 요청에는 모두 에러를 반환한다.
        default:
            throw new Error(`Unhanded action type: ${action.type}`)
    }
}
// <!-- 2. usersReducer를 리팩토링한 부분 End -->



// State용 Context를 따로 만들어두기
const UsersStateContext = createContext(null)
// Dispatch용 Context를 따로 만들어두기
const UsersDispatchContext = createContext(null)

// 위에서 선언한 두가지 Context를 Provider로 감싸주는 컴포넌트
export function UsersProvider ({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initialState)
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
}

// State를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUsersState () {
    const state = useContext(UsersStateContext)
    if (!state) {
        throw new Error('Cannot find UsersProvider')
    }
    return state
}

// Dispatch를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch () {
    const dispatch = useContext(UsersDispatchContext)
    if (!dispatch) {
        throw new Error('Cannot find UsersProvider')
    }
    return dispatch
}



// <!-- 1. API 처리 함수를 리팩토링한 부분 Start -->
// 모든 사용자 리스트를 받아오는 API
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers)
// id값을 가지고, 특정 사용자의 정보를 가져오는 API
export const getUser = createAsyncDispatcher('GET_USER', api.getUser)
// <!-- 1. API 처리 함수를 리팩토링한 부분 End -->
