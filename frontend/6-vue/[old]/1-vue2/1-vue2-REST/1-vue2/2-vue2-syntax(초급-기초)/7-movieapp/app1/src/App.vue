<template>
  <div class="App">
    <div v-if="movies.length > 0">
      <div class="movie" v-for="item in movies" :key="item.id">
        <a class="movieTitle" :href="item.url">{{ item.title }}</a>
        <img
          class="movieImage" 
          :src="item.background_image" 
          :alt="item.title"
        />
      </div>
    </div>
    
    <div v-else class="red">
      로딩중...
    </div>
  </div>
</template>

<script>
export default {
  // 데이터 : 변수, 프롭스, 컴포넌트
  data () { return { /* id: String */ } },
  component: { /* HelloWorld, */ },
  props: { /* name: String */ },

  // 메소드 : computed(값을 캐싱하는 함수) - watch(특정변수가 변할 때 실행) - methods(함수)
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  watch: {},
  methods: {},
  
  // 라이프사이클 : created - updated - mounted - destroyed
  created() {
    this.$store.dispatch('FETCH_MOVIE') // vuex
  },
  updated() { },
  mounted() { },
  destroyed() { },
}
</script>

<style scoped>
.red {
  color: red;
}

.App {
  padding: 20px;
}

.movie {
  display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
}

.movie .movieImage {
  width: 200px;
}

.movie .movieTitle {
  flex-grow: 1;
  text-decoration: none;
  color: black;  
}

.movie .movieTitle:hover {
  background-color: pink;
}
</style>
