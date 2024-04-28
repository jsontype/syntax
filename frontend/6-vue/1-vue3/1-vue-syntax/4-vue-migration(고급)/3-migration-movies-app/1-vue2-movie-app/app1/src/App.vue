<template>
  <div>
    <button @click="onClick">Toggle</button>
    <div v-if="isOpen">
      <MovieApp />
    </div>
  </div>
</template>

<script>
import MovieApp from './components/MovieApp.vue'

export default {
  name: 'App',
  components: {
    MovieApp
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    onClick() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
