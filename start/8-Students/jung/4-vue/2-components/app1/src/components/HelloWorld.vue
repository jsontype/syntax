<template>
  <h1 class="gray">{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p :class="hover ? 'hover' : ''" @click="click">
      Hello, I am {{ username }}{{ mark }}.
      <span v-if="secondary">Secondary</span>
    </p>
    <!-- <GlobalHelloWorld /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from 'vue'

interface Props {
  msg?: string;
  username?: string;
  mark?: string;
  secondary?: boolean;
  hover?: boolean;
  click?: () => void;
}
withDefaults(defineProps<Props>(), {
  msg: 'Hello Vue!',
  username: 'Yang',
  mark: '!',
  secondary: false,
  hover: false,
  click: () => {
    alert('Hello!')
  }
})

const count = ref(0)
</script>

<style scoped>
.hover:hover {
  color: red;
}
</style>
