<!-- HTML -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="text" :value="userName" @input="updateName">
    <HelloWorld :userName="userName" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<!-- JS -->
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // 변수 생성
  data() {
    return {
      userName: 'Choi'
    }
  },
  // 함수 생성
  methods: {
    sayHello() {
      alert('Hello!')
    },
    updateName(e) {
      this.userName = e.target.value
    }
  }
}
</script>

<!-- CSS -->
<style>
#app { margin: 20px; }
</style>
