<template>
  <div>
    <div id="addTodo">
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">추가</button>
    </div>
    <div id="todos">
      <div v-for="todo in todos" :key="todo.id" class="todo">
        <span @click="toggleTodo(todo)">
          <span>#{{ todo.id }} / </span>
          <span>{{ todo.title }} / </span>
          <input type="checkbox" :checked="todo.completed" />
        </span>
        <span>
          <button @click="delTodo(todo.id)">삭제</button>
        </span>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const todos = reactive([])
const newTodo = ref('')
const userId = ref(1)

function toggleTodo(item) {
  item.completed = !item.completed
}

function addTodo() {
  if (newTodo.value === '') {
    alert('할 일을 입력해주세요.')
    return
  }
  const todo = {
    id: todos.length + 1,
    title: newTodo.value,
    completed: false,
    userId: userId.value
  }
  todos.push(todo)
}

function delTodo(id) {
  // 해당 id를 가진 todo 찾기
  const index = todos.findIndex(todo => todo.id === id);
  // 찾은 todo가 있으면 삭제
  todos.splice(index, 1);
  console.log(todos)
}
</script>

<style lang="css" scoped>
input {
  margin-right: 5px;
}
.movieTitle {
  display: block;
}
</style>
