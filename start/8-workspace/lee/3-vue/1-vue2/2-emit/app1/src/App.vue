<template>
  <div id="app">
    <HelloWorld lang="en" msg="Hello" :name="name" :mark="mark" @update-name="updateName" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'Vue2',
      mark: '!'
    }
  },
  methods: {
    updateName(name) {
      this.name = name
    }
  }
}
</script>

<style>
#app {
  margin: 20px;
}
</style>
