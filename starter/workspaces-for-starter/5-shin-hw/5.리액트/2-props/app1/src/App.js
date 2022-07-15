// 1. 컴포넌트 임포트
import Hello from './Hello'
import './App.css'

export default function App() {
  const fname = 'Shin'
  const name = 'HW'

  return (
    <>
      {/* 2. 컴포넌트 렌더링 */}
      <Hello />
      <Hello />
      {/* 3. 자식 컴포넌트에게 props 넘겨주기 */}
      <Hello family={fname} name={name} />
    </>
  )
}
