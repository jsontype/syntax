import "./App.css"
import Counter from "./Counter"
import { createContext, useReducer } from "react"

export const CounterContext = createContext(null)

const initialState = {
  counter: { count: 0 },
}

function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: { count: state.counter.count + 1 },
      }
    case "DECREMENT":
      return {
        counter: { count: state.counter.count - 1 },
      }
    default:
      return state
  }
}

export default function App() {
  const [CounterState, CounterDispatch] = useReducer(
    CounterReducer,
    initialState
  )

  return (
    // 6. context.Provider의 value에 action을 넣고, 글로벌스테이트를 사용할 컴포넌트를 감싼다.
    <CounterContext.Provider value={CounterDispatch}>
      {/* 7. 글로벌 스테이트를 사용할 Counter컴포넌트의 state에 state를 넣는다. */}
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
    </CounterContext.Provider>
  )
}
