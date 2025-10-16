<template>
  <div>
    <h1 v-text="text1"></h1>
    <p v-text="text2"></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text1 = ref('V-Text');
const text2 = ref('이것은 v-text를 사용하여 표시된 메시지이다.');
</script>

<style scoped>
</style>
