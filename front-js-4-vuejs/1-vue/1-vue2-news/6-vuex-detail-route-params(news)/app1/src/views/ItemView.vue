<template>
  <div>
    ItemView 페이지 <br>
    <div v-if="!newsDetailResult">Loading...</div>
    <div v-else>
      번호 {{ newsDetailResult.id }} /
      평점 {{ newsDetailResult.points }}점
      <hr>
      <h2>{{ newsDetailResult.title }}</h2>
      <hr>
      <ul>
        <li
          v-for="item in newsDetailResult.comments"
          :key="item.id"
        >
          ID: {{ item.user }}
          <span v-html="`${item.content}`" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    newsDetailResult () {
      console.log('this.$store.state.newsDetail: ', this.$store.state.newsDetail)
      return this.$store.state.newsDetail
    }
  },
  created () {
    this.$store.dispatch('FETCH_NEWS_DETAIL', this.$route.params.id)
  }
}
</script>