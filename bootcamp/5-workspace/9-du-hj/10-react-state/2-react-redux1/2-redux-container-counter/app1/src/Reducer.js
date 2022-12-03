import { createStore } from 'redux'

/** 액션 타입 정의 */
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

/** 액션 생성함수 정의 */
const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })

/** 초기값 */
const initialState = {
    counter: 0,
}

/** 리듀서 정의 */
function reducer (state, action) {
    state = initialState
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

/* 스토어 만들기 */
const store = createStore(reducer)

/* action 실행의 결과 확인 */

// 나중에 글로벌 state 수정하는 방법 : 이곳의 store를 임포트해야됨
// store.dispatch(increase()) // + 하는 액션을 디스패치(실행)
// store.dispatch(decrease()) // - 하는 액션을 디스패치(실행)
// store.state.counter // get
