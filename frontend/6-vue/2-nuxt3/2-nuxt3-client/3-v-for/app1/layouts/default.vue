<template>
  <div>
    <header>
      <nuxt-link class="navItem" to="/">홈</nuxt-link>
      <nuxt-link class="navItem" to="/list">상품목록</nuxt-link>
    </header>
    <NuxtPage />
    <footer>
      <div>
        Copyright © 모든 권리 보유. 이 웹사이트의 콘텐츠는 저작권법에 의해 보호됩니다. 무단 전재, 복사, 배포 금지.
      </div>
    </footer>
  </div>
</template>

<style>
body {
  margin: 20px;
}

header {
  position: relative;
}

.navItem {
  color: gray;
  text-decoration: none;
  margin-right: 10px;
}

.navItem:hover {
  color: pink;
}

.nuxt-page {
  margin: 20px;
}

footer {
  position: relative;
  top: 100px;
}
</style>
