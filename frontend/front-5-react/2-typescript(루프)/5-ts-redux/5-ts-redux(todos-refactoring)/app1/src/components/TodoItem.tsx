/* Todos의 프리젠테이셔널 컴포넌트 만들기 */
// Todos: 여러개의 TodoItem 을 렌더링하는 용도 
// TodoItem: 할 일 정보을 보여주는 용도 ✅
// TodoInsert: 새 항목을 등록하는 용도

// style 타입을 설정하기 위해 react에서 지원하는 CSSProperties 타입을 임포트
import { CSSProperties } from 'react'
import { Todo } from '../modules/todos'

// props 타입 정의
type TodoItemProps = {
    // 이 컴포넌트에서는 할 일 정보를 지니고 있는 todo라는 props를 받아온다.
    todo: Todo
    // 이 컴포넌트는 onToggle이라는 props를 받아와서, 텍스트 영역을 클릭하면 이 함수를 호출한다.
    onToggle: (id: number) => void
    // 이 컴포넌트는 onRemove이라는 props를 받아와서, 우측의 (X)를 클릭하면 이 함수를 호출한다.
    onRemove: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    // CSSProperties는 style 객체의 타입이다.
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? 'line-through' : 'none'
    }
    const removeStyle: CSSProperties = {
        marginLeft: 8,
        color: 'red'
    }
    
    const handleToggle = () => { onToggle(todo.id) }
    const handleRemove = () => { onRemove(todo.id) }

    // 렌더링한다.
    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>
                {todo.text}
            </span>
            <span onClick={handleRemove} style={removeStyle}>
                (X)
            </span>
        </li>
    )
}
