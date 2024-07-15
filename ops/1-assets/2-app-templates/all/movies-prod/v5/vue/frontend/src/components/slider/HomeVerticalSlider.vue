<template>
  <div class="verticle-slider section-padding-bottom">
    <!-- <b-container fluid> -->
    <div class="slider">
      <div class="slider-flex position-relative">
        <div class="slider--col position-relative">
          <div class="vertical-slider-prev swiper-button"><i class="iconly-Arrow-Up-2 icli"></i></div>
          <div class="slider-thumbs" data-swiper="slider-thumbs">
            <div class="swiper-container" data-swiper="slider-thumbs-inner">
              <swiper
                v-if="render"
                :dir="rtl"
                :loop="true"
                :slides-per-view="3"
                :space-between="24"
                :navigation="{
                  nextEl: '.vertical-slider-next',
                  prevEl: '.vertical-slider-prev',
                }"
                :modules="modules"
                class="swiper-wrapper top-ten-slider-nav"
                :direction="'vertical'"
                :thumbs="{ swiper: thumbsSwiper }">
                <SwiperSlide v-for="data in thumbsSwiperCard" :key="data.title" tag="li" class="swiper-slide swiper-bg">
                  <div class="block-images position-relative">
                    <div class="img-box slider--image">
                      <img :src="data.image" class="img-fluid" alt="" loading="lazy" />
                    </div>
                    <div class="block-description">
                      <h6 class="iq-title">{{ $t(data.title) }}</h6>
                      <div class="movie-time d-flex align-items-center my-2">
                        <span class="text-body">{{ data.time }}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </swiper>
            </div>
          </div>
          <div class="vertical-slider-next swiper-button"><i class="iconly-Arrow-Down-2 icli"></i></div>
        </div>
        <div class="slider-images" data-swiper="slider-images">
          <div class="swiper-container" data-swiper="slider-images-inner">
            <swiper v-if="render" :dir="rtl" :loop="true" :space-between="10" :free-mode="true" :watch-slides-progress="true" :modules="modules" :direction="'vertical'" class="swiper-container" @swiper="setThumbsSwiper">
              <SwiperSlide v-for="data in sliderData" :key="data" tag="li" class="swiper-slide">
                <div class="slider--image block-images"><img :src="data.image" loading="lazy" alt="" /></div>
                <div class="description">
                  <div class="block-description">
                    <ul class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <router-link to="" class="text-white text-decoration-none">{{ $t(data.geners) }}</router-link>
                      </li>
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <router-link to="" class="text-white text-decoration-none">{{ $t(data.geners1) }}</router-link>
                      </li>
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <router-link to="" class="text-white text-decoration-none">{{ $t(data.geners2) }}</router-link>
                      </li>
                    </ul>
                    <h2 class="iq-title mb-3">
                      <router-link to="">{{ $t(data.title) }}</router-link>
                    </h2>
                    <div class="d-flex align-items-center gap-3 mb-3">
                      <div class="slider-ratting d-flex align-items-center">
                        <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <span class="text-white ms-2 font-size-14 fw-500">{{ data.rating }}</span>
                      </div>
                      <span class="text-body">{{ data.time }}</span>
                    </div>
                    <p class="mt-0 mb-3">{{ data.description }}</p>
                    <custom-button button-title="play now" :link="{ path: '/' }"></custom-button>
                  </div>
                </div>
              </SwiperSlide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <!-- </b-container> -->
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Controller, Thumbs } from 'swiper';
import CustomButton from '../CustomButton.vue';
import { generateImgPath } from '../../StaticData/data';
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
const modules = [Navigation, Controller, Thumbs];
defineProps({
  slug: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  title: { type: String, default: '' },
  certificate: { type: String, default: '' },
  duration: { type: String, default: '' },
  detailViewLink: { type: String, default: '' },
  season: { type: String, default: '' },
});
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const thumbsSwiperCard = [
  {
    image: generateImgPath('/assets/images/top-10/06.webp'),
    title: 'home.wars_dragons',
    time: '2hr 14 mint',
  },
  {
    image: generateImgPath('/assets/images/top-10/07.webp'),
    title: 'home.the_escape',
    time: '1hr 45 mint',
  },
  {
    image: generateImgPath('/assets/images/top-10/08.webp'),
    title: 'home.x_men',
    time: '1hr 45mins',
  },
  {
    image: generateImgPath('/assets/images/top-10/09.webp'),
    title: 'home.logan',
    time: '1hr 22mins',
  },
  {
    image: generateImgPath('/assets/images/top-10/05.webp'),
    title: 'home.black_queen',
    time: '1hr 45mins',
  },
];

const sliderData = [
  {
    image: generateImgPath('/assets/images/top-10/06.webp'),
    geners: 'home.comedy',
    geners1: 'home.romance',
    geners2: 'home.action',
    title: 'home.wars_dragons',
    rating: '4.3/5',
    time: '2hr 14mins',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.  ',
  },
  {
    image: generateImgPath('/assets/images/top-10/07.webp'),
    geners: 'home.comedy',
    geners1: 'home.romance',
    geners2: 'home.action',
    title: 'home.the_escape',
    rating: '4.3/5',
    time: '1hr 45mins',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
  },
  {
    image: generateImgPath('/assets/images/top-10/08.webp'),
    geners: 'home.comedy',
    geners1: 'home.romance',
    geners2: 'home.action',
    title: 'home.x_men',
    rating: '4.3/5',
    time: '1hr 50mins',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
  },
  {
    image: generateImgPath('/assets/images/top-10/09.webp'),
    geners: 'home.comedy',
    geners1: 'home.romance',
    geners2: 'home.action',
    title: 'home.logan',
    rating: '4.3/5',
    time: '1hr 50mins',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
  },
  {
    image: generateImgPath('/assets/images/top-10/05.webp'),
    geners: 'home.comedy',
    geners1: 'home.romance',
    geners2: 'home.action',
    title: 'home.black_queen',
    rating: '4.3/5',
    time: '1hr 50mins',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
  },
];
</script>
