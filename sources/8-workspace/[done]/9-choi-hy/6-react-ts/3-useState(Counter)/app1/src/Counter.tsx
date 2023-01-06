import { useState } from 'react'

export default function Counter() {
    // useState를 사용할 때는 Generics를 사용하여 데이터타입을 설정해도 되고, 초기값으로 데이터타입이 유추되므로 안 해도 된다.
    // 단, state가 null일 수도 있고 아닐수도 있을 때는 Generics를 사용하여 데이터타입을 설정하는 게 좋다.
    // 예를 들면, 이런 느낌이다.
    // type NewsProps = { name: string; description: string }
    // const [news, setNews] = useState<NewsProps | null>(null)

    // Generics를 사용하여 state의 데이터타입을 설정하기
    const [count, setCount] = useState<number>(0)

    const onIncrease = () => setCount(count + 1)
    const onDecrease = () => setCount(count - 1)
    
    return (
        <div>
            <h1>카운터</h1>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
