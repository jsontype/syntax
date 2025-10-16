<template>
  <h3>자식 컴포넌트</h3>
  <!-- 5. do1 함수를 호출하는 do2 (emit) 함수를 호출하는 do3 함수를 호출한다. -->
  <button @click="do3">호출</button>
</template>

<script setup>
import { defineEmits } from 'vue'

// 3. do2 라는 emit 함수를 호출하기 위해, customEvent 함수를 호출하는 emit를 정의해둔다.
const emit = defineEmits(['do2'])

// 4. emit 함수를 사용해서, customEvent 함수를 호출한다.
const do3 = () => {
  emit('do2', 'Hello Emit!')
}
</script>
