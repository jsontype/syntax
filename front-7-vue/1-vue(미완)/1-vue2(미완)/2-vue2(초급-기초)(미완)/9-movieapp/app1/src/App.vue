<template>
  <div class="app">
    <MovieList title="무비앱" />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  }
}
</script>

<style>
.app {
  margin: 20px;
}
</style>
