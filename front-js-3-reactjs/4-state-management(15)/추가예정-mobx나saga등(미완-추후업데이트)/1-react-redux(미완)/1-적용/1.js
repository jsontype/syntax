const { createStore } = require('redux')

// store 초기값 생성
const initialState = {
    compA: 'a',
    compB: 12,
    compC: null
}
// initialState.compA = 'b' // 로 위 값을 바꾸고 싶지만...? ★★ store state는 이렇게는 바꿀 수 없고, action으로 바꿔야 한다.



// reducer 생성 : reducer는 action과 짝으로 사용한다. reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 State를 반환해주는 함수이다.
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'CHANGE_COMP_A':
            return {
                ...prevState,
                compA: action.payload,
            }
        case 'CHANGE_COMP_B':
            return {
                ...prevState,
                compB: action.payload,
            }    
        case 'CHANGE_COMP_C':
            return {
                ...prevState,
                compC: action.payload,
            }
        default:
            return prevState
    }
}

// reducer를 통해 새로 생성될 객체는 다음의 형태를 띌 것이다.
// const nextState = {
//     ...initialState, // 기존꺼는 동일하게 하고
//     compA: action.data, // 바꾸고 싶은 것만 바꿔서 중복제거
// }



// store 생성
const store = createStore(reducer, initialState)

// store 호출 : action 일어나기 전
console.log('1: ', store.getState())



// action 생성
const changeCompA = (payload) => {
    return {
        type: 'CHANGE_COMP_A',
        payload,
    }
}



// dispatch 생성 : action을 불러서 실행한다.
store.dispatch(changeCompA( 'b' ))

// store 호출 : action 일어난 후
console.log('2: ', store.getState())
