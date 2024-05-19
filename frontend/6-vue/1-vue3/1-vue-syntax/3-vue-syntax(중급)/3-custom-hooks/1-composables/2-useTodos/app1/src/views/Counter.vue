<template>
  <h1>Counter App</h1>
  <div>
    <h2>카운트: {{ count }}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increase, decrease } = useCounter()
</script>
