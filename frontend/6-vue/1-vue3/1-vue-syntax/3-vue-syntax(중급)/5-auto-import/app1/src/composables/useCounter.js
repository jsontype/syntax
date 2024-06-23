import { useCounterStore } from "@/stores/counter/useCounterStore"

export function useCounter() {
  const counterStore = useCounterStore()

  const increase = () => counterStore.increase()
  const decrease = () => counterStore.decrease()

  return { increase, decrease }
}
