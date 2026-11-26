<template>
  <div>
    <button @click="toggle">Toggle</button>
    <div v-if="isOpen">
      <CountApp />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountApp from './components/CountApp.vue';

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>
