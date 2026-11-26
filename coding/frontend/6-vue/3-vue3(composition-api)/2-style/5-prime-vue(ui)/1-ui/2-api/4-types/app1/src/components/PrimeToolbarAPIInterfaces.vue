<template>
  <div class="card">
    <Toolbar :pt="passThrough">
      <template #start>
        <Button label="Home" severity="primary" text />
        <Button label="Counter" severity="secondary" text />
        <Button label="Movies" severity="secondary" text />
        <Button label="Todos" severity="secondary" text />
      </template>

      <template #center>
        <span>Interfaces: passThrough를 지정해서 스타일을 바꿨다.</span>
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

// PassThrough
const passThrough = {
  root: {
    class: "custom-toolbar-root",
  },
  start: {
    class: "custom-toolbar-start",
  },
  center: {
    class: "custom-toolbar-center",
  },
  end: {
    class: "custom-toolbar-end",
  },
}
</script>

<style>
.custom-toolbar-root {
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
}

.custom-toolbar-start,
.custom-toolbar-center,
.custom-toolbar-end {
  padding: 10px;
}

.custom-toolbar-center {
  text-align: center;
  flex: 1;
}

.custom-toolbar-end {
  text-align: right;
}
</style>
