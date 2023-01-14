<template>
  <div>
    ask페이지
    <div>
      <input type="text" v-model="id" placeholder="아이디"/>
      <input type="text" v-model="title" placeholder="타이틀"/>
      <button @click="createAsk">추가</button>
    </div>
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
  data (){
    return {
      id: null,
      title: null
    }
  },
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
    },
    createAsk () {
      const data = {
        id: this.id,
        title: this.title
      }
      this.$store.commit("CREATE_ASK", data)
      this.resetInput()
    },
    resetInput () {
      this.id = null
      this.title = null
    }
  },
}
</script>
<style scope>
input {
  display: block;
}

</style>