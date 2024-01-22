<template>
  <div class="hello">
    <h1 class="gray">{{ lang === "ko" ? "안녕하세요" : msg }} {{ name }}{{ mark }}</h1>
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
  }
}
</script>

<style scoped>
.gray {
  color: gray;
}
</style>
