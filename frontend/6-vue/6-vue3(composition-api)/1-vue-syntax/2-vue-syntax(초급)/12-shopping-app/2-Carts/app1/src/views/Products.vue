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
        <Counter :price="product.price" @changeCount="changeChildCount" />
        <button class="addToCart" @click="addToCart(product)">장바구니에 담기</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import NoLogin from '@/components/NoLogin.vue'
import Counter from '@/components/Counter.vue'

const products = ref([])
const isLogin = ref(false)
const childCount = ref(0)

const store = useStore()

const cartItem = computed(() => store.state.cartItem)

const changeChildCount = (type) => {
  if (type === "+") {
    childCount.value++
  } else if (type === "-") {
    childCount.value--
  }
}

onMounted(() => {
  isLogin.value = localStorage.getItem('isAuth') === 'true'

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      products.value = data
      console.log(products.value)
    })
})

function addToCart (product) {  
  if (childCount.value > 0) {
    const addToCartArgs = {
      id: product.id,
      count: childCount.value,
      price: product.price
    }
    store.commit('addToCart', addToCartArgs)
    alert('장바구니에 담았습니다.')
  } else {
    alert('수량을 선택해주세요.')
  }
}
</script>

<style scoped>
.addToCart {
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
