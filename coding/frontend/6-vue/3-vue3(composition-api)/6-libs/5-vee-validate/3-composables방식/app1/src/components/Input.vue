<template>
  <div>
    <input v-model="value" :type="type || 'text'" />
    <div class="errorText">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
  type: String,
});

// 기능에서 '이름'이 반환되는 이유는 반응성을 유지하기 위해서이다. 이름이 바뀌면 useField를 선택할 수 있다.
const { value, errorMessage } = useField(() => props.name);
</script>

<style scoped>
.errorText {
  color: red;
}
</style>
