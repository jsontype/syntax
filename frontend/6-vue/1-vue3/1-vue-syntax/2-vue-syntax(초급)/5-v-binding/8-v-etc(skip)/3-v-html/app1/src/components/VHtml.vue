<template>
  <div>
    <h1>V-Html</h1>
    <div v-html="text1"></div>
    <div>{{ text2 }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text1 = ref('<p>This is <strong>dynamic HTML</strong> content.</p>'); // v-html이므로 <strong>이 강조됨.
const text2 = ref('<p>This is <strong>normal</strong> content.</p>'); // v-html이 아니므로 <strong>이 그대로 출력됨.
</script>

<style scoped>
</style>
