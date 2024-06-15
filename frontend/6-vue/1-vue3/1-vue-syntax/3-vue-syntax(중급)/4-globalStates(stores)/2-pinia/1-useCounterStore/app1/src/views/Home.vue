<template>
  <div>
    <h1>Home</h1>
    <p>현재 날짜: {{ formattedDate }}</p>
    <p>현재 카운트: {{ counterStore.count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useDateUtil } from "@/utils/useDateUtil"
import { useCounterStore } from "@/stores/counter/useCounterStore"

// Hooks
const dateUtil = useDateUtil()
const counterStore = useCounterStore()

// Variables
const formattedDate = ref("")

// Lifecycle Hooks
onMounted(() => {
  formattedDate.value = dateUtil.formatDate(dateUtil.currentDate.value)
})
</script>
