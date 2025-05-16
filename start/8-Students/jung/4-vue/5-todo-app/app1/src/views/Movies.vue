<template>
<div>
    <h1>Movie App</h1>
    <div id="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <a class="movieTitle" :href="movie.url">{{ movie.title }}</a>
        <img class="movieImage" :src="movie.background_image" :alt="movie.title" />
      </div>
    </div>
  </div></template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Movie {
  id: number
  title: string
  url: string
  background_image: string
}

const movies = ref<Movie[]>([])

function getMovies() {
  fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(json => {
      movies.value = json.data.movies
    })
}

onMounted(() => {
  getMovies()
})
</script>

<style scoped>
.movieTitle {
  font-size: 20px;
  color: #1a45e1;
  text-decoration: none;
  display: block;
}
.movieImage {
  width: 200px;
  height: auto;
  margin-top: 10px;
}
</style>
