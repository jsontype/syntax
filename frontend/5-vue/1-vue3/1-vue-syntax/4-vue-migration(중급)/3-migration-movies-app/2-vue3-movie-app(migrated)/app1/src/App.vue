<template>
  <div>
    <button @click="toggle">Toggle</button>
    <div v-if="isOpen">
      <MovieApp />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MovieApp from './components/MovieApp.vue';

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>
