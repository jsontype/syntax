import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)

    // Life Cycle : mounted <-> updated -> unmounted

    // useEffect(() => { 실행문 }, []) // Deps가 빈 배열 : initial mounted 될 때 실행해라.
    // useEffect(() => { 실행문 }, [number]) // Deps에 state 변수가 있을 때 : 해당 state가 updated 될 때 실행해라.
    // useEffect(() => { return () => { 실행문 } }, []) // Deps가 빈 배열이면서 return 값이 함수 : unmounted 될 때 실행해라.

    useEffect(() => { 
        // 컴포넌트 열었을 때 할 일 
        console.log('Initial Mounted')

        return () => {
            // 컴포넌트 닫았을 때 할 일 
            console.log('Unmounted')
        }
    }, [])

    useEffect(() => { console.log('updated --->', number) }, [number])

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
