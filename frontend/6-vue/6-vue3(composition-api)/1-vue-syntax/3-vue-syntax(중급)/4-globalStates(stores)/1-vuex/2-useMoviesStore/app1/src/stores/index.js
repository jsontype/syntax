import { createStore } from "vuex"

import counter from "./counter"
import movies from "./movies"

const store = createStore({
  modules: {
    counter,
    movies,
  },
})

export default store
