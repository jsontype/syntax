<template>
  <div class="text">
    <!-- 3. props을 렌더링한다. -->
    Hello {{ name }}{{ mark }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  // 2. props 객체의 키에 prop명, 밸류에 prop type을 적는다.
  props: {
    name: String,
    mark: String,
  }

}
</script>

<style scoped>
.text {
  color: gray;
}
</style>