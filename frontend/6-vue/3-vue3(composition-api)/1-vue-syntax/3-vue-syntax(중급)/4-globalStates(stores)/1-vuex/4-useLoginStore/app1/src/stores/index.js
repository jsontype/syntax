import { createStore } from "vuex"
import counter from "./counter"
import movies from "./movies"
import todos from "./todos"
import auth from "./auth"

const store = createStore({
  modules: {
    counter,
    movies,
    todos,
    auth,
  },
})

// 로컬 스토리지에 로그인 상태 저장
store.subscribe((mutation, state) => {
  if (mutation.type.startsWith("auth/")) {
    localStorage.setItem("auth", JSON.stringify(state.auth))
  }
})

// 앱 시작 시 로그인 상태 복원
const authData = localStorage.getItem("auth")
if (authData) {
  store.commit("auth/LOGIN_SUCCESS", JSON.parse(authData).user)
}

export default store
