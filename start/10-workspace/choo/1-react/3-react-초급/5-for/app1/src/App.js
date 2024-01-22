import "./App.css"
import Title from "./components/Title"

export default function App() {
  // JS
  const userList = [
    { id: 1, name: "John", email: "John@example.com" },
    { id: 2, name: "Smith", email: "Smith@example.com" },
    { id: 3, name: "Jane", email: "Jane@example.com" },
    { id: 4, name: "Yang", email: "Yang@example.com" },
    { id: 5, name: "Shin", email: "Shin@example.com" },
  ]

  const render = userList.map((item) => {
    return (
      <div key={item.id}>
        <div>이름 : {item.name}</div>
        <div>이메일 : {item.email}</div>
        <hr />
      </div>
    )
  })

  // XML
  return (
    <>
      <Title text="투두앱" mark="?" />
      <Title text="무비앱" mark="!" />
      <Title text="카운트앱" money />
      <Title text="뉴스앱" money special />

      {render}
    </>
  )
}
