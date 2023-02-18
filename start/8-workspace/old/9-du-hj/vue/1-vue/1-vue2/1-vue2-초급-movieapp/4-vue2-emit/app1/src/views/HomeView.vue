<template>
  <div>
    <h1>홈페이지</h1>
    <HomeContent title="home title" name="user" />
    <InputField name="아무거나" @update-name="updateName" />
    {{ name }}
  </div>
</template>

<script>
import HomeContent from "@/components/HomeContent.vue"
import InputField from "@/components/InputField.vue"

export default {
  components: {
    HomeContent,
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