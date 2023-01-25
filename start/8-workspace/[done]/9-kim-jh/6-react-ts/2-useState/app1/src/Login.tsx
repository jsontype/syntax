import { useState } from 'react'

type LoginProps = {    
    onSubmit: (form: { id: string, pw: string}) => void
}

export default function Login({ onSubmit }: LoginProps) {
    const [form, setForm] = useState({
        id: '',
        pw: ''
    })

    // Destructuring 문법
    const { id, pw } = form
    // const id = form.id
    // const pw = form.pw

    const onChange = (e: { target: { name: any; value: any } }) => {
        // input의 name별 value를 입력값으로부터 취득
        const { name, value } = e.target
        // input 내용으로 form 데이터 수정
        setForm({
            // Spreading 문법
            ...form,
            [name]: value
        })
    }

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        onSubmit(form)
        setForm({
            id: '',
            pw: ''
        })
    }

    return (
        <form onSubmit={handleClick}>
            <input name="id" type="text" placeholder="ID를 입력해주세요." value={id} onChange={onChange} />
            <input name="pw" type="password" placeholder="PW를 입력해주세요." value={pw} onChange={onChange} />
            <button type="submit">등록</button>
        </form>        
    )
}
