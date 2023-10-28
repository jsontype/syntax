import "./App.css"
import Counter from "./Counter"
import Movie from "./Movie"

// 1. createContext 함수를 react로부터 임포트
import { createContext, useReducer } from "react"

// 2. createContext 함수를 이용해서, Store 생성
export const CounterContext = createContext(null)

// 3. 모듈별로 초기값을 정의
const initialState = {
  counter: { count: 0 },
}

// 4. 리듀서 함수를 정의
function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: { count: state.counter.count + 1 },
      }
    case "DECREASE":
      return {
        counter: { count: state.counter.count - 1 },
      }
    default:
      return state
  }
}

export default function App() {
  // 5. useReducer 함수를 이용해서, state와 dispatch 함수를 생성
  const [state, dispatch] = useReducer(CounterReducer, initialState)

  return (
    // 6. Store.Provier를 태그로 해서 "글로벌스테이트 쓸 컴포넌트들"을 다 감싸기
    <CounterContext.Provider value={dispatch}>
      <div className="App">
        {/* 7. Counter 컴포넌트들에 글로벌스테이트를 state 프롭으로 넘겨주기 */}
        <Counter state={state} />
        <Counter state={state} />
        <Counter state={state} />
        <Counter state={state} />
        <Counter state={state} />
        <Counter state={state} />
        <Counter state={state} />
        <Movie state={state} />
      </div>
    </CounterContext.Provider>
  )
}
