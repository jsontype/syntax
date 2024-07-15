<template>
  <a class="text-primary d-flex align-items-center lh-lg mt-4 text-decoration-none" href="#">
    <i :class="`${className} fa-xl me-2 lh-lg`"></i>
    <h5 class="fw-bold mt-2 ms-2 lh-lg">{{ name }}</h5>
  </a>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' },
  name: { type: String, default: '' },
});
</script>
