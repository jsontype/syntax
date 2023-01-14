<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  props: {
    title: {
      type: String,
      default: "default title"
    },
    name: {
      type: String,
      default: "default name"
    }
  },
}
</script>

<style scoped>

</style>