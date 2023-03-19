import React from "react"
import SlotMachine from "./SlotMachine"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <h1>로또 번호 생성기</h1>
      <SlotMachine />
    </div>
  )
}

export default App
