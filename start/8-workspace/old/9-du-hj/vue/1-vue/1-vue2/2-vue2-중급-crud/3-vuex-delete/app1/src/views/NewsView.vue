<template>
  <div>
    뉴스페이지
    <ul v-if="news.length > 0">
      <li v-for="item in news" :key="item.id">
        {{ item.title }}
        <button @click="deleteNews(item.id)">❌</button>
        </li>
    </ul>
    <div v-else>Loading...</div>
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
  },
  methods:{
    deleteNews (id){
      this.$store.commit("DELETE_NEWS", id)
    }
  }
}
</script>