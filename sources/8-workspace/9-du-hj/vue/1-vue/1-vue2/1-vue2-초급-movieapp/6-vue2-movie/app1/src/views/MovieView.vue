<template>
  <div>
    <div v-if="movies.length > 0">
      <div v-for="item in movies" :key="item.id">
        {{ item.title }}
      </div>
    </div>
    
    <div v-else class="red">
      로딩중...
    </div>
  </div>
</template>

<script>
export default {
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
    this.$store.dispatch('FETCH_MOVIE') // vuex
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
</style>
