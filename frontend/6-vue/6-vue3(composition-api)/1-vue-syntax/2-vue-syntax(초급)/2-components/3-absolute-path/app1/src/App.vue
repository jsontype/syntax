<template>
  <HelloWorld :id=1 msg="Hello" username="vue" mark="!" :secondary="false" hover @click="click()" />
  <HelloWorld :id=2 msg="Hi" secondary />
  <GlobalHelloWorld msg="Vue3" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

const click = () => {
  alert('clicked')
}
</script>

<style scoped>
</style>
