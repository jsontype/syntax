<script setup>
import { reactive } from 'vue';

// 객체
const arr = reactive([ 1, 2, 3 ]);

// 오브젝트
const obj = reactive({
  id: 'tester',
  pw: 'test1234',
  email: 'test@test.com',
});
</script>

<template>
  <div>
    <h2>배열 아이템 반복</h2>
    <ul>
      <div v-for="(item, index) in arr" :key="item.id">
        <div>arr[{{ index }}]: {{ item }}</div>
      </div>
    </ul>
    <h2>객체 아이템 반복</h2>
    <ul>
      <div v-for="(value, key) in obj" :key="key">
        <div>{{ key }}: {{ value }}</div>
      </div>
    </ul>
  </div>
</template>

<style scoped>
</style>
