<template>
  <div class="app">
    <Computed />
    <NoComputed1 />
    <NoComputed2 />
    <Watch />
    <WatchForm />
    <LifeCycle />
  </div>
</template>

<script setup lang="ts">
import NoComputed1 from '@/components/reactive/NoComputed1.vue'
import NoComputed2 from '@/components/reactive/NoComputed2.vue'
import Computed from '@/components/reactive/Computed.vue'
import Watch from '@/components/reactive/Watch.vue'
import WatchForm from '@/components/reactive/WatchForm.vue'
import LifeCycle from '@/components/reactive/LifeCycle.vue'
</script>

<style scoped>
.app {
  margin-bottom: 50px;
}
</style>
