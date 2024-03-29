/* Thunk 함수를 만들 때 사용할 비동기 함수들 모음 */
// 이 파일에 있는 아래 함수들을 따로 선언하지 않고, 바로 posts 리덕스 모듈(src/modules/posts.js)에 넣어서 제작해도 되지만, 코드가 지저분해진다.
// 사전에 리덕스 모듈 중복 제거를 위한 리팩토링을 하는 것이기도 하다.

// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    // 성공, 실패 문자열 변수 선언
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성되었다.
    // 만약 여러 종류의 파라미터를 전달해야하는 상황이라면, 객체 타입 파라미터를 받아오면 된다. -> 예: writeComment({ postId: 1, text: '댓글 내용' })
    return param => async dispatch => {
        // 요청 시작
        dispatch({ type, param })
        try {
            // 결과물을 payload에 담는다.
            const payload = await promiseCreator(param)
            // dispatch가 성공했을 때의 처리
            dispatch({ type: SUCCESS, payload })
        } catch (e) {
            // dispatch가 실패했을 때의 처리
            dispatch({ type: ERROR, payload: e, error: true })
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

// 특정 id 를 처리하는 Thunk 생성함수
const defaultIdSelector = param => param
export const createPromiseThunkById = (
    type,
    promiseCreator,
    // 파라미터에서 id 를 어떻게 선택 할 지 정의하는 함수입니다.
    // 기본 값으로는 파라미터를 그대로 id로 사용합니다.
    // 하지만 만약 파라미터가 { id: 1, details: true } 이런 형태라면
    // idSelector 를 param => param.id 이런식으로 설정 할 수 있곘죠.
    idSelector = defaultIdSelector
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return param => async dispatch => {
        // 비동기 작업에 관련된 액션이 어떤 id를 가르키는지 알아내기 위해, action.meta 값에 id를 넣어준다.
        const id = idSelector(param)
        dispatch({ type, meta: id })
        try {
            const payload = await promiseCreator(param)
            dispatch({ type: SUCCESS, payload, meta: id })
        } catch (e) {
            dispatch({ type: ERROR, error: true, payload: e, meta: id })
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
