<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = ref(0)

const increment = () => {
  count.value = count.value + 1
  // computed를 사용하지 않고 doubleCount 값을 변경하려면,
  // 매번 직접 계산을 해야 하고, 캐스팅하는 시간이 늘어난다.
  doubleCount.value = count.value * 2
}
</script>

<template>
  <h1>No Computed2: 비효율적 (캐스팅이 매번 발생)</h1>
  <p>Count: {{ count }}</p>
  <p>Double Count: {{ doubleCount }}</p>
  <button @click="increment">Increment</button>
</template>
