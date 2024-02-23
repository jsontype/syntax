import React, { createContext, useReducer, useContext } from 'react'
// API 호출을 위한 axios 라이브러리 임포트
import axios from 'axios'

// UsersContext에서 사용할 기본 state 객체
const initialState = {
    users: {
        loading: false,
        data: null,
        error: null
    },
    user: {
        loading: false,
        data: null,
        error: null
    }
}

// 로딩중일 때 바뀔 state 객체
const loadingState = {
    loading: true,
    data: null,
    error: null
}

// 성공했을 때의 state를 만들어주는 함수
const success = data => ({
    loading: false,
    data,
    error: null
})

// 실패했을 때의 state를 만들어주는 함수
const error = error => ({
    loading: false,
    data: null,
    error: error
})

// 위에서 만든 state 객체와 함수들을 사용하여 리듀서 작성
function usersReducer (state, action) {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: loadingState
            }
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: success(action.data)
            }
        case 'GET_USERS_ERROR':
            return {
                ...state,
                users: error(action.error)
            }
        case 'GET_USER':
            return {
                ...state,
                user: loadingState
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user: success(action.data)
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                user: error(action.error)
            }
        default:
            throw new Error(`Unhanded action type: ${action.type}`)
    }
}

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

// API 처리 함수 만들기 : 아래 함수들은 dispatch 를 파라미터로 받아오고, API에 필요한 파라미터도 받아오게 된다.

// 모든 사용자 리스트를 받아오는 API
export async function getUsers (dispatch) {
    dispatch({ type: 'GET_USERS' }) // 요청이 시작했을 때 액션을 디스패치
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        dispatch({ type: 'GET_USERS_SUCCESS', data: response.data }) // 요청이 성공했을 때 액션을 다시 디스패치
    } catch (e) {
        dispatch({ type: 'GET_USERS_ERROR', error: e }) // 요청이 실패했을 때 액션을 다시 디스패치
    }
}

// id값을 가지고, 특정 사용자의 정보를 가져오는 API
export async function getUser (dispatch, id) {
    dispatch({ type: 'GET_USER' }) // 요청이 시작했을 때 액션을 디스패치
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        )
        dispatch({ type: 'GET_USER_SUCCESS', data: response.data }) // 요청이 성공했을 때 액션을 다시 디스패치
    } catch (e) {
        dispatch({ type: 'GET_USER_ERROR', error: e }) // 요청이 실패했을 때 액션을 다시 디스패치
    }
}
