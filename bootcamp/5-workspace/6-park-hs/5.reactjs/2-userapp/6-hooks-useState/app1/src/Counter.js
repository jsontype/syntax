import React, { useState, useEffect } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1) // 함수형 업데이트 전 : setNumber(number + 1)
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1) // 함수형 업데이트 전 : setNumber(number - 1)
    }

    // Life Cycle : Created -> (Updated -> Mounted) 반복 -> Unmounted

    // useEffect(함수를 리턴하는 함수, Deps) : Deps가 바뀌면, updated 시점에서 함수를 실행한다.
    useEffect(() => { return () => { alert('created') } }, [])

    useEffect(() => { return () => { alert('updated') } }, [number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter