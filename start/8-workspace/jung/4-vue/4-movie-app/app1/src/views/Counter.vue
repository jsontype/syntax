<template>
  <h1>Counter App</h1>
  <p>count: {{ count }}</p>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from 'vue'

interface Props {
  msg?: string;
}
withDefaults(defineProps<Props>(), {
  msg: 'Hello Vue!'
})

// state = ref
// setState(...) = (ref.value = ...)
const count = ref(0)

const increase = () => {
  count.value++
}

const decrease = () => {
  count.value--
}
</script>

<style scoped>
</style>
