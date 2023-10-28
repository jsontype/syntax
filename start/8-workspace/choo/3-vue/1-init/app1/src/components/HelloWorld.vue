<!-- HTML -->
<template>
  <div class="hello">
    Hello {{ userName }}! {{ msg }}
  </div>
</template>

<!-- JS -->
<script>
export default {
  name: 'HelloWorld',
  props: {
    userName: String,
    msg: String
  }
}
</script>

<!-- CSS -->
<style scoped>
.hello {
  color: red;
}
</style>
