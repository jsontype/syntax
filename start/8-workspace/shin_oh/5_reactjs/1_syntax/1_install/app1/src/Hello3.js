import React from 'react'
import './Hello.css';

// Props : 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용. props로 전달된 데이터는 object 타입
// Children : 상위 컴포넌트에서 하위 컴포넌트에서 전달한 데이터 중 컴포넌트 또는 HTML 요소들을 보여주려고 할 때 사용하는 props

export default function Hello3(props) {
  // JS
  console.log("children: ", props.children)

  // XML
  return (
    // children은 단수면 문자열, 복수면 배열
    <div>Hello! {props.children[1]}</div>
  )
}
