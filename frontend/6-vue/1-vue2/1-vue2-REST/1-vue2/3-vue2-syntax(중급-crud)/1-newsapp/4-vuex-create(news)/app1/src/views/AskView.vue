<template>
  <div>
    Ask 페이지
    <button @click="fetchAsk">ASK Load</button>

    <ul v-if="ask.length > 0">
      <li
        v-for="item in ask"
        :key="item.id"
      >
        {{ item.id }} {{ item.title }} <button @click="deleteAsk(item.id)">Delete</button>
      </li>
    </ul>
    <div
      v-else
      class="red"
    >Press the button</div>
  </div>
</template>

<script>
export default {
  computed: {
    ask () {
      return this.$store.state.ask
    }
  },
  methods: {
    fetchAsk () {
      this.$store.dispatch('FETCH_ASK')
    },
    deleteAsk (id) {
      console.log('id: ', id);
      this.$store.commit('DELETE_ASK', id)
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
  font-size: 50px;
}
</style>
