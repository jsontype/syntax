<template>
  <!-- 상황 : 물티슈 한 팩에 100엔이다. 3팩마다 배송료는 300엔이다. 12팩까지 구입이 가능하다. -->
  <div>
    <div>
      <img :src="img" width="150px" alt="Wet Tissue" />
    </div>

    <button v-if="count <= 12" @click="increase">+</button>    
    <button v-else>+</button>
    <button v-if="count !== 0" @click="decrease">-</button>
    <button v-else>-</button>

    <h2 v-if="count <= 12">Count: {{ count }}</h2>
    <h2 v-if="count <= 12">Price: {{ count * price }}</h2>

    <h2 v-if="count > 12">죄송합니다. 1명당 12팩까지만 구입이 가능합니다.</h2>
    <h2 v-else-if="count > 9">배송료: ￥1200</h2>
    <h2 v-else-if="count > 6">배송료: ￥900</h2>
    <h2 v-else-if="count > 3">배송료: ￥600</h2>
    <h2 v-else>배송료: ￥300</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img from '@/assets/wet-tissue.png'

const count = ref(0)
const price = ref(100)
const increase = () => count.value = count.value + 1
const decrease = () => count.value = count.value - 1
</script>

<style scoped>
.btn {
  width: 150px;
  height: 100px;
}
</style>
