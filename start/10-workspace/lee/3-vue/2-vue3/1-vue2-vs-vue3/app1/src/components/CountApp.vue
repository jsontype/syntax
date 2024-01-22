<template>
  <h1>{{ count }}</h1>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <hr />
  <h1>user: {{ user.name }}</h1>
  <button @click="changeUser">changeUser</button>
  <h1>lowerCaseUserName: {{ lowerCaseUserName }}</h1>
</template>

<script setup>
// Composition API
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0)

const user = reactive({
  name: 'Lee',
  age: 20,
})

function increase() {
  count.value++
}

function decrease() {
  count.value--
}

function changeUser() {
  user.name = 'Kim'
}

// ref: useState처럼 그냥 쓰는 변수라면
// const lowerCaseUserName = ref(user.name.toLowerCase())

// computed: useEffect처리가 들어간 state 변수라고 생각하면 됨
const lowerCaseUserName = computed(() => {
  return user.name.toLowerCase()
})

// lifecycle hooks : onBeforeMount, onBeforeUpdate, onBeforeUnmount
onMounted(() => {
  console.log('mounted')
})
onUpdated(() => {
  console.log('updated: ', count.value)
})
onUnmounted(() => {
  console.log('destroyed')
})
</script>
