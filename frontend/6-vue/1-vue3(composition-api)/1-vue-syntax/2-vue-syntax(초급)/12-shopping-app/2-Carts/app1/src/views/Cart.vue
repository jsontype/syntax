<template>
  <div>
    <h1>장바구니</h1>
    <div v-if="!isLogin">
      <NoLogin />
    </div>
    <div v-else-if="!cartItem.length">
      <p>장바구니가 비어 있습니다.</p>
    </div>
    <div v-else>
      <hr />
      <div v-for="item in cartItem" :key="item.id">
        <p>제품번호: {{ item.id || '정보없음' }}</p>
        <p>가격: {{ item.price }}</p>
        <p>수량: {{ item.count }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import NoLogin from '@/components/NoLogin.vue'

const isLogin = ref(localStorage.getItem('isAuth') === 'true')

const store = useStore()
const cartItem = computed(() => store.state.cartItem)
</script>

<style scoped>
</style>
