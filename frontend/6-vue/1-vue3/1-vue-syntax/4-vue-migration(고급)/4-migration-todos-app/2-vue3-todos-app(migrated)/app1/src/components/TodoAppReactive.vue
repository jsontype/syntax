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
import { reactive, ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';

const todos = reactive([]);
const title = ref('');
let newTodoId = 0;

const onDone = (id) => {
  todos.forEach(item => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
  });
};

const onDelete = (id) => {
  const index = todos.findIndex(item => item.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

const onAdd = () => {
  newTodoId++;
  todos.push({
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
      const todosData = json.filter(item => item.userId === 1);
      todosData.forEach(item => {
        todos.push({
          id: item.id,
          title: item.title,
          completed: item.completed
        });
      });
      newTodoId = todos.length;
      console.log(todos);
    });
});

onUpdated(() => {
  console.log(`成長した！`);
});

onBeforeUnmount(() => {
  console.log(`死んだ！`);
});
</script>
