export function useCounter() {
  function increase(count: number) {
    count++
  }

  function decrease(count: number) {
    if (count > 0) {
      count--
    }
  }

  return { increase, decrease }
}
