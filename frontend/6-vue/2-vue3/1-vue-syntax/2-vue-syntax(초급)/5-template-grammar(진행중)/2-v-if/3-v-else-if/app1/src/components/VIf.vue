<template>
  <div>
    <h2 v-if="isOpen">Hi!</h2>
    <!-- 함수 없이 바로 넣는 경우: value 불필요 -->
    <button @click="isOpen = !isOpen">Toggle</button>
    <!-- 함수를 넣는 경우: value 필요 -->
    <button @click="toggle">Toggle</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/**
 * ref란?
 * 
 * vue의 변수는 기본적으로 메모리 참조이기 때문에, 
 * ref를 쓰지 않고 정의를 하면,
 * 값이 바뀌어도 주소가 바뀌지 않으므로, 업데이트가 되었음을 인식할 수 없다.
 * 따라서 추후 사용할 라이프사이클 함수나, watch를 통해 감지를 할 수가 없게 된다.
 * 
 * 즉, 값이 바뀔 때는 주소 변경을 통해야, 업데이트되었음을 인식할 수 있기 때문에, 
 * 이를 위해 ref()로 감싸서 정의를 하는 것이다.
 */
const isOpen = ref(true)

// ref로 정의한 변수는 .value로 접근해야 한다.
const toggle = () => isOpen.value = !isOpen.value
</script>

<style lang="scss" scoped>
</style>
