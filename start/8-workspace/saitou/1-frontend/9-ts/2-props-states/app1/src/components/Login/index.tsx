import { useState } from 'react'

interface LoginProps {
  onSubmit: (form: { id: string, pw: string }) => void
}

function Login({ onSubmit }: LoginProps) {
  const [form, setForm] = useState({ id: '', pw: '' })
  const { id, pw } = form

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
    setForm({ id: '', pw: '' })
  }

  return (
    <>
      <div className="flex flex-col items-center p-4 border rounded shadow-md w-64 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            placeholder="Username"
            className="px-4 py-2 border rounded"
            value={id}
            onChange={onChange}
          />
          <input
            type="password"
            name="pw"
            placeholder="Password"
            className="px-4 py-2 border rounded"
            value={pw}
            onChange={onChange}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
