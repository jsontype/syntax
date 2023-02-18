<template>
  <div>
    뉴스페이지
    <div class="inputField">
      <input type="text" v-model="id" placeholder="id를 입력하세요">
      <input type="text" v-model="title" placeholder="title을 입력하세요">
      <button @click="createNews">추가</button>
    </div>

    <ul v-if="news.length > 0">
      <li v-for="item in news" :key="item.id">
        <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
        <update-news-form :item="item" />
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import UpdateNewsForm from '@/components/UpdateNewsForm.vue'
export default {
  data () {
    return {
      id: null,
      title: null,
    }
  },
  components:{
    UpdateNewsForm
  },
  computed: {
    news () {
      return this.$store.state.news
    }
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  },
  methods:{
    createNews () {
      const data = {
        id: this.id,
        title: this.title,
      }
      this.$store.commit("CREATE_NEWS", data)
      this.resetInput()
    },
    resetInput () {
      this.id = null
      this.title = null
    }
  }
}
</script>

<style scope>
.inputField > input {
  display: block;
}
</style>