<template>
  <div>
    <h1>Todo App</h1>
    <div id="addTodo">
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">추가</button>
    </div>
    <div id="todos">
      <div v-for="todo in todos" :key="todo.id" class="todo">
        <span @click="toggleTodo(todo)">
          <span>#{{ todo.id }} / </span>
          <span>{{ todo.title }} / </span>
          <input type="checkbox" :checked="todo.completed" />
        </span>
        <span>
          <button @click="delTodo(todo.id)">삭제</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated, onUnmounted, watch } from "vue"

const todos = reactive([])
const newTodo = ref("")
// * TODO (예시): 아래의 초기값을, "로그인했을 때의 회원아이디"로 변경할 것
const loginUserId = ref(1)

// LifeCycles
watch(newTodo, (newValue, oldValue) => {
  if (newValue.length > 50) {
    alert('50글자 이상은 입력할 수 없습니다.')
    newTodo.value = oldValue // 이전 값으로 복구
  }
})

watch(() => todos.length, (newLength, oldLength) => {
  console.log(`todos 길이 변경됨: ${oldLength} -> ${newLength}`)
  console.log('changed Todos:', todos)
})

onMounted(() => {
  console.log("onMounted")
  getTodos()
})

onUpdated(() => {
  console.log("onUpdated")
})

onUnmounted(() => {
  console.log("onUnmounted")
})

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      for (let i = 0; i < json.length; i++) {
        if (json[i].userId === loginUserId.value) {
          todos.push(json[i]) // reactive로 선언을 할 때는 value를 사용하지 않는다.
        }
      }
      console.log(todos[0])
      console.log(todos[1])
      console.log(todos[2])
    })
}

function toggleTodo(item) {
  item.completed = !item.completed
}

function addTodo() {
  if (newTodo.value === "") {
    alert("할 일을 입력해주세요.")
    return
  }
  const todo = {
    id: todos.length + 1,
    title: newTodo.value,
    completed: false,
    userId: loginUserId.value,
  }
  todos.push(todo)
}

function delTodo(id) {
  // 해당 id를 가진 todo 찾기
  const index = todos.findIndex((todo) => todo.id === id)
  // 찾은 todo가 있으면 삭제
  todos.splice(index, 1)
  console.log(todos)
}
</script>

<style lang="css" scoped>
.movieTitle {
  display: block;
}
</style>
