<template>
  <!-- container는 bootstrap css class입니다. -->
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!-- w는 폭, p는 패딩 주는 방법입니다. --> 
    <input 
      v-model="todoText"
      type="text"
      class="w-100 p2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
    <hr>
    <Todo 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
    {{ todos }}
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
  components: {
    Todo
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false },
        { id: 2, text: 'play games', checked: false },        
      ]
    }
  },
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