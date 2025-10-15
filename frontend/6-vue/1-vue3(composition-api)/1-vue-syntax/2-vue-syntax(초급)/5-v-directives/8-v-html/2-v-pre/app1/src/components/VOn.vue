<template>
  <div>
    <h1>V-On 이벤트 처리</h1>
    <!-- 1-1. V-On의 사용법 -->
    <button v-on:click="handleClick">클릭</button>
    <!-- 1-2. V-On의 생략 (기본 사용법이 됨) -->
    <button @click="handleClick">클릭</button>

    <br />
    <!-- 2-1. 메소드 이벤트핸들러 (기본 사용법이 됨) -->
    <button @click="methodHandler">메소드 핸들러</button>
    <!-- 2-2. 메소드 이벤트핸들러에게 인수를 건네기 -->
    <button @click="passArgument('abcd')">메소드 핸들러: 인수 전달</button>
    <!-- 2-3. 인라인 메소드 이벤트핸들러 -->
    <button @click="console.log('인라인메소드 이벤트핸들러')">인라인 핸들러</button>

    <br />
    <!-- 3-1. 이벤트 객체 참조하기1 : e는 인수로 따로 전달안해도 자동으로 전달됨 -->
    <input @change="printEvent" placeholder="이벤트 출력: 입력후 엔터" />
    <!-- 3-2. 이벤트 객체 참조하기2 : e는 인수로 따로 전달안해도 자동으로 전달됨 -->
    <button @click="printEvent">이벤트 출력: 버튼 클릭</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref('')

// 1-1. 1-2. 메소드 이벤트핸들러
const handleClick = () => {
  console.log('클릭됨')
}

// 2-1. 메소드 이벤트핸들러
const methodHandler = (arg) => {
  console.log('메소드 이벤트핸들러')
}

// 2-2. 메소드 이벤트핸들러에게 인수를 건네기
const passArgument = (arg) => {
  console.log('메소드 이벤트핸들러 인수:', arg)
}

// 3-1. 3-2. 이벤트 객체 참조하기 : e는 인수로 따로 전달안해도 자동으로 전달됨. $event로 쓰기도 함.
const printEvent = (e) => {
  console.log('이벤트 객체 e: ', e)
}
</script>
