<!-- HTML 코드가 들어가는 부분 -->
<template>
  <div>
    <h1>This is home.</h1>

    <!-- emit1 -->
    <form action="">
      <!-- emit1 : components/InputField.vue 작성전 -->
      <!-- <label for="">Name</label>
      <input
        type="text"
        v-model="name"
        style="padding: 30px; border: 2px solid green"
      /> -->

      <!-- emit1 : components/InputField.vue 작성후 -->
      <InputField :name="name" @update-name="updateName"/>
      <br><button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<!-- Vue JS 코드가 들어가는 부분 -->
<script>
// emit1
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

// emit2
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
