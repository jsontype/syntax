<template>
  <HelloWorld msg="Hello" />
  <GlobalHelloWorld msg="Vue3" />
  <hr />
  <VBind />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import VBind from '@/components/VBind.vue'
</script>

<style scoped>
</style>
