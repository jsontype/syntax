import { useEffect, useState } from "react"
import { TodosItemProps } from '../../App'
import styles from "./style.module.scss"

type TodosProps = {
  todos: TodosItemProps[]
  setTodos: (todos: TodosItemProps[]) => void
  text: string
  setText: (text: string) => void
}

export default function Todos({ todos, setTodos, text, setText }: TodosProps) {
  // JS
  const [key, setKey] = useState(21)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter(
          (item: { userId: number }) => item.userId === 1
        )
        setTodos(result)
      })
  }, [setTodos])

  // 불변성의 법칙을 지키면서 CRUD중 CUD를 하는 방법
  // const addArr = () => { setArr([...arr, 3]) } // 배열 추가
  // const modArr = () => { setArr(arr.map((item, index) => { return index === arr.length - 1 ? 999 : item })) } // 배열 수정
  // const delArr = () => { setArr(arr.filter((item, index) => { return index !== arr.length - 1 }))} // 배열 삭제
  // const addObj = () => { setObj({ ...obj, email: 'test@example.com' }) } // 객체 키 추가
  // const modObj = () => { setObj({ ...obj, email: 'zzzz@example.com' }) } // 객체 키밸류 수정
  // const delObj = () => { const { email, ...delObj } = obj; setObj(delObj)} // 객체 키 삭제

  const onChange = (e: {
    preventDefault: () => void
    target: { value: string }
  }) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const onCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const newTodo = {
      id: key,
      title: text,
      completed: false,
      userId: 1,
    }
    setKey(key + 1)
    setTodos([...todos, newTodo])
    setText("")
  }

  const onComplted = (id: number) => {
    setTodos(
      todos.map((item) => {
        return item.id === id
          ? { ...item, completed: !item.completed }
          : { ...item }
      })
    )
  }

  const onDelete = (id: number) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id
      })
    )
  }

  const render = todos.map((item) => {
    return (
      <div key={item.id}>
        <span onClick={() => onComplted(item.id)}>
          <span>#</span>
          <span>{item.id} / </span>
          <span>{item.title}</span>
          <span>{item.completed && "✅"}</span>
        </span>
        <span onClick={() => onDelete(item.id)}>❌</span>
      </div>
    )
  })

  // XML
  return (
    <div className={styles.Todos}>
      <h1>투두 앱</h1>
      <form onSubmit={onCreate}>
        <input
          type="text"
          name="todo"
          value={text}
          placeholder="할일 적기"
          onChange={onChange}
        ></input>
        <input type="submit" value="등록"></input>
      </form>
      {render}
    </div>
  )
}
