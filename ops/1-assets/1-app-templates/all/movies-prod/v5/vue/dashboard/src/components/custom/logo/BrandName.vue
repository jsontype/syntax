<template>
  <span class="text-primary text-uppercase">{{ appName }}</span>
</template>
<script setup>
import { computed } from 'vue';
import { useSetting } from '@/store/pinia';
const store = useSetting();
const appName = computed(() => store.app_name_value)
</script>
