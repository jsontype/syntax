<template>
  <div>
    {{ text }}
    <button @click="onClick">Click me</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 뷰에서는 아래처럼 변수를 정의하고 변경하면, 변화를 인식할 수 없다.
let text = 'Hello World'
const onClick = () => {
  text = 'Hello Vue 3'
}
</script>

<style scoped>
</style>
