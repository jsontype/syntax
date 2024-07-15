<template>
  <div
    class="position-relative swiper swiper-slide-space-0 swiper-initialized swiper-horizontal swiper-pointer-events"
    data-swiper="home-banner-slider"
  >
    <Swiper
      :slides-per-view="1"
      :navigation="{
        prevEl: '.swiper-banner-button-prev',
        nextEl: '.swiper-banner-button-next',
      }"
      :space-beween="10"
      :modules="modules"
      :loop="true"
      :centered-slides="true"
      class="slider m-0 p-0 swiper-wrapper home-slider"
    >
      <SwiperSlide
        v-for="data in heroSlider"
        :key="data"
        tag="li"
        class="swiper-slide slide"
        :style="{ backgroundImage: `url(${data.thumbnail})` }"
        style="background: no-repeat"
      >
        <nuxt-link :to="{ name: 'merchandise-product-detail' }">
          <img :src="data.thumbnail" class="img-fluid w-100" loading="lazy" />
        </nuxt-link>
      </SwiperSlide>
      <div class="swiper-banner-button-prev swiper-nav">
        <i class="ri-arrow-left-s-line arrow-icon"></i>
        <svg>
          <use xlink:href="#circle"></use>
        </svg>
      </div>
      <div class="swiper-banner-button-next swiper-nav">
        <i class="ri-arrow-right-s-line arrow-icon"></i>
        <svg>
          <use xlink:href="#circle"></use>
        </svg>
        <div class="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  <!---Best Selling Categories Start--->
  <section class="category-slider-block">
    <div class="container-fluid">
      <div class="text-center">
        <h4 class="my-4 mt-md-3 mt-sm-3">
          {{ $t("merchandise.best_selling_categories") }}
        </h4>
      </div>
      <div
        class="position-relative swiper swiper-card swiper-initialized swiper-horizontal swiper-pointer-events"
        data-slide="4"
        data-laptop="4"
        data-tab="3"
        data-mobile="2"
        data-mobile-sm="1"
        data-autoplay="false"
        data-loop="false"
        data-navigation="true"
        data-pagination="true"
      >
        <swiper
          v-if="render"
          :dir="rtl"
          :slides-per-view="4"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
          tag="ul"
          class="list-inline swiper-wrapper p-0 m-0"
          :modules="modules"
          :breakpoints="{
            '0': {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            '576': {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            '1025': {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            '1500': {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }"
        >
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link :to="{ name: 'merchandise-shop' }">
                  <img
                    src="/assets/images/shop/categories/01.webp"
                    class="img-fluid"
                    alt="catImg-01"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.activeman") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/02.webp"
                    class="img-fluid"
                    alt="catImg-02"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.avengers") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/03.webp"
                    class="img-fluid"
                    alt="catImg-03"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.disney_world") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/04.webp"
                    class="img-fluid"
                    alt="catImg-04"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.fantasia") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/05.webp"
                    class="img-fluid"
                    alt="catImg-05"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.galaxy_heaven") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/06.webp"
                    class="img-fluid"
                    alt="catImg-06"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.ghost_spider") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/07.webp"
                    class="img-fluid"
                    alt="catImg-07"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.harry_david") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/08.webp"
                    class="img-fluid"
                    alt="catImg-08"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.haunted_halloween") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/09.webp"
                    class="img-fluid"
                    alt="catImg-09"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.studios") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/11.webp"
                    class="img-fluid"
                    alt="catImg-10"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.monster_house") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/12.webp"
                    class="img-fluid"
                    alt="catImg-11"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.quid_game") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/14.webp"
                    class="img-fluid"
                    alt="catImg-12"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.the_madrid") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" class="swiper-slide slide-item">
            <div class="category-inner position-relative">
              <div class="category_image">
                <nuxt-link to="/merchandise/shop">
                  <img
                    src="/assets/images/shop/categories/15.webp"
                    class="img-fluid"
                    alt="catImg-13"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="category-details">
                  <h5 class="category-title">
                    <nuxt-link :to="{ name: 'merchandise-shop' }">
                      {{ $t("merchandise.the_chapion") }}
                    </nuxt-link>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div class="swiper-button swiper-button-next"></div>
          <div class="swiper-button swiper-button-prev"></div>
        </swiper>
      </div>
    </div>
  </section>
  <!---Best Selling Categories End--->
  <section class="">
    <b-container fluid class="p-xl-0">
      <b-row class="gx-lg-0">
        <b-col lg="4" md="6" class="d-flex flex-column">
          <div class="product-box left-1-productbox">
            <nuxt-link
              :to="{ name: 'merchandise-shop' }"
              class="card-link"
            ></nuxt-link>
            <div
              class="card-img-overlay product-card-img-overlay"
              :style="`background-image: url(${generateImgPath(
                '/assets/images/shop/card/01.webp'
              )})`"
            ></div>
            <div class="card-body w-100">
              <h5 class="card-title">{{ $t("merchandise.ghost_spider") }}</h5>
              <h4 class="parent-heading">
                {{ $t("merchandise.monster_house") }}
              </h4>
              <div class="iq-button link-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="iq-button btn iq-btn-link"
                >
                  {{ $t("merchandise.shop_now") }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="product-box left-2-productbox">
            <nuxt-link
              :to="{ name: 'merchandise-shop' }"
              class="card-link"
            ></nuxt-link>
            <div
              class="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
              :style="`background-image: url(${generateImgPath(
                '/assets/images/shop/card/02.webp'
              )})`"
            ></div>
            <div class="card-body w-100">
              <h5 class="card-title">{{ $t("merchandise.harry_david") }}</h5>
              <h4 class="parent-heading">
                {{ $t("merchandise.warner_bro_films") }}
              </h4>
              <div class="iq-button link-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="iq-button btn iq-btn-link"
                >
                  {{ $t("merchandise.shop_now") }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="6" mt-md="0" mt="4" class="d-flex flex-column">
          <div class="center-productbox product-box">
            <nuxt-link
              :to="{ name: 'merchandise-shop' }"
              class="card-link"
            ></nuxt-link>
            <div
              class="card-img-overlay product-card-img-overlay"
              :style="`background-image: url(${generateImgPath(
                '/assets/images/shop/card/03.webp'
              )})`"
            ></div>
            <div class="card-body w-100">
              <h5 class="card-title">{{ $t("merchandise.avengers") }}</h5>
              <h4 class="parent-heading">
                {{ $t("merchandise.marvel_studios") }}
              </h4>
              <div class="iq-button link-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="iq-button btn iq-btn-link"
                >
                  {{ $t("merchandise.shop_now") }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </b-col>
        <b-col
          lg="4"
          md="12"
          gx-lg="0"
          mt-lg="0"
          mt-md="4"
          mt="4"
          class="d-flex flex-column"
        >
          <div class="product-box right-1-productbox">
            <nuxt-link
              :to="{ name: 'merchandise-shop' }"
              class="card-link"
            ></nuxt-link>
            <div
              class="card-img-overlay product-card-img-overlay md-mt-5"
              :style="`background-image: url(${generateImgPath(
                '/assets/images/shop/card/04.webp'
              )})`"
            ></div>
            <div class="card-body w-100">
              <h5 class="card-title">{{ $t("merchandise.harry_david") }}</h5>
              <h4 class="parent-heading">
                {{ $t("merchandise.warner_bro_films") }}
              </h4>
              <div class="iq-button link-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="iq-button btn iq-btn-link"
                >
                  {{ $t("merchandise.shop_now") }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="product-box right-2-productbox">
            <nuxt-link
              :to="{ name: 'merchandise-shop' }"
              class="card-link"
            ></nuxt-link>
            <div
              class="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
              :style="`background-image: url(${generateImgPath(
                '/assets/images/shop/card/05.webp'
              )})`"
            ></div>
            <div class="card-body w-100">
              <h5 class="card-title">{{ $t("merchandise.fantasia") }}</h5>
              <h4 class="parent-heading">
                {{ $t("merchandise.disney_world") }}
              </h4>
              <div class="iq-button link-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="iq-button btn iq-btn-link"
                >
                  {{ $t("merchandise.shop_now") }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <ProductSection
    class="newest-product-block section-padding-top"
    title="Newest Products"
  ></ProductSection>
  <section class="section-padding-bottom">
    <b-container fluid>
      <b-row>
        <b-col lg="6" md="6">
          <div class="categorie-about-left">
            <div class="categorie-about-image">
              <img
                src="/assets/images/shop/card/capton-america.webp"
                class="img-fluid"
                loading="lazy"
              />
            </div>
            <div class="text-left mb-4 pt-3">
              <h4 class="mb-2 line-count-1">
                {{ $t("merchandise.captian_america") }}
              </h4>
              <p class="mb-4 mt-2 line-count-3">
                {{ $t("merchandise.lorem_ipsum") }}
              </p>
              <div class="iq-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="btn text-uppercase position-relative"
                >
                  <span class="button-text">{{
                    $t("merchandise.view_collection")
                  }}</span>
                  <i class="fa-solid fa-play"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="6" md="6">
          <div class="categorie-about-right">
            <div class="categorie-about-image">
              <img
                src="/assets/images/shop/card/deadpool.webp"
                class="img-fluid"
                loading="lazy"
              />
            </div>
            <div class="text-left mb-4 pt-3">
              <h4 class="mb-2 line-count-1">
                {{ $t("merchandise.deadpool") }}
              </h4>
              <p class="mb-4 mt-2 line-count-3">
                {{ $t("merchandise.lorem_ipsum") }}
              </p>
              <div class="iq-button">
                <nuxt-link
                  :to="{ name: 'merchandise-shop' }"
                  class="btn text-uppercase position-relative"
                >
                  <span class="button-text">{{
                    $t("merchandise.view_collection")
                  }}</span>
                  <i class="fa-solid fa-play"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <section
    class="section-padding"
    style="
      background: url(/assets/images/shop/card/bg-img.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <img
            src="/assets/images/shop/card/multipal.webp"
            class="img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 col-md-12 mt-4 mt-md-0">
          <!--Logo -->
          <brand-logo></brand-logo>
          <h2 class="mt-3 mb-3">
            {{ $t("merchandise.wear_streamit") }}
          </h2>
          <p class="mb-4 line-count-3">
            {{ $t("merchandise.buy_exclusive_streamit_products") }}
          </p>
          <nuxt-link
            :to="{ name: 'merchandise-product-detail' }"
            class="btn btn-hover"
          >
            {{ $t("merchandise.shop_now") }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
  <ProductSection
    class="best-product-block section-padding-top"
    title="Best Sellers"
  ></ProductSection>
  <div class="product_container">
    <b-row class="gx-0">
      <b-col lg="6" class="shop-contact-one">
        <div class="channel-logo border-gredient-left">
          <h5>{{ $t("merchandise.our_multiple_locations") }}</h5>
        </div>

        <b-row class="my-4">
          <b-col lg="6" md="12">
            <h5 class="mb-3">{{ $t("shop.australia") }}:</h5>
            <p>2118 {{ $t("shop.thornridge_cir") }} 35624</p>
          </b-col>
          <b-col lg="6" md="12">
            <h5 class="mb-3">{{ $t("shop.united_states") }}:</h5>
            <p>4517 {{ $t("shop.washington_manchester") }}39495</p>
          </b-col>
        </b-row>
        <div class="d-flex align-items-center gap-2">
          <h5>{{ $t("merchandise.working_hours") }}:</h5>
          <i class="text-primary shop_store_time">
            Mon – Fri : 09:00 AM to 06:00 PM</i
          >
        </div>
      </b-col>
      <b-col lg="6" md="12" class="shop-contact">
        <img
          class="img-fluid h-100 w-100"
          src="/assets/images/shop/card/location.webp"
          alt=""
          loading="lazy"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
// import { shopBannerSlider } from '../../StaticData/shop';
import ProductSection from "../../components/sections/ProductSection.vue";
import { generateImgPath } from "../../StaticData/data";
import { Navigation } from "swiper";
// Swiper Components Import

import { Swiper, SwiperSlide } from "swiper/vue";
import { heroSlider } from "../../StaticData/shop";
import { ref, computed, watch } from "vue";
import { useSetting } from "../../store/setting/index";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const breadcrumb = useStremit();

onMounted(() => {
  breadcrumb.breadcrumbSet({ show: false, name: "" });
});

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
const modules = [Navigation];
</script>
