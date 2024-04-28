<template>
  <div>
    <h1>Watch: 경로 변경시의 처리</h1>
    <button @click="noQuery">쿼리 안주고 이동</button>
    <button @click="yesQuery">쿼리 주고 이동</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const noQuery = () => {
  router.push('/watch-route') // = router.push({ path: '/watch-route' })와 같음
}
const yesQuery = () => {
  router.push({ path: '/watch-route', query: { id: 'test', serialNumber: '12345' } })  
}

watch(() => route.path, (newValue, oldValue) => {
  console.log('----------------------------')
  console.log('이전 Path: ', oldValue)
  console.log('현재 Path: ', newValue)
}, { immediate: true })

watch(() => route.query, (newValue, oldValue) => {
  console.log('----------------------------')
  console.log('이전 Query: ', oldValue)
  console.log('현재 Query: ', newValue)
}, { immediate: true })
</script>

<style lang="scss" scoped>
</style>
