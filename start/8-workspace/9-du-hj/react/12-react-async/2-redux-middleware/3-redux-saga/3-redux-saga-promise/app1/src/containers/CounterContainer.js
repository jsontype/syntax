import React from "react"
import Counter from "../components/Counter"
import { useSelector, useDispatch } from "react-redux"
// Thunk 함수명으로 임포트 변경
import { increaseAsync, decreaseAsync } from "../modules/counter"

// Counter의 컨테이너 컴포넌트 만들기
function CounterContainer() {
  const number = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  // counter 컴포넌트에 선언한 Thunk 함수 onIncrease 사용
  const onIncrease = () => {
    dispatch(increaseAsync())
  }
  // counter 컴포넌트에 선언한 Thunk 함수 onDecrease 사용
  const onDecrease = () => {
    dispatch(decreaseAsync())
  }

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}

export default CounterContainer
