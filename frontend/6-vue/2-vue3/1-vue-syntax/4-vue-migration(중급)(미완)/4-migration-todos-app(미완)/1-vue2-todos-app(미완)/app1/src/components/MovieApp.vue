<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img :src="movie.large_cover_image" width="300px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    }
  },

  // count가 필요 없다면 이 메소드들을 제거
  methods: {},

  created() {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(res => res.json())
      .then(json => {
        this.movies = json.data.movies; // 수정됨
        console.log(this.movies)
      })
  },
  mounted() {
    console.log(`更新された！`)
  },
  updated() {
    console.log(`成長した！: ${this.count}`) // count를 참조하려면 data에 추가해야 함
  },
  destroyed() {
    console.log(`死んだ！`)
  },
}
</script>
