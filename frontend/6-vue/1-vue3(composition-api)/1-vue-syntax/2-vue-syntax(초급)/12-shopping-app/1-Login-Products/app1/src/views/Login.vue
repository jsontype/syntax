<template>
  <div>
    <h1>Login</h1>

    <NoLogin v-if="!isLogin" />

    <form @submit="onSubmit">
      <input v-if="!isLogin" class="input" type="email" v-model="id" placeholder="email를 입력해주세요."/>
      <input v-if="!isLogin" class="input" type="password" v-model="pw" placeholder="password를 입력해주세요." />
      <input v-if="!isLogin" type="submit" value="로그인" />
      <input v-if="isLogin" type="submit" value="로그아웃" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NoLogin from '@/components/NoLogin.vue'

const id = ref('')
const pw = ref('')
const isLogin = ref(localStorage.getItem('isAuth') === 'true')

function onSubmit (e) {
  e.preventDefault()
  if (isLogin.value === false) {
    if (id.value && id.value === "admin@admin.com" && pw.value && pw.value === "admin") {
      localStorage.setItem('isAuth', 'true')
      isLogin.value = localStorage.getItem('isAuth') === 'true'
    } else {
      alert("아이디와 비밀번호를 확인해주세요.")
    }
  } else {
    localStorage.setItem('isAuth', 'false')
    isLogin.value = localStorage.getItem('isAuth') === 'true'
  }
}
</script>

<style scoped>
.input {
  display: block;
}
</style>
