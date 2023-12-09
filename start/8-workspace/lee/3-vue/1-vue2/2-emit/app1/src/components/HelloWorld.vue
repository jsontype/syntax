<template>
  <div class="hello">
    <h1 class="gray">{{ lang === "ko" ? "안녕하세요" : msg }} {{ name }}{{ mark }}</h1>
    <input type="text" :value="name" @input="updateName" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    lang: String,
    name: String,
    mark: String
  },
  methods: {
    updateName(e) {
      // 부모 컴포넌트의 함수를 호출
      this.$emit('update-name', e.target.value)
    }
  }
}
</script>

<style scoped>
.gray {
  color: gray;
}
</style>
