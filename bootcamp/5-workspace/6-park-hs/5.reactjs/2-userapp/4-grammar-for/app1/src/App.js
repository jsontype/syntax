// CSS
import './App.css'

export default function App() {
  // JS
  const users = [
    { no: 1, id: 'adlsfkj', pw: 12345, out: true },
    { no: 2, id: 'qweklf', pw: 23123241345, out: false },
    { no: 3, id: 'sadflk', pw: 12332445, out: false },
    { no: 4, id: 'vlk', pw: 21312345, out: false },
  ]

  // const render = users.map((user) => { return (
  //   <div key={user.no}>
  //     <h2>{user.no}번 고객</h2>
  //     <div>Id: {user.id}</div>
  //     <div>Pw: {user.pw}</div>
  //     <hr />
  //   </div>
  // ) })

  const render = users
    .filter((user) => { return !user.out })
    .map((user) => { return (
      <div key={user.no}>
        <h2>{user.no}번 고객</h2>
        <div>Id: {user.id}</div>
        <div>Pw: {user.pw}</div>
        <hr />
      </div>
    )
  })

  // XML
  return (
    <>
      {render}
    </>
  )
}
