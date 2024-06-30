<template>
  <div class="iq-banner-thumb-slider">
    <div class="slider">
      <div class="position-relative slider-bg d-flex justify-content-end">
        <div class="position-relative my-auto">
          <div class="horizontal_thumb_slider" data-swiper="slider-thumbs-ott">
            <div class="banner-thumb-slider-nav">
              <Swiper
                v-if="render"
                :dir="rtl"
                :slides-per-view="2"
                :navigation="{
                  prevEl: '.slider-prev',
                  nextEl: '.slider-next',
                }"
                class="swiper-horizontal swiper-container m-0"
                :space-between="24"
                :modules="modules"
                :loop="true"
                :looped-slides="8"
                :thumbs="{ swiper: thumbsSwiper }"
              >
                <SwiperSlide class="swiper-bg">
                  <div class="block-images position-relative">
                    <div class="img-box">
                      <img
                        src="/assets/images/movies/ott1.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="block-description ps-3">
                        <h6 class="iq-title fw-500 mb-0">
                          {{ $t("ott_home.the_hunter") }}
                        </h6>
                        <span class="fs-12"
                          >2 {{ $t("countdown.hours") }} 6
                          {{ $t("countdown.minute") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-bg">
                  <div class="block-images position-relative">
                    <div class="img-box">
                      <img
                        src="/assets/images/movies/ott2.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="block-description">
                        <h6 class="iq-title fw-500 mb-0">
                          {{ $t("ott_home.the_hunter") }}
                        </h6>
                        <span class="fs-12"
                          >2 {{ $t("countdown.hours") }} 14
                          {{ $t("countdown.minute") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-bg">
                  <div class="block-images position-relative">
                    <div class="img-box">
                      <img
                        src="/assets/images/movies/ott3.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="block-description">
                        <h6 class="iq-title fw-500 mb-0">
                          {{ $t("ott_home.the_hunter") }}
                        </h6>
                        <span class="fs-12"
                          >2 {{ $t("countdown.hours") }} 55
                          {{ $t("countdown.minute") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="slider-prev swiper-button">
                <i class="iconly-Arrow-Left-2 icli"></i>
              </div>
              <div class="slider-next swiper-button">
                <i class="iconly-Arrow-Right-2 icli"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-images" data-swiper="slider-images-ott">
          <Swiper
            v-if="render"
            :dir="rtl"
            :loop="true"
            :space-between="0"
            :slides-per-view="1"
            :looped-slides="8"
            :effect="'fade'"
            :modules="modules"
            @swiper="setThumbsSwiper"
            class="swiper-container"
          >
            <SwiperSlide class="p-0">
              <div class="slider--image block-images">
                <img
                  src="/assets/images/movies/ott1.webp"
                  loading="lazy"
                  alt="banner"
                />
              </div>
              <div class="description">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6 col-md-12">
                    <div class="slider-content">
                      <div class="d-flex align-items-center RightAnimate mb-3">
                        <span
                          class="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3"
                          >Pg</span
                        >
                        <ul
                          class="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag"
                        >
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.adventure")
                            }}</nuxt-link>
                          </li>
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.thriller")
                            }}</nuxt-link>
                          </li>
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.drama")
                            }}</nuxt-link>
                          </li>
                        </ul>
                      </div>
                      <h1
                        class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two"
                      >
                        {{ $t("ott_home.the_hunter") }}
                      </h1>
                      <p class="line-count-3 RightAnimate-two">
                        {{ $t("ott_home.after_death") }}
                      </p>
                      <div
                        class="d-flex flex-wrap align-items-center gap-3 RightAnimate-three"
                      >
                        <div class="slider-ratting d-flex align-items-center">
                          <ul
                            class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left"
                          >
                            <li>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                          </ul>
                          <span class="text-white ms-2 font-size-14 fw-500"
                            >4.3/5</span
                          >
                          <span class="ms-2">
                            <img
                              src="/assets/images/movies/imdb-logo.svg"
                              alt="imdb logo"
                              class="img-fluid"
                              loading="lazy"
                            />
                          </span>
                        </div>
                        <span class="font-size-14 fw-500"
                          >2 {{ $t("countdown.hours") }}: 6
                          {{ $t("countdown.minute") }}</span
                        >
                        <div
                          class="text-primary font-size-14 fw-500 text-capitalize"
                        >
                          {{ $t("ott_home.genres") }}:
                          <nuxt-link
                            :to="{ name: 'view-all' }"
                            class="text-decoration-none ms-1"
                            >{{ $t("ott_home.drama") }}</nuxt-link
                          >
                        </div>
                        <div
                          class="text-primary font-size-14 fw-500 text-capitalize"
                        >
                          {{ $t("ott_home.starting") }}:
                          <nuxt-link to="" class="text-decoration-none ms-1">{{
                            $t("ott_home.jeffrey_silver")
                          }}</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <custom-button
                      :button-title="$t('ott_home.stream_now')"
                      :link="{ name: 'movies-detail' }"
                    ></custom-button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="p-0">
              <div class="slider--image block-images">
                <img
                  src="/assets/images/movies/ott2.webp"
                  loading="lazy"
                  alt="banner"
                />
              </div>
              <div class="description">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6 col-md-12">
                    <div class="slider-content">
                      <div class="d-flex align-items-center RightAnimate mb-3">
                        <span
                          class="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3"
                          >NC-17</span
                        >
                        <ul
                          class="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag"
                        >
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.animation")
                            }}</nuxt-link>
                          </li>
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.sci_fi")
                            }}</nuxt-link>
                          </li>
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.action")
                            }}</nuxt-link>
                          </li>
                        </ul>
                      </div>
                      <h1
                        class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two"
                      >
                        {{ $t("ott_home.the_mandalorian") }}
                      </h1>
                      <p class="line-count-3 RightAnimate-two">
                        {{ $t("ott_home.after_galactic") }}
                      </p>
                      <div
                        class="d-flex flex-wrap align-items-center gap-3 RightAnimate-three"
                      >
                        <div class="slider-ratting d-flex align-items-center">
                          <ul
                            class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left"
                          >
                            <li>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                          </ul>
                          <span class="text-white ms-2 font-size-14 fw-500"
                            >4.3/5</span
                          >
                        </div>
                        <span class="font-size-14 fw-500"
                          >2 {{ $t("countdown.hours") }}: 14
                          {{ $t("countdown.minute") }}</span
                        >
                        <div
                          class="text-primary font-size-14 fw-500 text-capitalize"
                        >
                          {{ $t("ott_home.genres") }}:
                          <nuxt-link
                            :to="{ name: 'view-all' }"
                            class="text-decoration-none ms-1"
                            >{{ $t("ott_home.sci_fi") }}</nuxt-link
                          >
                        </div>
                        <div
                          class="text-primary font-size-14 fw-500 text-capitalize"
                        >
                          {{ $t("ott_home.starting") }}:
                          <nuxt-link to="" class="text-decoration-none ms-1">{{
                            $t("ott_home.james_chinlund")
                          }}</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <custom-button
                      :button-title="$t('ott_home.stream_now')"
                      :link="{ name: 'movies-detail' }"
                    ></custom-button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="p-0">
              <div class="slider--image block-images">
                <img
                  src="/assets/images/movies/ott3.webp"
                  loading="lazy"
                  alt="banner"
                />
              </div>
              <div class="description">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6 col-md-12">
                    <div class="slider-content">
                      <div class="d-flex align-items-center RightAnimate mb-3">
                        <span
                          class="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3"
                          >G</span
                        >
                        <ul
                          class="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag"
                        >
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.history")
                            }}</nuxt-link>
                          </li>
                          <li
                            class="position-relative text-capitalize font-size-14 letter-spacing-1"
                          >
                            <nuxt-link to="" class="text-decoration-none">{{
                              $t("ott_home.action")
                            }}</nuxt-link>
                          </li>
                        </ul>
                      </div>
                      <h1
                        class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two"
                      >
                        {{ $t("ott_home.better_call_saul") }}
                      </h1>
                      <p class="line-count-3 RightAnimate-two">
                        {{ $t("ott_home.ex_jimmy") }}
                      </p>
                      <div
                        class="d-flex flex-wrap align-items-center gap-3 RightAnimate-three"
                      >
                        <div class="slider-ratting d-flex align-items-center">
                          <ul
                            class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left"
                          >
                            <li>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                          </ul>
                        </div>
                        <span class="font-size-14 fw-500"
                          >2 {{ $t("countdown.hours") }}: 55
                          {{ $t("countdown.minute") }}</span
                        >
                        <div
                          class="text-primary font-size-14 fw-500 text-capitalize"
                        >
                          {{ $t("ott_home.genres") }}:
                          <nuxt-link
                            :to="{ name: 'view-all' }"
                            class="text-decoration-none ms-1"
                            >{{ $t("ott_home.horror") }}</nuxt-link
                          >
                        </div>
                        <div
                          class="text-primary font-size-14 fw-500 text-capitalize"
                        >
                          {{ $t("ott_home.starting") }}:
                          <nuxt-link
                            :to="{ name: 'cast-detail' }"
                            class="text-decoration-none ms-1"
                            >{{ $t("ott_home.brenda_chapman") }}</nuxt-link
                          >
                          <span class="text-body">,</span>
                          <nuxt-link to="" class="text-decoration-none ms-1">{{
                            $t("ott_home.caleb_deschannelr")
                          }}</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <custom-button
                      :button-title="$t('ott_home.stream_now')"
                      :link="{ name: 'movies-detail' }"
                    ></custom-button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Controller, Thumbs, EffectFade } from "swiper";
import CustomButton from "../CustomButton.vue";
import { ref, computed, watch } from "vue";
import { useSetting } from "../../store/setting/index";
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    thumbsSwiper.value = null;
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

// Swiper Modules
const modules = [Navigation, Controller, Thumbs, EffectFade];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>
