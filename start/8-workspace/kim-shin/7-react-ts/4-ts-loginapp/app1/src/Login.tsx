import React, { useState } from 'react'

type formProps = {
  id: string,
  pw: string
}

type LoginProps = {
  onSubmit: (form: formProps) => void,
}

export default function Login({ onSubmit }: LoginProps) {
  const [form, setForm] = useState({
    id: '',
    pw: ''
  })

  const { id, pw } = form

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onSubmit(form)
    setForm({
      id: '',
      pw: ''
    })
  }

  const onChange = (e: { preventDefault: () => void; target: { name: string; value: string } }) => {
    e.preventDefault()
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div className="inputs">
      <form onSubmit={handleSubmit}>
        <input name="id" type="text" value={id} placeholder='id를 입력해주세요' onChange={onChange}></input>
        <input name="pw" type="password" value={pw} placeholder='pw를 입력해주세요' onChange={onChange}></input>
        <input type="submit" value="로그인"></input>
      </form>
    </div>
  )
}
