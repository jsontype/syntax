<template>
  <section class="banner-container section-padding-bottom">
    <div class="movie-banner">
      <div id="banner-detail-slider" class="banner-container">
        <div class="movie-banner tvshows-slider">
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
            class="swiper-banner-container mb-0"
          >
            <SwiperSlide>
              <div class="movie-banner-image">
                <img
                  src="/assets/images/video/banner-1.webp"
                  alt="movie-banner-image"
                  loading="lazy"
                />
              </div>
              <div class="shows-content h-100">
                <div class="row align-items-center h-100">
                  <div class="col-lg-7 col-md-12">
                    <h1
                      class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.6"
                    >
                      {{ $t("home.sapce") }}
                    </h1>
                    <div
                      class="flex-wrap align-items-center fadeInLeft animated"
                      data-animation-in="fadeInLeft"
                      style="opacity: 1"
                    >
                      <div
                        class="slider-ratting d-flex align-items-center gap-3"
                      >
                        <ul
                          class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                        >
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
                      <div
                        class="d-flex flex-wrap align-items-center gap-3 movie-banner-time"
                      >
                        <span class="badge bg-secondary p-2">
                          <i class="fa fa-eye"></i>
                          PG
                        </span>
                        <span class="font-size-6">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-time font-normal">
                          1{{ $t("countdown.hours") }}: 44
                          {{ $t("countdown.minute") }}
                        </span>
                        <span class="font-size-6">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-year font-normal">
                          Feb 2018
                        </span>
                      </div>
                      <p
                        class="movie-banner-text line-count-3"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        {{ $t("home.dinosaurs_group") }}
                      </p>
                    </div>
                    <div
                      class="iq-button"
                      data-animation-in="fadeInUp"
                      data-delay-in="1.2"
                    >
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="btn text-uppercase position-relative"
                      >
                        <span class="button-text">{{
                          $t("detail_page.play_now")
                        }}</span>
                        <i class="fa-solid fa-play"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="movie-banner-image">
                <img
                  src="/assets/images/video/banner-2.webp"
                  alt="movie-banner-image"
                  loading="lazy"
                />
              </div>
              <div class="shows-content h-100">
                <div class="row align-items-center h-100">
                  <div class="col-lg-7 col-md-12">
                    <h1
                      class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.6"
                    >
                      {{ $t("home.the_dragon_king") }}
                    </h1>
                    <div
                      class="flex-wrap align-items-center fadeInLeft animated"
                      data-animation-in="fadeInLeft"
                      style="opacity: 1"
                    >
                      <div
                        class="slider-ratting d-flex align-items-center gap-3"
                      >
                        <ul
                          class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                        >
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
                      <div
                        class="d-flex flex-wrap align-items-center gap-3 movie-banner-time"
                      >
                        <span class="badge bg-secondary p-2">
                          <i class="fa fa-eye"></i>
                          G
                        </span>
                        <span class="font-size-6">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-time font-normal"
                          >2{{ $t("countdown.hours") }}: 42
                          {{ $t("countdown.minute") }}
                        </span>
                        <span class="font-size-6">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-year font-normal">
                          Nov 2017
                        </span>
                      </div>
                      <p
                        class="movie-banner-text line-count-3"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        {{ $t("home.the_most_brutal_emperor") }}
                      </p>
                    </div>
                    <div
                      class="iq-button"
                      data-animation-in="fadeInUp"
                      data-delay-in="1.2"
                    >
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="btn text-uppercase position-relative"
                      >
                        <span class="button-text">{{
                          $t("detail_page.play_now")
                        }}</span>
                        <i class="fa-solid fa-play"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="movie-banner-image">
                <img
                  src="/assets/images/video/banner-3.webp"
                  alt="movie-banner-image"
                  loading="lazy"
                />
              </div>
              <div class="shows-content h-100">
                <div class="row align-items-center h-100">
                  <div class="col-lg-7 col-md-12">
                    <h1
                      class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.6"
                    >
                      {{ $t("home.charlie_chaplin") }}
                    </h1>
                    <div
                      class="flex-wrap align-items-center fadeInLeft animated"
                      data-animation-in="fadeInLeft"
                      style="opacity: 1"
                    >
                      <div
                        class="slider-ratting d-flex align-items-center gap-3"
                      >
                        <ul
                          class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                        >
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
                      <div
                        class="d-flex flex-wrap align-items-center gap-3 movie-banner-time"
                      >
                        <span class="badge bg-secondary p-2">
                          <i class="fa fa-eye"></i>
                          PG-13
                        </span>
                        <span class="font-size-6">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-time font-normal">
                          2{{ $t("countdown.hours") }}: 12
                          {{ $t("countdown.minute") }}
                        </span>
                        <span class="font-size-6">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-year font-normal">
                          Dec 2018
                        </span>
                      </div>
                      <p
                        class="movie-banner-text line-count-3"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        {{ $t("home.jumbo_also_known_as_jumbo") }}
                      </p>
                    </div>
                    <div
                      class="iq-button"
                      data-animation-in="fadeInUp"
                      data-delay-in="1.2"
                    >
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="btn text-uppercase position-relative"
                      >
                        <span class="button-text">{{
                          $t("detail_page.play_now")
                        }}</span>
                        <i class="fa-solid fa-play"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
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
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { ref, computed, watch } from "vue";
import { useSetting } from "../../store/setting/index";
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
</script>
