import { useState } from 'react'

type LoginProps = {
    onSubmit: (form: { id: string, pw: string }) => void
}

export default function Login({onSubmit}: LoginProps) {
    const [form, setForm] = useState({
        id: '',
        pw: ''
    })

    const { id, pw } = form
    
    const onChange = (e: { target: { name: string; value: string } }) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        onSubmit(form)
        setForm({
            id: '',
            pw: ''
        })
    }

    return (
        <>
            <hr />
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <input name="id" type="text" placeholder="id 입력" onChange={onChange} value={id}></input><br/>
                <input name="pw" type="password" placeholder="pw 입력" onChange={onChange} value={pw}></input><br/>
                <button type="submit">등록</button>
            </form>
        </>        
    )
}
