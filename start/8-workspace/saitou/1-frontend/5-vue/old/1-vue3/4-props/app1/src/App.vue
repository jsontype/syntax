<template>
  <Header />
  <button @click="clickToggle()">Toggle</button>
  <div v-if="isOpen">
    <HelloWorld :id="1" msg="Hello Vue" mark="!" language="en" />
    <HelloWorld :id="2" msg="Hello Vue" mark="!" language="en" secondary />
    <HelloWorld :id="3" msg="Hello Vue" mark="!" language="en" hover />
    <HelloWorld :id="4" msg="こんにちは Vue" mark="!" language="ja" hover @click="click()" />
    <HelloWorld :id="4" msg="こんにちは Vue" mark="!" language="ja" hover isOpen />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const isOpen = ref(false)

const click = () => {
  alert('click')
}

const clickToggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
</style>
