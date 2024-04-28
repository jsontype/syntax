<template>
  <div class="text">
    Hello {{ name }}!
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String,
  }
}
</script>

<style scoped>
.text {
  color: gray;
}
</style>