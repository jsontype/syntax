<template>
  <h1>Debounce</h1>
  <input @input="handleInput" placeholder="검색어를 입력하세요" />
  <p>입력한 검색어: {{ searchQuery }}</p>
</template>

<script setup>
import { ref } from 'vue';
import { debounce } from 'lodash-es';

// 검색 쿼리를 저장하는 ref
const searchQuery = ref('');

// 3. 디바운스 딜레이 후 검색 로직 수행 : 이 부분이 복잡한 로직이나 쿼리가 실행될 것을 상정하는 부분
const performSearch = () => {
  alert('검색 로직 수행')
}

// 2. 디바운스 : 입력이 멈춘 후 1.2초 후에 검색 로직 실행
const debouncedSearch = debounce(performSearch, 1200)

// 1. 입력 이벤트 핸들러
const handleInput = (event) => {
  searchQuery.value = event.target.value
  debouncedSearch()
}
</script>
