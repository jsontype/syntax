<template>
  <div>
    ask페이지
    <ul v-if="ask.length > 0">
      <li v-for="item in ask" :key="item.id">
        {{ item.title }}
        <button @click="deleteAsk(item.id)">❌</button>
      </li>
    </ul>
    <div v-else>버튼을 누르세요</div>
  </div>
</template>

<script>
export default {
  computed: {
    ask () {
      return this.$store.state.ask
    }
  },
  created () {
    this.$store.dispatch('FETCH_ASK')
  },
  methods: {
    deleteAsk (id) {
      this.$store.commit("DELETE_ASK", id)
    }
  },
}
</script>
