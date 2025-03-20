<template>
  <router-link class="link" to="/">Home</router-link>
  / 
  <router-link class="link" to="/counter">Counter</router-link>
  <hr />
</template>

<script setup lang="ts">
</script>

<style scoped>
  .link {
    margin: 10px;
    text-decoration: none;
    color: #000;
    padding: 5px 10px;
  }
  .link:hover {
    color: gray;
    border: 1px solid gray;
  }
</style>
