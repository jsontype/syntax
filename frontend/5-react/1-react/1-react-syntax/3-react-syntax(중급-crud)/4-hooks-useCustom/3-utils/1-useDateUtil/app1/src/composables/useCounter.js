import { useState } from "react"

export default function useCounter() {
  const [count, setCount] = useState(3)

  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)

  return { count, increase, decrease }
}
