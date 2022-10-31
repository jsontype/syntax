import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { toggleTodo, removeTodo, addTodo } from '../modules/todos'
import TodoInsert from '../components/TodoInsert'
import Todos from '../components/Todos'

/* Counter의 컨테이너 컴포넌트 만들기 */
// 컨테이너 컴포넌트 : Global State 값을 조회하고, Action을 디스패치하는 컴포넌트
// 컨테이너 컴포넌트에서 신경 쓸 부분은 useSelector((state: RootState) => state.todos) 이 부분이 전부이다.
export default function TodosContainer() {
    // todos의 타입은 useSelector가 알아서 유추해주니 굳이 :{id: number, text: string, done: boolean } 또는 :TodosState 라고 타입을 설정 할 필요 없다.
    const todos = useSelector(
        // Global State를 조회할 때에는 state의 타입을 RootState로 지정해야 한다.
        (state: RootState) => state.todos
    )
    // 디스패치 함수를 가져온다.
    const dispatch = useDispatch() 

    // 각 Action들을 디스패치하는 함수들을 만들어준다.
    const onInsert = (text: string) => { dispatch(addTodo(text)) }
    const onToggle = (id: number) => { dispatch(toggleTodo(id)) }
    const onRemove = (id: number) => { dispatch(removeTodo(id)) }

    // UI가 있는 카운터를 렌더링하면서 "조회한 Global State 값"과, "Dispatch한 Action"들을 Props로 넘겨준다!
    return (
        <>
            <TodoInsert onInsert={onInsert} />
            <Todos todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </>
    )
}
