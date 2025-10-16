<template>
  <h1>Find</h1>
  <input 
    v-model="searchText"
    placeholder="Search By Id (= 1, 2, 3)"
    @input="onSearch"
  />
  <p>검색 결과: {{ searchResult }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { find } from 'lodash-es'

const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' }
]

const searchResult = ref('없음')
const searchText = ref('')

const onSearch = () => {
  // find로 검색결과 취득
  const result = find(users, { id: searchText.value })
  // 예외처리
  if (!result) { 
    searchResult.value = '없음'
    return
  }
  searchResult.value = result.name
}
</script>
