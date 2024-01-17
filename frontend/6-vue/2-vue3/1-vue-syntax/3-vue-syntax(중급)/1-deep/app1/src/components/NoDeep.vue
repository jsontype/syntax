<template>
  <div>
    <h2>User Profile</h2>
    <input v-model="user.userName" placeholder="Name" />
    <input v-model="user.details.age" placeholder="Age" />
    <div>Updated at: {{ lastUpdated }}</div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

// 사용자 정보를 reactive 객체로 정의
const user = reactive({
  userName: '',
  details: {
    age: ''
  }
});

const lastUpdated = ref('');

// watch의 세번째 인자값에 { deep: true } 옵션이 없으면 user 객체의 변경은 감지하지 못함
watch(() => user, (newValue, oldValue) => {
  lastUpdated.value = new Date().toLocaleTimeString();
});
</script>
