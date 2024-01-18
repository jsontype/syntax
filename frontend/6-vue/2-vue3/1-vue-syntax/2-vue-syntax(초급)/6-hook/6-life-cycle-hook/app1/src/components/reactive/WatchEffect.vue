<template>
  <div>
    <h1>WatchEffect</h1>
    <input v-model="user.userName" placeholder="Name" />
    <input v-model="user.details.age" placeholder="Age" />
    <div>Updated at: {{ lastUpdated }}</div>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from "vue"

const user = reactive({
  userName: "",
  details: {
    age: "",
  },
});

const lastUpdated = ref("");
const showAlert = ref(false);

// watchEffect는 "콜백 함수 내부에서 사용되는 변수들 중 하나의 값이 바뀌면" 실행하는 콜백 함수이다.
watchEffect(() => {
  console.log("user.userName: ", user.userName);
  // 콜백 함수내에서 사용되었으므로, user.userName이 바뀌면 아래가 실행된다.
  // 콜백 함수내에서 사용되지 않은, user.details.age은 바뀌어도 아래가 실행되지 않는다.
  lastUpdated.value = new Date().toLocaleTimeString();
});
</script>
