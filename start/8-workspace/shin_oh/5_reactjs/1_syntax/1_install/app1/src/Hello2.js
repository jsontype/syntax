import React from 'react'
import './Hello.css';

export default function Hello2(props) {
  // JS
  console.log("props: ", props)

  // XML
  return (
    <div className={props.textColor}>Hello {props.userName}!</div>
  )
}
