import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'

// 스토어를 만들고,
const store = createStore(rootReducer)

ReactDOM.render(
    // Provider 컴포넌트를 사용하여 스토어를 프로젝트에 적용
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// 이것으로 프로젝트에 Redux를 적용할 준비가 완료되었다.
