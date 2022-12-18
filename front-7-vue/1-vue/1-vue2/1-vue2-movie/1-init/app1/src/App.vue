<template>
  <div class="app">
    <HelloWorld msg="Hello" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.app {
  margin: 20px;
}
</style>
