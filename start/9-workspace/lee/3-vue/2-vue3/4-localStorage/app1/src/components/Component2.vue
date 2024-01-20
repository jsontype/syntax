<template>
  <div>
    Component2의 현재 값: {{ text }}
    <button @click="onChange">데이터 변경</button>
    <button @click="onLoad">데이터 호출</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')

const onChange = () => {
  // Local Storage 값 저장 (첫번째 인자는 변수명, 두번째 인자는 값)
  localStorage.setItem('globalText', '데이터가 변경됐음 (Component2)')
}

const onLoad = () => {
  // Local Storage 값 호출 (인자는 변수명)
  text.value = localStorage.getItem('globalText')
}
</script>

<style scoped>
</style>
