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
      default: "이름없음"
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
