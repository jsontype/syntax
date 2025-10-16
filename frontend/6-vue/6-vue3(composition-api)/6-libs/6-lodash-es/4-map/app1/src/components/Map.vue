<template>
  <h1>Map</h1>
  <ul>
    <li v-for="userName in userNames" :key="userName">
      {{ userName }}
    </li>
  </ul>
</template>

<script setup>
import { map } from 'lodash-es'

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]
const userNames = map(users, 'name') // Output: ['Alice', 'Bob', 'Charlie']
</script>
