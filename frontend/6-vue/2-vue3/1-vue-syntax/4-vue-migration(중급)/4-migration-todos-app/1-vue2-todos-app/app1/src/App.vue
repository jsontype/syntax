<template>
  <div>
    <button @click="onClick">Toggle</button>
    <div v-if="isOpen">
      <TodoApp />
    </div>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {
    TodoApp
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
