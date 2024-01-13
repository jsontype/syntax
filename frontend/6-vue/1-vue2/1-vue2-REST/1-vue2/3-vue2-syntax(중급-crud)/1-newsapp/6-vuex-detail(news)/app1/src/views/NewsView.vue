<template>
  <div>
    뉴스 페이지<br>
    <input
      type="text"
      v-model="id"
      placeholder="id"
    /><br>
    <input
      type="text"
      v-model="title"
      placeholder="title"
    /><br><br>
    <button @click="add">추가</button>
    <ul v-if="news.length > 0">
      <li
        v-for="item in news"
        :key="item.id"
      >
        <!-- API 주소 예시 : https://api.hnpwa.com/v0/item/30329752.json -->
        <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
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
  data () {
    return {
      id: null,
      title: null,
    }
  },
  computed: {
    news () {
      return this.$store.state.news
    }
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  },
  methods: {
    add () {
      const data = {
        id: this.id,
        title: this.title,
      }
      this.$store.commit('ADD_NEWS', data)
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
  font-size: 200px;
}
</style>
