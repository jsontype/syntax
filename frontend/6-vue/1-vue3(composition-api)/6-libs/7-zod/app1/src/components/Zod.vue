<template>
  <div>
    <h1>Zod 스키마를 이용한 타입 검증</h1>
    <input v-model="user.name" placeholder="이름을 입력하세요 (문자열, 필수)">
    <input v-model.number="user.age" placeholder="나이를 입력하세요 (숫자)">
    <button @click="handleSubmit">제출</button>
  </div>
</template>

<script setup>
import { useValidation } from '@/composables/useValidation'

const { user, submitForm } = useValidation()

const handleSubmit = () => {
  const isValid = submitForm()
  if (isValid) {
    alert('검증 성공!')
  } else {
    alert('검증 실패!')
  }
}
</script>
