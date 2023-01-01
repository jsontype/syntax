// 1. 반복되는 함수 getUsers(), getUser()의 중복을 제거
// 1-1. createAsyncDispatcher 함수를 만든다.
// 이를 통해 UsersContext의 반복되는 함수 getUsers(), getUser()의 중복을 제거할 수 있다.
// 이 함수는 파라미터로써 "액션의 타입"(예: GET_USER)과 "Promise를 만들어주는 함수"를 받아온다.
export function createAsyncDispatcher (type, promiseFn) {
    // 성공, 실패에 대한 액션 타입 문자열을 준비한다.
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    // 액션 핸들러 함수를 만든다. 이 때 ...rest를 사용하여 나머지 파라미터를 rest 배열에 담는다.
    async function actionHandler (dispatch, ...rest) {
        dispatch({ type }) // 요청 시작됨
        try {
            // Promise를 만들어주는 함수를 호출해서, data를 취득한다. 함수의 파라미터에는 인자값으로 rest 스프레딩 배열을 준다.
            const data = await promiseFn(...rest)
            // 성공시의 처리 : data를 가져온다.
            dispatch({
                type: SUCCESS,
                data
            })
        } catch (e) {
            // 실패시의 처리 : error를 가져온다.
            dispatch({
                type: ERROR,
                error: e
            })
        }
    }

    // 만든 함수를 반환한다.
    return actionHandler 
}

// 1-2. UsersContext.js 안에 다음을 임포트한다.
// import createAsyncDispatcher from './createAsyncDispatcher'
// import * as api from './api'

// 1-3. 이제 UsersContext.js 안의 getUsers(), getUser() 함수 부분을 다음과 같이 줄일 수 있다.
// export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers)
// export const getUser = createAsyncDispatcher('GET_USER', api.getUser)



// 2. 반복되는 리듀서 함수 usersReducer(state, action)의 중복을 제거
// 2-1. 다음과 같이 initialAsyncState 객체를 만들어서 내보낸다. (2-1, 2-2는 UsersContext.js로부터 잘라내기 해오면 된다.)
export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
}

// 2-2. UsersContext 의 loadingState, success, error를 잘라내서 asyncActionUtils.js 안에 붙여넣는다.
// 로딩중일 때 바뀔 state 객체
const loadingState = {
    loading: true,
    data: null,
    error: null
}

// 성공했을 때의 state 만들어주는 함수
const success = data => ({
    loading: false,
    data,
    error: null
})

// 실패했을 때의 state 만들어주는 함수
const error = error => ({
    loading: false,
    data: null,
    error: error
})

// 2-3. createAsyncHandler라는 리듀서 함수도 만들어서 내보낸다.
// 이 함수는 세가지 액션을 처리하는 리듀서이다.
// type은 액션 타입, key는 리듀서에서 사용할 필드 이름이다. (예: user, users)
export function createAsyncHandler (type, key) {
    // 성공, 실패에 대한 액션 타입 문자열을 준비한다.
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    // 함수를 새로 만든다.
    function handler (state, action) {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data)
                }
            case ERROR:
                return {
                    ...state,
                    [key]: error(action.error)
                }
            default:
                return state
        }
    }

    // 만든 함수를 반환한다.
    return handler
}

// 2-4. UsersContext.js 안에 다음을 임포트한다.
// import { createAsyncHandler, initialAsyncState } from './asyncActionUtils'

// 2-5. 이제 UsersContext.js 안의 초기치 객체, state를 만들어주는 함수(유틸 함수로 변경), usersReducer(state, action) 리듀서 함수 총 세 부분을 다음과 같이 줄일 수 있다.
// // 리팩토링된 초기치 객체
// const initialState = {
//     users: initialAsyncState,
//     user: initialAsyncState
// }
// // 리팩토링된 유틸 함수
// const usersHandler = createAsyncHandler('GET_USERS', 'users')
// const userHandler = createAsyncHandler('GET_USER', 'user')
// // 리팩토링된 usersReducer(state, action) 리듀서 함수
// function usersReducer (state, action) {
//     switch (action.type) {
//         case 'GET_USERS':
//         case 'GET_USERS_SUCCESS':
//         case 'GET_USERS_ERROR':
//             return usersHandler(state, action)
//         case 'GET_USER':
//         case 'GET_USER_SUCCESS':
//         case 'GET_USER_ERROR':
//             return userHandler(state, action)
//         default:
//             throw new Error(`Unhanded action type: ${action.type}`)
//     }
// }
