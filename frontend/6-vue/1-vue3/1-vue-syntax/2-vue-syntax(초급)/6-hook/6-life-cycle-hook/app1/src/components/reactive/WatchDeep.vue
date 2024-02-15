<template>
  <div>
    <h1>Watch: Deep 옵션 있을 때</h1>
    <input v-model="user.userName" placeholder="Name" />
    <input v-model="user.details.age" placeholder="Age" />
    <div>Updated at: {{ lastUpdated }}</div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const user = reactive({
  userName: "",
  details: {
    age: "",
  },
});

const lastUpdated = ref("");

// watch의 첫번째 인자가 함수형이 아니라 그냥 user이거나, 세번째 인자값에 { deep: true } 옵션이 있으면, user 객체의 변경을 감지함
watch(
  () => user, // 첫번째 인자가 () => user와 같은 함수형이 아니라 그냥 user이면, user 객체의 변경을 감지함
  (newValue, oldValue) => {
    lastUpdated.value = new Date().toLocaleTimeString();
  },
  { deep: true } // 또는, 세번째 인자값에 { deep: true } 옵션이 있으면, user 객체의 변경을 감지함
);
</script>
