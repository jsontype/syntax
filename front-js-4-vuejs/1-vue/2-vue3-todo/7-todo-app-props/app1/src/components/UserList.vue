<template>
    <div>
        <h4>User List</h4>
        <!-- v-for는 키값이 필요함 -->
        <!-- 6. users대신 people로 바꾸고 싶어서 바꿨음 -->
        <div v-for="user in people" :key="user.id">
            <!-- user 정보 모두 빼기 -->
            <!-- {{ user }} -->

            <!-- user 정보중 이름만 빼기 --> 
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    // 1. Map Helper를 다음과 같이 임포트해서 사용하면, State와 Actions를 간단히 가져올 수 있다.
    import { mapState, mapActions } from 'vuex'
    export default {
        created() {
            this.getUsers()
        },
        computed: {
            // 2. 이게 원래 버전이다.
            // ...mapState(['users'])
            // 5. users대신 people로 쓰고싶으면, {people: 'users'}를 넣으면 된다.
            ...mapState({people: 'users'})
            // 3. 아래처럼 일일이 state를 가져오는 게 아니라 위처럼 가져올 수 있다.
            // users() {
            //     return this.$store.state.users
            // },
            // todos() {
            //     return this.$store.state.todos
            // }
        },
        methods: {
            // mutation(스토어데이터 바꾸기)은 commit명령어를 쓰지만,
            // action(비동기로 DB바꾸는 API를 호출하면서 스토어데이터 바꾸기)은 dispatch로 시작됩니다.
            ...mapActions(['getUsers'])
            // 4. 아래처럼 일일이 methods 가져오는 게 아니라 위처럼 가져올 수 있다.
            // getUsers() {
            //     this.$store.dispatch('getUsers')
            // }
        }
    }
</script>