<!-- HTML -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <input type="text" :value="userName" @input="updateName"> -->
    <InputField :userName="userName" @update-name="updateName"/>
    <HelloWorld :userName="userName" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<!-- JS -->
<script>
import HelloWorld from './components/HelloWorld.vue'
import InputField from './components/InputField.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputField,
  },
  // 함수 생성
  methods: {
    sayHello() {
      alert('Hello!')
    },
    updateName(text) {
      this.userName = text
    }
  },
  // 변수 생성
  data() {
    return {
      userName: 'Choi'
    }
  },
}
</script>

<!-- CSS -->
<style>
#app { margin: 20px; }
</style>
