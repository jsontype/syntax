import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import Todos from './Todos'
import { addTodo, toggleTodo } from '../../modules/todos'

// 4. state와 action들을 props로 보내면서 counter 컴포넌트를 렌더링
function TodosContainer({ todos, addTodo, toggleTodo }) {
  // 최적화 할 필요가 없으므로 useCallBack 미사용 : onCreate는 React Memo가 적용된 하위 컴포넌트로 내려보내지 않기 때문이다.
  const onCreate = text => addTodo(text)
  // 최적화 할 필요가 있으므로 useCallBack 사용 : onToggle 은 리렌더링이 빈번하게 이루어지는 TodoItem 까지 내려가기 때문이다. 이 때, Deps에 dispatch가 없으면 eslint에서 exhaustive-deps가 뜬다.
  const onToggle = useCallback(id => toggleTodo(id), [toggleTodo])

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
}

// 1. state를 select(조회)하기  
const mapStateToProps = state => ({ todos: state.todos })

// 2. action을 mapDispatchToProps 객체에 담기 (dispatch를 대신함)
// React store의 action을 (dispatch 없이) binding 해주기 위해, mapDispatchToProps를 객체로 정의한다.
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
}

// 3. state와 action들을 렌더링할 컴포넌트의 props에 binding 하기
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosContainer)
