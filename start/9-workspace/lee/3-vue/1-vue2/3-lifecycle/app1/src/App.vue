<template>
  <div id="app">
    <button @click="toggleOpen">Toggle</button>
    <div v-if="isOpen">
      <CountApp />
    </div>
  </div>
</template>

<script>
import CountApp from './components/CountApp.vue'

export default {
  name: 'App',
  components: {
    CountApp,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style>
#app {
  margin: 20px;
}
</style>
