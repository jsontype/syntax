<template>
  <div class="iq-main-slider site-video">
    <!-- Banner Start -->
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="pt-0">
            <VideoPlayer :options="playerOption"></VideoPlayer>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- Banner End -->
  </div>

  <div class="details-part">
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <!-- Detail Start-->
          <div class="trending-info mt-4 pt-0 pb-4">
            <b-row>
              <b-col md="9" class="mb-auto col-12">
                <div class="d-block d-lg-flex align-items-center">
                  <h2 class="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block" data-animation-in="fadeInLeft" data-delay-in="0.6" style="opacity: 1; animation-delay: 0.6s">
                    {{ $t(videos.title) }}
                  </h2>
                  <div class="slider-ratting d-flex align-items-center ms-lg-3 ms-0">
                    <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star-half" aria-hidden="true"></i></li>
                    </ul>
                    <span class="text-white ms-2">{{ videos.rating }} {{ videos.rating_from }}</span>
                  </div>
                </div>
                <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                  <li v-for="data in videos.geners" :key="data" class="trending-list">
                    <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary title text-capitalize"> {{ $t(data) }}</router-link>
                  </li>
                </ul>
                <div class="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                  <span class="badge bg-secondary">{{ $t(videos.certificate) }}</span>
                  <span class="ms-3 font-Weight-500 genres-info">{{ videos.duration }}</span>
                  <span class="trending-year trending-year-list font-Weight-500 genres-info"> {{ videos.created_at }} </span>
                </div>

                <div class="d-flex align-items-center gap-4 flex-wrap mb-4">
                  <ul class="list-inline p-0 share-icons music-play-lists mb-n2 mx-n2">
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
                    {{
                      ''
                    }}
                    <li>
                      <span><i class="fa-solid fa-heart"></i></span>
                    </li>
                    {{
                      ''
                    }}
                    <li>
                      <span><i class="fa-solid fa-plus"></i></span>
                    </li>
                    {{
                      ''
                    }}
                    <li>
                      <span><i class="fa-solid fa-download"></i></span>
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
                <ul class="iq-blogtag list-unstyled d-flex">
                  <li class="iq-tag-title text-primary mb-0">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    {{ $t('detail_page.tags') }}:
                  </li>
                  <li v-for="data in videos.tags" :key="data" class="ms-3 text-capitalize">
                    <router-link :to="{ name: 'landing-page.view-all' }" class="title">{{ $t(data) }},</router-link>
                    <span class="text-secondary"></span>
                  </li>
                </ul>
              </b-col>
              <b-col md="3" class="trailor-video col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right">
                <a data-fslightbox="html5-video" href="#" class="video-open playbtn block-images position-relative playbtn_thumbnail" @click="toggler = !toggler">
                  <img src="/assets/images/genre/01.webp" class="attachment-medium-large size-medium-large wp-post-image" alt="" loading="lazy" />
                  <span class="content btn btn-transparant iq-button">
                    <i class="fa fa-play me-2 text-white"></i>
                    <span>{{ $t('detail_page.trailer_link') }}</span>
                  </span>
                </a>
              </b-col>
            </b-row>
          </div>
          <!--  Detail End -->
          <!-- Movie Description Start -->
          <div class="content-details trending-info">
            <ul class="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active show" data-bs-toggle="pill" href="#description-01" role="tab" aria-selected="true"> {{ $t('detail_page.description') }} </a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="pill" href="#review-01" role="tab" aria-selected="false" tabindex="-1"> {{ $t('detail_page.rate') }} &amp; {{ $t('detail_page.review') }} </a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="pill" href="#source-01" role="tab" aria-selected="false" tabindex="-1"> {{ $t('episode_page.sources') }} </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="description-01" class="tab-pane animated fadeInUp active show" role="tabpanel">
                <div class="description-content">
                  <p>{{ $t('detail_page.movie_desc') }}</p>
                </div>
              </div>
              <div id="review-01" class="tab-pane animated fadeInUp" role="tabpanel">
                <div class="streamit-reviews">
                  <div id="comments" class="comments-area validate-form">
                    <p class="masvideos-noreviews mt-3">{{ $t('detail_page.no_reviews') }}</p>
                  </div>
                  <div class="review_form">
                    <div class="comment-respond">
                      <h3 class="fw-500 my-2">{{ $t('detail_page.first_review') }}</h3>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="form-label">
                              {{ $t('detail_page.your_review') }}
                              <span class="required"> * </span>
                            </label>
                            <textarea class="form-control" name="comment" cols="5" rows="8" required></textarea>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t('detail_page.name') }}
                              <span class="required"> * </span>
                            </label>
                            <input class="form-control" name="author" type="text" size="30" required />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t('detail_page.email') }}&nbsp;
                              <span class="required"> * </span>
                            </label>
                            <input class="form-control" name="email" type="email" size="30" required />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mt-3 mt-3 d-flex gap-2 align-items-center">
                            <input id="check1" class="form-check-input mt-0" type="checkbox" checked />
                            <label class="form-check-label" for="check1"> {{ $t('detail_page.save_name') }} </label>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-submit mt-4">
                            <div class="iq-button">
                              <button id="submit" name="submit" type="submit" class="btn text-uppercase position-relative" value="Submit">
                                <span class="button-text">{{ $t('detail_page.submit') }}</span>
                                {{ '' }}
                                <i class="fa-solid fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="source-01" class="tab-pane animated fadeInUp" role="tabpanel">
                <div class="source-list-content table-responsive">
                  <table class="table custom-table">
                    <thead>
                      <tr>
                        <th>{{ $t('detail_page.links') }}</th>
                        <th>{{ $t('detail_page.quality') }}</th>
                        <th>{{ $t('detail_page.language') }}</th>
                        <th>{{ $t('detail_page.player') }}</th>
                        <th>{{ $t('detail_page.date_added') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="iq-button">
                            <router-link to="/movies-detail" class="btn text-uppercase position-relative">
                              <span class="button-text"> {{ $t('detail_page.play_now') }}</span>
                              {{ '' }}
                              <i class="fa-solid fa-play"></i>
                            </router-link>
                          </div>
                        </td>
                        <td>1080p</td>
                        <td>{{ $t('detail_page.eng') }}</td>
                        <td>{{ $t('detail_page.musicbee') }}</td>
                        <td>2021-11-28</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="iq-button">
                            <router-link to="/movies-detail" class="btn text-uppercase position-relative">
                              <span class="button-text"> {{ $t('detail_page.play_now') }}</span>
                              {{ '' }}
                              <i class="fa-solid fa-play"></i>
                            </router-link>
                          </div>
                        </td>
                        <td>800p</td>
                        <td>{{ $t('detail_page.eng') }}</td>
                        <td>5{{ $t('detail_page.k_player') }}</td>
                        <td>2021-11-25</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="iq-button">
                            <router-link to="/movies-detail" class="btn text-uppercase position-relative">
                              <span class="button-text"> {{ $t('detail_page.play_now') }}</span>
                              {{ '' }}
                              <i class="fa-solid fa-play"></i>
                            </router-link>
                          </div>
                        </td>
                        <td>720p</td>
                        <td>{{ $t('detail_page.eng') }}</td>
                        <td>{{ $t('detail_page.mediamonkey') }}</td>
                        <td>2021-11-20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Movie Description End -->
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- Cast & Crew Start -->
  <div class="cast-tabs">
    <b-container fluid>
      <div class="content-details trending-info g-border iq-rtl-direction">
        <ul class="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active show" data-bs-toggle="pill" href="#cast-01" role="tab" aria-selected="true"> {{ $t('detail_page.cast') }} </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" data-bs-toggle="pill" href="#crew-01" role="tab" aria-selected="true"> {{ $t('detail_page.crew') }} </a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="cast-01" class="tab-pane animadetail_pageted fadeInUp active show" role="tabpanel">
            <Swiper v-if="render" :dir="rtl" :slides-per-view="5" :modules="modules" class="swiper-banner-container">
              <SwiperSlide v-for="item in videos.cast" :key="item.title">
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 img-box p-0">
                    <img class="img-fluid" :src="item.thumbnail" loading="lazy" alt="image" />
                  </div>
                  <div class="col-8 block-description">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" class="text-white">{{ $t(item.title) }}</router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t(item.as) }}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="tab-content">
          <div id="crew-01" class="tab-pane animated fadeInUp show" role="tabpanel">
            <Swiper v-if="render" :dir="rtl" :slides-per-view="5" :modules="modules" class="swiper-banner-container">
              <SwiperSlide v-for="item in videos.crew" :key="item.title">
                <div class="cast-images m-0 row align-items-center position-relative">
                  <div class="col-4 img-box p-0">
                    <img class="img-fluid" :src="item.thumbnail" loading="lazy" alt="image" />
                  </div>
                  <div class="col-8 block-description">
                    <h6 class="iq-title">
                      <router-link :to="{ name: 'landing-page.cast-detail' }" class="text-white">{{ $t(item.title) }}</router-link>
                    </h6>
                    <div class="video-time d-flex align-items-center my-2">
                      <small class="text-white">{{ $t(item.as) }}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </b-container>
  </div>
  <!-- Cast & Crew End -->
  <!-- Movies Recommended For You Start  -->
  <section class="recommended-block">
    <MoviesRecommendedForYou padding-top="paddingTop"></MoviesRecommendedForYou>
  </section>
  <section class="related-movie-block">
    <MoviesRecommendedForYou :title="$t('form.related_movies')" padding-top="paddingTop"></MoviesRecommendedForYou>
  </section>
  <section class="video-block">
    <MoviesRecommendedForYou :title="$t('form.related_videos')" padding-top="paddingTop"></MoviesRecommendedForYou>
  </section>
  <section class="upcomimg-block">
    <UpcomingMovies :title="$t('home.upcoming')" padding-top="paddingTop"></UpcomingMovies>
  </section>
  <!-- Movies Recommended For You End  -->
  <FsLightbox :toggler="toggler" :sources="['https://www.youtube.com/embed/QCGq1epI9pQ']" />
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
// plugins
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import FsLightbox from 'fslightbox-vue/v3';
import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { useEnterExit } from '../../utilities/usePage';
import { generateImgPath } from '../../StaticData/data';
import { useSetting } from '../../store/setting/index';
import Choices from 'choices.js';

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const videos = {
  id: 1,
  slug: 'zombie-world',
  thumbnail: generateImgPath('/assets/images/genre/01.webp'),
  title: 'detail_page.zombie_island',
  detail: 'detail_page.movie_desc',
  season_type: '2 Season',
  certificate: 'detail_page.horror',
  rating: 4.8,
  likes: 9,
  rating_from: '(imdb)',
  geners: ['ott_home.action', 'ott_home.adventure', 'ott_home.drama'],
  tags: ['ott_home.action', 'ott_home.adventure', 'ott_home.drama'],
  video_link: '',
  video_type: 'video',
  is_restricted: false,

  cast: [
    {
      title: 'detail_page.james_chinlund',
      thumbnail: generateImgPath('/assets/images/genre/g1.webp'),
      as: 'detail_page.as_james',
    },
    {
      title: 'detail_page.james_earl',
      thumbnail: generateImgPath('/assets/images/genre/g2.webp'),
      as: 'detail_page.as_jones',
    },
  ],
  crew: [
    {
      title: 'detail_page.jeff_nathanson',
      thumbnail: generateImgPath('/assets/images/genre/g3.webp'),
      as: 'detail_page.writing',
    },
    {
      title: 'detail_page.irene_mecchi',
      thumbnail: generateImgPath('/assets/images/genre/g5.webp'),
      as: 'detail_page.writing',
    },
    {
      title: 'detail_page.karan_gilchrist',
      thumbnail: generateImgPath('/assets/images/genre/g4.webp'),
      as: 'detail_page.production',
    },
  ],
  created_by_username: 'Admin',
  created_at: '1hr 48mins Feb 2017',
  ranking: '#1 in Series Today ',
  date: 'Nov 2020',
};

useEnterExit();

const toggler = ref(false);
const playerOption = ref({
  autoplay: false,
  controls: true,
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=QCGq1epI9pQ',
      type: 'video/youtube',
    },
  ],
  youtube: { iv_load_policy: 1 },
});
// Swiper Modules
const modules = [Navigation];

const render = ref(true);
</script>
