<template>
  <h1>Fade</h1>
  <button @click="toggle">Toggle</button>
  <transition 
    name="fade"
    @before-enter="handleBeforeEnter"
    @enter="handleEnter"
    @after-enter="handleAfterEnter"
    @before-leave="handleBeforeLeave"
    @leave="handleLeave"
    @after-leave="handleAfterLeave"
  >
    <HelloWorld v-if="isOpen" />
  </transition>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}

/**
 * Transition Hook 함수의 파라미터
 * el : element (= 대상이 되는 DOM을 의미)
 * done : transition이 끝나면 true를 반환
 *  */ 
const handleBeforeEnter = (el, done) => {
  alert('before enter')
}
const handleEnter = (el, done) => {
  alert('enter')
  // 완료시점을 알기 위해서, 전환의 기간이 끝나면 done 콜백을 호출해서 AfterEnter로 넘어갈 수 있도록 한다.
  el.addEventListener('transitionend', done)
}
const handleAfterEnter = (el, done) => {
  alert('after enter')
}
const handleBeforeLeave = (el, done) => {
  alert('before leave')
}
const handleLeave = (el, done) => {
  alert('leave')
  // 완료시점을 알기 위해서, 전환의 기간이 끝나면 done 콜백을 호출해서 AfterLeave로 넘어갈 수 있도록 한다.
  el.addEventListener('transitionend', done)
}
const handleAfterLeave = (el, done) => {
  alert('after leave')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
