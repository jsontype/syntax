<template>
  <div>
    <h1>V-Model, V-On에 쓰이는 이벤트 수식자(Modifier)들</h1>

    <h3>.once : 한 번만 실행</h3>
    <button @click.once="onceHandler">버튼</button>

    <h3>.lazy : 입력을 마칠때까지 기다렸다가 업데이트</h3>
    <input 
      v-model.lazy="lazyValue"       
      @input="lazyHandler"
      @change="lazyHandler"
    />

    <h3>.trim : 양 끝의 공백을 제거</h3>
    <input 
      v-model.trim="trimmedInput" 
      @input="trimHandler" 
      placeholder=""
    />

    <h3>.number : 숫자 입력만 처리</h3>
    <input 
      v-model.number="numberInput" 
      @input="numberHandler" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// .once 이벤트 수식자의 이용
const onceHandler = () => {
  console.log('이 이벤트는 한 번만 실행된다.')
}

// .lazy 이벤트 수식자의 이용
const lazyValue = ref('');
const lazyHandler = () => {
  console.log('Lazy Value:', lazyValue.value)
}

// .trim 이벤트 수식자의 이용
const trimmedInput = ref('');
const trimHandler = () => {
  console.log('Trimmed Input:', trimmedInput.value)
}

// .number 이벤트 수식자의 이용
const numberInput = ref(0);
const numberHandler = () => {
  console.log('Number Input:', numberInput.value)
}
</script>

<style scoped>
</style>
