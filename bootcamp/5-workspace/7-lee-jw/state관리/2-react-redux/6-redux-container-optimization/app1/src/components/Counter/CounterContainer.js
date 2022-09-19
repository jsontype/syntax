import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Counter from './Counter'
import { increase, decrease, setDiff } from '../../modules/counter'

/* 콘테이너 컴포넌트 만들기 */
// 컨테이너 컴포넌트란, 프레젠테이셔널 컴포넌트가 Redux store의 state를 조회하거나 action을 dispatch 할 수 있게 해주는 컴포넌트이다.
// HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용한다.

function CounterContainer() {
    // 1. state를 select(조회)하기
    // Redux store의 state를 조회할 수 있게, useSelector라는 Redux Hook을 걸어준다.
    // 이렇게 하면, "number, diff"의 state의 값은 store.getState() 함수를 호출한 결과값과 같아진다.
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }))

    // 최적화 : useSelector에 담는 state가 객체라면, 매번 렌더링할 때마다 새로 만듦.
    // const number = useSelector(state => state.counter.number)
    // const diff = useSelector(state => state.counter.diff)

    // 최적화 방법2 : shallowEqual은 react-redux에 내장되어있는 함수로써, 객체 안의 "가장 겉에 있는 값"들을 모두 비교해줍니다.
    const { number, diff } = useSelector(
        state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        shallowEqual
    )

    // 2. action을 dispatch(전달)하기
    // useDispatch라는 Redux Hook을 걸어서, store의 dispatch를 함수에다가도 사용 할 수 있게 해준다.
    const dispatch = useDispatch()
    // 각 액션들을 dispatch하는(전달하는) 각 함수들을 만든다.
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))

  return (
    // 3. state와 action들을 props로 보내면서 counter 컴포넌트를 렌더링
    <Counter
        // state를 select하는(조회하는) 함수들을 props로 넣어준다.
        number={number}
        diff={diff}
        // action을 dispatch하는(전달하는) 함수들을 props로 넣어준다.
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer
