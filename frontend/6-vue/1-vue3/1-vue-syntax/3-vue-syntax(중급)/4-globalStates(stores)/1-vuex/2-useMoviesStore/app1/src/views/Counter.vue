<template>
  <h1>Counter App</h1>
  <div>
    <h2>카운트: {{ counterStore.count }}</h2>
    <button @click="counter.increase">+</button>
    <button @click="counter.decrease">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter/useCounterStore"
import { useCounter } from "@/composables/useCounter"

// Hooks
const counterStore = useCounterStore()
const counter = useCounter()
</script>
