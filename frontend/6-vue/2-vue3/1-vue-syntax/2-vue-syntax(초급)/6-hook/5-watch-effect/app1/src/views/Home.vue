<template>
  <Computed />
  <NoComputed1 />
  <NoComputed2 />
  <Watch />
  <WatchForm />
  <WatchNoDeep />
  <WatchDeep />
  <WatchEffect />
</template>

<script setup lang="ts">
import Computed from "@/components/reactive/Computed.vue";
import NoComputed1 from "@/components/reactive/NoComputed1.vue";
import NoComputed2 from "@/components/reactive/NoComputed2.vue";
import Watch from "@/components/reactive/Watch.vue";
import WatchForm from "@/components/reactive/WatchForm.vue";
import WatchNoDeep from "@/components/reactive/WatchNoDeep.vue";
import WatchDeep from "@/components/reactive/WatchDeep.vue";
import WatchEffect from "@/components/reactive/WatchEffect.vue";
</script>

<style scoped></style>
