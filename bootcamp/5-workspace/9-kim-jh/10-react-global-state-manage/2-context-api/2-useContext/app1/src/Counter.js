// 8. 리액트에서 useContext를 임포트
import React, { useContext } from "react";
// 9. context를 임포트
import { CounterContext } from "./App";

// 10. context내의 글로벌 스테이트를 프롭으로 넘겨받기
export default function Counter({ state }) {
  // 11. 글로벌 스테이트 "counter"에서 number 꺼내기
  const { number } = state.counter;
  // 12. 액션을 실행하는 dispatch 함수를 연결
  const dispatch = useContext(CounterContext);

  // 13. 이벤트리스너 함수들을 dispatch 불러오는 형태로 변경
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    // 14. 렌더링
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
