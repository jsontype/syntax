<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="plus">+</button>
    <button @click="minus">-</button>

    <div v-if="count < 0" class="red">
      <p>* 0個以上を選択してください</p>
    </div>
    <div v-else-if="count > 10" class="red">
      <p>* 在庫を超えています</p>
    </div>
    <div v-else>
      <p>在庫があります</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const plus = () => {
  count.value = count.value + 1
}
const minus = () => {
  count.value = count.value - 1
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
