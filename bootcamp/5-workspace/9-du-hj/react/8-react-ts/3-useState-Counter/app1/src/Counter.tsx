import { useState } from 'react'

export default function Counter() {
    // const [number, setNumber] = useState<number | null>(null) // null, undefined를 허용하고 싶을 때는 generics로 타입 정의 필수
    const [number, setNumber] = useState<number>(0)

    const onIncrease = () => setNumber(number + 1)
    const onDecrease = () => setNumber(number - 1)

    return (
        <div>
            <div>{number}</div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}
