<template>
  <HelloWorld msg="Hello" />
  <GlobalHelloWorld msg="Vue3" />
  <NoRef />
  <Ref />
  <NoReactive />
  <Reactive />
  <Computed />
  <NoComputed1 />
  <NoComputed2 />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import NoRef from '@/components/reactive/NoRef.vue'
import Ref from '@/components/reactive/Ref.vue'
import NoReactive from '@/components/reactive/NoReactive.vue'
import Reactive from '@/components/reactive/Reactive.vue'
import NoComputed1 from '@/components/reactive/NoComputed1.vue'
import NoComputed2 from '@/components/reactive/NoComputed2.vue'
import Computed from '@/components/reactive/Computed.vue'
</script>

<style scoped>
</style>
