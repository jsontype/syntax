import React, { useState } from 'react'


const Counter = (props) => {
    const [count, setCount] = useState(0)
    
    const addCount = () => {
        setCount(count + 1)
    }
    
    console.log('props: ', props)
    const text = props.click || 'Click'

    return (
        <button onClick={addCount}>
            {text} {count}
        </button>
    )
}

export default Counter // 다른 곳에서 import를 허용한다는 뜻
