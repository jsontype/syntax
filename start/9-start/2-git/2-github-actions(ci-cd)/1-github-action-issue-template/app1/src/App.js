// 이 부분은 수동으로 수정해야한다. 수정후 아래 XML 태그쪽에 빨간 줄이 없어질 것이다.
// 아직 ESLint가 모든 것을 수정해주지는 않는다.
import React from 'react'
import './App.css'

export default function App() {
  const onClick = text => {
    console.log(text)
  }

  return (
    // 이 부분은 npm run lint:fix로 자동 수정이 가능할 것이다. 
    // ESLint가 자동수정 가능한 항목은 https://eslint.org/docs/latest/rules/에서 확인할 수 있다.
    <div className="App">
      <div
        onClick={() => {
          onClick("Hello React!")
        }}
        style={{ color: 'gray' }}
      >
        Hello React!
      </div>
    </div>
  )
}