<button class="navBtn" on:click={() => goto('/')}>Home</button>
<button class="navBtn" on:click={() => goto('/movie')}>Movie</button>
<button class="navBtn" on:click={() => goto('/news')}>News</button>
<button class="navBtn" on:click={() => goto('/todo')}>Todo</button>
<button class="navBtn" on:click={() => goto('/login')}>{ $loginData.isLogin ? 'My Page' : 'Login' }</button>
{#if $loginData.isLogin}
  <span class="welcome">[{ $loginData.name }]님 환영합니다!</span>
{/if}

<script>
import { goto } from '$app/navigation';
import { loginData } from "src/store";
</script>

<style>
.navBtn {
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}
.navBtn:hover {
  color: white;
  background-color: gray;
}
.welcome {
  margin-left: 10px;
}
</style>
