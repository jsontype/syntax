<template>
  <div>
    <button @click="onClick">Toggle</button>
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
    CountApp
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
