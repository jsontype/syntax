import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Counter from './Counter'
import { increase, decrease, setDiff } from '../../modules/counter'

/* 콘테이너 컴포넌트 만들기 */
// 컨테이너 컴포넌트란, 프레젠테이셔널 컴포넌트가 Redux store의 state를 조회하거나 action을 dispatch 할 수 있게 해주는 컴포넌트이다.
// HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용한다.

function CounterContainer() {
    // 1. state 조회
    // Redux store의 state를 조회할 수 있게, useSelector Hook을 걸어준다.
    // 이렇게 하면, "number, diff"의 state의 값은 store.getState() 함수를 호출한 결과값과 같아진다.
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }))

    // 2. action 디스패치 
    // useDispatch Hook을 걸어서, store의 dispatch를 함수에다가도 사용 할 수 있게 해준다.
    const dispatch = useDispatch()
    // 각 액션들을 dispatch하는(보내는) 각 함수들을 만든다.
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))

  return (
    // 3. dispatch들을 props로 보내면서 counter 컴포넌트를 렌더링
    <Counter
        // state를 dispatch하는(보내는) 함수들을 props로 넣어준다.
        number={number}
        diff={diff}
        // action을 dispatch하는(보내는) 함수들을 props로 넣어준다.
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer
