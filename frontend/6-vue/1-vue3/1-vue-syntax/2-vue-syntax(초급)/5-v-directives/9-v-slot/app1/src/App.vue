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
  <VPre />
  <VHtml />
  <VText />
  <hr />
  <VSlot>
    <!-- 
      * 자식컴포넌트의 <slot />은 원래, 부모컴포넌트의 <template v-slot:title>과 연결되는데, 
        이를 축약하여 간편히 <template #title> 으로 사용할 수 있다.

      <template v-slot:title>
        <h2>V-Slot</h2>
      </template>
    -->
    <template #title>
      <h2>V-Slot</h2>
    </template>

    <!-- 
      * 기본 slot은 template #default에서 연결되는데,
        이를 축약하여 간편히 <template> 태그 자체를 생략해서 사용할 수 있다.

      <template #default>
        <div>슬롯 기본 콘텐츠</div>
      </template>
    -->
    <div>슬롯 기본 콘텐츠</div>

    <!-- * added 외에도, 추가 컨텐츠의 이름은 자유롭게 지정할 수 있다. -->
    <template #added>
      <div>슬롯 추가 콘텐츠</div>
    </template>
  </VSlot>
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
import VPre from '@/components/VPre.vue'
import VHtml from '@/components/VHtml.vue'
import VText from '@/components/VText.vue'
import VSlot from '@/components/VSlot.vue'

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
