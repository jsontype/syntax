import React, { useState } from "react"
import Title from "components/atoms/Title"

type LoginProps = {
  onLogin: (form: { id: string; pw: string }) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [form, setForm] = useState({
    id: "",
    pw: "",
  })

  const { id, pw } = form

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(form)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <div>
      <Title text="로그인 앱" />
      <form onSubmit={handleSubmit}>
        <input
          value={id}
          name="id"
          placeholder="id를 입력해주세요"
          onChange={onChange}
        ></input>
        <input
          value={pw}
          name="pw"
          placeholder="pw를 입력해주세요"
          onChange={onChange}
        ></input>
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}
