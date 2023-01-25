<template>
  <div>
    ask페이지
    <div class="inputField">
      <input type="text" v-model="id" placeholder="아이디"/>
      <input type="text" v-model="title" placeholder="타이틀"/>
      <button @click="createAsk">추가</button>      
    </div>
    <ul v-if="ask.length > 0">
      <li v-for="item in ask" :key="item.id">
        {{ item.title }}
        <update-ask-form :item="item"></update-ask-form>
      </li>
    </ul>
    <div v-else>버튼을 누르세요</div>
  </div>
</template>

<script>
import UpdateAskForm from "@/components/UpdateAskForm.vue"

export default {
  data (){
    return {
      id: null,
      title: null,
    }
  },
  components: {
    UpdateAskForm
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
    },
  },
}
</script>

<style scope>
.inputField > input {
  display: block;
}
</style>