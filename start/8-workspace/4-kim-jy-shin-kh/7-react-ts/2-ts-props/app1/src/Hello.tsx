import React from 'react'

type HelloProps = { 
  name: string, 
  age?: number,
  marker: string
}

export default function Hello({ name, marker, age }: HelloProps) {
  return (
    // Fragment를 사용해서 멀티태그를 허용하자: <></>
    <>
      <div>Hello, {name} {marker}</div>
      { age && <div>당신은 {age}세이군요.</div> }
    </>
  )
}

// 프롭의 기본값 처리
Hello.defaultProps = {
  marker: '!'
}
