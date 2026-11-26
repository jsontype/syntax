<button class={getBtnClass(1)} on:click={() => move(1)}>About</button>
<button class={getBtnClass(2)} on:click={() => move(2)}>Blog</button>
<button class={getBtnClass(3)} on:click={() => move(3)}>{ $loginData.loggedIn ? 'User' : 'Login' }</button>
{#if $loginData.loggedIn}
  <span class="welcome">{$loginData.id}님, 환영합니다!</span>
{/if}

<script>
import { on } from "svelte/events"
import { goto } from '$app/navigation';
import { loginData } from "src/store/index.js";

export let active;

const move = (num) => {
  active = num;
  goPage(num);
}

const goPage = (item) => {
  const path = item === 1 ? '/menu/home' : item === 2 ? '/menu/blog' : '/menu/login';
  goto(path);
}

const getBtnClass = (num) => {
  return active === num ? 'btn active' : 'btn';
}
</script>

<style>
.btn {
  background-color: white;
  border: 1px solid white;  
}
.active {
  background-color: gray;
  color: white;
}
.welcome {
  margin-left: 20px;
}
</style>
