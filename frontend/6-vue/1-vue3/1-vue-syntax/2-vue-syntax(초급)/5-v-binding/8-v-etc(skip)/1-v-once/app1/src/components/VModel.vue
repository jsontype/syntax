<template>
  <div>
    <h2>v-model 양방향 데이터 바인딩</h2>
    <form>
      <input
        type="text"
        id="input-example"
        placeholder="값을 입력하세요"
        v-model="inputValue"
      />
      <p>입력값: {{ inputValue }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>

<style scoped>
</style>
