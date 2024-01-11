<template>
  <div>
    {{ text }}
    <button @click="onClick">Click me</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 뷰에서는 아래처럼 ref 함수로 감싸서 변수를 정의하고, .value로 변경을 해야 
// "변화를 인식하고 이에 반응해서" DOM을 변경할 수 있다.
const text = ref('Hello World')
const onClick = () => {
  text.value = 'Hello Vue 3'
}
</script>

<style lang="scss" scoped>
</style>
