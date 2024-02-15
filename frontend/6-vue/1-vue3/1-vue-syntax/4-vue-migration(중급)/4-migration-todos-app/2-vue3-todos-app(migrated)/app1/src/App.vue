<template>
  <div>
    <button @click="toggle">Toggle</button>
    <div v-if="isOpen">
      <!-- <TodoApp /> -->
      <TodoAppReactive />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import TodoApp from './components/TodoApp.vue';
import TodoAppReactive from './components/TodoAppReactive.vue';

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>
