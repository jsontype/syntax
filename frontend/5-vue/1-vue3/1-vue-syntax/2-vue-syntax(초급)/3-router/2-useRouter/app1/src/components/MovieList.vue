<template>
  <h2>Movie List</h2>
  <div>로그인 하셔야 이용할 수 있습니다.</div>
  <button @click="onClick">로그인 하러가기</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const onClick = () => {
  // router.push('/login')
  router.push({ path: '/login', query: { id: 'test', serialNumber: '12345' } })
}
</script>

<style scoped>
</style>
