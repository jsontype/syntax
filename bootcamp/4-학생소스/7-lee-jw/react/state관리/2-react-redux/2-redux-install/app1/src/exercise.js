// store를 생성하는 리덕스의 내장함수
import { createStore } from 'redux'

/* 리덕스에서 관리할 state 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: []
}

/* action 타입 정의 */
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

/* action 생성함수 정의 */
function increase() {
    return {
        // 액션 객체에는 type값이 필수
        type: INCREASE,
    }
}

const decrease = () => ({
    type: DECREASE,
})

const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})



/* 리듀서(액션 생성함수를 통해서, 각 함수의 실제 처리를 리턴하는 함수) 만들기 */
function reducer(state = initialState, action) {
    // state 의 초기값을 initialState로 지정한다.
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
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state
    }
}

/* 스토어 만들기 */
const store = createStore(reducer)

/* action 실행의 결과 확인 */
// store 안에 들어있는 state가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState()
    // store 안에 들어있는 state를 조회
    console.log(state)
}
store.subscribe(listener)

store.dispatch(increase()) // counter를 1 늘린다.
store.dispatch(decrease()) // counter를 1 줄인다.
store.dispatch(changeText('안녕하세요')) // text를 바꾼다.
store.dispatch(addToList({ id: 1, text: '와우' })) // list 배열을 하나 추가한다.
