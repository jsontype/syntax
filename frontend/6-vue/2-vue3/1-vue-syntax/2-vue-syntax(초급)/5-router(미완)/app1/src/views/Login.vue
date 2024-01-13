<template>
  <div>
    <h1>Login</h1>
    <InputField />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import InputField from '../components/InputField.vue'

const route = useRoute()

console.log('route.path: ', route.path)
console.log('route.query: ', route.query)
</script>

<style lang="scss" scoped>
</style>
