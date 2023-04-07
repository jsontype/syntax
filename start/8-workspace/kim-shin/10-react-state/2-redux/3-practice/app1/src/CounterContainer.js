// 6. Container 만들기 : 여기에 UI에 들어갈 state, action을 넣어준다.
import React from "react"
import Counter from "./Counter"
import { useSelector, useDispatch } from "react-redux"
import { increase, decrease } from "./modules/counter"

export default function CounterContainer() {
  const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch()
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}
