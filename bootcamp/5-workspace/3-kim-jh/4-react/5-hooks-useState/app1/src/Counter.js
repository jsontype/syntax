import React, { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)

    const onIncrease = () => { setNumber(number + 1) }
    const onDecrease = () => { setNumber(number - 1) }

    return (
        <>
            <div>{number}</div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    )
}
