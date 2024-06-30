<template>
  <section class="section-padding">
    <b-container fluid>
      <b-row>
        <b-col lg="4" md="5">
          <div class="playlist-main-banner position-relative">
            <nuxt-link
              :to="{ name: 'movies-detail' }"
              class="position-absolute top-0 bottom-0 start-0 end-0 z-1"
            >
            </nuxt-link>
            <div class="img-box">
              <img
                src="/assets/images/movies/ott2.webp"
                alt="movie-card"
                class="img-fluid object-cover d-block"
              />
            </div>
            <div class="img-detail z-3">
              <nuxt-link
                to-fslightbox="html5-video"
                href="#"
                class="video-open playbtn block-images position-relative playbtn_thumbnail"
                @click="toggler = !toggler"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="25px"
                  viewBox="0 0 213.7 213.7"
                  enable-background="new 0 0 213.7 213.7"
                  xml:space="preserve"
                >
                  <polygon
                    class="triangle"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="73.5,62.5 148.5,105.8 73.5,149.1 "
                  ></polygon>
                  <circle
                    class="circle"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="106.8"
                    cy="106.8"
                    r="103.3"
                  ></circle>
                </svg>
                <span
                  class="w-trailor text-uppercase font-size-14 ms-2 fw-500"
                  >{{ $t("detail_page.play_all") }}</span
                >
              </nuxt-link>
            </div>
          </div>
        </b-col>
        <b-col lg="8" md="7">
          <div class="playlist-listing mt-4 mt-md-0">
            <h4 class="fw-500">{{ $t("detail_page.playlist_demo") }} 1</h4>
            <div class="seperator d-flex align-items-center">
              <span
                class="text-body fw-semibold font-size-12 text-capitalize"
                >{{ $t("detail_page.public") }}</span
              >
              <span class="circle circle-small"></span>
              <span class="text-body fw-semibold font-size-12 text-capitalize"
                >5 {{ $t("detail_page.videos") }}</span
              >
            </div>
            <ul class="list-inline mt-3 mt-md-5 p-0">
              <li>
                <div class="watchlist-warpper card-style-two">
                  <div
                    class="block-images d-flex align-items-center flex-wrap gap-2 gap-md-3"
                  >
                    <div class="img-box">
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="position-absolute top-0 bottom-0 start-0 end-0"
                      ></nuxt-link>
                      <img
                        src="/assets/images/movies/latest/01.webp"
                        alt="movie-card"
                        class="img-fluid object-cover d-block border-0"
                      />
                    </div>
                    <div class="card-description">
                      <h5 class="text-capitalize fw-500">
                        <a href="">{{ $t("detail_page.mortal_nories") }}</a>
                      </h5>
                      <div class="seperator d-flex align-items-center">
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >30 {{ $t("detail_page.views") }}</span
                        >
                        <span class="circle circle-small"></span>
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >1 {{ $t("detail_page.month_age") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="watchlist-warpper card-style-two">
                  <div
                    class="block-images d-flex align-items-center flex-wrap gap-2 gap-md-3"
                  >
                    <div class="img-box">
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="position-absolute top-0 bottom-0 start-0 end-0"
                      ></nuxt-link>
                      <img
                        src="/assets/images/movies/latest/02.webp"
                        alt="movie-card"
                        class="img-fluid object-cover d-block border-0"
                      />
                    </div>
                    <div class="card-description">
                      <h5 class="text-capitalize fw-500">
                        <a href="">{{ $t("detail_page.advetre") }}</a>
                      </h5>
                      <div class="seperator d-flex align-items-center">
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >75 {{ $t("detail_page.views") }}</span
                        >
                        <span class="circle circle-small"></span>
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >3 {{ $t("detail_page.month_age") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="watchlist-warpper card-style-two">
                  <div
                    class="block-images d-flex align-items-center flex-wrap gap-2 gap-md-3"
                  >
                    <div class="img-box">
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="position-absolute top-0 bottom-0 start-0 end-0"
                      ></nuxt-link>
                      <img
                        src="/assets/images/movies/latest/03.webp"
                        alt="movie-card"
                        class="img-fluid object-cover d-block border-0"
                      />
                    </div>
                    <div class="card-description">
                      <h5 class="text-capitalize fw-500">
                        <a href="">{{ $t("detail_page.net_alio") }}</a>
                      </h5>
                      <div class="seperator d-flex align-items-center">
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >150 {{ $t("detail_page.views") }}</span
                        >
                        <span class="circle circle-small"></span>
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >2 {{ $t("detail_page.month_age") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="watchlist-warpper card-style-two">
                  <div
                    class="block-images d-flex align-items-center flex-wrap gap-2 gap-md-3"
                  >
                    <div class="img-box">
                      <nuxt-link
                        :to="{ name: 'videos-detail' }"
                        class="position-absolute top-0 bottom-0 start-0 end-0"
                      ></nuxt-link>
                      <img
                        src="/assets/images/movies/latest/04.webp"
                        alt="movie-card"
                        class="img-fluid object-cover d-block border-0"
                      />
                    </div>
                    <div class="card-description">
                      <h5 class="text-capitalize fw-500">
                        <a href="">{{ $t("detail_page.arrivaal") }}</a>
                      </h5>
                      <div class="seperator d-flex align-items-center">
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >300 {{ $t("detail_page.views") }}</span
                        >
                        <span class="circle circle-small"></span>
                        <span
                          class="text-body fw-semibold font-size-12 text-capitalize"
                          >5{{ $t("detail_page.month_age") }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <FsLightbox
    :toggler="toggler"
    :sources="['/assets/images/video/trailer.mp4']"
  />
</template>
<script setup>
//plugins
import FsLightbox from "fslightbox-vue/v3";

//utilities
import { useEnterExit } from "~/utilities/usePage";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

useEnterExit();

const toggler = ref(false);
</script>
