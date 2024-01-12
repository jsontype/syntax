<template>
  <HelloWorld msg="Hello" />
  <GlobalHelloWorld msg="Vue3" />
  <hr />
  <VBind />
  <VBindProps 
    :string1="str1" 
    :string2="str2" 
    :number1="num1" 
    :boolean1="bool1"
    :on-click="showAlert"
  />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import VBind from '@/components/VBind.vue'
import VBindProps from '@/components/VBindProps.vue'

const str1 = 'String 1'
const str2 = 'String 2'
const num1 = 9999
const bool1 = num1 > 9998
const showAlert = () => {
  alert('clicked')
}
</script>

<style scoped>
</style>
