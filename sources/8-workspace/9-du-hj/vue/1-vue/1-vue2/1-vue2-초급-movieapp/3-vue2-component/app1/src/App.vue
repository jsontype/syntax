<template>
  <div class="app">
    <HelloWorld :name="name" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: 'Yang',
      lang: 'en',
    }
  }
}
</script>

<style>
.app {
  font-size: 20px;
}
</style>