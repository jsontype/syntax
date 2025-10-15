<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
// computed된 변수를 정의해두면, count 값이 바뀔 때마다 자동으로 doubleCount 값도 바뀐다.
const doubleCount = computed(() => count.value * 2)

// count.value의 값이 바뀌면 미리 장전(=계산)되기 때문에, doubleCount 마법을 발사하는 경우에는
// 아래에서는 장전(=계산)이 필요없게 된다.
const increment = () => {
  count.value++
}
</script>

<template>
  <h1>Computed</h1>
  <p>Count: {{ count }}</p>
  <p>Double Count: {{ doubleCount }}</p>
  <button @click="increment">Increment</button>
</template>
