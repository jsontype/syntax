<template>
  <div>
    <input type="text" :value="userName" @input="updateName">
  </div>
</template>

<script>
  export default {
    name: 'InputField',
    // 변수 프롭
    props: {
      userName: String,
    },
    // 함수 선언
    methods: {
      updateName(e) {
        // 함수 프롭
        this.$emit('update-name', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>