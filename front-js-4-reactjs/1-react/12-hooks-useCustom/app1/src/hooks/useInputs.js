import { useReducer, useCallback } from 'react'

// reducer 사용
function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            }

        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = ''
                return acc
            }, {})

        default:
            return state
    }
}

// useInputs Custom Hook
function useInputs(initialForm) {
    // input form의 값 변수설정 및 초기값 지정
    const [form, dispatch] = useReducer(reducer, initialForm)

    // input form에 값 입력시 처리
    const onChange = useCallback(e => {
        const { name, value } = e.target
        dispatch({ type: 'CHANGE', name, value })
    }, [])

    // 새 항목을 추가할 때, input form의 값 리셋 처리
    const reset = useCallback(() => dispatch({ type: 'RESET' }), [])

    // form 상태변수, onChange, reset 함수들을 전달함
    return [form, onChange, reset]
}

export default useInputs
