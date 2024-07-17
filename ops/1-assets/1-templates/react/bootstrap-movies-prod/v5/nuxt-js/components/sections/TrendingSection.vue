<template>
  <section class="tranding-tab-slider section-padding">
    <b-container fluid>
      <b-row class="m-0 p-0">
        <div id="iq-trending" class="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-0 px-md-3">
            <h5 class="main-title text-capitalize mb-0">
              {{ $t("home.trending") }}
            </h5>
          </div>
          <div class="trending-contens position-relative">
            <div id="gallery-top" class="swiper gallery-thumbs" data-swiper="gallery-top">
              <Swiper v-if="render" :dir="rtl" :loop="true" :slides-per-view="5" :modules="modules" :touch-ratio="0.2"
                :slide-to-clicked-slide="true" :centered-slides="true"
                class="list-inline p-0 m-0 trending-slider-nav align-items-center" :thumbs="{ swiper: thumbsSwiper }">
                <SwiperSlide v-for="data in trendingSlider" :key="data" tag="li" class="swiper-slide">
                  <nuxt-link to="#">
                    <div class="movie-swiper position-relative">
                      <img :src="data.image" alt="" loading="lazy" />
                    </div>
                  </nuxt-link>
                </SwiperSlide>
              </Swiper>
            </div>
            <Swiper v-if="render" :dir="rtl" :modules="modules" :space-between="0" effect="fade" :loop="true"
              :slides-per-view="1" :navigation="{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }" class="list-inline p-0 m-0 d-flex align-items-center trending-slider trending-tab-slider"
              @swiper="setThumbsSwiper">
              <SwiperSlide v-for="data in trendingSlider" :key="data" tag="li" class="slider-big-img-1 p-0">
                <div class="trending-tab-slider-image">
                  <img :src="data.image" alt="trending-tab-slider-image" loading="lazy" />
                </div>
                <div class="tranding-block position-relative">
                  <div class="trending-custom-tab">
                    <div class="tab-title-info position-relative">
                      <b-tabs class="trending-custom-tab" content-class="tab-content trending-content" pills
                        nav-class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline">
                        <b-tab :title="$t('home.episodes')" active>
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                            <h1 class="trending-text big-title text-uppercase texture-text">
                              {{ $t("home.the_hero_camp") }}
                            </h1>
                            <div class="d-flex align-items-center text-white text-detail flex-wrap">
                              <span>3 {{ $t("episode_page.seasons") }}</span>
                              <span class="trending-year">2023</span>
                            </div>
                            <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                              <nuxt-link to="#"><img src="/assets/images/movies/trending-label.webp" class="img-fluid"
                                  alt="" loading="lazy" /></nuxt-link>
                              <span class="text-gold">#2 {{ $t("home.series_today") }}</span>
                            </div>
                            <p class="trending-dec line-count-3">
                              {{ $t("ott_home.content_here") }}
                            </p>
                            <div class="p-btns">
                              <div class="iq-button">
                                <nuxt-link :to="{ name: 'tv-shows-detail' }"
                                  class="btn text-uppercase position-relative">
                                  <span class="button-text">{{
                $t("ott_home.play_now")
              }}</span>
                                  <i class="fa-solid fa-play"></i>
                                </nuxt-link>
                              </div>
                            </div>
                            <div class="trending-list mt-4">
                              <div class="text-primary title">
                                {{ $t("home.starring") }}:
                                <span class="text-body">{{
                $t("home.wagner_moura_boyd_holbrook_joanna")
              }}</span>
                              </div>
                              <div class="text-primary title">
                                {{ $t("ott_home.genres") }}:
                                <span class="text-body">{{
                $t("home.crime_action_thriller_biography")
              }}</span>
                              </div>
                              <div class="text-primary title">
                                This Is:
                                <span class="text-body">{{
                  $t("home.violent_forceful")
                }}</span>
                              </div>
                            </div>
                          </div>
                        </b-tab>
                        <b-tab :title="$t('home.episodes')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                            <h1 class="trending-text big-title text-uppercase texture-text">
                              {{ $t("home.the_hero_camp") }}
                            </h1>
                            <div class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                              <span class="season_date ms-2">
                                2 {{ $t("episode_page.seasons") }}
                              </span>
                              <span class="trending-year">Feb 2019</span>
                            </div>
                            <div class="iq-custom-select d-inline-block sea-epi mb-4">
                              <select name="cars" class="form-control">
                                <option value="season1">
                                  {{ $t("episode_page.seasons") }} 1
                                </option>
                                <option value="season2">
                                  {{ $t("episode_page.seasons") }} 2
                                </option>
                                <option value="season3">
                                  {{ $t("episode_page.seasons") }} 3
                                </option>
                              </select>
                            </div>
                            <div class="position-relative swiper swiper-card streamit-block" data-slide="4"
                              data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                              data-loop="false" data-navigation="true" data-pagination="true">
                              <Swiper v-if="render" :dir="rtl" class="p-0 swiper-wrapper m-0 list-inline"
                                :slides-per-view="4">
                                <SwiperSlide v-for="dataEP in episode" :key="dataEP.episodTitle" tag="li"
                                  class="swiper-slide">
                                  <episode-card :link="dataEP.link" :image="dataEP.image"
                                    :show-episod="dataEP.showEpisod" :episod-date="dataEP.episodDate"
                                    :episod-time="dataEP.episodTime" :episod-title="dataEP.episodTitle"></episode-card>
                                </SwiperSlide>
                              </Swiper>
                              <div class="swiper-button swiper-button-next"></div>
                              <div class="swiper-button swiper-button-prev"></div>
                            </div>
                          </div>
                        </b-tab>
                        <b-tab :title="$t('home.trailers')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction text-center">
                            <h3 class="trending-text big-title text-uppercase texture-text mt-2">
                              {{ $t("home.watch_trailer") }}
                            </h3>
                            <div class="episodes-contens mt-5">
                              <div class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                <div class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                  <img src="/assets/images/tv-show/season/01.webp" class="trailer-image"
                                    alt="trailer-image" loading="lazy" />
                                  <a href="/assets/images/video/trailer.mp4"
                                    class="video-open playbtn text-decoration-none" tabindex="0">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px"
                                      height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                      xml:space="preserve">
                                      <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                      <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                      </circle>
                                    </svg>
                                    <span class="w-trailor text-uppercase">
                                      {{ $t("home.watch_trailer") }}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-tab>
                        <b-tab :title="$t('home.similar_like_this')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                            <h3 class="trending-text big-title text-uppercase texture-text mb-5">
                              {{ $t("ott_home.recommended_for_you") }}
                            </h3>
                            <div class="position-relative swiper swiper-card streamit-block" data-slide="4"
                              data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                              data-loop="false" data-navigation="true" data-pagination="true">
                              <Swiper v-if="render" :dir="rtl" class="p-0 swiper-wrapper m-0 list-inline"
                                :slides-per-view="4">
                                <SwiperSlide v-for="dataEP1 in episode" :key="dataEP1.title" tag="li"
                                  class="swiper-slide">
                                  <episode-card :link="dataEP1.link" :image="dataEP1.image"
                                    :show-episod="dataEP1.showEpisod" :episod-date="dataEP1.episodDate"
                                    :episod-time="dataEP1.episodTime"
                                    :episod-title="dataEP1.episodTitle"></episode-card>
                                </SwiperSlide>
                              </Swiper>
                              <div class="swiper-button swiper-button-next"></div>
                              <div class="swiper-button swiper-button-prev"></div>
                            </div>
                          </div>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div class="swiper-arrow swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div class="swiper-arrow swiper-button-prev">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
            </Swiper>
          </div>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
