import { memo, useState } from "react"
import { TodosItemProps } from 'App'
import styles from "./style.module.scss"

type TodosProps = {
  todos: TodosItemProps[]
  onCreate: (title: string) => void
  onCompleted: (id: number) => void
  onDelete: (id: number) => void
}

 const Todos = memo(({
    todos,
    onCreate, 
    onDelete,
    onCompleted
}: TodosProps) => {
  // JS
  const [text, setText] = useState("")

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const result = json.filter(
  //         (item: { userId: number }) => item.userId === 1
  //       )
  //       setTodos(result)
  //     })
  // }, [setTodos])

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onCreate(text)
    setText("")
  }

  const onChange = (e: {
    preventDefault: () => void
    target: { value: string }
  }) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const render = todos.map((item) => {
    return (
      <div key={item.id}>
        <span onClick={() => onCompleted(item.id)}>
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
      <form onSubmit={onSubmit}>
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
})

export default Todos