<template>
  <div>
    <h1>Watch: Deep 옵션 없을 때</h1>
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

// watch의 첫번째 인자가 함수형 리턴값인데, 세번째 인자값에 { deep: true } 옵션이 없으면, user 객체의 변경은 감지하지 못함
watch(
  () => user,
  (newValue, oldValue) => {
    lastUpdated.value = new Date().toLocaleTimeString();
  }
);
</script>