// Swiper Components Import
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade, Autoplay, Thumbs } from "swiper";
import { generateImgPath } from "../../StaticData/data";
import EpisodeCard from "../cards/EpisodeCard.vue";
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
const modules = [Navigation, Autoplay, EffectFade, Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const trendingSlider = [
  {
    image: generateImgPath("/assets/images/movies/ott1.webp"),
  },
  {
    image: generateImgPath("/assets/images/movies/ott2.webp"),
  },
  {
    image: generateImgPath("/assets/images/movies/ott3.webp"),
  },
  {
    image: generateImgPath("/assets/images/movies/banner1.webp"),
  },
  {
    image: generateImgPath("/assets/images/movies/banner2.webp"),
  },
  {
    image: generateImgPath("/assets/images/movies/banner3.webp"),
  },
];

const episode = [
  {
    image: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
    showEpisod: "S01E01",
    episodDate: "October 1, 2022",
    episodTime: "45min",
    episodTitle: "Episode 1",
    link: "tv-shows-episode",
  },
  {
    image: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
    showEpisod: "S01E02",
    episodDate: "October 8, 2022",
    episodTime: "35min",
    episodTitle: "Episode 2",
    link: "tv-shows-episode",
  },
  {
    image: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
    showEpisod: "S01E03",
    episodDate: "October 15, 2022",
    episodTime: "36min",
    episodTitle: "Episode 3",
    link: "tv-shows-episode",
  },
  {
    image: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
    showEpisod: "S01E04",
    episodDate: "October 22, 2022",
    episodTime: "41min",
    episodTitle: "Episode 4",
    link: "tv-shows-episode",
  },
  {
    image: generateImgPath("/assets/images/tv-show/episodes/05.webp"),
    showEpisod: "S01E05",
    episodDate: "October 22, 2022",
    episodTime: "41min",
    episodTitle: "Episode 5",
    link: "tv-shows-episode",
  },
];
</script>
