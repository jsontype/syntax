import React, { useState } from 'react'

// 아래에 props 추가
const Counter = (props) => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    
    const text = props.click || 'Click' // props.click이 있는 경우에는 props.click으로, 없는 경우에는 'Click'으로 출력하란 뜻

    return (
        <button onClick={addCount}>
            {text} {count}
        </button>
    )
}

export default Counter // 다른 곳에서 import를 허용한다는 뜻
