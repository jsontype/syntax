<!-- HTML 코드가 들어가는 부분 -->
<template>
  <div>
    <h1>This is home.</h1>

    <form action="">
      <InputField :name="name" @update-name="updateName"/>
      <br><button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<!-- Vue JS 코드가 들어가는 부분 -->
<script>
import InputField from "@/components/InputField.vue";

export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    updateName(name) {
      this.name = name
    }
  }

};
</script>

<!-- CSS코드가 들어가는 부분 -->
<style scoped>
h1 {
  color: red;
}
</style>
