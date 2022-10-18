import { call, put } from 'redux-saga/effects'

// Promise에 기반한 Saga 만들어주는 함수
export const createPromiseSaga = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    // saga 제네레이터 함수를 생성 : 액션을 모니터링한다. 액션이 지니고 있는 값을 모니터링하고 싶다면, action을 파라미터로 받아와서 사용하면 된다.
    return function* saga (action) {
        try {
            // 재사용성을 위하여 promiseCreator 의 파라미터엔 action.payload 값을 넣도록 설정한다.
            const payload = yield call(promiseCreator, action.payload)
            yield put({ type: SUCCESS, payload })
        } catch (e) {
            yield put({ type: ERROR, error: true, payload: e })
        }
    }
}

// 특정 id의 데이터를 조회하는 용도로 사용하는 사가
// API를 호출 할 때 파라미터는 action.payload를 넣고, id 값을 action.meta로 설정한다.
export const createPromiseSagaById = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    // saga 제네레이터 함수를 생성 : 액션을 모니터링한다. 액션이 지니고 있는 값을 모니터링하고 싶다면, action을 파라미터로 받아와서 사용하면 된다.
    return function* saga (action) {
        const id = action.meta
        try {
            const payload = yield call(promiseCreator, action.payload)
            yield put({ type: SUCCESS, payload, meta: id })
        } catch (e) {
            yield put({ type: ERROR, error: e, meta: id })
        }
    }
}

// 리듀서에서 사용할 유틸 함수 모음
export const reducerUtils = {
    // 초기 state : 초기 data 값은 기본적으로 null이지만 바꿀 수도 있다.
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    // 로딩중 state :  prevState의 경우엔 기본값은 null이지만 값을 지정하면 prevState 값을 유지시켜 쓸 수 있다.
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    // 성공시 state
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    // 실패시 state
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
}

// 비동기 관련 액션들을 처리하는 리듀서 함수
export const handleAsyncActions = (type, key) => { // type은 액션타입, key는 state의 key(예: posts, post)
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading()
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload)
                }
            default:
                return state
        }
    }
}

// id별로 처리하는 유틸함수
export const handleAsyncActionsById = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    return (state, action) => {
        // 비동기 작업에 관련된 액션이 어떤 id를 가르키는지 알아내기 위해, action.meta 값에 넣어줬던 id를 꺼내 사용한다.
        const id = action.meta
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            // state[key][id]가 만들어져있지 않을 수도 있으니까 유효성을 먼저 검사 후 data 조회
                            keepData ? state[key][id] && state[key][id].data : null
                        )
                    }
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload)
                    }
                }
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload)
                    }
                }
            default:
                return state
        }
    }
}
