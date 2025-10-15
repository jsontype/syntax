<template>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { useStore } from "vuex"

const store = useStore()

const logout = () => {
  store.dispatch("auth/logout")
}
</script>
