// 7. Container 컴포넌트 만들기
import React from "react"
import Todos from "./Todos"
import { addTodo, toggleTodo, deleteTodo } from "./modules/todos"
import { useSelector, useDispatch } from "react-redux" // selector는 state를 조회, dispatch는 action을 dispatch(호출)하는 리덕스 훅 함수

export default function TodosContainer() {
  // state를 연결
  const { todos } = useSelector((state) => ({ todos: state.todos }))

  // dispatch를 연결
  const dispatch = useDispatch()
  const onCreate = (text) => dispatch(addTodo(text))
  const onCompleted = (id) => dispatch(toggleTodo(id))
  const onDelete = (id) => dispatch(deleteTodo(id))

  return (
    <>
      <Todos
        todos={todos}
        onCreate={onCreate}
        onCompleted={onCompleted}
        onDelete={onDelete}
      />
    </>
  )
}
