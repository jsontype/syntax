<template>
  <div id="app">
    <div class="main-content">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/movies">Movies</router-link> |
        <router-link to="/todos">Todos</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/cart">Cart</router-link>
      </nav>

      <router-view />

      <footer class="footer">
        <div class="copyright">
          <p>&copy; 2025 김지연 프로젝트. All rights reserved.</p>
          <p>Made with ❤️ using Vue.js</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator"

export default Vue.extend({
  name: "App",
})
</script>

<style>
/* 전역 스타일 리셋 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
