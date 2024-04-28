<template>
  <NoRef />
  <Ref />
  <NoReactive />
  <Reactive />
</template>

<script setup lang="ts">
import NoRef from '@/components/reactive/NoRef.vue'
import Ref from '@/components/reactive/Ref.vue'
import NoReactive from '@/components/reactive/NoReactive.vue'
import Reactive from '@/components/reactive/Reactive.vue'
</script>

<style scoped>
</style>
