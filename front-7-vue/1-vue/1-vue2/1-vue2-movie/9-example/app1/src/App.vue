<!-- XML -->
<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<!-- JS -->
<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>

<!-- COMMON CSS -->
<style>
#app {
  margin: 20px;
}
</style>
