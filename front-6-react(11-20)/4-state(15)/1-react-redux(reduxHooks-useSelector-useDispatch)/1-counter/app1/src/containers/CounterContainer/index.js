import React from 'react'
import Counter from '../../components/Counter'

/** 카운터 컨테이너 컴포넌트를 만들기 위한 카운터 모듈(리듀서) 임포트 */
import { increase, decrease } from '../../modules/counter'
/** 카운터 컨테이너 컴포넌트를 만들기 위한 react-redux 함수 임포트 */
import { useSelector, useDispatch } from 'react-redux' // selector = state 조회, dispatch = setState 즉 action을 보내기

export default function CounterContainer () {
    // state를 연결
    const { number } = useSelector(state => ({ number: state.counter.number }))
    // action을 연결 : ★ dispatch 쓸 때 함수형 업데이트 필수!
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}
