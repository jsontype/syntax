import { useState } from 'react'
import './App.css'

type LoginProps = {
    onSubmit: (form: { id: string, pw: string }) => void
}

export default function Login({ onSubmit }: LoginProps) {
    const [form, setForm] = useState({
        id: '',
        pw: ''
    })

    // destructuring
    const { id, pw } = form

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        onSubmit(form)
        setForm({
            id: '',
            pw: ''
        })
    }

    const onChange = (e: { target: { name: any; value: any } }) => {
        // destructuring  : 아래는 이것과 같다. === const name = e.target.name; const value = e.target.value
        const { name, value } = e.target

        // form을 변경 : 키값을 변수로 하고 싶을 땐 []를 쓴다.
        setForm({
            // spreading
            ...form,
            [name]: value
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
