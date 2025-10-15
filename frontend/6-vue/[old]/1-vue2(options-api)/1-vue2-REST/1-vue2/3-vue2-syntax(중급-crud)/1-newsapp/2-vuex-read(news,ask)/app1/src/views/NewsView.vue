<template>
  <div>
    뉴스 페이지
    <ul v-if="news.length > 0">
      <li
        v-for="item in news"
        :key="item.id"
      >
        {{ item.title }}
      </li>
    </ul>
    <div
      v-else
      class="red"
    >Loading...</div>
  </div>
</template>

<script>
export default {
  computed: {
    news () {
      return this.$store.state.news
    }
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>
.red {
  color: red;
  font-size: 200px;
}
</style>
