<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img :src="movie.large_cover_image" width="300px" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';

const movies = ref([]);

onMounted(() => {
  fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(json => {
      movies.value = json.data.movies;
      console.log(movies.value)
    })
});

onUpdated(() => {
  console.log(`更新された！`);
});

onBeforeUnmount(() => {
  console.log(`死んだ！`);
});
</script>
