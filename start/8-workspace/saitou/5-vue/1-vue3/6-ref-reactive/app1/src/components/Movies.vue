<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.title">
        {{ movie.title }} ({{ movie.year }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// number, string, boolean, null, object -> ref
// array -> reactive
const movies = reactive([
  { title: 'Movie 1', year: 2021 },
  { title: 'Movie 2', year: 2022 },
  { title: 'Movie 3', year: 2023 },
  { title: 'Movie 4', year: 2024 },
  { title: 'Movie 5', year: 2025 },
  { title: 'Movie 6', year: 2026 },
  { title: 'Movie 7', year: 2027 },
  { title: 'Movie 8', year: 2028 },
  { title: 'Movie 9', year: 2029 },
  { title: 'Movie 10', year: 2030 },
])
</script>

<style scoped>

</style>
