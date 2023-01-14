<template>
  <span>
    <button @click="updateNewsOpen(item.title)">🔧</button>
    <button @click="deleteNews(item.id)">❌</button>
    <div class="updateInputField" v-if="isOpen">
      <span> title: 
        <input type="text" v-model="updateValue" />
        <button @click="updateNews(item.id)">수정</button>
      </span>
    </div>
  </span>
</template>

<script>
  export default {
    data () {
      return {
        isOpen: false,
        updateValue: null,
      }
    },
    props:['item'],
    methods:{
      deleteNews (id) {
        this.$store.commit("DELETE_NEWS", id)
      },
      updateNewsOpen (title) {
        this.isOpen = !this.isOpen
        this.updateValue = title
      },
      updateNews (id) {
        const data = {
          id,
          title:this.updateValue
        }
        this.$store.commit("UPDATE_NEWS",data)
        this.updateNewsOpen('')
      }
    }
  }
</script>

<style scoped>
.updateInputField input {
  width: 350px;
}
</style>