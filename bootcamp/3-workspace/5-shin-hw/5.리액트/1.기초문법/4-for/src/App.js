import UserList from './UserList'
import './App.css'

export default function App() {
  const userList = [
    { id: 1, name: 'John', email: 'John@example.com' },
    { id: 2, name: 'Smith', email: 'Smith@example.com' },
    { id: 3, name: 'Jane', email: 'Jane@example.com' },
    { id: 4, name: 'Yang', email: 'Yang@example.com' },
    { id: 5, name: 'Shin', email: 'Shin@example.com' },
  ]

  return (
    <>
      <UserList userList={userList} />
    </>
  )
}

// app에 유저리스트를 만들고 유저리스트를 작성 rfk  
// 리스트를 빼낼때 div key를 곡 만들어야됨
// 랜더링
