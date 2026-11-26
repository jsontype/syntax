import { useStore } from "vuex"

export function useCounter() {
  const store = useStore()

  const increase = () => store.dispatch("counter/increase")
  const decrease = () => store.dispatch("counter/decrease")

  return { increase, decrease }
}
