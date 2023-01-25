<template>
  <div>
    뉴스 상세 페이지
    <div v-if="!newsDetail">Loading...</div>
    <div v-else>
      <ul>      
        <li>id: {{ newsDetail.id }}</li>
        <li>points: {{ newsDetail.points }}</li>
        <li>title: {{ newsDetail.title }}</li>
        <li>content: {{ newsDetail.content }}</li>
        <li>user: {{ newsDetail.user }}</li>
        <li>
          comment:
          <ul>
            <li v-for="item in newsDetail.comments" :key="item.id">
              {{ item.user }} : {{ item.content }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      newsDetail () {
        return this.$store.state.newsDetail
      }
    },
    created() {
      this.$store.dispatch('FETCH_NEWS_DETAIL', this.$route.params.id)
    }
  }
</script>
