<template>
  <VBind />
  <VBindProps 
    :string1="str1" 
    :string2="str2" 
    :number1="num1" 
    :boolean1="bool1"
    :on-click="showAlert"
  />
  <hr />
  <VOn />
  <hr />
  <VIf />
  <VElse />
  <VElseIf1 />
  <VElseIf2 />
  <VShow />
  <hr />
  <VFor />
  <hr />
  <VModel />
  <VModelModifier />
  <hr />
  <VOnce />
</template>

<script setup lang="ts">
import VBind from '@/components/VBind.vue'
import VBindProps from '@/components/VBindProps.vue'
import VOn from '@/components/VOn.vue'
import VIf from '@/components/VIf.vue'
import VElse from '@/components/VElse.vue'
import VElseIf1 from '@/components/VElseIf1.vue'
import VElseIf2 from '@/components/VElseIf2.vue'
import VShow from '@/components/VShow.vue'
import VFor from '@/components/VFor.vue'
import VModel from '@/components/VModel.vue'
import VModelModifier from '@/components/VModelModifier.vue'
import VOnce from '@/components/VOnce.vue'

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
