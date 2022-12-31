import React, { useState } from 'react'

type LoginProps = {
  onSubmit: (form: { id: string, pw: string }) => void
}

export default function Login({ onSubmit }: LoginProps) {
  const [form, setForm] = useState({
    id: '',
    pw: ''
  })
  const [isLogin, setLogin] = useState<boolean>(false)
  const [user, setUser] = useState<string>('')

  const { id, pw } = form

  const onChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSumit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onSubmit(form)
    setLogin(true)
    setUser(id)
    setForm({
      id: '',
      pw: ''
    })
  }

  return (
    <div>
      {!isLogin && (
        <form onSubmit={handleSumit}>
          <input name="id" type="text" placeholder='id 입력해주세요' value={id} onChange={onChange} />
          <input name="pw" type="password" placeholder='pw 입력해주세요' value={pw} onChange={onChange} />
          <button type="submit">로그인</button>
        </form>
      )}

      {isLogin && (
        <div>{user}님, 환영합니다.</div>
      )}
    </div>
  )
}
