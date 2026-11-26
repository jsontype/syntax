<template>
  <div v-if="open">
    <h1>Hello, World!</h1>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'

// Model
// defineModel을 사용하여 v-model prop에 대응하는 값을 아래와 같이 정의한다.
// 이를 통해 부모 컴포넌트와 양방향 데이터 바인딩을 설정할 수 있다.
const open = defineModel({
  type: Boolean,
  default: false,
})

// Model의 간소화 버전
// const open = defineModel<Boolean>() // default가 undefined여도 될 때 쓴다.
// const open = defineModel(false) // type이 명시되지 않았다. ts가 아닐 때 쓴다.
</script>
