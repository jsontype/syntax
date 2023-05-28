/** 카운터 컨테이너 컴포넌트 */
import React from "react"
import Counter from "./Counter"

/** counter 모듈에서 정의한 액션 생성함수 임포트 */
import { increase, decrease } from "../../modules/counter"
/** react-redux 함수 임포트 : useSelector = state 조회, useDispatch = action 호출 */
import { useSelector, useDispatch } from "react-redux"

export default function CounterContainer() {
  // state 연결
  const number = useSelector((state) => state.counter.number)

  // action 연결
  const dispatch = useDispatch()
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}
