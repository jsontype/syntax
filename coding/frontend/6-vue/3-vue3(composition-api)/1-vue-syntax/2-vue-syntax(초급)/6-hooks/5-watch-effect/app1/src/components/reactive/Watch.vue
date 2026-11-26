<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
// 첫번째 인자는 watch할 대상이 되는 변수, 두번째 인자는 watch하는 대상이 바뀌었을 때 실행할 함수
const stop = watch(count, (newValue, oldValue) => {
  console.log(`count가 ${oldValue}로부터 ${newValue}로 바뀜`)
})
</script>

<template>
  <h1>Watch</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
</template>
