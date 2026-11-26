<NavBar />
<TitleLabel title="Todo App" />

<div>
  <input bind:value={newTodo} placeholder="할일을 입력하세요." />
  <button on:click={addTodo}>추가</button>
</div>

{#each todos as todo}
  <div>
    <input type="checkbox" bind:checked={todo.isDone} />
    <span class={todo.isDone && 'done'}>{todo.text}</span>
    <button on:click={() => deleteTodo(todo.id)}>삭제</button>
  </div>
{/each}

<script>
import NavBar from 'src/components/models/NavBar/index.svelte';
import TitleLabel from 'src/components/atoms/TitleLabel/index.svelte';

let newTodo = '';

let todos = [{
  id: 1,
  text: '할일1',
  isDone: false
}, {
  id: 2,
  text: '할일2',
  isDone: true
}, {
  id: 3,
  text: '할일3',
  isDone: false
}];

const addTodo = () => {
  todos = [...todos, {
    id: todos.length + 1,
    text: newTodo,
    isDone: false
  }];
  newTodo = '';
}

const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
