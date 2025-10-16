<template>
  <div class="card">
    <Toolbar>
      <template #start>
        <Button label="Home" severity="primary" text />
        <Button label="Counter" severity="secondary" text />
        <Button label="Movies" severity="secondary" text />
        <Button label="Todos" severity="secondary" text />
      </template>

      <template #center>
        <span>Slots: 여기가 center 부분이다</span>
      </template>

      <template #end>
        <Button label="Login" severity="secondary" text />
        <Button label="Join" severity="secondary" text />
      </template>
    </Toolbar>
  </div>
</template>

<script setup>
import Toolbar from "primevue/toolbar"
import Button from "primevue/button"
</script>
