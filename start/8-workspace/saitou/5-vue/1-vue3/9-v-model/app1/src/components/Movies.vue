<template>
  <div>
    <h1>Movies</h1>
    <div v-for="movie in movies" :key="movie.title" class="movieItem">
      <a class="movieTitle" :href="movie.url" target="_blank">{{ movie.title }} ({{ movie.year }})</a>
      <img class="movieImage" :src="movie.large_cover_image" :alt="movie.title" />
      <div class="movieRating">評価：{{ movie.rating }} / 10</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Types
interface Movie {
  title: string
  year: number
  url: string
  large_cover_image: string
  rating: number
}
const movies = ref<Movie[]>([])

onMounted(() => {
  fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => {
      movies.value = json.data.movies
    })
})
</script>

<style scoped>
.movieItem {
  margin-bottom: 20px;
}

.movieTitle {
  font-size: 20px;
  color: gray;
  text-decoration: none;
}

.movieTitle:hover {
  color: pink;
}

.movieImage {
  display: block;
  width: 50px;
}

.movieRating {
  color: gray;
}
</style>
