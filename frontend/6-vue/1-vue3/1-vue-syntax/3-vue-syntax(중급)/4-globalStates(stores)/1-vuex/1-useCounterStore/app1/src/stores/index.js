import { createStore } from "vuex"

import counter from "./counter"

const store = createStore({
  modules: {
    counter,
  },
})

export default store
