/* Todos의 프리젠테이셔널 컴포넌트 만들기 */
// Todos: 여러개의 TodoItem 을 렌더링하는 용도 
// TodoItem: 할 일 정보을 보여주는 용도 
// TodoInsert: 새 항목을 등록하는 용도 ✅

// event의 타입을 설정하기 위해 react에서 지원하는 ChangeEvent, FormEvent 타입을 임포트
import { useState, ChangeEvent, FormEvent } from 'react'

// props 타입 정의
type TodoInsertProps = {
    // 이 컴포넌트는 onInsert라는 props를 받아와서, 이 함수를 호출하면 새 항목을 추가한다.
    onInsert: (text: string) => void
}

// 컴포넌트에서 필요한 값과 함수들을 모두 props로 받아온다.
export default function TodoInsert({
    onInsert
}: TodoInsertProps) {
    // input value의 상태는 컴포넌트 내부에서 로컬 상태로 관리한다.
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        onInsert(value)
        setValue('')
    }

    // 렌더링한다.
    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    )
}
