<template>
  <HelloWorld msg1="Hello" :msg2="msg2" :on-click="onClick" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const msg2 = 'Vue3'

function onClick() {
  console.log('clicked')
}
</script>

<style scoped>
</style>
