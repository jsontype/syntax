import { useReducer, useEffect } from 'react'

// Users.js에 있는 reducer 함수를 이쪽으로 이동시켰다.
function reducer (state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            }
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

/**
    useAsync 커스텀훅
    @param {Function} callback  API 요청을 시작하는 콜백함수
    @param {Array} deps 
        API 요청 콜백함수 안에서 사용할 useEffect의 deps 배열. 
        이 값이 []이면, 컴포넌트가 가장 처음 렌더링 할 때만 API를 호출하겠다는 뜻이 된다.
        나중에 사용할 비동기 함수에서 파라미터가 필요하고, 그 파라미터가 바뀔 때마다 (useEffect에서 걸어서) 새 데이터를 불러오고 싶은 경우에 쓰기 위함이다.
    @param {Boolean} skip
        특정버튼을 누르지 않은 경우는 API 요청을 skip을 하기 위한 불린값이다.
        기본값은 false로 지정한다. 
    @return {Array[Object, Promise]}
        이 Hook 에서 반환하는 값은 [state, fetchData]이다.
        각각 API 요청 결과값을 담을 state와, fetchData 함수이다.
        이렇게 fetchData 함수를 반환하여서 나중에 데이터를 쉽게 리로딩을 해줄 수 있다.
*/
function useAsync (callback, deps = [], skip = false) {
    // Users.js에 있는 useReducer 훅을 이동시켰다.
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    })

    const fetchData = async () => {
        dispatch({ type: 'LOADING' })
        try {
            const data = await callback()
            dispatch({ type: 'SUCCESS', data })
        } catch (e) {
            dispatch({ type: 'ERROR', error: e })
        }
    }

    useEffect(() => {
        // skip이 true라면 useEffect에서 아무런 작업도 하지 않음
        if (skip) return
        fetchData()
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps)

    return [state, fetchData]
}

export default useAsync
