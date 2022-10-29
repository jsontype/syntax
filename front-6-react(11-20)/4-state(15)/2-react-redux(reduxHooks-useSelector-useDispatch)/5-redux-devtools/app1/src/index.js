import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'

/* 1. Redux 개발자도구 사용하는 법 */
// Redux 개발자도구 임포트
// import { composeWithDevTools } from 'redux-devtools-extension' 
// composeWithDevTools를 사용하여 Redux 개발자 도구 활성화
// const store = createStore(rootReducer, composeWithDevTools())

/* 2. 임포트 없이 Redux 개발자도구 사용하는 법 */
const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/* Store 렌더링 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
