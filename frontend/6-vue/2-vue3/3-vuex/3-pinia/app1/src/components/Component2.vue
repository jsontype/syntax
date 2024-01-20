<template>
  <div>
    <h1>Components2</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">증가</button>
  </div>
</template>

<script setup>
// 피니아 스토어의 사용
// 1. useCounterStore, computed를 가져온다.
import { useCounterStore } from '@/stores/counterStore'
import { computed } from 'vue'
// 2. useCounterStore를 통해 store를 가져온다.
const counterStore = useCounterStore()
// 3. count 변수(state)를 선언한다. store가 변경되면, 자동으로 count가 변경된다.
const count = computed(() => counterStore.count)
// 4. increment 함수(action)를 선언한다.
const increment = counterStore.increment
</script>
