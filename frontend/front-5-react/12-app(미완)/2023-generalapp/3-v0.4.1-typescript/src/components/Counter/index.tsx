import './style.css'

type CounterProps = {
  count: number,
  setCount: (count: number) => void,
}

export default function Counter ({ count, setCount }: CounterProps) {
  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="countLabel">{count}</div>
      <button className="countBtn" onClick={onIncrease}>+</button>
      <button className="countBtn" onClick={onDecrease}>-</button>
    </>
  )
}
