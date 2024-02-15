import { useReducer } from 'react'

/* 필요한 타입들을 미리 선언 */
    
// Color의 데이터타입
type Color = 'red' | 'orange' | 'yellow'

// State의 데이터타입
type State = {
    count: number
    text: string
    color: Color
    isGood: boolean
}

// 액션타입 : 여기에 액션타입(type: 'SET_COUNT' 등) 외의 값을 넣게 되면, 각 변수들(count 등)에게 데이터타입을 같이 정의해야한다.
type Action =
    | { type: 'SET_COUNT', count: number }
    | { type: 'SET_TEXT', text: string }
    | { type: 'SET_COLOR', color: Color }
    | { type: 'TOGGLE_GOOD' }

// 액션타입 만들 때 액션타입 외의 값들에 데이터타입 정의를 했기 때문에, 코드를 작성하는 과정에서 자동완성이 되는 것을 볼 수 있다.
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count // count:에 hovereing하면 number 타입인걸 알 수 있다.
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text // text:에 hovereing하면 text 타입인걸 알 수 있다.
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color // color:에 hovereing하면 color가 Color 타입인걸 알 수 있습니다.
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Unhandled action')
    }
}

// Settings 컴포넌트 만들기
export default function Settings() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    })

    // 액션타입 만들 때 액션타입 외의 값들에 데이터타입 정의를 했기 때문에, 
    // 디스패치하는 곳에서 해당 변수를 넣지 않거나, 데이터타입이 다를 때 에러를 발생해준다.
    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }) // count를 넣지 않거나, 데이터타입이 다를 경우 에러발생
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }) // text를 넣지 않거나, 데이터타입이 다를 경우 에러발생
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }) // orange를 넣지 않거나, 데이터타입이 다를 경우 에러발생
    const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' })

    // 렌더링
    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    )
}
