<template>
  <div class="navBar">
    <img src="../assets/logo.png" class="logo" />
    <router-link class="menu" to="/movie">영화</router-link>
    <!-- <router-link to="/ask"></router-link> -->
  </div>
</template>

<style scoped>
.navBar {
  background-color: #000;
  display: flex;
  align-items: center;
}

.menu {
  color: #FFF;
  text-decoration: none;
}

.menu:hover {
  background: gray;
}

.logo {
  width: 30px;
  margin-right: 10px;
}
</style>