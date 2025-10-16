<template>
  <div>
    <input ref="textArea" type="text" placeholder="여기에 입력하세요" />
    <button @click="focusInput">포커스 주기</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// ref로 input 요소 참조
const textArea = ref<HTMLInputElement | null>(null)

// 버튼 클릭 시 input 필드에 포커스 주기
const focusInput = () => {
  if (textArea.value) {
    textArea.value.focus()
  }
}
</script>

<style scoped>
input {
  margin-right: 10px;
  padding: 5px;
}
button {
  padding: 5px 10px;
}
</style>
