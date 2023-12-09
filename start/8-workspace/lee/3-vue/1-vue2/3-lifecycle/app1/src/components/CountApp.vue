<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <hr />
    <h1>user: {{ user.name }}</h1>Kim
    <button @click="changeUser">changeUser</button>
    <h1>lowerCaseUserName: {{ lowerCaseUserName }}</h1>
  </div>
</template>

<script>
// Options API
export default {
  data() {
    return {
      count: 0,
      user: {
        name: 'Lee',
        age: 20,
      },      
    }
  },
  computed: {
    lowerCaseUserName() {
      return this.user.name.toLowerCase()
    }
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    },
    changeUser() {
      this.user.name = 'Kim'
    }
  },
  // lifecycle hooks : beforeCreate, beforeMount, beforeUpdate, beforeDestroy
  // 처음 컴포넌트가 생성된 시점
  created() {
    console.log('created')
  },
  // 처음 컴포넌트가 생성되어 렌더링까지 끝난 시점
  mounted() {
    console.log('mounted')
  },
  // 컴포넌트가 업데이트된 시점
  updated() {
    console.log('updated: ', this.count)
  },
  // 컴포넌트가 죽는 시점
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style lang="scss" scoped>

</style>