<template>
  <div class="iq-watching-block">
    <div class="block-images position-relative">
      <div class="iq-image-box overly-images">
        <router-link :to="{ name: 'landing-page.movies.detail' }" class="d-block">
          <img :src="imagePath" alt="movie-card" class="img-fluid object-cover w-100 d-block border-0" loading="lazy" />
        </router-link>
      </div>
      <div class="iq-preogress">
        <span class="data-left-timing font-size-14 fw-500 text-lowercase">{{ dataLeftTime }}</span>
        <b-progress :value="progressValue" style="height: 1px"></b-progress>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { onMounted } from 'vue';
defineProps({
  dataLeftTime: { type: String, default: '' },
  imagePath: { type: String, default: '' },
  progressValue: { type: Number, default: 0 },
});
// const addSwiperClasses = () => {
//   const SwiperWrapper = document.querySelector('.swiper-wrapper');
//   if (SwiperWrapper) {
//     SwiperWrapper.classList.add('slider', 'm-0', 'p-0', 'home-slider');
//   }
// };

// onMounted(() => {
//   addSwiperClasses();
// });
</script>
