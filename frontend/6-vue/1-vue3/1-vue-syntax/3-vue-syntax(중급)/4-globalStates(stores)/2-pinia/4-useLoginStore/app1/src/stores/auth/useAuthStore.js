import { defineStore } from "pinia"
import users from "@/data/users.json"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: null,
    authError: null,
  }),
  actions: {
    login(username, password) {
      const user = users.find(
        (u) => u.username === username && u.password === password
      )
      if (user) {
        this.isAuthenticated = true
        this.user = user
        this.authError = null
        localStorage.setItem("auth", JSON.stringify(this.$state))
      } else {
        this.isAuthenticated = false
        this.user = null
        this.authError = "Invalid username or password"
      }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      this.authError = null
      localStorage.removeItem("auth")
    },
    loadAuth() {
      const authData = localStorage.getItem("auth")
      if (authData) {
        Object.assign(this.$state, JSON.parse(authData))
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    authError: (state) => state.authError,
    user: (state) => state.user,
  },
})
