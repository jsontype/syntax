<template>
  <div class="tab-slider">
    <div class="slider">
      <Swiper
        v-if="render"
        :dir="rtl"
        :watch-slides-progress="true"
        class="position-relative swiper swiper-card"
        :navigation="{
          prevEl: '.joint-arrows .swiper-button-prev',
          nextEl: '.joint-arrows .swiper-button-next',
        }"
        effect="fade"
        :slides-per-view="1"
        :modules="modules"
      >
        <SwiperSlide
          v-for="data in tabSlider"
          :key="data"
          tag="li"
          class="tab-slider-banner"
        >
          <div class="tab-slider-banner-images">
            <img :src="data.image" alt="tab-slider-background" loading="lazy" />
          </div>
          <div class="block-images position-relative w-100">
            <div class="container-fluid">
              <div class="row align-items-center min-vh-100 h-100 my-4">
                <div class="col-md-5 col-lg-5 col-xxl-5">
                  <div class="tab-left-details">
                    <div class="d-flex align-items-center gap-3 mb-4">
                      <a href="javascript:void(0);"
                        ><img
                          src="/assets/images/movies/trending-label.webp"
                          class="img-fluid"
                          alt=""
                          loading="lazy"
                      /></a>
                      <h5 class="text-gold">
                        <span class="text-primary">#4</span>
                        {{ $t(data.movieTime) }}
                      </h5>
                    </div>
                    <h1 class="mb-2 fw-500 text-capitalize texture-text">
                      {{ $t(data.title) }}
                    </h1>
                    <p class="mb-0 font-size-14 line-count-2">
                      {{ $t("ott_home.sds") }}
                    </p>
                    <ul
                      class="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40"
                    >
                      <li class="font-size-18">Nov 2022</li>
                      <li class="font-size-18">
                        {{ $t("ott_home.season") }} 1
                      </li>
                    </ul>
                    <div class="iq-button">
                      <nuxt-link
                        :to="{ name: 'movies-detail' }"
                        class="btn text-uppercase position-relative"
                      >
                        <span class="button-text">{{
                          $t("ott_home.stream_now")
                        }}</span>
                        <i class="fa-solid fa-play"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-1 col-lg-2 col-xxl-3"></div>
                <div class="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                  <div class="tab-block">
                    <h4 class="tab-title text-capitalize mb-0">
                      {{ $t("ott_home.all_episode") }}
                    </h4>
                    <div class="tab-bottom-bordered border-0">
                      <b-tabs
                        class="trending-custom-tab"
                        content-class="tab-content trending-content"
                        pills
                        nav-class="nav nav-tabs nav-pills mb-3 overflow-x-scroll"
                      >
                        <template
                          v-for="(episodes, index) in data.seasons"
                          :key="episodes.title + 'seasons'"
                        >
                          <b-tab
                            :title="$t(episodes.title)"
                            :active="index == 0"
                          >
                            <ul class="list-inline m-0 p-0">
                              <template
                                v-for="(episode, cindex) in episodes.episodes"
                                :key="
                                  cindex +
                                  episode.title +
                                  'episodes' +
                                  data.title
                                "
                              >
                                <li class="d-flex align-items-center gap-3">
                                  <div class="image-box flex-shrink-0">
                                    <img
                                      :src="episode.image"
                                      alt="image-icon"
                                      class="img-fluid rounded"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div class="image-details">
                                    <h6 class="mb-1 text-capitalize">
                                      <span class="text-primary"
                                        >E{{ index + 1 }}</span
                                      >
                                      - {{ $t(episode.title) }}
                                    </h6>
                                    <small
                                      >45 {{ $t("countdown.minute") }}</small
                                    >
                                  </div>
                                </li>
                              </template>
                            </ul>
                          </b-tab>
                        </template>
                      </b-tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div class="joint-arrows">
          <div class="swiper-button swiper-button-next"></div>
          <div class="swiper-button swiper-button-prev"></div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper";
import { tabSlider } from "../../StaticData/data";
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

const modules = [Navigation, Pagination, EffectFade];
</script>
