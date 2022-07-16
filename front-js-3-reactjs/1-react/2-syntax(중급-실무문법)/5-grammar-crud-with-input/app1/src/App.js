import React, { useRef, useState } from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'

export default function App() {
    // CreateUser 컴포넌트에게 필요한 props를 준비 Start
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    })
    const { username, email } = inputs

    // 배열값
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'admin',
            email: 'admin@test.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'test@test.com',
            active: false
        },
        {
            id: 3,
            username: 'yang',
            email: 'yang@test.com',
            active: false
        }
    ])

    // useRef() : 재랜더링 되지 않는 변수인 nextId를 만드는 함수이다.
    // .current : nextId의 값은 .current안에 담긴 값이 되며, 이 값을 조회, 수정할 때에는 .current값을 조회, 수정하면 된다.
    // useRef() 함수의 파라미터의 값 : .current의 초기값이 된다. 
    const nextId = useRef(4)
    
    // 인풋창에 값을 입력했을 때
    const onChange = e => {

        // 비구조화 할당
        const { name, value } = e.target

        /* 
            여러 개의 input이 있을 때,
            onChange도 input 수만큼 만들어서 해도 된다.
            그러나 중복이 많아지기 때문에, 더 좋은 방법은, 
            아래와 같이 input에 name을 설정하고 이벤트가 발생할 때 이 값을 참조하는 것이다.      
                [name]: value
        */

        setInputs(inputs => ({
            ...inputs,
            [name]: value // [name]은, 각 name 키의 값(id, email)과 일치하는 input창의 value를 의미함
        }))
    }

    // 작성 버튼을 눌렀을 때 : arr.push와 같음
    const onCreate = () => {
        // 작성 시 users 배열에 새 user 객체를 push
        const user = {
            id: nextId.current,
            username,
            email
        }

        // setUsers(users => [...users, user]) // arr.push 대신, spread 연산자를 사용하는 방법
        setUsers(users => users.concat(user)) // arr.push 대신, concat 함수를 사용하는 방법

        // 작성 시 인풋창 내용 초기화
        setInputs({
            username: '',
            email: ''
        })

        // ★화면 재랜더링 없이 아이디 Auto Increment 처리
        nextId.current += 1
    }

    // 삭제 버튼 눌렀을 때 : arr.splice와 같음
    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users => users.filter(user => user.id !== id));
    }

    // 유저를 클릭해서 활성화했을 때
    const onToggle = id => {
        setUsers(users =>
        users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
        )
        )
    }

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
    )
}
