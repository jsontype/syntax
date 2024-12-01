<template>
  <h1 :class="[secondary && 'secondary', hover && 'hover']">#{{ String(id) }} {{ msg }} {{ mark }} {{ lang }}</h1>
  <div v-if="isOpen">
    <h3>開けてる状態です。</h3>
  </div>
</template>

<script setup lang="ts">
// Types
interface Props {
  id: number
  msg: string
  mark: string
  secondary?: boolean
  language?: "en" | "ja"  
  hover?: boolean
  isOpen?: boolean
  click?: () => void
}
const props = defineProps<Props>()

const lang = props.language === 'ja' ? '日本語' : '英語'
</script>

<style scoped>
.secondary {
  color: blue;
}

.hover:hover {
  color: red;
}
</style>
