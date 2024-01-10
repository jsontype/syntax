<template>
  <HelloWorld msg="Hello" />
  <GlobalHelloWorld msg="Vue3" />
  <NoRef />
  <Ref />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import NoRef from '@/components/reactive/NoRef.vue'
import Ref from '@/components/reactive/Ref.vue'
</script>

<style scoped>
</style>
