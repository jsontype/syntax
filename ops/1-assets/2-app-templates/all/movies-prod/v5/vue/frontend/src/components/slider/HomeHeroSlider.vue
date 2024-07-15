<template>
  <Swiper
    v-if="render"
    id="home-banner-slider"
    tag="section"
    :dir="rtl"
    :navigation="{
      prevEl: '#home-banner-slider-prev',
      nextEl: '#home-banner-slider-next',
    }"
    class="wrapper-class iq-main-slider p-0 banner-home-swiper overflow-hidden"
    :modules="modules"
    :loop="true">
    <SwiperSlide class="slide s-bg-1 p-0">
      <div class="banner-home-swiper-image">
        <img src="/assets/images/movies/banner1.webp" alt="banner-home-swiper-image" loading="lazy" />
      </div>
      <div class="container-fluid position-relative h-100">
        <div class="slider-inner h-100">
          <div class="row align-items-center iq-ltr-direction h-100">
            <div class="col-lg-7 col-md-12">
              <h1 class="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">{{ $t('home.another_danger') }}</h1>
              <div class="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                <div class="slider-ratting d-flex align-items-center">
                  <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star-half" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                  <span class="ms-2">
                    <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" class="img-fluid" loading="lazy" />
                  </span>
                </div>
                <span class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">{{ $t('home.action') }}</span>
                <span class="font-size-14 fw-500 time text-capitalize">2 {{ $t('ott_home.hr') }} : 6 {{ $t('ott_home.mins') }}</span>
              </div>
              <p class="line-count-3 RightAnimate-two">{{ $t('home.piracy_robbery') }}</p>
              <div class="trending-list RightAnimate-three">
                <div class="text-primary genres fw-500">
                  {{ $t('home.geners') }}:
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.action') }} </router-link>
                </div>
                <div class="text-primary tag fw-500">
                  {{ $t('home.tag') }}:
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.action') }}, </router-link>
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.adventure') }}, </router-link>
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.horror') }} </router-link>
                </div>
              </div>
              <div class="RightAnimate-four">
                <CustomButton :button-title="$t('ott_home.play_now')" :link="{ path: '/movies-detail' }"></CustomButton>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
              <a href="#" class="video-open playbtn" tabindex="0">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve" @click="toggler = !toggler">
                  <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                  <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                </svg>
                {{ '' }}
                <span class="w-trailor text-uppercase" @click="toggler = !toggler">{{ $t('home.watch_trailer') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="slide s-bg-1 p-0">
      <div class="banner-home-swiper-image">
        <img src="/assets/images/movies/banner2.webp" alt="banner-home-swiper-image" loading="lazy" />
      </div>
      <div class="container-fluid position-relative h-100">
        <div class="slider-inner h-100">
          <div class="row align-items-center iq-ltr-direction h-100">
            <div class="col-lg-7 col-md-12">
              <h1 class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">{{ $t('home.bumblebee') }}</h1>
              <div class="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                <div class="slider-ratting d-flex align-items-center">
                  <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star-half" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                  <span class="ms-2">
                    <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" class="img-fluid" loading="lazy" />
                  </span>
                </div>
                <span class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">{{ $t('home.action') }}</span>
                <span class="font-size-14 fw-500 time text-capitalize">2 {{ $t('ott_home.hr') }} : 6 {{ $t('ott_home.mins') }}</span>
              </div>
              <p class="line-count-3 RightAnimate-two">{{ $t('home.optimus_autobot') }}</p>
              <div class="trending-list RightAnimate-three">
                <div class="text-primary genres fw-500">
                  {{ $t('home.geners') }}:
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.action') }} </router-link>
                </div>
                <div class="text-primary tag fw-500">
                  {{ $t('home.tag') }}:
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.action') }}, </router-link>
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.adventure') }}, </router-link>
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.horror') }} </router-link>
                </div>
              </div>
              <div class="RightAnimate-four">
                <CustomButton :button-title="$t('ott_home.play_now')" :link="{ path: '/movies-detail' }"></CustomButton>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
              <a href="#" class="video-open playbtn" tabindex="0">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve" @click="toggler = !toggler">
                  <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                  <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                </svg>
                {{ '' }}
                <span class="w-trailor text-uppercase" @click="toggler = !toggler">{{ $t('home.watch_trailer') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="slide s-bg-1 p-0">
      <div class="banner-home-swiper-image">
        <img src="/assets/images/movies/banner3.webp" alt="banner-home-swiper-image" loading="lazy" />
      </div>
      <div class="container-fluid position-relative h-100">
        <div class="slider-inner h-100">
          <div class="row align-items-center iq-ltr-direction h-100">
            <div class="col-lg-7 col-md-12">
              <h1 class="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">{{ $t('home.another_danger') }}</h1>
              <div class="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                <div class="slider-ratting d-flex align-items-center">
                  <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-star-half" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                  <span class="ms-2">
                    <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" class="img-fluid" loading="lazy" />
                  </span>
                </div>
                <span class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">{{ $t('home.action') }}</span>
                <span class="font-size-14 fw-500 time">2 {{ $t('ott_home.hr') }} : 6 {{ $t('ott_home.mins') }}</span>
              </div>
              <p class="line-count-3 RightAnimate-two">{{ $t('home.piracy_act_robbery') }}</p>
              <div class="trending-list RightAnimate-three">
                <div class="text-primary genres fw-500">
                  {{ $t('home.geners') }}:
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.action') }} </router-link>
                </div>
                <div class="text-primary tag fw-500">
                  {{ $t('home.tag') }}:
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.action') }}, </router-link>
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.adventure') }}, </router-link>
                  <router-link :to="{ name: 'landing-page.view-all' }" class="fw-normal text-white text-decoration-none ms-2"> {{ $t('home.horror') }} </router-link>
                </div>
              </div>
              <div class="RightAnimate-four">
                <CustomButton :button-title="$t('ott_home.play_now')" :link="{ path: '/movies-detail' }"></CustomButton>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
              <a href="#" class="video-open playbtn" tabindex="0">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve" @click="toggler = !toggler">
                  <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                  <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                </svg>
                {{ '' }}
                <span class="w-trailor text-uppercase" @click="toggler = !toggler">{{ $t('home.watch_trailer') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <FsLightbox :toggler="toggler" :sources="[generateImgPath('/assets/images/video/trailer.mp4')]" />
    <div id="home-banner-slider-prev" class="swiper-banner-button-prev swiper-nav">
      <i></i>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none" stroke="currentColor">
        <circle r="20" cy="22" cx="22"></circle>
      </svg>
    </div>
    <div id="home-banner-slider-next" class="swiper-banner-button-next swiper-nav">
      <i></i>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none" stroke="currentColor">
        <circle r="20" cy="22" cx="22"></circle>
      </svg>
    </div>
  </Swiper>
</template>
<script setup>
// import { onMounted } from 'vue';
// component
import CustomButton from '../CustomButton.vue';

// plugins
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

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
const modules = [Navigation];
const toggler = ref(false);
useEnterExit();
</script>
