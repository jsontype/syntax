<template>
  <div>
    X: {{ x }}, Y: {{ y }}
  </div>
</template>

<script setup>
import { useMousePosition } from '@/composables/useMousePosition';

const { x, y } = useMousePosition();
</script>
