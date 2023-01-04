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
      name: 'yang',
    }
  }
}
</script>

<style>
.app {
  margin: 20px;
}
</style>
