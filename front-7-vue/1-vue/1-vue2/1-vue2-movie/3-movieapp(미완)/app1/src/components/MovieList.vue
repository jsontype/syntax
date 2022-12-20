<template>
  <div>
    <h2>{{ title }}</h2>

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
    this.$store.dispatch('FETCH_MOVIE')
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
