<template>
  <div class="about">
    <div>
      <h2>Todos List</h2>
      
      <!-- Input Field -->
      <div>
        <input 
          type="text" 
          v-model="todoText"
          @keyup.enter="addTodo"
          placeholder="할 일을 입력하세요"
        />
        <button @click="addTodo">추가</button>
      </div>

      <!-- Todos List -->
      <div>
        <div v-for="todo in todos" :key="todo.id">
          <input 
            type="checkbox"
            :checked="todo.checked"
            @change="toggleCheckbox(todo.id, $event)"
          />
          <span :class="{ completed: todo.checked }">{{ todo.text }}</span>
          <button @click="deleteTodo(todo.id)">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class TodosView extends Vue {
  private todoText: string = ""
  
  private todos: any[] = [
    { id: 1, text: "buy a car", checked: false }, 
    { id: 2, text: "play games", checked: false }
  ]

  private deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  private addTodo() {
    if (this.todoText.trim()) {
      this.todos.push({
        id: Math.random(),
        text: this.todoText,
        checked: false,
      })
      this.todoText = ""
    }
  }

  private toggleCheckbox(id: number, event: Event) {
    const target = event.target as HTMLInputElement
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      this.todos[index].checked = target.checked
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
