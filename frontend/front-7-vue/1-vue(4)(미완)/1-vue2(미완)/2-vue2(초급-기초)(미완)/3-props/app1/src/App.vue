<template>
  <div class="hello">
    <Hello />
    <Hello />
    <Hello />
    <!-- 1. 프롭 준다. ★ Template 문법상, 프롭을 변수로 줄때는 :을 사용한다. -->
    <Hello :name="name" mark="!" />
  </div>
</template>

<script>
import Hello from './Hello'

export default {
  name: 'App',
  components: {
    Hello,
  },
  data() {
    return {
      name: 'Yang',
    }
  }
}
</script>

<style>
.hello {
  font-size: 22px;
}
</style>
