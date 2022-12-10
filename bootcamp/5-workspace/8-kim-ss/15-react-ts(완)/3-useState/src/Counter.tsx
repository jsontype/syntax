import { useState } from 'react'

export default function Counter() {
    // Generics를 사용하여 state의 데이터타입을 설정하기
    const [count, setCount] = useState<number>(0)

    const onIncrease = () => setCount(count + 1)
    const onDecrease = () => setCount(count - 1)
    
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
