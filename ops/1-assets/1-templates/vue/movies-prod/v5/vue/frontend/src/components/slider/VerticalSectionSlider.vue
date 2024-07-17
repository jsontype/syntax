<template>
  <div class="verticle-slider section-padding-bottom">
    <div :class="containerFluid ? 'container-fluid' : null">
      <div class="slider">
        <div class="slider-flex position-relative">
          <div class="slider--col position-relative">
            <div class="vertical-slider-prev swiper-button" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b130b4e10e1468117">
              <i class="iconly-Arrow-Up-2 icli"></i>
            </div>
            <div class="slider-thumbs" data-swiper="slider-thumbs">
              <div class="swiper-container" data-swiper="slider-thumbs-inner">
                <swiper
                  v-if="render"
                  :dir="rtl"
                  :space-between="24"
                  :slides-per-view="3"
                  :navigation="{
                    nextEl: '.vertical-slider-next',
                    prevEl: '.vertical-slider-prev',
                  }"
                  :loop="true"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :watch-slides-progress="true"
                  :modules="modules"
                  :direction="'vertical'"
                  class="swiper-wrapper top-ten-slider-nav">
                  <SwiperSlide v-for="data in sliderData" :key="data" tag="li" class="swiper-slide swiper-bg">
                    <div class="block-images position-relative">
                      <div class="img-box slider--image">
                        <img :src="data.image" class="img-fluid" alt="" loading="lazy" />
                      </div>
                      <div class="block-description">
                        <h6 class="iq-title">
                          <router-link :to="{ name: 'landing-page.movies.detail' }">{{ $t(data.title) }}</router-link>
                        </h6>
                        <div class="movie-time d-flex align-items-center my-2">
                          <span class="text-body">{{ data.time }}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </swiper>
                <div class="slider-next btn-verticle"><i class="ri-arrow-down-s-line vertical-aerrow"></i></div>
              </div>
            </div>
            <div class="vertical-slider-next swiper-button" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-b130b4e10e1468117"><i class="iconly-Arrow-Down-2 icli"></i></div>
          </div>
          <div class="slider-images" data-swiper="slider-images">
            <swiper :loop="true" :space-between="10" :modules="modules" :effect="'fade'" :breakpoints="{ '640': {direction: 'horizontal'}}" class="swiper-container" @swiper="setThumbsSwiper">
              <SwiperSlide v-for="data in sliderData" :key="data" tag="li" class="swiper-slide">
                <div class="slider--image block-images"><img :src="data.image" loading="lazy" alt="" /></div>
                <div class="description">
                  <div class="block-description">
                    <ul class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="text-white text-decoration-none">{{ $t('home.comedy') }}</router-link>
                      </li>
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="text-white text-decoration-none">{{ $t('home.romance') }}</router-link>
                      </li>
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="text-white text-decoration-none">{{ $t('home.action') }}</router-link>
                      </li>
                    </ul>
                    <h2 class="iq-title mb-3">
                      <router-link :to="{ name: 'landing-page.movies.detail' }">{{ $t(data.title) }}</router-link>
                    </h2>
                    <div class="d-flex align-items-center gap-3 mb-3">
                      <div class="slider-ratting d-flex align-items-center">
                        <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                      </div>
                      <span class="text-body">{{ data.movieTime }}</span>
                    </div>
                    <p class="mt-0 mb-3 line-count-2">{{ $t(`ott_home.content_here`) }}</p>
                    <div class="iq-button">
                      <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative">
                        <span class="button-text">{{ $t(`ott_home.play_now`) }}</span>
                        {{ '' }}
                        <i class="fa-solid fa-play"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Thumbs, EffectFade } from 'swiper';
import { ref, computed, watch } from 'vue';
import { useSetting } from '../../store/setting/index';
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

defineProps({
  sliderData: { type: Array, default: () => [] },
  containerFluid: { type: String, default: '' },
});

const modules = [Navigation, Pagination, Thumbs, EffectFade];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style>
.swiper-button-lock {
  display: block;
}
</style>
