<template>
  <div>
    <h1>Movie App</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div id="movies" v-else>
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <a class="movieTitle" :href="movie.url">{{ movie.title }}</a>
        <img
          class="movieImage"
          :src="movie.background_image"
          :alt="movie.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue"
import { useMoviesConnector } from "@/connectors/useMoviesConnector"

// Hooks
const { movies, loading, error, fetchMovies } = useMoviesConnector()

// Lifecycle Hooks
onMounted(() => {
  fetchMovies()
})
</script>

<style lang="css" scoped>
.movieTitle {
  display: block;
}
.movieImage {
  width: 100%;
  height: auto;
}
</style>
