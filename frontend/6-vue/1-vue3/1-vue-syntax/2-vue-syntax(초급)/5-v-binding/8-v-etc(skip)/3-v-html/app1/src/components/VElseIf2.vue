<template>
  <!-- 상황 : 물 1병에 50원이다. 5팩마다 배송료는 200엔이다. 15팩까지 구입이 가능하다. -->
  <div>
    <div>
      <img :src="img" width="150px" alt="Wet Tissue" />
    </div>

    <button v-if="count <= 15" @click="increase">+</button>    
    <button v-else>+</button>
    <button v-if="count !== 0" @click="decrease">-</button>
    <button v-else>-</button>

    <h2 v-if="count <= 15">Count: {{ count }}</h2>
    <h2 v-if="count <= 15">Price: {{ count * price }}</h2>

    <h2 v-if="count > 15">죄송합니다. 1명당 15팩까지만 구입이 가능합니다.</h2>
    <h2 v-else-if="count > 10">배송료: ￥600</h2>
    <h2 v-else-if="count > 5">배송료: ￥400</h2>
    <h2 v-else>배송료: ￥200</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img from '@/assets/water.png'

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
