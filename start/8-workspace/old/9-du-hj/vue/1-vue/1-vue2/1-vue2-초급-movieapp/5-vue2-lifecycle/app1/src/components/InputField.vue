<template>
  <div>
    <input type="text" :value="name" @input="updateName" />
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  methods: {
    updateName(e) {
      console.log(e.target.value)
      this.$emit('update-name', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>