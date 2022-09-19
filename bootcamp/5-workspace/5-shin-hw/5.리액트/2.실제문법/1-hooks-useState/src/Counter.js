import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const onIncrease = () => { setCount(count + 1) }
    const onDecrease = () => { setCount(count - 1) }

    return (
        <div>
            <div>{count}</div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
      )
}

// onIncrease는 +를 나타낼때 onDecrease는 -를 나타낼 때
