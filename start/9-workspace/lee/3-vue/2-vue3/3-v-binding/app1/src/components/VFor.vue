<template>
  <h1>{{ a }}</h1>
  <button @click="onClick">Toggle</button>
  <img v-if="isOpen" :src="src" @click="onClick"/>
  <img v-else="isOpen" :src="src2" @click="onClick"/>

  <h2>배열 아이템 반복</h2>
  <ul>
    <li v-for="(value, index) in arr" :key="index">arr[{{ index }}]: {{ value }}</li>
  </ul>
  <h2>객체 아이템 반복</h2>
  <ul>
    <li v-for="(value, key) in obj" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<script setup>
import { ref, reactive } from 'vue'

const a = 'Hello'
const src = 'https://picsum.photos/200/300'
const src2 = 'https://picsum.photos/300/200'
const isOpen = ref(false)
const onClick = () => {
  isOpen.value = !isOpen.value
}
const arr = reactive([1, 2, 3])
const obj = reactive({
  id: 'tester',
  pw: 'test1234',
  email: 'test@test.com',
})
</script>

<style scoped>
</style>
