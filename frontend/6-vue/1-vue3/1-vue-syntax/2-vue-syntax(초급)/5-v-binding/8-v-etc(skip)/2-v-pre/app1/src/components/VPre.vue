<template>
  <div>
    <h1>V-Pre</h1>
    <p v-pre>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <button @click="onClick">내용 업데이트</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text1 = ref('이 헤더는 컴파일되지 않고 그대로 표시됩니다.')
const text2 = ref('이 문장은 Vue에 의해 컴파일되고 처리됩니다.')
const onClick = () => {
  text1.value = '내용이 업데이트 되었다.' // v-pre가 걸려있으므로, {{ text1 }}이 그대로 출력된다.
  text2.value = '내용이 업데이트 되었다.'
}
</script>

<style scoped>
</style>
