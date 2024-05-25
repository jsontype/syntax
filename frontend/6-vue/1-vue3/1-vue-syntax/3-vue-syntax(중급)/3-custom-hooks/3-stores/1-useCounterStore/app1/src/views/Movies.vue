<template>
  <div>
    <h1>Movie App</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div id="movies" v-else>
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <a class="movieTitle" :href="movie.url">{{ movie.title }}</a>
        <img class="movieImage" :src="movie.background_image" :alt="movie.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useMoviesConnector } from '@/connectors/useMoviesConnector'

// Hooks
// 1. 아래와 같이 desturcturing 문법으로 한번에 변수, 함수들을 export를 해도 된다.
// const { movies, loading, error } = useMoviesConnectors();
// 1. 그러나, 보통은 아래와 같이 담아서 사용한다.
const moviesConnector = useMoviesConnector()

// Computed
const movies = computed(() => moviesConnector.movies)
const loading = computed(() => moviesConnector.loading)
const error = computed(() => moviesConnector.error)

// Lifecycle Hooks
onMounted(() => {
  moviesConnector.fetchMovies()
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
