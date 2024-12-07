<NavBar active={3} />
<h1>로그인</h1>

{#if $loginData.loggedIn}
  <p>Welcome back!</p>
  <div>유저정보</div>
  <div>ID: {$loginData.id}</div>
  <button on:click={() => logout(id)}>로그아웃</button>
{:else}
  <input type="text" placeholder="아이디" on:change={() => onChange(event, 'id')} value={id} />
  <input type="password" placeholder="비밀번호" on:change={() => onChange(event, 'pw')} value={pw} />
  <!-- 테스트: test, 1234로 로그인 할 것! -->
  <button on:click={() => login(id, pw)}>로그인</button>
{/if}

<script>
import NavBar from 'src/components/NavBar/index.svelte';  
import { loginData } from "src/store/index.js";

let id = '';
let pw = '';

const onChange = (event, type) => {
  console.log('event: ', event)
  if (type === 'id') {
    id = event.target.value;
  } else if (type === 'pw') {
    pw = event.target.value;
  }
}

const login = (id, pw) => {
  if (!id || !pw) {
    alert('아이디와 비밀번호를 입력해주세요.');
    return;
  }
  if (id !== 'test' || pw !== '1234') {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    return;
  } else {
    alert('로그인 되었습니다.');
    $loginData = { id: id, loggedIn: true };
  }
}

const logout = (id) => {
  alert('로그아웃 되었습니다.');
  $loginData.loggedIn = false;
}
</script>
