<template>
  <section
    id="parallex"
    class="parallax-window bg-attachment-fixed"
    style="background: url(assets/images/parallax/parallex.webp) fixed"
  >
    <div class="container-fluid h-100">
      <div
        class="row align-items-center justify-content-center h-100 parallaxt-details"
      >
        <div class="col-xl-5 col-lg-12 col-md-12 r-mb-23">
          <div class="text-start">
            <h2 class="big-font-5 text-uppercase texture-text mb-0">
              {{ $t("home.bailey") }}
            </h2>
            <div class="d-flex flex-wrap align-items-center r-mb-23 my-4">
              <div class="slider-ratting d-flex align-items-center">
                <ul
                  class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left"
                >
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
                <span class="text-white ms-2 font-size-14 fw-500">4.2</span>
                <span class="ms-2">
                  <img
                    src="/assets/images/movies/imdb-logo.svg"
                    alt="imdb logo"
                    class="img-fluid"
                    loading="lazy"
                  />
                </span>
              </div>
              <span
                class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary"
                >15+</span
              >
              <span class="font-size-14 fw-500"
                >2 {{ $t("countdown.hours") }} : 6
                {{ $t("countdown.minute") }}</span
              >
            </div>
            <h4 class="iq-title mb-2 fw-bold">
              {{ $t("home.movie_year") }}
            </h4>
            <p class="line-count-2 w-75 mb-5">
              {{ $t("home.baileys_irish_cream") }}
            </p>
            <custom-button
              button-title="$t('ott_home.play_now')"
              :link="{ name: 'movies-detail' }"
            ></custom-button>
          </div>
        </div>
        <div class="col-xl-7 col-lg-12 col-md-12 mt-5 mt-xl-0">
          <div class="parallax-img">
            <nuxt-link :to="{ name: 'movies-detail' }">
              <img
                src="/assets/images/parallax/parallex.webp"
                class="img-fluid w-100"
                loading="lazy"
                alt="bailey"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import CustomButton from "../CustomButton.vue";
</script>
