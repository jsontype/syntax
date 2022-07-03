const { createStore } = require('redux')

// store 초기값 생성
const initialState = {
    user: null,
    post: [],
}



// reducer 생성 : reducer는 action과 짝으로 사용한다. reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 State를 반환해주는 함수이다.
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prevState,
                user: action.payload,
            }
        case 'LOG_OUT':
            return {
                ...prevState,
                user: null,
            }    
        case 'ADD_POST':
            return {
                ...prevState,
                post: [...prevState.post, action.payload],
            }
        default:
            return prevState
    }
}

// ADD_POST를 실행시 reducer를 통해 새로 생성될 객체는 다음의 형태를 띌 것이다.
// const nextState = {
//     ...initialState, // 기존꺼는 동일하게 하고
//     post: [action.data], // 바꾸고 싶은 것만 바꿔서 중복제거
// }
// ADD_POST를 "2회 이상" 실행시 reducer를 통해 새로 생성될 객체는 다음의 형태를 띌 것이다.
// const nextState = {
//     ...initialState,
//     post: [...initialState.post, action.data], 
// }



// store 생성
const store = createStore(reducer, initialState)

// store 호출 : action 일어나기 전
console.log('1. store 생성 후: ', store.getState())



// action 생성
const logIn = (payload) => {
    return { // action
        type: 'LOG_IN',
        payload,
    }
}

// action 생성
const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

// action 생성
const addPost = (payload) => {
    return {
        type: 'ADD_POST',
        payload,
    }
}



// dispatch 생성 : "logIn" action을 불러서 실행한다.
store.dispatch(logIn({
    id: 1,
    name: 'yang',
    admin: true,
}))

// store 호출 : "logIn" action 일어난 후
console.log('2. logIn 실행 후: ', store.getState())



// dispatch 생성 : "addPost" action을 불러서 실행한다.
store.dispatch(addPost({
    userId: 1,
    id: 1,
    content: 'Hello Redux',
}))

// store 호출 : "addPost" action 일어난 후
console.log('3. addPost 실행 후: ', store.getState())



// dispatch 생성 : "logOut" action을 불러서 실행한다.
store.dispatch(logOut())

// store 호출 : "logOut" action 일어난 후
console.log('4. logOut 실행 후: ', store.getState())
