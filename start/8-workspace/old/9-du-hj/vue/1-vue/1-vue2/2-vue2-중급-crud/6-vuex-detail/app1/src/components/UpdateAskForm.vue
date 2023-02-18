<template>
  <span>
    <button @click="updateAskOpen(item.title)">🔧</button>
    <button @click="deleteAsk(item.id)">❌</button>

    <div class="updateInputField" v-if="isOpen">
      <span> title: 
        <input type="text" v-model="updateValue" />
        <button @click="updateAsk(item.id)">수정</button>
      </span>
    </div>
  </span>
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        isOpen: false,
        updateValue: null
      }
    },
    methods: {
      deleteAsk (id) {
        this.$store.commit("DELETE_ASK", id)
      },
      updateAskOpen (title) {
        this.isOpen = !this.isOpen
        this.updateValue = title
      },
      updateAsk (id) {
        console.log(id)
        console.log(this.updateValue)
        const data = {
          id,
          title: this.updateValue,
        }
        this.$store.commit('UPDATE_ASK', data)
        this.updateAskOpen('')
      }
    }
  }
</script>

<style scoped>
.updateInputField input {
  width: 350px;
}
</style>