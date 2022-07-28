import React, { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1) // 함수형 업데이트 전 : setNumber(number + 1)
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1) // 함수형 업데이트 전 : setNumber(number - 1)
    }

    return (
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </div>
    )
}
