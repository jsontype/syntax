import "./App.css"

export default function Counter({ count, setCount }) {
  // JS

  // XML
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}
