<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "bootstrap";
</script>

<style lang="scss">
.streamit-block .swiper-wrapper {
  margin: 0 !important;
}

.top-ten-block .swiper-wrapper {
  margin-bottom: 3rem;
}

.video-js {
  height: 70vh;
  width: 100%;
}

.vjs-poster img {
  display: none;
  object-fit: cover !important;
}

@import "./assets/vendor/font-awesome/css/all.min.css";
@import "./assets/vendor/iconly/css/style.css";
</style>
