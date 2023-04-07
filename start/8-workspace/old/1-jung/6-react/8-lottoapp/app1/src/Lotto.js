import React from "react"

export default function LottoGenerator() {
  // 1부터 45까지의 숫자 생성
  const numbers = Array.from({ length: 45 }, (_, i) => i + 1)

  // 6개의 숫자 무작위 선택
  const selectedNumbers = []
  while (selectedNumbers.length < 6) {
    const index = Math.floor(Math.random() * numbers.length)
    selectedNumbers.push({ value: numbers[index], id: Math.random() }) // uuid 대신 Math.random()을 사용
    numbers.splice(index, 1)
  }

  // 선택한 숫자 정렬
  selectedNumbers.sort((a, b) => a - b)

  return (
    <div className="lotto-generator">
      {selectedNumbers.map((number) => (
        <div className="lotto-number" key={number.id}>
          {number.value}
        </div>
      ))}
    </div>
  )
}
