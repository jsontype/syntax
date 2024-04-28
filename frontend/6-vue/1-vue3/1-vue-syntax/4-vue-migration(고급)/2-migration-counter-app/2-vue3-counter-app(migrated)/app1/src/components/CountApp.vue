<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';

const count = ref(0);

function increase() {
  count.value++;
}

function decrease() {
  count.value--;
}

onMounted(() => {
  console.log(`マウントされた！`);
});

onUpdated(() => {
  console.log(`更新された！: ${count.value}`);
});

onBeforeUnmount(() => {
  console.log(`破棄される前に！`);
});
</script>
