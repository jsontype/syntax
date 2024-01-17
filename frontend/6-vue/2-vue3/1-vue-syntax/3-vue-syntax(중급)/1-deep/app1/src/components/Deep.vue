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

// user의 하위 status들의 변경을 감시하려면 deep 옵션이 필요함
watch(() => user, (newValue, oldValue) => {
  lastUpdated.value = new Date().toLocaleTimeString();
}, { deep: true });
</script>
