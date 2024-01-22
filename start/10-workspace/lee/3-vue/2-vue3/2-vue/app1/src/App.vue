<template>
  <HelloWorld msg="Vite + Vue" />
  <LocalComponent 
    msg="Hi!" 
    :count="count" 
    :count-double="countDouble" 
    :on-click="onClick" 
    :obj="obj"
    :arr="arr"
    :mod-obj="modObj" 
    :mod-arr="modArr"
  />
  <GlobalComponent />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import LocalComponent from '@/components/LocalComponent.vue'

// string, number, boolean, null ... primitive type
const count = ref(0)

// object, array type ... reference type
const obj = reactive({ a: 1, b: 2 })
const arr = reactive([ 1, 2, 3 ])

// function type ... reference type
const onClick = () => {
  count.value = count.value + 1
}
const modObj = () => {
  obj.a = obj.a + 1
}
const modArr = () => {
  arr.push(arr.length + 1)
}

// computed 함수 : 특정 변수의 변화를 감시한 뒤, 그에 따라 자동으로 계산된 값을 반환
const countDouble = computed(() => count.value * 2)
// watch 함수 : 특정 변수의 변화를 감시한 뒤, 그에 따라 특정 로직을 실행
</script>

<style scoped>
</style>
