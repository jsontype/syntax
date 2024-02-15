import React, { useState } from 'react'

type LoginProps = {
    onSubmit: (form: { id: string, pw: string }) => void
}

export default function Login({ onSubmit }: LoginProps) {
    const [form, setForm] = useState({
        id: '',
        pw: ''
    })

    // Destructuring
    const { id, pw } = form

    // onChange의 e 객체의 데이터타입은 React.ChangeEvent<HTMLInputElement>로 지정해서 구현할 수 있다.
    // 또는 그냥 e만 입력한 뒤, e에 hovering하고, 빠른 수정으로 간 뒤, "매개형식 유추"로 유추된 데이터타입을 지정하면 된다.
    const onChange = (e: { target: { name: any; value: any } }) => {
        // input의 name별 value를 입력값으로부터 취득
        const { name, value } = e.target
        // input 내용으로 form 데이터 수정
        setForm({
            ...form,
            [name]: value
        })
    }

    // onSubmit의 e 객체의 데이터타입은 React.FormEvent<HTMLFormElement>로 지정해서 구현할 수 있다.
    // 또는 그냥 e만 입력한 뒤, e에 hovering하고, 빠른 수정으로 간 뒤, "매개형식 유추"로 유추된 데이터타입을 지정하면 된다.
    const handleSubmit = (e: { preventDefault: () => void }) => {
        // 기존 form submit 기능 끄기
        e.preventDefault()
        // submit : 부모 컴포넌트로 form 내용 보내기
        onSubmit(form)
        // submit 후 : 인풋창 초기화
        setForm({
            id: '',
            pw: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="id" type="text" placeholder="ID를 입력해주세요." value={id} onChange={onChange} />
            <input name="pw" type="password" placeholder="PW를 입력해주세요." value={pw} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}
