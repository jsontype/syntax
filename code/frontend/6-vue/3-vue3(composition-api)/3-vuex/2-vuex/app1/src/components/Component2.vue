<template>
  <h1>Components2</h1>
  <p>{{ count }}</p>
  <button @click="increment">증가</button>
</template>

<script setup>
// 스토어의 사용
// 1. useStore, computed를 가져온다.
import { useStore } from 'vuex'
import { computed } from 'vue
// 2. useStore를 통해 store를 가져온다.
const store = useStore()
// 3. computed를 통해 store가 변경되면, 자동으로 count가 변경되도록 한다. (1, 2가 선언된 전제하에서, store.state.count를 호출하면, getter를 통해서 스토어값을 가져온다.)
const count = computed(() => store.state.count)
function increment() {
  // 4. store.commit('increment')을 통해 "increment라는 mutation(로직)을 갖고 있는 action"을 실행해서, 스토어를 변경한다.
  store.commit('increment')
}
</script>

<style scoped>
</style>
