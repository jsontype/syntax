<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
// 아래는 둘다 computed 되지 않은 속성을 정의하므로, 반응성이 없다. 초기값으로만 사용 가능하다. 
// 초기값이 0이므로, 계속 NaN이 된다. count 값을 바꿔도 마찬가지이다.
const doubleCount1 = count.value * 2
const doubleCount2 = ref(count.value * 2)

const increment = () => {
  count.value++
}
</script>

<template>
  <h1>No Computed1: 반응성 없음</h1>
  <p>Count: {{ count }}</p>
  <p>Double Count1: {{ doubleCount1 }}</p>
  <p>Double Count2: {{ doubleCount2 }}</p>
  <button @click="increment">Increment</button>
</template>
