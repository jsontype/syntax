const { createStore } = require('redux')
const reducer = require('./reducers/index')
const { addPost } = require('./actions/post')
const { logIn, logOut } = require('./actions/user')

// store 초기값 생성
const initialState = {
    user: {
        isLogIn: false,
        data: null,
    },
    post: [],
    comments: [],
    favorites: [],
    history: [],
    likes: [],
    followers: [],
}

// store 생성
const store = createStore(reducer, initialState)

// store 호출 : action 일어나기 전
console.log('1. store 생성 후: ', store.getState())



// dispatch 생성 : "logIn" action을 불러서 실행한다.
store.dispatch(logIn({
    isLogIn: true,
    data: {
        id: 1,
        name: 'yang',
        admin: true,
    }
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
