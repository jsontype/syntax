<template>
  <div>
    <InputField name="아무거나" @update-name="updateName" />
    {{ name }}
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue"

export default {
  name: "App",
  components: {
    InputField,
  },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    updateName(name) {
      this.name = name
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
