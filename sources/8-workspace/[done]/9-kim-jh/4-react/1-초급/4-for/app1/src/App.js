import './App.css'
import Hello from './Hello'

export default function App() {
  // JS
  const name = 'Kim'

  const userList = [
    { id: 1, name: 'John', email: 'John@example.com' },
    { id: 2, name: 'Smith', email: 'Smith@example.com' },
    { id: 3, name: 'Jane', email: 'Jane@example.com' },
    { id: 4, name: 'Yang', email: 'Yang@example.com' },
    { id: 5, name: 'Shin', email: 'Shin@example.com' },
  ]

  const render = userList.map((item) => {
    return (
      <div key={item.id}>
        <div className="userName">{item.name}</div>
        <div className="userEmail">{item.email}</div>
      </div>      
    )
  })

  // XML
  return (
    <>
      <Hello name={name} isSpecial isPremium />
      <div className="userList">
        {render}
      </div>
    </>
  )
}
