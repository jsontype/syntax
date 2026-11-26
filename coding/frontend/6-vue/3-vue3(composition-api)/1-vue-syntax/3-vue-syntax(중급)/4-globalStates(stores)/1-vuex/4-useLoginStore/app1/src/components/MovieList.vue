<template>
  <div>
    <div id="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <a class="movieTitle" :href="movie.url">{{ movie.title }}</a>
        <img class="movieImage" :src="movie.background_image" :alt="movie.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const movies = ref([])

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

<style lang="css" scoped>
.movieTitle {
  display: block;
}
</style>
