<template>
  <div>
    <h1>Home</h1>
    <p>현재 날짜: {{ formattedDate }}</p>
    <p>현재 카운트: {{ counterStore.count }}</p>
    <p>
      현재 표시되고 있는 영화목록 :
      <span v-if="moviesList.length <= 0">없음</span>
      <span v-else>총 {{ moviesList.length }}개</span>
      <div v-for="item in moviesList" :key="item.id">
        {{ item.title }}
      </div>
    </p>
    <p>현재 할 일 목록: 완료 {{ completedTodosCount }}개 / 총 {{ todosList.length }}개</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDateUtil } from '@/utils/useDateUtil'
import { useCounterStore } from '@/stores/counter/useCounterStore'
import { useMoviesStore } from '@/stores/movies/useMoviesStore'
import { useTodosStore } from '@/stores/todos/useTodosStore'

// Variables
const formattedDate = ref('')

// Hooks
const dateUtil = useDateUtil()
const counterStore = useCounterStore()
const moviesStore = useMoviesStore()
const todosStore = useTodosStore()


// Computed
const moviesList = computed(() => moviesStore.moviesList)
const todosList = computed(() => todosStore.todosList)
const completedTodosCount = computed(() => {
  return todosList.value.filter(todo => todo.completed).length
})

// Lifecycle Hooks
onMounted(() => {
  formattedDate.value = dateUtil.formatDate(dateUtil.currentDate.value)
})
</script>
