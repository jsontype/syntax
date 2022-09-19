// CSS
import { useState, useRef } from 'react'
import UserList from './UserList'
import './App.css'
import CreateUser from './CreateUser'

export default function App() {
  const [users, setUsers] = useState([
    { no: 1, id: 'adlsfkj', email: 'adlsfkj@gmail.com', active: true, pw: 12345, out: true },
    { no: 2, id: 'qweklf', email: 'qweklf@gmail.com', active: true, pw: 23123241345, out: false },
    { no: 3, id: 'sadflk', email: 'sadflk@gmail.com', active: true, pw: 12332445, out: false },
    { no: 4, id: 'vlk', email: 'vlk@gmail.com', active: true, pw: 21312345, out: false },
  ])

  const [inputs, setInputs] = useState({
    id: '',
    email: '',
  })
  const { id, email } = inputs

  const nextNo = useRef(5)

  const onChange = (event) => {
    const { name, value } = event.target
    
    /* 
      여러 개의 input이 있을 때,
      onChange도 input 수만큼 만들어서 해도 된다.
      그러나 중복이 많아지기 때문에, 더 좋은 방법은, 
      아래와 같이 input에 name을 설정하고 이벤트가 발생할 때 이 값을 참조하는 것이다.      
        [name]: value
    */

    // 객체 변경
    setInputs({
      ...inputs,
      [name]: value // [name]은, 각 name 키의 값(id, email)과 일치하는 input창의 value를 의미함
    }) 
  }

  const onCreate = () => {
    const user = {
      no: nextNo.current,
      id,
      email,
    }

    // 배열 추가
    setUsers([...users, user])
    // setUsers(users.concat(user))

    nextNo.current += 1
  }

  const onRemove = (no) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((item) => { return item.no !== no }))
  }

  // XML
  return (
    <>
      <CreateUser id={id} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} />
    </>
  )
}
