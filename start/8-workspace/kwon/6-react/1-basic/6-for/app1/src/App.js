import "./App.css"

export default function App() {
  const userList = [
    { id: 1, name: "John", email: "John@example.com" },
    { id: 2, name: "Yang", email: "Yang@example.com" },
    { id: 3, name: "Kim", email: "Kim@example.com" },
    { id: 4, name: "Kwon", email: "Kwon@example.com" },
  ]

  const render = userList.map((item) => {
    return (
      <>
        <div key={item.id}>
          <div>이름: {item.name}</div>
          <div>이메일: {item.email}</div>
        </div>
        <hr />
      </>
    )
  })

  return (
    <div className="hello">
      <div>{render}</div>
    </div>
  )
}
