import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const onIncrease = () => { setCount(count + 1) }
    const onDecrease = () => { setCount(count - 1) }

    // Deps가 빈 배열이면, Created 시점에서 실행
    useEffect(() => { alert('Created') }, [])
    
    // Deps 배열 : Watch(감시) 당하고 있다가, 해당 배열 안의 변수가 바뀌면, Updated 시점에서 실행
    useEffect(() => { alert('Updated') }, [count])

    // Deps가 빈 배열이면서, 리턴 안에 "함수형 업데이트된" 함수가 들어있으면 Unmounted 시점에서 실행
    useEffect(() => { return () => { alert('Unmounted') } }, [])

    return (
        <div>
            <div>{count}</div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
      )
}
