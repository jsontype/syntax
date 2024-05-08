<template>
  <div class="card flex justify-content-center flex-wrap gap-3">
      <Button label="Primary" rounded />
      <Button label="Secondary" severity="secondary" rounded />
      <Button label="Success" severity="success" rounded />
      <Button label="Info" severity="info" rounded />
      <Button label="Warning" severity="warning" rounded />
      <Button label="Help" severity="help" rounded />
      <Button label="Danger" severity="danger" rounded />
      <Button label="Contrast" severity="contrast" rounded />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>
