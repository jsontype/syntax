<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
    <hr>
    <UserList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import CompletedTodo from '@/components/CompletedTodo'
import UserList from '@/components/UserList'
export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList,
  },
}
</script>