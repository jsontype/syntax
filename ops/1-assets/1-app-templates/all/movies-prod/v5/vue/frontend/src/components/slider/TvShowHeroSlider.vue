<template>
  <section class="banner-container">
    <div class="movie-banner">
      <Swiper
        v-if="render"
        :dir="rtl"
        :navigation="{
          prevEl: '.swiper-banner-button-prev',
          nextEl: '.swiper-banner-button-next',
        }"
        :slides-per-view="1.2"
        :modules="modules"
        :loop="true"
        :centered-slides="true"
        class="swiper-banner-container iq-rtl-direction">
        <SwiperSlide class="tv-show-1 p-0">
          <div class="movie-banner-image">
            <img src="/assets/images/tv-show/banner-1.webp" alt="movie-banner-image" loading="lazy" />
          </div>
          <div class="shows-content h-100">
            <b-row class="align-items-center h-100">
              <b-col lg="7" md="12">
                <h1 class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two" data-animation-in="fadeInLeft" data-delay-in="0.6">{{ $t('header.vikingr') }}</h1>
                <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style="opacity: 1">
                  <div class="slider-ratting d-flex align-items-center gap-3">
                    <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                    <span class="text-white">3.5(lmdb)</span>
                  </div>
                  <div class="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                    <span class="badge bg-secondary p-2">
                      <i class="fa fa-eye"></i>
                      PG
                    </span>
                    <span class="font-size-6">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                    <span class="trending-time font-normal text-lowercase"> 1{{ $t('ott_home.hr') }} : 44{{ $t('ott_home.mins') }} </span>
                    <span class="font-size-6">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                    <span class="trending-year font-normal"> Feb 2018 </span>
                  </div>
                  <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">{{ $t('home.dinosaurs_group') }}</p>
                </div>
                <div class="iq-button" data-animation-in="fadeInUp" data-delay-in="1.2">
                  <router-link :to="{ name: 'landing-page.tv-show-detail' }" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('ott_home.play_now') }}</span>
                    {{ '' }}
                    <i class="fa-solid fa-play"></i>
                  </router-link>
                </div>
              </b-col>
              <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <a href="#" class="video-open playbtn" tabindex="0">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve" @click="toggler = !toggler">
                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                  </svg>
                  {{ '' }}
                  <span class="w-trailor text-uppercase" @click="toggler = !toggler">{{ $t('home.watch_trailer') }}</span>
                </a>
              </b-col>
            </b-row>
          </div>
        </SwiperSlide>
        <SwiperSlide class="tv-show-1 p-0">
          <div class="movie-banner-image">
            <img src="/assets/images/tv-show/banner-2.webp" alt="movie-banner-image" loading="lazy" />
          </div>
          <div class="shows-content h-100">
            <b-row class="row align-items-center h-100">
              <b-col lg="7" md="12">
                <h1 class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two" data-animation-in="fadeInLeft" data-delay-in="0.6">{{ $t('header.the_boys') }}</h1>
                <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style="opacity: 1">
                  <div class="slider-ratting d-flex align-items-center gap-3">
                    <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                    <span class="text-white">3.5(lmdb)</span>
                  </div>
                  <div class="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                    <span class="badge bg-secondary p-2">
                      <i class="fa fa-eye"></i>
                      G
                    </span>
                    <span class="font-size-6">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                    <span class="trending-time font-normal text-lowercase">2{{ $t('ott_home.hr') }} : 42{{ $t('ott_home.mins') }} </span>
                    <span class="font-size-6">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                    <span class="trending-year font-normal"> Nov 2017 </span>
                  </div>
                  <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">{{ $t('home.brutal_emperor') }}</p>
                </div>
                <div class="iq-button" data-animation-in="fadeInUp" data-delay-in="1.2">
                  <router-link :to="{ name: 'landing-page.tv-show-detail' }" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('ott_home.play_now') }}</span>
                    {{ '' }}
                    <i class="fa-solid fa-play"></i>
                  </router-link>
                </div>
              </b-col>
              <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <a href="#" class="video-open playbtn" tabindex="0">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve" @click="toggler = !toggler">
                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                  </svg>
                  {{ '' }}
                  <span class="w-trailor text-uppercase" @click="toggler = !toggler">{{ $t('home.watch_trailer') }}</span>
                </a>
              </b-col>
            </b-row>
          </div>
        </SwiperSlide>
        <SwiperSlide class="tv-show-1 p-0">
          <div class="movie-banner-image">
            <img src="/assets/images/tv-show/banner-3.webp" alt="movie-banner-image" loading="lazy" />
          </div>
          <div class="shows-content h-100">
            <b-row class="align-items-center h-100">
              <b-col lg="7" md="12">
                <h1 class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two" data-animation-in="fadeInLeft" data-delay-in="0.6">{{ $t('header.breaking_bad') }}</h1>
                <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style="opacity: 1">
                  <div class="slider-ratting d-flex align-items-center gap-3">
                    <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fas fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                    <span class="text-white">3.5(lmdb)</span>
                  </div>
                  <div class="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                    <span class="badge bg-secondary p-2">
                      <i class="fa fa-eye"></i>
                      PG-13
                    </span>
                    <span class="font-size-6">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                    <span class="trending-time font-normal text-lowercase"> 2{{ $t('ott_home.hr') }} : 12{{ $t('ott_home.mins') }} </span>
                    <span class="font-size-6">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                    <span class="trending-year font-normal"> Dec 2018 </span>
                  </div>
                  <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">{{ $t('home.jumbo_also') }}</p>
                </div>
                <div class="iq-button" data-animation-in="fadeInUp" data-delay-in="1.2">
                  <router-link :to="{ name: 'landing-page.tv-show-detail' }" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('ott_home.play_now') }}</span>
                    {{ '' }}
                    <i class="fa-solid fa-play"></i>
                  </router-link>
                </div>
              </b-col>
              <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <a href="#" class="video-open playbtn" tabindex="0">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve" @click="toggler = !toggler">
                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                  </svg>
                  {{ '' }}
                  <span class="w-trailor text-uppercase" @click="toggler = !toggler">{{ $t('home.watch_trailer') }}</span>
                </a>
              </b-col>
            </b-row>
          </div>
        </SwiperSlide>
        <div class="swiper-banner-button-next">
          <i class="iconly-Arrow-Right-2 icli arrow-icon"></i>
        </div>
        <div class="swiper-banner-button-prev">
          <i class="iconly-Arrow-Left-2 icli arrow-icon"></i>
        </div>
      </Swiper>
    </div>
  </section>
  <FsLightbox :toggler="toggler" :sources="['/assets/images/video/trailer.mp4']" />
</template>
<script setup>
import FsLightbox from 'fslightbox-vue/v3';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { useEnterExit } from '../../utilities/usePage';
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
// Swiper Modules
const modules = [Navigation];
const toggler = ref(false);

useEnterExit();
</script>
