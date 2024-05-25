<template>
  <div>
    <h1>Home</h1>
    <p>현재 날짜: {{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useDateUtil } from "@/utils/useDateUtil"

const dateUtil = useDateUtil()
const formattedDate = ref("")

onMounted(() => {
  formattedDate.value = dateUtil.formatDate(dateUtil.currentDate.value)
})
</script>
