<template>
  <div>
    <div id="addTodo">
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">추가</button>
    </div>
    <div id="todos">
      <div v-for="todo in todos" :key="todo.id" class="todo">
        <span @click="toggleTodo(todo)">
          <span :class="todo.completed && 'lineThrough'">{{ todo.title }}</span>
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
import { ref } from 'vue';
import { useTodos } from '@/composables/useTodos';

const userId = ref(1);
const { todos, newTodo, addTodo, toggleTodo, delTodo } = useTodos(userId);
</script>

<style scoped>
input {
  margin-right: 5px;
}
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.lineThrough {
  text-decoration: line-through;
}
</style>
