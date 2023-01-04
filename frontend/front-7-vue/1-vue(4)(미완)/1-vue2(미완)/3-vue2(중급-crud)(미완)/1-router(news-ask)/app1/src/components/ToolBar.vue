<template>
  <div class="header">
    <img
      src="../assets/logo.png"
      class="logo"
    />
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

<style scoped>
.header {
  background-color: #000;
  display: flex;
  align-items: center;
}
.header a {
  color: #fff;
  margin: 0 20px;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>