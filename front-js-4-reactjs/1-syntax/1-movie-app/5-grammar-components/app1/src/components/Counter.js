import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={addCount}>
            Click {count}
        </button>
    )
}

export default Counter // 다른 곳에서 import를 허용한다는 뜻
