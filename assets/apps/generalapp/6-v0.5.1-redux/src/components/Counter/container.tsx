// 6. Container 만들기 : 여기에 UI에 들어갈 state, action을 넣어준다.
import React from "react"
import Counter from "."
import { useSelector, useDispatch } from "react-redux"
import { increase, decrease } from "modules/counter"

export default function CounterContainer() {
  // state 전달
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  )

  // action 전달
  const dispatch = useDispatch()
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}
