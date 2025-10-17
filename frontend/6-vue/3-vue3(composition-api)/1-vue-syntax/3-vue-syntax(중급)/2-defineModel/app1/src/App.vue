<template>
  <button @click="isOpen = !isOpen">Toggle</button>
  <HelloWorld v-model="isOpen" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>
