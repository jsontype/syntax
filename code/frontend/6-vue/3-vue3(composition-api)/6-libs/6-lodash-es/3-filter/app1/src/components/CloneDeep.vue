<template>
  <h1>CloneDeep</h1>
  <p>original.a : {{ original.a }}</p>
  <p>cloned.a : {{ cloned.a }}</p>
  <button @click="onClick">cloned.a + 1</button>
</template>

<script setup>
import { reactive } from 'vue'
import { cloneDeep } from 'lodash-es'

const original = { a: 1, b: { c: 2 } }
const cloned = reactive(cloneDeep(original))

const onClick = () => {
  cloned.a = cloned.a + 1
}
</script>
