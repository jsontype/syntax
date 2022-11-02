import './App.css'
import Title from './components/Title'
import EmployeeList from './components/EmployeeList'

export default function App() {
  const name = 'yang'
  const position = 'FE'
  const optional = 'BE'
  const onClick = (name: string) => { alert(name + '님을 채용하셨습니다!') }

  return (
    <div className="App">
      <Title />
      <EmployeeList name={name} position={position} optional={optional} onClick={onClick} />
    </div>
  )
}
