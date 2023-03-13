import { useReducer } from 'react'

// 액션 타입 지정 : 이렇게 액션을 | 으로 연달아서 쭉 나열하면 된다. 지금은 액션들이 액션타입 값만 있어서 간단하다.
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }

// 리듀서 함수의 파라미터, 리턴값의 데이터타입 지정
function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        default:
            throw new Error('Unhandled action')
    }
}

// 카운터 컴포넌트 만들기
export default function Counter() {
    // 리듀서 사용하여 state 생성
    const [count, dispatch] = useReducer(reducer, 0)
    // 리듀서 액션을 디스패치
    const onIncrease = () => dispatch({ type: 'INCREASE' })
    const onDecrease = () => dispatch({ type: 'DECREASE' })

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
