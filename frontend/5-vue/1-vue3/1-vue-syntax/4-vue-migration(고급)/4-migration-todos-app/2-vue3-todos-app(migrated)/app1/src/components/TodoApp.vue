<template>
  <div>
    <div>
      <input type="text" v-model="title" />
      <button @click="onAdd">ADD</button>
    </div>
    <div v-for="todo in todos" :key="todo.id">
      <span @click="onDone(todo.id)">
        <span># {{ todo.id }} / </span>
        <span>{{ todo.title }} / </span>
        <span>{{ todo.completed ? 'O' : 'X' }}{{ ' ' }}</span>        
      </span>
      <button @click="onDelete(todo.id)">DEL</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';

const todos = ref([]);
const title = ref('');
let newTodoId = 0;

const onDone = (id) => {
  todos.value = todos.value.map(item => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
    return item;
  });
};

const onDelete = (id) => {
  todos.value = todos.value.filter(item => item.id !== id);
};

const onAdd = () => {
  newTodoId++;
  todos.value.push({
    id: newTodoId,
    title: title.value,
    completed: false
  });
  title.value = '';
};

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => {
      todos.value = json.filter(item => item.userId === 1);
      newTodoId = todos.value.length;
      console.log(todos.value);
    });
});

onUpdated(() => {
  console.log(`成長した！`);
});

onBeforeUnmount(() => {
  console.log(`死んだ！`);
});
</script>
