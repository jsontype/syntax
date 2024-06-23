<template>
  <div>
    <form @submit.prevent="handleSubmit" v-if="!isAuthenticated">
      <input type="text" placeholder="username" v-model="username" required />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="authError" style="color: red">{{ authError }}</p>
    <div v-else>
      <span v-if="isAuthenticated">로그인 상태입니다...</span>
      <button v-if="isAuthenticated" @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
// import { ref, computed } from "vue"
import { useAuthStore } from "@/stores/auth/useAuthStore"

const authStore = useAuthStore()
const username = ref("")
const password = ref("")
const authError = computed(() => authStore.authError)
const isAuthenticated = computed(() => authStore.isAuthenticated)

const handleSubmit = () => {
  authStore.login(username.value, password.value)
}

const logout = () => {
  authStore.logout()
}
</script>
