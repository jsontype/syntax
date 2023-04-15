import React from "react"
import "./style.css"

export default function Hello() {
  const name = "Yang"
  const hello = () => {
    console.log("hello")
  }

  return (
    <div className="hello">
      <div>{name}</div>
      <button onClick={hello}>클릭</button>
    </div>
  )
}
