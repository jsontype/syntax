<template>
  <h1>Fade</h1>
  <button @click="toggle">Toggle</button>
  <!-- <transition name="fade"> 여기 이렇게 name 지정해두면 .fade, .fade-enter-active, ... 등의 class랑 자동으로 연결된다. -->
  <transition name="fade" @before-enter="beforeEnter">
    <div v-if="isOpen">
      <HelloWorld />
    </div>
  </transition>
</template>

<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
/* 
  이런 애들을 트랜지션 훅이라고 한다.  
  beforeEnter, beforeLeave, afterEnter, afterLeave, enter, leave 등이 있고,
  enterCancelled, leaveCancelled, beforeEnterCancelled, beforeLeaveCancelled 등도 있다. 
  컴포넌트의 라이프사이클 훅과 비슷한 역할을 트랜지션에서 하는 훅들이라고 보면 된다.
*/
const beforeEnter = () => {
  alert('beforeEnter')
}
</script>

<style scoped>
/*
  &-enter-active 등의 클래스들은 자동으로, transitions에 스타일의 @이벤트함수들과 자동으로 연결된다.
  아래의 이벤트 함수들은 transition의 각 라이프사이클에 대응하여 애니메이션 효과를 적용할 수 있도록 도와준다.

  &-enter: 진입 트랜지션의 시작점
  &-enter-active: 진입 중일 때
  &-enter-to: 진입 트랜지션의 종료점
  &-leave: 퇴장 트랜지션의 시작점
  &-leave-active: 퇴장 중일 때
  &-leave-to: 퇴장 트랜지션의 종료점
*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
