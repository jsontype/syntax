<template>
  <div class="tv-show-detail">
    <b-container fluid>
      <div class="overlay-wrapper iq-main-slider" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/tv-show/episodes/main-banner.webp') + ')', 'background-repeat': 'no-repeat' }">
        <div class="banner-caption">
          <div class="trending-info p-0">
            <h1 class="texture-text big-font text-uppercase mt-2">{{ $t('episode_page.zombie_world') }}</h1>
            <div class="slider-ratting d-flex align-items-center gap-3" data-animation-in="fadeInLeft">
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
                  <i class="fa fa-star-half" aria-hidden="true"></i>
                </li>
              </ul>
              <span class="text-white">4.5 <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" class="img-fluid ms-2" /></span>
            </div>
            <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
              <li class="trending-list">
                <router-link class="text-primary text-uppercase font-size-18" :to="{ name: 'landing-page.view-all' }">{{ $t('episode_page.comedy') }}</router-link>
              </li>
              <li class="trending-list">
                <router-link class="text-primary text-uppercase font-size-18" :to="{ name: 'landing-page.view-all' }">{{ $t('episode_page.drama') }}</router-link>
              </li>
            </ul>
            <div class="d-flex flex-wrap align-items-center gap-3 font-size-20 mb-3 fw-500 text-white">
              <span>{{ $t('episode_page.seasons') }} 1 </span>
              <span>Feb 2019</span>
            </div>
            <p class="line-count-2 my-3">{{ $t('episode_page.travels_lone') }}</p>
          </div>
          <div class="position-relative my-4">
            <router-link :to="{ name: 'landing-page.episode' }" class="d-flex align-items-center gap-3">
              <div class="play-button">
                <i class="fa-solid fa-play"></i>
              </div>
              <h4 class="text-white fw-bold m-0">{{ $t('episode_page.latest_episode') }}</h4>
            </router-link>
          </div>
          <div class="d-flex align-items-center flex-wrap gap-4 mb-4">
            <ul class="list-inline p-0 m-0 share-icons music-play-lists mb-n2 mx-n2">
              <li class="share">
                <span><i class="fa-solid fa-share-nodes"></i></span>
                <div class="share-box">
                  <svg width="15" height="40" viewBox="0 0 15 40" class="share-shape" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                  </svg>
                  <div class="d-flex align-items-center">
                    <a href="#" class="share-ico"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="share-ico"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="share-ico"><i class="fa-solid fa-link"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <span><i class="fa-solid fa-heart"></i></span>
              </li>
              <li>
                <span><i class="fa-solid fa-plus"></i></span>
              </li>
            </ul>
            <div class="movie-detail-select">
              <select ref="selectElement" name="movieselect" class="form-control movie-select" :tabindex="tabindex">
                <option value="1">{{ $t('detail_page.playlist') }}</option>
                <option value="2">{{ $t('detail_page.zombie_island') }}</option>
                <option value="3">{{ $t('detail_page.sand_dust') }}</option>
                <option value="4">{{ $t('detail_page.jumbo_queen') }}</option>
              </select>
            </div>
          </div>
          <ul class="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
            <li class="iq-tag-title text-primary mb-0">
              <i class="fa fa-tags" aria-hidden="true"></i>
              Tags:
            </li>
            <li>
              <router-link class="title" :to="{ name: 'landing-page.view-all' }">4K {{ $t('detail_page.ultra') }} </router-link><span class="text-secondary">,</span>
            </li>
            <li>
              <router-link class="title" :to="{ name: 'landing-page.view-all' }">{{ $t('detail_page.brother') }}</router-link
              ><span class="text-secondary">,</span>
            </li>
            <li>
              <router-link class="title" :to="{ name: 'landing-page.view-all' }">{{ $t('detail_page.brother_relationship') }}</router-link
              ><span class="text-secondary">,</span>
            </li>
            <li>
              <router-link class="title" :to="{ name: 'landing-page.view-all' }">{{ $t('detail_page.kings') }}</router-link
              ><span class="text-secondary">,</span>
            </li>
            <li>
              <router-link class="title" :to="{ name: 'landing-page.view-all' }">{{ $t('detail_page.vikings') }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </b-container>
  </div>
  <!-- Episode Start -->
  <div class="show-episode section-padding">
    <b-container fluid>
      <div class="show-movie-section">
        <div class="iq-custom-select d-inline-block">
          <select ref="selectElement1" class="form-control movie-select" :tabindex="tabindex1">
            <option value="season1">{{ $t('detail_page.season') }} 1</option>
            <option value="season1">{{ $t('detail_page.season') }} 2</option>
          </select>
        </div>
        <div class="show-custom-tab">
          <ul class="iq-custom-tab tab-bg-fill nav nav-pills text-center list-inline my-4" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active show m-0" data-bs-toggle="pill" href="#episodes" role="tab" aria-selected="true">{{ $t('detail_page.episode') }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link m-0" data-bs-toggle="pill" href="#description" role="tab" aria-selected="false" tabindex="-1">{{ $t('detail_page.description') }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link m-0" data-bs-toggle="pill" href="#rate-review" role="tab" aria-selected="false" tabindex="-1">{{ $t('detail_page.rate') }} &amp; {{ $t('detail_page.review') }}</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="episodes" class="tab-pane animated fadeInUp active show" role="tabpanel">
              <div class="row list-inline p-0 mb-0">
                <div class="col-lg-3 col-sm-12 col-md-6">
                  <div class="episode-block">
                    <div class="block-image position-relative">
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <img src="/assets/images/tv-show/episodes/01.webp" class="img-fluid img-zoom" alt="showImg-" loading="lazy" />
                      </router-link>
                      <div class="episode-number">S01E01</div>
                      <div class="episode-play">
                        <router-link :to="{ name: 'landing-page.episode' }" tabindex="0">{{ '' }}<i class="fa-solid fa-play"></i></router-link>
                      </div>
                    </div>
                    <div class="epi-desc p-3">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <span class="border-gredient-left text-white rel-date">October 1, 2020</span>
                        <span class="text-primary run-time">45min</span>
                      </div>
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <h5 class="epi-name text-white mb-0">{{ $t('detail_page.zombie_island') }} 1</h5>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-6">
                  <div class="episode-block">
                    <div class="block-image position-relative">
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <img src="/assets/images/tv-show/episodes/02.webp" class="img-fluid img-zoom" alt="showImg-" loading="lazy" />
                      </router-link>
                      <div class="episode-number">S01E02</div>
                      <div class="episode-play">
                        <router-link :to="{ name: 'landing-page.episode' }" tabindex="0">{{ '' }}<i class="fa-solid fa-play"></i></router-link>
                      </div>
                    </div>
                    <div class="epi-desc p-3">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <span class="border-gredient-left text-white rel-date">October 8, 2020</span>
                        <span class="text-primary run-time">35min</span>
                      </div>
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <h5 class="epi-name text-white mb-0">{{ $t('detail_page.zombie_island') }} 2</h5>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-6">
                  <div class="episode-block">
                    <div class="block-image position-relative">
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <img src="/assets/images/tv-show/episodes/03.webp" class="img-fluid img-zoom" alt="showImg-" loading="lazy" />
                      </router-link>
                      <div class="episode-number">S01E03</div>
                      <div class="episode-play">
                        <router-link :to="{ name: 'landing-page.episode' }" tabindex="0">{{ '' }}<i class="fa-solid fa-play"></i></router-link>
                      </div>
                    </div>
                    <div class="epi-desc p-3">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <span class="border-gredient-left text-white rel-date">October 15, 2020</span>
                        <span class="text-primary run-time">36min</span>
                      </div>
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <h5 class="epi-name text-white mb-0">{{ $t('detail_page.zombie_island') }} 3</h5>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-6 mt-3 mt-md-0">
                  <div class="episode-block">
                    <div class="block-image position-relative">
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <img src="/assets/images/tv-show/episodes/04.webp" class="img-fluid img-zoom" alt="showImg-" loading="lazy" />
                      </router-link>
                      <div class="episode-number">S01E04</div>
                      <div class="episode-play">
                        <router-link :to="{ name: 'landing-page.episode' }" tabindex="0">{{ '' }}<i class="fa-solid fa-play"></i></router-link>
                      </div>
                    </div>
                    <div class="epi-desc p-3">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <span class="border-gredient-left text-white rel-date">October 22, 2020</span>
                        <span class="text-primary run-time">41min</span>
                      </div>
                      <router-link :to="{ name: 'landing-page.episode' }">
                        <h5 class="epi-name text-white mb-0">{{ $t('detail_page.zombie_island') }} 4</h5>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="description" class="tab-pane animated fadeInUp" role="tabpanel">
              <p class="my-3">{{ $t('detail_page.travels_lone') }}</p>
            </div>
            <div id="rate-review" class="tab-pane animated fadeInUp" role="tabpanel">
              <div class="streamit-reviews">
                <div id="comments" class="comments-area validate-form">
                  <p class="masvideos-noreviews mt-3">{{ $t('detail_page.no_reviews') }}</p>
                </div>
                <div class="review_form">
                  <div class="comment-respond">
                    <h3 class="fw-500 my-2">{{ $t('detail_page.first_review') }}</h3>
                    <form class="comment-form">
                      <p class="comment-notes">
                        <span> {{ $t('detail_page.published_email') }} </span>
                        {{ '' }}
                        <span>
                          {{ $t('detail_page.required_fields') }}
                          <span class="required"> * </span>
                        </span>
                      </p>
                      <div class="d-flex align-items-center mb-4">
                        <label> {{ $t('detail_page.your_rating') }} </label>
                        <div class="star ms-4 text-primary">
                          <span>
                            <i class="fa-regular fa-star"></i>
                          </span>
                          {{ '' }}
                          <span>
                            <i class="fa-regular fa-star"></i>
                          </span>
                          {{ '' }}
                          <span>
                            <i class="fa-regular fa-star"></i>
                          </span>
                          {{ '' }}
                          <span>
                            <i class="fa-regular fa-star"></i>
                          </span>
                          {{ '' }}
                          <span>
                            <i class="fa-regular fa-star"></i>
                          </span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t('detail_page.your_review') }}
                              <span class="required"> * </span>
                            </label>
                            <textarea class="form-control" name="comment" cols="5" rows="8"></textarea>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t('detail_page.name') }}
                              <span class="required"> * </span>
                            </label>
                            <input class="form-control" name="author" type="text" value="" size="30" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t('detail_page.email') }}&nbsp;
                              <span class="required"> * </span>
                            </label>
                            <input class="form-control" name="email" type="email" value="" size="30" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mt-3">
                            <input class="form-check-input me-1" type="checkbox" value="" checked />
                            <label class="form-check-label" for="check1"> {{ $t('detail_page.save_name') }} </label>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-submit mt-4">
                            <div class="iq-button">
                              <button name="submit" type="submit" class="btn text-uppercase position-relative" value="Submit">
                                <span class="button-text">{{ $t('detail_page.submit') }}</span>
                                {{ '' }}
                                <i class="fa-solid fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
  <!-- Episode End -->
  <div class="cast-tabs">
    <b-container fluid>
      <div class="content-details trending-info g-border iq-rtl-direction">
        <ul class="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 list-inline" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active show" data-bs-toggle="pill" href="#cast-1" role="tab" aria-selected="true">{{ $t('detail_page.cast') }}</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" data-bs-toggle="pill" href="#crew-1" role="tab" aria-selected="false" tabindex="-1">{{ $t('detail_page.crew') }}</a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="cast-1" class="tab-pane animated fadeInUp active show" role="tabpanel">
            <swiper
              :slides-per-view="5"
              class="position-relative swiper-card"
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
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
                '1500': {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }"
              :dir="rtl">
              <swiper-slide tag="li">
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 p-0 img-box">
                    <img src="/assets/images/genre/g1.webp" class="img-fluid" alt="image" loading="lazy" />
                  </div>
                  <div class="col-8 block-description">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" tabindex="0">{{ $t('detail_page.james_chinlund') }} </router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t('detail_page.as_james') }}</small>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 p-0 img-box">
                    <img src="/assets/images/genre/g2.webp" class="img-fluid" alt="image" loading="lazy" />
                  </div>
                  <div class="col-8 block-description">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" tabindex="0">{{ $t('detail_page.james_earl') }} </router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t('detail_page.as_jones') }}</small>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div id="crew-1" class="tab-pane animated fadeInUp" role="tabpanel">
            <swiper
              :slides-per-view="5"
              tag="ul"
              class="position-relative swiper-card"
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
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
                '1500': {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }">
              <swiper-slide tag="li">
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 p-0 img-box">
                    <img src="/assets/images/genre/g3.webp" class="img-fluid" alt="image" loading="lazy" />
                  </div>
                  <div class="col-8 block-description starring-desc">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" tabindex="0"> {{ $t('detail_page.jeff_nathanson') }} </router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t('detail_page.writing') }}</small>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 p-0 img-box">
                    <img src="/assets/images/genre/g5.webp" class="person__poster--image img-fluid" alt="image" loading="lazy" />
                  </div>
                  <div class="col-8 block-description starring-desc">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" tabindex="0"> {{ $t('detail_page.irene_mecchi') }} </router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t('detail_page.writing') }}</small>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 p-0 img-box">
                    <img src="/assets/images/genre/g4.webp" class="person__poster--image img-fluid" alt="image" loading="lazy" />
                  </div>
                  <div class="col-8 block-description starring-desc">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" tabindex="0"> {{ $t('detail_page.karan_gilchrist') }} </router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t('detail_page.production') }}</small>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useEnterExit } from '../../utilities/usePage';
import { ref, computed, watch, onMounted } from 'vue';
import { useSetting } from '../../store/setting/index';
import Choices from 'choices.js';

const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);

const selectElement = ref(0);
const tabindex = '-1'; // Tab index

const selectElement1 = ref(0);
const tabindex1 = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectElement1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);
useEnterExit();
</script>
