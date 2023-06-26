import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
/* context로부터 todo의 global state 가져오기 */
import { useTodoState } from '../TodoContext'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {
    /* todo list의 목록을 보여주는 처리 1. */
    const todos = useTodoState()

    return (
        <TodoListBlock>
            {/* todo list의 목록을 보여주는 처리 2. */}
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
}

export default TodoList
