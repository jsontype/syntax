// 1. react에서 createContext, useReducer 함수를 임포트
import React, { createContext, useReducer } from "react";
import "./App.css";
import Counter from "./Counter";

// 2. context 만들기 : createContext(인자값:context초기값)를 이용해서 ~Context라는 이름으로 정의
export const CounterContext = createContext(null);

// 3. 각 모듈의 state들의 초기값 정의
const init = {
  counter: { number: 0 },
};

// 4. 리듀서 정의
function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: { number: state.counter.number + 1 },
      };
    case "DECREMENT":
      return {
        counter: { number: state.counter.number - 1 },
      };
    default:
      return state;
  }
}

export default function App() {
  // 5. useReducer를 통해서 (local state 대신) global state를 선언하고, (setState 대신) dispatch도 선언 : useReducer(리듀서함수, 초기값)
  const [CounterState, CounterDispatch] = useReducer(CounterReducer, init);

  // XML
  return (
    // 6. ~Context.Provider로 글로벌 스테이트를 사용할 컴포넌트들을 감싸기 : value에는 dispatch를 준다.
    <CounterContext.Provider value={CounterDispatch}>
      {/* 7. Counter 컴포넌트에 global state를 state 프롭으로 넘겨준다. */}
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
    </CounterContext.Provider>
  );
}
