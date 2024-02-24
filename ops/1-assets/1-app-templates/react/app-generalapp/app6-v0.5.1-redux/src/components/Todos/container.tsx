// 6. Container 만들기 : 여기에 UI에 들어갈 state, action을 넣어준다.
import { useState } from "react"
import Todos from "."
import { useSelector, useDispatch } from "react-redux"
import { addTodo, completeTodo, deleteTodo } from "modules/todos"

export default function CounterContainer() {
  // 로컬 state 전달
  const [text, setText] = useState("")

  // 글로벌 state 전달
  const todos = useSelector((state: any) => state.todos)

  // action 전달
  const dispatch = useDispatch()
  const onCreate = (title: string) => dispatch(addTodo(title))
  const onCompleted = (id: number) => dispatch(completeTodo(id))
  const onDelete = (id: number) => dispatch(deleteTodo(id))

  return (
    <Todos
      todos={todos}
      onCreate={onCreate}
      onCompleted={onCompleted}
      onDelete={onDelete}
      text={text}
      setText={setText}
    />
  )
}
