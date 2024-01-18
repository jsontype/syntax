<template>
  <div>
    <h1>Watch: 폼 Validation 처리</h1>
    <form>
      <input type="text" placeholder="성함을 입력해주세요" v-model="username" />
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const username = ref('')
const stop = watch(username, (newValue, oldValue) => {
  if (newValue.length > 10) {
    alert('10글자 이상은 입력할 수 없습니다.')
    username.value = oldValue
    return
  }
})
</script>

<style lang="scss" scoped>
</style>
