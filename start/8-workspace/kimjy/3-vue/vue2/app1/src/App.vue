<template>
  <!-- container는 bootstrap css class입니다. -->
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!-- w는 폭, p는 패딩 주는 방법입니다. --> 
    <input 
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
    <hr>

    <!-- v-for는 반복문입니다. -->
    <Todo 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />

    <button @click="showTodos = !showTodos">Todos 표시 토글</button>
    <div v-if="showTodos">
      {{ todos }}
    </div>
    <div v-else>
      Todos를 표시하지 않습니다.
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
  // Import하는 컴포넌트 모음
  components: {
    Todo
  },
  // States 모음
  data() {
    return {
      showTodos: false,
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false },
        { id: 2, text: 'play games', checked: false },        
      ]
    }
  },
  // Methods 모음
  methods: {
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id
      // })
      // this.todos.splice(index, 1)
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(e) {
      // console.log(e)
      // console.log(e.target.value)
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      })
      this.todoText = '' // input value 초기화
    },
    toggleCheckbox({id, checked}) {
      // console.log(id, checked)
      const index = this.todos.findIndex(todo => {
        return todo.id === id
      })
      this.todos[index].checked = checked
    }
  }
}

</script>