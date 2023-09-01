// 7. Container 컴포넌트 만들기
import React from "react"
import Counter from "./Counter"
import { increase, decrease } from "./modules/counter"
import { useSelector, useDispatch } from "react-redux" // selector는 state를 조회, dispatch는 action을 dispatch(호출)하는 리덕스 훅 함수

export default function CounterContainer() {
  // state를 연결
  const { count } = useSelector((state) => ({ count: state.counter.count }))
  // dispatch를 연결
  const dispatch = useDispatch()
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())

  return (
    <>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </>
  )
}
