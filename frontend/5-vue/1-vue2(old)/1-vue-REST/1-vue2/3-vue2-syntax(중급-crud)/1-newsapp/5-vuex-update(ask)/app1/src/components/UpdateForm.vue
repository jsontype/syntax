<template>
  <div>

    {{ item.id }} {{ item.title }} <button @click="deleteAsk(item.id)">Delete</button>
    <button @click="onInputView(item.title)">수정 Input 표시</button>
    <div v-if="isUpdate">
      title: <input
        type="text"
        v-model="updateAskValue"
      /><button @click="updateAsk(item.id)">수정</button>
    </div>

  </div>
</template>

<script>
export default {
  props: ['item'],

  // 아래는 전부 src/views/AskView.vue에서 가져온 것들
  data () {
    return {
      isUpdate: false,
      updateAskValue: null,
    }
  },

  methods: {
    onInputView (title) {
      this.isUpdate = !this.isUpdate
      this.updateAskValue = title
    },
    deleteAsk (id) {
      console.log('id: ', id)
      this.$store.commit('DELETE_ASK', id)
    },
    updateAsk (id) {
      console.log('id: ', id)
      const datas = {
        id, // id: id, 처럼 같은 경우 생략 가능
        title: this.updateAskValue
      }
      this.$store.commit('UPDATE_ASK', datas)
    }
  }
}
</script>
