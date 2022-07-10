import React, { useState, useEffect } from 'react'

function Counter() {
    // State 선언 : const number = 0
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        // State 변경 : number = number + 1
        setNumber(number + 1)
    }

    const onDecrease = () => {
        // State 변경 : number = number - 1
        setNumber(number - 1)
    }

    // useEffect
    useEffect(() => { 
        console.log('Created') // 컴포넌트가 시작될 때 실행
        return () => { console.log('Unmounted') } // 컴포넌트가 사라질 때 실행
    }, []) // [] Deps : 바뀌는지 감시하는 부분. 빈 배열이면 Created, Unmounted(리턴값 내부) 시점을 의미.

    useEffect(() => { console.log('Updated(number): ', number) }, [number]) // [] Deps : 바뀌는지 감시하는 부분

    return (    
        <>
            <h1>Counter</h1>
            <h3>{number}</h3>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter
