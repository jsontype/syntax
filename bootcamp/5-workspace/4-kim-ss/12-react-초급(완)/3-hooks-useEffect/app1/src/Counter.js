import React, { useState, useEffect } from 'react'

export default function Counter () {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(number + 1) 
    }

    const onDecrease = () => {
        setNumber(number - 1)
    }

    // useEffect(함수, DEPS)
    useEffect(() => { console.log('카운터 앱이 열렸습니다!') }, []) // mount 시점
    useEffect(() => { console.log('숫자가 바뀌었습니다. : ', number) }, [number]) // update 시점
    useEffect(() => { return () => { console.log('카운터 앱이 닫혔습니다!') } }, []) // unmount 시점

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}
