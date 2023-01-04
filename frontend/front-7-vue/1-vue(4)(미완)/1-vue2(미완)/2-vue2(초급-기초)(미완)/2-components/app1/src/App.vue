<template>
  <div class="hello">
    <Hello />
    <Hello />
    <Hello />
    {{ name }}!
  </div>
</template>

<script>
// 1. 컴포넌트 임포트한다.
import Hello from './Hello'

// export default App : 익스포트를 하기 위한 것으로, 템플릿 문법에 의해 적용된다.
export default {
  name: 'App',
  // 2. 쓰고자 하는 자식컴포넌트들을 components 객체 안에 담는다.
  components: {
    Hello, // = HelloWorld: HelloWorld,
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
