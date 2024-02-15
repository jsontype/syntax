<template>
  <div class="app">
    Hello {{ name }}!
  </div>
</template>

<script>
export default {
  name: 'App',
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