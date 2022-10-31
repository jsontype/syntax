/* Todos의 프리젠테이셔널 컴포넌트 만들기 */
// Todos: 여러개의 TodoItem 을 렌더링하는 용도 ✅
// TodoItem: 할 일 정보을 보여주는 용도
// TodoInsert: 새 항목을 등록하는 용도

import { Todo } from '../modules/todos'
import TodoItem from './TodoItem'

// props 타입 정의
type TodoListProps = {
    // 이 컴포넌트에서는 할 일 정보를 지니고 있는 todo들을 모아둔 배열인 todos라는 props를 받아온다.
    todos: Todo[]
    // 이 컴포넌트는 onToggle이라는 props를 받아와서, 다시 각 TodoItem 컴포넌트들에게 전달해준다. (이 함수가 호출되면 해당 todo의 done 값이 바뀐다.)
    onToggle: (id: number) => void
    // 이 컴포넌트는 onRemove이라는 props를 받아와서, 다시 각 TodoItem 컴포넌트들에게 전달해준다. (이 함수가 호출되면 해당 todo가 삭제된다.)
    onRemove: (id: number) => void
}

// 컴포넌트에서 필요한 값과 함수들을 모두 props로 받아온다.
export default function Todos({
    todos, onToggle, onRemove
}: TodoListProps) {
    // todos의 항목수가 0일 때는 다음을 렌더링한다.
    if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>

    // 렌더링한다.
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            ))}
        </ul>
    )
}
