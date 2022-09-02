import React, { useState, useRef } from 'react'
import './Input.css';

export default function Input() {    
    // state 만들기 : inputs 만들고, 초기값 inputs = { name: '', nickname: '' }
    const [inputs, setInputs] = useState({ name: '', nickname: '' })

    // 비구조화 할당 : 아래 두 코드와 세번째 코드와 같다.
    // const name = inputs.name
    // const nickname = inputs.nickname
    const { name, nickname } = inputs

    // useRef 1. 사용준비
    const nameInput = useRef()

    const onKeyUp = (event) => {
        // 비구조화 할당 : 아래 두 코드와 세번째 코드와 같다.
        // const value = event.target.value
        // const name = event.target.name
        const { value, name } = event.target
        setInputs({
            ...inputs,
            [name]: value            
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        // useRef 3. 실제사용
        nameInput.current.focus()
    }

    return (
        <div className="input">
            {/* useRef 2. 사용준비 */}
            <input name="name" type="text" placeholder="Please write your name" onChange={onKeyUp} value={name} ref={nameInput}></input>

            <input name="nickname" type="text" placeholder="Please write your nickname" onChange={onKeyUp} value={nickname}></input>
            <button onClick={onReset}>Button</button>            
            <p>name:{name}</p>
            <p>nickname:{nickname}</p>
        </div>
    )
}
