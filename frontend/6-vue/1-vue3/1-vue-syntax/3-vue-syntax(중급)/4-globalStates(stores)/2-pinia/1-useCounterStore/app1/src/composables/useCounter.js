import { ref } from "vue"

export function useCounter() {
  const count = ref(0)

  function increase() {
    count.value++
  }

  function decrease() {
    if (count.value > 0) {
      count.value--
    }
  }

  return { count, increase, decrease }
}
