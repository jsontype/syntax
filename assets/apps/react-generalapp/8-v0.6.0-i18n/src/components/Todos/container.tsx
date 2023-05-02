// 6. Container 만들기 : 여기에 UI에 들어갈 state, action을 넣어준다.
import React from "react"
import Todos from "./"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, completeTodo, deleteTodo } from "modules/todos"

export default function TodosContainer() {
    // state 전달
    const todos = useSelector((state: any) => state.todos)

    // action 전달
    const dispatch = useDispatch()
    const onCreate = (title: string) => dispatch(addTodo(title))
    const onDelete = (id: number) => dispatch(deleteTodo(id))
    const onCompleted = (id: number) => dispatch(completeTodo(id))

    return (
        <Todos todos={todos} onCreate={onCreate} onDelete={onDelete} onCompleted={onCompleted} />
    )
}
