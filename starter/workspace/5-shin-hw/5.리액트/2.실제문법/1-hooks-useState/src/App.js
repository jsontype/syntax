import React, { useState } from 'react'
import Counter from './Counter'

export default function App() {
  const [isCounter, setIsCounter] = useState(false)
  const onClick = () => { setIsCounter(!isCounter) }

  return (
    <>
      <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
      { isCounter && <Counter /> }
    </>
  )
}

// !는 반대의 성향을 가지고 싶을때 작성
// setIsCounter은 변수
