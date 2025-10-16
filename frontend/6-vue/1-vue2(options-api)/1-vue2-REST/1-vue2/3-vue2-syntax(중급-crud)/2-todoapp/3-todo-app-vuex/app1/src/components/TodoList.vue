<template>
    <div>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
    components: {
        Todo
    },
    computed: {
        todos() {
            // state.모듈이름.state이름으로 변경해주기
            return this.$store.state.todo.todos
        }
    },
}
</script>

<style>
</style>