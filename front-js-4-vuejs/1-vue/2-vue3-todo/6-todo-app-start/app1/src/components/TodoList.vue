<template>
    <div>
        <Todo         
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
    </div>
  
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components: {
        Todo
    },
    // ★6. 부모에서 자식컴포넌트로 데이타이동(3) : 자식콤포넌트에서 props를 통해서 todos를 받습니다. 이를 다시 자식컴포넌트인 Todo에게 보냅니다. (이후 흐름 생략)
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value)
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        }
    }
}
</script>

<style>
</style>