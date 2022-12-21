<template>
  <div>
    <h2>{{ title }}</h2>

    <!-- 무비리스트화면 -->
    <div v-if="movies.length > 0">
      <div class="movie" v-for="item in movies" :key="item.id">
        <a class="movieTitle" :href="item.url">{{ item.title }}</a>
        <img class="movieImage" :src="item.large_cover_image" />
      </div>
    </div>

    <!-- 로딩화면 -->
    <div v-else class="red">
      로딩중...
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  // 메소드 : computed(값을 캐싱하는 함수) - watch(특정변수가 변할 때 실행) - methods(함수)
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  watch: {},
  methods: {},
  // 라이프사이클 : created - updated - mounted - destroyed
  // 모든 라이프사이클 : beforeCreate - created - beforeUpdate - updated - beforeMount - mounted - beforeDestory - destroyed
  created() {
    // ★★ this.$store.dispatch() : 정해진 vuex store 함수 호출 방법이다. actions, mutations로 생성된 store 함수를 불러온다.
    this.$store.dispatch('FETCH_MOVIE') // $store.dispatch를 하면 store 폴더안의 actions, mutations를 거쳐서,
    console.log(this.$store.state.movies) // $store.state.movies에 들어온다.
  },
  updated() { },
  mounted() { },
  destroyed() { },
}
</script>

<style scope>
.red {
  color: red;
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
