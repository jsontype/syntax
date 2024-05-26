// 3. reducer関数を定義する。
export default function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: { number: state.counter.number + 1 },
      }
    case "DECREMENT":
      return {
        counter: { number: state.counter.number - 1 },
      }
    default:
      return state
  }
}
