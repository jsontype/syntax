<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
// computed된 변수를 정의해두면, count 값이 바뀔 때마다 자동으로 doubleCount 값도 바뀐다.
const doubleCount = computed(() => count.value * 2)

// count.value의 값이 바뀌면 미리 장전(=계산)되기 때문에, doubleCount 마법을 발사하는 경우에는
// 아래에서는 장전(=계산)이 필요없게 된다.
const increment = () => {
  count.value++
  /**
   * ComputedRef에 대해서
   * 
   * Computed로 반환된 변수는 ComputedRef 형태로 반환된다.
   * 그러므로 script 내부에서 'computed' 속성의 값을 사용하려면, 'ComputedRef.value' 형태로 접근해야 한다.
   * 이렇게 접근하는 이유는, 'computed' 속성이 실제 값을 감싸고 있는 반응형 참조(ref) 형태이기 때문이다.
   * 예를 들어, 'computed' 값을 로그로 출력하려면 console.log(doubleCount.value)와 같이 사용한다.
   * 여기에서 'doubleCount.value'를 사용해 'doubleCount'의 현재 값을 확인할 수 있다.
   * 
   * 예: console.log(doubleCount.value)
   */
}
</script>

<template>
  <h1>Computed</h1>
  <p>Count: {{ count }}</p>
  <p>Double Count: {{ doubleCount }}</p>
  <button @click="increment">Increment</button>
</template>
