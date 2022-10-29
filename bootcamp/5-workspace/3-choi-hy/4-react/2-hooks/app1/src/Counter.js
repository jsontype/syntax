import React, { useState, useEffect } from 'react'

export default function Counter () {
    const [number, setNumber] = useState(0) // 3
    
    // useEffect(() => { }, []) // Deps 배열 빈배열 : mounted 시점
    // useEffect(() => { }, [number]) // Deps 배열에 state 변수있음 : 해당 변수의 updated 시점
    // useEffect(() => { return () => { } }, []) // Deps 배열 빈배열, 함수를 리턴 : unmounted 시점

    // useEffect(() => { console.log('mounted 됐음') }, []) // Deps 배열 빈배열 : mounted 시점
    // useEffect(() => { console.log('updated 됐음: ', number) }, [number]) // Deps 배열에 state 변수있음 : 해당 변수의 updated 시점
    // useEffect(() => { return () => { console.log('unmounted 됐음') } }, []) // Deps 배열 빈배열, 함수를 리턴 : unmounted 시점
    
    useEffect(() => {
        console.log('mounted 됐음') // 4
        return () => { console.log('unmounted 됐음') } // 9
    }, [])

    useEffect(() => {
        console.log('updated 됐음: ', number) // 7
    }, [number])

    const onIncrease = () => { setNumber(number => number + 1) } // 6
    const onDecrease = () => { setNumber(number => number - 1) }
        
    return (
        <div>
            <h1>{number}</h1>
            {/* 5 */}
            <button onClick={onIncrease}>+</button> 
            <button onClick={onDecrease}>-</button>
        </div>
    )
}
