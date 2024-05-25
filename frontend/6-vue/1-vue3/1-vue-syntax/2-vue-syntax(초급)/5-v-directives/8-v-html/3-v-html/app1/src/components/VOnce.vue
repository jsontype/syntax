<template>
  <div>
    <h1>V-Once</h1>
    <p v-once>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <button @click="onClick">내용 업데이트</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text1 = ref('이 헤더는 한 번만 렌더링됩니다.')
const text2 = ref('이 문장은 Vue의 반응 시스템에 의해 업데이트될 수 있다.')
const onClick = () => {
  text1.value = '내용이 업데이트 되었다.' // v-once가 걸려있고, 한번 렌더링된 태그이므로 업데이트 되지 않는다.
  text2.value = '내용이 업데이트 되었다.'
}
</script>

<style scoped>
</style>
