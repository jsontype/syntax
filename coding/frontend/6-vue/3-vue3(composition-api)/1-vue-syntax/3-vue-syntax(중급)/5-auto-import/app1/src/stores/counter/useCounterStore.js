import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
})
