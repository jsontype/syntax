// CSS 임포트
import './App.css'

function App() {
  // JS 로직
  const hi = 'Hello React!!!'

  // HTML 렌더링 결과
  return (
    <>
      <div className='red'>
        {console.log(hi)}
        <div>{hi}</div>
        <div>{hi}</div>
        <div>{hi}</div>
        <div>{hi}</div>        
      </div>
      <hr />      
      <div className='red'>
        {console.log(hi)}
        <div>{hi}</div>
        <div>{hi}</div>
        <div>{hi}</div>
        <div>{hi}</div>
      </div>
    </>
  )
}

export default App
