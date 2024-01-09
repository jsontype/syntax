<template>
    <div>
        Completed Todo: {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    computed: {
        // getters에 넣어서 해당 기능을 다른 컴포넌트에서도 사용할 수 있도록 함        
        numberOfCompletedTodo() {
            return this.$store.getters.numberOfCompletedTodo            
        }
    }
}
</script>

<style>
</style>