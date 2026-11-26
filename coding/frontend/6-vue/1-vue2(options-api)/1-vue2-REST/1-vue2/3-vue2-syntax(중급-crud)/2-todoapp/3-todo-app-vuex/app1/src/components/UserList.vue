<template>
    <div>
        <h4>User List</h4>
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        created() {
            this.getUsers()
        },
        computed: {
            // ...mapState({
            //     users: state => state.user.users
            // })
            // 이렇게 바꾸면 더 깔끔
            ...mapState('user', ['users'])
            // state의 경우에는 앞에 모듈명을 넣고 오브젝트로 users를 넣어서 처리
            // ...mapState('user', {
            //     users: state => state.users
            // })
            // 기존의 방법임
            // ...mapState({people: 'users'})
            // users() {
            //     return this.$store.state.users
            // },
            // todos() {
            //     return this.$store.state.todos
            // }
        },
        methods: {
            // methods의 경우에는 앞에 모듈명을 넣고 오브젝트로 쓸 함수를 넣어서 처리
            ...mapActions('user', ['getUsers'])
            // getUsers() {
            //     this.$store.dispatch('getUsers')
            // }
        }
    }
</script>