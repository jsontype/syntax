<template>
  <HelloWorld msg="Hello Vue!" />
  <HelloWorld 
    msg="Hello John!"
    username="John"
    mark="!!"
    secondary
    hover
    :click="onClick"
  />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

const onClick = () => {
  alert('Hello!!!!!!!')
}
</script>

<style>
.gray {
  color: #545252;
}
</style>
