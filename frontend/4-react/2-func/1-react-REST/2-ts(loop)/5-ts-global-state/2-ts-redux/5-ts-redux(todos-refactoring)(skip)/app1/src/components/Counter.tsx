/* Counter의 프리젠테이셔널 컴포넌트 만들기 */

// props 타입 정의
type CounterProps = {
    count: number
    onIncrease: () => void
    onDecrease: () => void
    onIncreaseBy: (diff: number) => void
}

// 컴포넌트에서 필요한 값과 함수들을 모두 props로 받아온다.
export default function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
}: CounterProps) {
    // 렌더링한다.
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    )
}
