<template>
  <div>
    <div>
      <input type="text" v-model="title" />
      <button @click="onAdd">ADD</button>
    </div>
    <div v-for="todo in todos" :key="todo.id">
      <span @click="onDone(todo.id)">
        <span># {{ todo.id }} / </span>
        <span>{{ todo.title }} / </span>
        <span>{{ todo.completed ? 'O' : 'X' }} </span>        
      </span>
      <button @click="onDelete(todo.id)">DEL</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      title: '',
      newTodoId: 0
    }
  },

  // count가 필요 없다면 이 메소드들을 제거
  methods: {
    onDone(id) {
      this.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    },
    onDelete(id) {
      this.todos = this.todos.filter(item => item.id !== id)
    },
    onAdd(title) {
      this.newTodoId = this.newTodoId + 1
      this.todos.push({
        id: this.newTodoId,
        title: this.title,
        completed: false
      })
      this.title = ''
    }
  },

  created() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => {
        // userId가 1인 것만(= 로그인된 사용자의 것만) 가져옴
        this.todos = json.filter(item => item.userId === 1)
        this.newTodoId = this.todos.length
        console.log(this.todos)
      })
  },
  mounted() {
    console.log(`更新された！`)
  },
  updated() {
    console.log(`成長した！`)
  },
  destroyed() {
    console.log(`死んだ！`)
  },
}
</script>
