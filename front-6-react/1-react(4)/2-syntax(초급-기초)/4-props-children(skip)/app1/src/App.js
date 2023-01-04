import './App.css'
import Hello from './Hello'

export default function App() {  
  const name = 'Shin'
  const mark = '!'

  return (
    <div className="hello">
      {/* 1. 컴포넌트 안에 있는 HTML나 컴포넌트를 props로 주고 싶을 때는 props.children으로 줄 수 있다. */}
      {/* 자식이 한 개 일 경우 : 하나의 child만 return */}
      <Hello>
        Yang!
      </Hello>
      {/* 자식이 여러 개 일 경우 : children을 배열에 담아 return */}
      <Hello>
        Yang and
        <span> Jsontype!</span>
      </Hello>
    </div>
  )
}
