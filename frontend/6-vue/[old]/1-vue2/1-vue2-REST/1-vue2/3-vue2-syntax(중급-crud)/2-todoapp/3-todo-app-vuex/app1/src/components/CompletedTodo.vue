<template>
    <div>
        Completed Todo: {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    computed: {
        numberOfCompletedTodo() {
            // getters[모듈이름/함수이름]으로 변경해주기
            return this.$store.getters['todo/numberOfCompletedTodo']
        }
    }
}
</script>

<style>
</style>