export default function UseStateSample2({ count, setCount }) {
  const APP_NAME = "Counter App 2";

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{ APP_NAME }</h2>
      <div>Count: { count }</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
