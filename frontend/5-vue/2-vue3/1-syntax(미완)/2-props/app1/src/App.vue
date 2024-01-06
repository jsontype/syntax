<template>
  <HelloWorld msg1="Hello" msg2="Vue3" :on-click="onClick" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

function onClick() {
  console.log('clicked')
}
</script>

<style scoped>
</style>
