const { createStore, compose, applyMiddleware } = require('redux')
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

// 미들웨어
const firstMiddleware = (store) => (dispatch) => (action) => {
    console.log('액션 로깅', action)
    // TODO: 디스패치하기 전에 실행할 기능은 여기에 추가
    dispatch(action)
    // TODO: 디스패치한 뒤 실행할 기능은 여기에 추가
    console.log('액션 끝')
}
// 위 삼단 함수는 아래와 같은 의미이다.
// function firstMiddleware(store) {
//    return function (dispatch) {
//        return function (action) {
//            ...
//        }
//    }
//}

// compose: devtool 등의 다른 미들웨어들도 보통 함께 사용하는 데, 그때 그들을 합쳐준다.
const enhancer = compose(
    applyMiddleware(firstMiddleware),
)

// store 생성
const store = createStore(reducer, initialState, enhancer)

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
