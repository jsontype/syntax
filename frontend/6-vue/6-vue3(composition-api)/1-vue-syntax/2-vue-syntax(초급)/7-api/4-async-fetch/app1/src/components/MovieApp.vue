<template>
  <div>
    <h1>Movie App</h1>
    <div id="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <a class="movieTitle" :href="movie.url">{{ movie.title }}</a>
        <img class="movieImage" :src="movie.background_image" :alt="movie.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);

async function getMovies() {
  try {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    const data = await response.json()
    movies.value = data.data.movies
    console.log('movies.value: ', movies.value)
  } catch (error) {
    console.error('영화 정보를 불러오는 중 오류 발생:', error)
  }
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
