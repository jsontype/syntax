import React from 'react'
import Counter from '../components/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../modules/counter'

// Counter의 컨테이너 컴포넌트 만들기
function CounterContainer () {
    const number = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(increase())
    }
    const onDecrease = () => {
        dispatch(decrease())
    }

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer
