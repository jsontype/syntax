import { createStore } from "vuex"

import counter from "./counter"
import movies from "./movies"
import todos from "./todos"

const store = createStore({
  modules: {
    counter,
    movies,
    todos,
  },
})

export default store
