import { computed } from "vue"
import { useStore } from "vuex"

export function useCounterStore() {
  const store = useStore()
  const count = computed(() => store.getters["counter/count"])

  return {
    count,
  }
}
