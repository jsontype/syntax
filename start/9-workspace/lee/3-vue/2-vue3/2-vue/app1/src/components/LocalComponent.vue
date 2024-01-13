<template>
  <div>
    Local Component : {{ msg }}
    <button @click="onClick">{{ count }} / {{ countDouble }}</button>
    <button @click="modObj">{{ obj }}</button>
    <button @click="modArr">{{ arr }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  msg: string, 
  count: number, 
  countDouble: number,
  onClick: () => void, 
  obj: { a: number, b: number },
  arr: number[],
  modObj: () => void, 
  modArr: () => void
}>()
</script>

<style lang="scss" scoped>
</style>
