// CSS
import './App.css'

function App() {
  //JS
  const users = [
    { no: 1, id: 'yang123', pw: 1234 },
    { no: 2, id: 'sdaf123', pw: 31241325 },
    { no: 3, id: '23f34123', pw: 234 },
    { no: 4, id: 'dsf3', pw: 1234234 },
  ]

  const render = users.map((user) => {
    return (
      <div key={user.no}>
        <div className='userNo'>{user.no}번 고객님 정보</div>
        <div className='userId'>ID : {user.id}</div>
        <div className='userPw'>PW : {user.pw}</div>
        <hr />
      </div>
    )
  })

  // HTML
  return (
    <>
      {render}
    </>
  )
}

export default App
