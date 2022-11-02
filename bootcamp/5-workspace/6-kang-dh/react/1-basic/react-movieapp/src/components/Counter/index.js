import React, { useState, useEffect } from 'react'

export default function Counter ({ children }) {
    const [number, setNumber] = useState(0)

    const onIncrease = () => { setNumber(number + 1) }
    const onDecrease = () => { setNumber(number - 1) }

    useEffect(() => { console.log('mounted') }, []) // 열릴 때
    useEffect(() => { console.log('updated: ', number) }, [number]) // 업데이트될 때
    useEffect(() => { return () => { console.log('unmounted') }}, []) // 닫힐 때
    
    return (
        <>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    )
}
