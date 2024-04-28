import React from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import { increase, decrease, setDiff } from '../../modules/counter'

// 4. state와 action들을 props로 보내면서 counter 컴포넌트를 렌더링
function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      // state를 select하는(조회하는) 함수들을 props로 넣어준다.
      number={number}
      diff={diff}
      // action을 dispatch하는(전달하는) 함수들을 props로 넣어준다.
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  )
}

// 1. state를 select(조회)하기
// Redux store의 state를 조회할 수 있게, mapStateToProps 함수로 정의한다.
// 이렇게 하면, "number, diff"의 state의 값은 store.getState() 함수를 호출한 결과값과 같아진다.
const mapStateToProps = state => ({
  number: state.counter.number,
  diff: state.counter.diff
})

// 2. action을 mapDispatchToProps 객체에 담기 (dispatch를 대신함)
// React store의 action을 (dispatch 없이) binding 해주기 위해, mapDispatchToProps를 객체로 정의한다.
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff
}

// 3. state와 action들을 렌더링할 컴포넌트의 props에 binding 하기
// connect 함수의 import가 필요하다.
// connect 함수에는 mapStateToProps, mapDispatchToProps를 인자로 넣어준다.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)

/* 
  3번 코드는 다음과 동일하다.
    const enhance = connect(mapStateToProps, mapDispatchToProps)
    export defualt enhance(CounterContainer)
*/
