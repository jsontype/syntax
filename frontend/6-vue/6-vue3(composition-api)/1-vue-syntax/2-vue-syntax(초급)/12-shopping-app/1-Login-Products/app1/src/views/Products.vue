<template>
  <h1>EC Site</h1>

  <ul>
    <div v-if="!isLogin">
      <h3><NoLogin /></h3>
    </div>
    <li v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
      <p>$ {{ product.price }}</p>
      <p>{{ product.description }}</p>
      <img :src="product.image" :alt="product.title" width="200px"/>
      <div v-if="isLogin">
        <div class="countBtns">
          <button class="counterBtn" @click="add(product.price)">+</button>
          <button class="counterBtn" @click="minus(product.price)">-</button>
        </div>
        <div>수량: {{ count }}</div>
        <div>예상 가격: $ {{ predictedPrice }}</div>
        <button class="addToCart" @click="addToCart(product)">장바구니에 담기</button>
      </div>
    </li>
  </ul>

</template>

<script setup>
import { ref, onMounted } from 'vue'

import NoLogin from '@/components/NoLogin.vue'

const products = ref([])
const isLogin = ref(false)
const count = ref(0)
const predictedPrice = ref(0)

onMounted(() => {
  isLogin.value = localStorage.getItem('isAuth') === 'true'

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      products.value = data
      console.log(products.value)
    })
})

function addToCart () {
  alert('장바구니에 담았습니다.')
}

function add (productPrice) {
  count.value++
  predictedPrice.value = productPrice * count.value
}

function minus (productPrice) {
  count.value > 0 && count.value--
  predictedPrice.value = productPrice * count.value
}
</script>

<style scoped>
.addToCart {
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
}

.countBtns {
  margin-bottom: 10px
}

.counterBtn {
  width: 30px;
}
</style>
