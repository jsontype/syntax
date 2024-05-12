<template>
  <div>
    <h1>Todos</h1>

    <button @click="toggle">Toggle</button>

    <div v-if="show">
      <p>Data...</p>
    </div>
    <div v-else>
      <p>Dataが無いです</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)

const toggle = () => {
  show.value = !show.value
}
</script>

<style scoped>

</style>
