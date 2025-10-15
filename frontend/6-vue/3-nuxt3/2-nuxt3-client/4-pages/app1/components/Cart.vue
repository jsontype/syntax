<template>
  <div>
    <div>수량: {{ count }}</div>
    <div>가격: {{ count * price }}</div>
    <button @click="onIncrease">+</button>
    <button @click="onDecrease">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  price: Number
})

const count = ref(0)

const onIncrease = () => {
  count.value += 1
}

const onDecrease = () => {
  if (count.value > 0) {
    count.value -= 1
  }
}
</script>
