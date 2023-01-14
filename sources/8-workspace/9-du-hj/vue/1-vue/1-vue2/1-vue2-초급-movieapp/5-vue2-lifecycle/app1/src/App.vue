<template>
  <div class="app">
    <HomeView />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue"

export default {
  name: 'App',
  components: {
    HomeView,
  },
}
</script>

<style>
.app {
  font-size: 20px;
}
</style>