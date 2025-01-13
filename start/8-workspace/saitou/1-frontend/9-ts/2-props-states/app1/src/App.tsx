import './App.css'
import Hello from './components/Hello'
import Counter from './components/Counter'
import Login from './components/Login'

const App: React.FC = () => {
  const onClick = (): void => {
    alert('Hello!')
  }

  const onSubmit = (form: { id: string, pw: string }): void => {
    alert('Loginしました。')
    console.log(form)
  }

  const getUserClass = (name: string, userClass: string): string => {
    return `${name} : ${userClass}`
  }

  return (
    <>
      <Hello name="Kim" onClick={onClick} />
      <Hello name="Saito" onClick={onClick} getUserClass={getUserClass} />
      <Hello name="Jack" onClick={onClick} getUserClass={getUserClass} userClassify={'Developer'} />
      <Hello name="John" onClick={onClick} getUserClass={getUserClass} userClassify={'VIP'} />
      <Counter />
      <Login onSubmit={onSubmit} />
    </>
  )
}

export default App
