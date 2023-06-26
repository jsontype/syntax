import React from 'react'
import styled from 'styled-components'
/* context로부터 todo의 global state 가져오기 */
import { useTodoState } from '../TodoContext'

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function TodoHead() {  
    /* 오늘의 날짜를 보여주는 처리 1. */
    const today = new Date()
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' })

    /* done 값이 false인 항목들의 개수를 화면에 보여주는 처리 1. */
    const todos = useTodoState()
    const undoneTasks = todos.filter(todo => !todo.done)    

    return (
        <TodoHeadBlock>
            {/* 오늘의 날짜를 보여주는 처리 2. */}
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>

            {/* done 값이 false인 항목들의 개수를 화면에 보여주는 처리 2. */}
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead
