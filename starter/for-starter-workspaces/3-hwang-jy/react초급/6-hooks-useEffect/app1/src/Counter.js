import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)

    // Vue2 Life Cycle : Created - Updated - Mounted - Destroyed
    // React Life Cycle : Created - Updated - Mounted - Unmounted

    useEffect(() => { 
        alert('Created') // Deps가 빈 배열이면 Created 시점
        return () => { alert('Unmounted') } // Deps가 빈 배열인데 return에다 "함수형 업데이트된" 함수를 넣으면 Unmounted 시점
    }, []) 
    
    useEffect(() => { alert('Updated') }, [number]) // Deps안의 변수가 Updated 된 시점

    const onIncrease = () => {
        setNumber(number + 1)
    }

    const onDecrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
