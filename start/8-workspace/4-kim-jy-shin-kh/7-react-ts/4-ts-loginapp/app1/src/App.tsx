import React, { useState } from 'react'
import Counter from './Counter'
import Login from './Login'
import './App.css'

export default function App() {
    const [count, setCount] = useState<number>(0)

    const onSubmit = (form: { id: string, pw: string }) => {
        console.log(form)
        // 로그인 api를 fetch해서 리턴값을 받아와서, 해당 리턴이 로그인 성공 200이면 그것일때의 화면 변화를 여기에 넣으면 됨
    }

    return (
        <div className="App">
            <Counter count={count} setCount={setCount} />
            <Login onSubmit={onSubmit} />
        </div>
    )
}
