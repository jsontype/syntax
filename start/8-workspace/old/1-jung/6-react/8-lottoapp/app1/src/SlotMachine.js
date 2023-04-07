import React, { useState } from "react"
import "./SlotMachine.css"
import LottoGenerator from "./Lotto.js"

const SlotMachine = () => {
  const [numbers, setNumbers] = useState([])

  const handleGenerate = () => {
    // 새로운 숫자 배열 생성
    const newNumbers = Array.from({ length: 6 }, () => {
      return <LottoGenerator />
    })
    setNumbers(newNumbers)
  }

  return (
    <div className="lotto-machine">
      <div className="numbers">{numbers[0]}</div>
      <button onClick={handleGenerate}>추첨</button>
    </div>
  )
}

export default SlotMachine
