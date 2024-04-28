<template>
  <h1>Filter</h1>
  <input
    v-model="searchText"
    placeholder="Search By teamId (= 1, 2, 3)"
    @input="onSearch"
  />
  <p>검색 결과:</p>
  <div v-for="item in searchResult">
    <div :key="item.id">
      <div v-if="item.name">
        {{ item.name }}
      </div>
      <div v-else>
        없음
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { filter } from 'lodash-es'

const users = [
  { teamId: '1', name: 'ACDC' },
  { teamId: '1', name: 'Alice in Chain' },
  { teamId: '2', name: 'Bob Dylan' },
  { teamId: '2', name: 'Beatles' },
  { teamId: '3', name: 'Skid Row' },
  { teamId: '3', name: 'Queen' }
]

const searchResult = ref([])
const searchText = ref('')

const onSearch = () => {
  // filter로 검색결과 취득
  // const result = filter(users.teamId === searchText.value) // 기존 JS의 형태
  const result = filter(users, user => user.teamId === searchText.value) // lodash의 형태 : 일관성, 확장성, 호환성 등을 위해서 적용할 수 있다.

  // 예외처리
  if (!result) { 
    searchResult.value = []
    return
  }
  searchResult.value = result
}
</script>

<style scoped>
input {
  width: 170px;
}
</style>
