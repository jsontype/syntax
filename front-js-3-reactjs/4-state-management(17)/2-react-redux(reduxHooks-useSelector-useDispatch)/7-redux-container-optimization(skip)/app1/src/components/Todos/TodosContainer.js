import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todos from './Todos'
import { addTodo, toggleTodo } from '../../modules/todos'

function TodosContainer() {
  // 1. state를 select(조회)하기
  // Redux store의 state를 조회할 수 있게, useSelector라는 Redux Hook을 걸어준다.
  // 이렇게 하면, state의 값은 store.getState() 함수를 호출한 결과값과 같아진다.
  // 그리고, useSelector에서 꼭 객체를 반환 할 필요는 없다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 된다.
  const todos = useSelector(state => state.todos)

  // 2. action을 dispatch(전달)하기
  const dispatch = useDispatch()
  // 최적화 할 필요가 없으므로 useCallBack 미사용 : onCreate는 React Memo가 적용된 하위 컴포넌트로 내려보내지 않기 때문이다.
  const onCreate = text => dispatch(addTodo(text))
  // 최적화 할 필요가 있으므로 useCallBack 사용 : onToggle 은 리렌더링이 빈번하게 이루어지는 TodoItem 까지 내려가기 때문이다. 이 때, Deps에 dispatch가 없으면 eslint에서 exhaustive-deps가 뜬다.
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch])

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
}

export default TodosContainer
