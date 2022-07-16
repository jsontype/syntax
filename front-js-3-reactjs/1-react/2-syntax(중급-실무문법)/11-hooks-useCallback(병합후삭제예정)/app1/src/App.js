import React, { useRef, useState, useMemo, useCallback } from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...')
    return users.filter(user => user.active).length
}

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
    const onChange = useCallback(e => {
        const { name, value } = e.target
            setInputs(inputs => ({
            ...inputs,
            [name]: value
        }))
    }, [])

    // 작성 버튼을 눌렀을 때
    const onCreate = useCallback(() => {
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
    }, [username, email])

    // 삭제 버튼 눌렀을 때
    const onRemove = useCallback(id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users => users.filter(user => user.id !== id));
    }, [])

    // 유저를 클릭해서 활성화했을 때
    const onToggle = useCallback(id => {
        setUsers(users =>
        users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
        )
        )
    }, [])

    // 활성화 유저 카운트
    // const count = countActiveUsers(users)
    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    )
}
