<template>
  <h1>부모 컴포넌트</h1>
  <!-- 2. do2를 이용해 자식 컴포넌트에 do1을 연결  -->
  <ChildComponent @do2="do1" />
</template>

<script setup>
import { ref } from 'vue'

import ChildComponent from '@/components/ChildComponent.vue'

// 1. 실제 실행하고자 하는 함수 do1을 선언
const do1 = (item) => {
  console.log('파라미터: ', item)
}
</script>
