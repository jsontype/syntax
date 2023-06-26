// 1. State, Dispatch를 가져오는 커스텀 Hooks 임포트
import { useSettingsState, useSettingsDispatch } from './SettingsContext'

// 2. Settings 컴포넌트 수정
export default function Settings() {
    // ★ Context API를 쓰는 이유 : 이렇게 쉽게 state와 dispatch를 조회할 수 있어 개발생산성이 향상된다.
    const state = useSettingsState()
    const dispatch = useSettingsDispatch()

    // Context의 커스텀 Hooks안에 액션타입 외의 값들에 데이터타입 정의를 했기 때문에, 
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
