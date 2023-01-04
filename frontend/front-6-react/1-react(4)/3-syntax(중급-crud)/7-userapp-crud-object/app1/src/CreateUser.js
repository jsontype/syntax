import React from 'react'

export default function CreateUser({ id, email, onChange, onCreate }) {
  return (
    <div>
      <input
        type="text"
        name="id"
        placeholder="계정명"
        onChange={onChange}
        value={id}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}
