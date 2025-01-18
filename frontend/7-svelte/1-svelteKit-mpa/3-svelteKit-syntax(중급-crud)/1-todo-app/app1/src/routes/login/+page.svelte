<NavBar />
<TitleLabel title="Login App" />

{#if $loginData.isLogin}
  <p>환영합니다!</p>
  <div>유저정보</div>
  <div>ID: {$loginData.id}</div>
  <div>성함: {$loginData.name}</div>
  <button class="loginButton" on:click={() => logout() }>Logout</button>
{:else}
  <input class="loginInput" on:change={() => onChange(event, 'id')} type="text" placeholder="ID" value={id} name="id" />
  <input class="loginInput" on:change={() => onChange(event, 'pw')} type="password" placeholder="PW" value={pw} name="pw" />
  <button class="loginButton" on:click={() => login(id, pw) }>Login</button>
{/if}

<script>
import NavBar from 'src/components/models/NavBar/index.svelte';
import TitleLabel from 'src/components/atoms/TitleLabel/index.svelte';
import { loginData } from "src/store";
import { users } from "src/api";

let id = '';
let pw = '';

const onChange = (event, type) => {
  if (type === 'id') {
    id = event.target.value;
  } else {
    pw = event.target.value;
  }
}

const login = (id, pw) => {
  console.log('users: ', users);
  // users DB 정보를 불러와서 로그인 처리
  users.forEach(user => {
    if (user.id === id && user.pw === pw) {
      alert('로그인 완료');
      // 실제 로그인 처리
      $loginData = { isLogin: true, id, name: user.name }
      return;
    }
  });
}

const logout = () => {
  alert('로그아웃 완료');
  $loginData = { isLogin: false, id: '' }
}
</script>

<style>
.loginInput {
  display: block;
  width: 200px;
  margin: 10px;
}
.loginButton {
  margin: 10px;
  width: 100px;
}
</style>