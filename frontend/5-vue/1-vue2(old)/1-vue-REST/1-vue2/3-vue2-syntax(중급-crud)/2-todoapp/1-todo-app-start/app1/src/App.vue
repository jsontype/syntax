<template>
  <!-- container는 bootstrap css class입니다. -->
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo :todos="todos" />
    <!-- 
      ★2. 자식에서 부모컴포넌트로 데이타이동(2) : AddTodo.vue(자식컴포넌트)에서 emit을 통해서 e.target.value를 부모에게 보냅니다.
        @은 부모컴포넌트 안에 있는 해당 메소드를 통해 자식컴포넌트가 부모컴포넌트에게 데이터를 보내는 것
    -->
    <AddTodo @add-todo="addTodo" />    
    <hr>    
    <!-- 
      ★4. 부모에서 자식컴포넌트로 데이타이동(1) : 갱신한 todos를 props로 보내줍니다.
        :은 props를 통해 부모컴포넌트가 자식컴포넌트에게 데이터를 보내는 것
    -->
    <TodoList 
      :todos="todos" 
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
    {{ todos }}
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import CompletedTodo from '@/components/CompletedTodo'

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
  },
  data() {
    return {
      todoText: '',      
      // ★5. 부모에서 자식컴포넌트로 데이타이동(2) : todos를 props로 보내줍니다. 
      // 이후 components/TodoList.vue(자식컴포넌트)에서 todos를 받습니다.
      todos: [
        { id: 1, text: 'buy a car', checked: false },
        { id: 2, text: 'play games', checked: false },        
      ]
    }
  },

  methods: {
    deleteTodo(id) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id
      })
      this.todos.splice(index, 1)
      // this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // ★3. 자식에서 부모컴포넌트로 데이타이동(3) : 해당 밸류 e.target.value를 AddTodo로부터 받아서, todos 데이터를 갱신합니다.
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false
      });
      this.todoText = '';
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    }
  }
}

</script>