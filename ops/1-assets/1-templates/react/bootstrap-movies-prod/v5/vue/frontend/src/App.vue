<template>
  <router-view />
</template>
<script>
import 'videojs-youtube/dist/Youtube.min.js';
export default {
  name: 'App',
  components: {},
  mounted() {},
};
</script>
<style lang="scss">
// swiper css
@import 'swiper/css';
@import 'swiper/css/effect-fade';
@import 'swiper/css/navigation';
@import 'swiper/css/pagination';
@import './assets/scss/streamit.scss';
@import './assets/scss/custom.scss';
@import './assets/scss/rtl.scss';
@import 'animate.css/animate.css';
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
@import './assets/vendor/font-awesome/css/all.min.css';
@import './assets/vendor/iconly/css/style.css';
</style>
