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
// import { onMounted, computed } from "vue"
import { useMoviesConnector } from "@/connectors/useMoviesConnector"
import { useMoviesStore } from "@/stores/movies/useMoviesStore"

// Hooks
const { fetchMovies, loading, error } = useMoviesConnector()
const moviesStore = useMoviesStore()

// Computed
const movies = computed(() => moviesStore.moviesList)

// Lifecycle Hooks
onMounted(() => {
  if (movies.value.length > 0) return
  fetchMovies()
})
</script>

<style scoped>
.movieTitle {
  display: block;
}
.movieImage {
  width: 100%;
  height: auto;
}
</style>
