import React from "react"
import Hello from "components/Hello"

export default function App() {
  const userName: string = "Josh Perez"

  const onClick = (target: string) => {
    alert(`hello! ${target}`)
  }

  return (
    <div className="App">
      <Hello userName={userName} mark={"!"} onClick={onClick} />
    </div>
  )
}
