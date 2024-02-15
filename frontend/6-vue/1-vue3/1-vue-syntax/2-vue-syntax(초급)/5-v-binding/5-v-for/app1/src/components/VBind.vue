<template>
  <div>
    <!-- 데이터 바인딩 -->
    <img v-bind:src="imageURL" alt="Vue Logo" />
    <!-- 축약형 -->
    <img :src="imageURL" alt="Vue Logo" />
  </div>
</template>

<script setup>
const imageURL = 'https://vuejs.org/images/logo.png'
</script>
