<template>
  <div>
    Ask 페이지
    <button @click="fetchAsk">ASK Load</button>

    <ul v-if="ask.length > 0">
      <li
        v-for="item in ask"
        :key="item.id"
      >
        <update-form :item="item"></update-form>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import UpdateForm from "../components/UpdateForm.vue"

export default {
  components: {
    UpdateForm,
  },
  data () {
    return {
      isUpdate: false,
      updateAskValue: null,
    }
  },
  computed: {
    ask () {
      return this.$store.state.ask
    }
  },
  methods: {
    fetchAsk () {
      this.$store.dispatch('FETCH_ASK')
    }
  }
}
</script>