<template>
  <div class="text">
    Hello!
  </div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<!-- 3. App.vue을 제외한 모든 자식컴포넌트들은 style에 scoped를 배정해서 중복을 방지한다. -->
<style scoped>
.text {
  color: gray;
}
</style>