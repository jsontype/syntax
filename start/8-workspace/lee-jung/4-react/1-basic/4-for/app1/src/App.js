import "./App.css"

function App() {
  // JS
  const userList = [
    { no: 1, id: "klqwj", name: "John", email: "john@example.com" },
    { no: 2, id: "dsafd", name: "Yang", email: "yang@example.com" },
    { no: 3, id: "asdfadf", name: "kim", email: "kim@example.com" },
  ]

  const filteredUsers = userList.filter((user) => user.no !== 1)

  const render = filteredUsers.map((item) => {
    return (
      <div className="user" key={item.no}>
        <div className="userId">id: {item.id}</div>
        <div>name: {item.name}</div>
        <div>email: {item.email}</div>
      </div>
    )
  })

  // XML
  return (
    <>
      <div>{render}</div>
    </>
  )
}

export default App
