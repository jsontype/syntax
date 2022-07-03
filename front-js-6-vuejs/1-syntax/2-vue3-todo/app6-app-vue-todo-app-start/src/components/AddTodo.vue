<template>
    <input 
        v-model="todoText"
        type="text" 
        class="w-100 p-2" 
        placeholder="Type todo"
        @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        // ★1. 자식에서 부모컴포넌트로 데이타이동(1) : emit을 통해서 e.target.value를 부모에게 보냅니다.
        addTodo(e) {
            console.log(e.target.value)
            this.$emit('add-todo', e.target.value);
        }
    }
}
</script>

<style>
</style>