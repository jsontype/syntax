import "./App.css"

// JSX 문법
export default function App() {
  // JS
  const users = [
    { id: 1, name: "John", email: "John@example.com" },
    { id: 2, name: "Smith", email: "Smith@example.com" },
    { id: 3, name: "Jane", email: "Jane@example.com" },
    { id: 4, name: "Yang", email: "Yang@example.com" },
    { id: 5, name: "Shin", email: "Shin@example.com" },
  ]

  const render = users.map((item) => {
    return (
      <>
        <div className="user" key={item.id}>
          <div className="userName">{item.name}</div>
          <div className="userEmail">{item.email}</div>
        </div>
      </>
    )
  })

  // XML
  return (
    <div className="App">
      <h1>유저리스트</h1>
      {render}
    </div>
  )
}
