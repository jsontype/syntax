<template>
  <div class="iq-main-slider site-video">
    <div class="container-fluid">
      <div class="iq-content_restriction">
        <div class="iq-restriction_box">
          <span class="subscribe-text">{{ $t("restricted.logged_in") }}</span>
          <div class="iq-button">
            <nuxt-link :to="{}" class="btn text-uppercase position-relative">
              <span class="button-text">{{
                $t("restricted.subscribe_watch")
              }}</span>
              <i class="fa-solid fa-play"></i>
            </nuxt-link>
          </div>
          <span> {{ $t("restricted.already_member") }}</span>
          <div class="iq-button">
            <nuxt-link :to="{}" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t("restricted.log_in") }}</span>
              <i class="fa-solid fa-play"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="details-part">
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <!-- Movie Description Start-->
          <div class="trending-info pt-0 pb-4">
            <b-row>
              <b-col md="9" class="mb-auto col-12">
                <movie-description></movie-description>
              </b-col>
              <b-col
                md="3"
                class="trailor-video col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right"
              >
                <nuxt-link
                  data-fslightbox="html5-video"
                  :to="{}"
                  class="video-open playbtn block-images position-relative playbtn_thumbnail"
                  @click="toggler = !toggler"
                >
                  <img
                    src="/assets/images/genre/01.webp"
                    class="attachment-medium-large size-medium-large wp-post-image"
                    alt=""
                    loading="lazy"
                  />
                  <span class="content btn btn-transparant iq-button">
                    <i class="fa fa-play me-2 text-white"></i>
                    <span>{{ $t("restricted.trailer_link") }}</span>
                  </span>
                </nuxt-link>
              </b-col>
            </b-row>
          </div>
          <!-- Movie Description End -->
          <!-- Movie Description Start -->
          <div class="content-details trending-info">
            <ul
              class="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active show"
                  data-bs-toggle="pill"
                  href="#description-01"
                  role="tab"
                  aria-selected="true"
                >
                  {{ $t("restricted.discription") }}
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  data-bs-toggle="pill"
                  href="#review-01"
                  role="tab"
                  aria-selected="false"
                  tabindex="-1"
                >
                  {{ $t("restricted.rate") }} &amp;
                  {{ $t("restricted.review") }}
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  data-bs-toggle="pill"
                  href="#source-01"
                  role="tab"
                  aria-selected="false"
                  tabindex="-1"
                >
                  {{ $t("restricted.sources") }}
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div
                id="description-01"
                class="tab-pane animated fadeInUp active show"
                role="tabpanel"
              >
                <div class="description-content">
                  <p>{{ $t("restricted.zombie_desc") }}</p>
                </div>
              </div>
              <div
                id="review-01"
                class="tab-pane animated fadeInUp"
                role="tabpanel"
              >
                <div class="streamit-reviews">
                  <div id="comments" class="comments-area validate-form">
                    <p class="masvideos-noreviews mt-3">
                      {{ $t("restricted.no_review") }}
                    </p>
                  </div>
                  <div class="review_form">
                    <div class="comment-respond">
                      <h3 class="fw-500 my-2">
                        {{ $t("restricted.first_review") }}
                      </h3>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t("restricted.your_review") }}
                              <span class="required"> * </span>
                            </label>
                            <textarea
                              class="form-control"
                              name="comment"
                              cols="5"
                              rows="8"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t("restricted.name") }}
                              <span class="required"> * </span>
                            </label>
                            <input
                              class="form-control"
                              name="author"
                              type="text"
                              size="30"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="mb-2">
                              {{ $t("restricted.email") }}&nbsp;
                              <span class="required"> * </span>
                            </label>
                            <input
                              class="form-control"
                              name="email"
                              type="email"
                              size="30"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div
                            class="mt-3 mt-3 d-flex gap-2 align-items-center"
                          >
                            <input
                              id="check1"
                              class="form-check-input mt-0"
                              type="checkbox"
                              checked
                            />
                            <label class="form-check-label" for="check1">
                              {{ $t("restricted.save_name") }}</label
                            >
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-submit mt-4">
                            <div class="iq-button">
                              <button
                                id="submit"
                                name="submit"
                                type="submit"
                                class="btn text-uppercase position-relative"
                                value="Submit"
                              >
                                <span class="button-text">{{
                                  $t("restricted.submit")
                                }}</span>
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
              <div
                id="source-01"
                class="tab-pane animated fadeInUp"
                role="tabpanel"
              >
                <div class="source-list-content table-responsive">
                  <table class="table custom-table">
                    <thead>
                      <tr>
                        <th>{{ $t("detail_page.links") }}</th>
                        <th>{{ $t("detail_page.quality") }}</th>
                        <th>{{ $t("detail_page.language") }}</th>
                        <th>{{ $t("detail_page.player") }}</th>
                        <th>{{ $t("detail_page.date_added") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="iq-button">
                            <nuxt-link
                              :to="{ name: 'movies-detail' }"
                              class="btn text-uppercase position-relative"
                            >
                              <span class="button-text">
                                {{ $t("detail_page.play_now") }}</span
                              >
                              <i class="fa-solid fa-play"></i>
                            </nuxt-link>
                          </div>
                        </td>
                        <td>1080p</td>
                        <td>{{ $t("detail_page.eng") }}</td>
                        <td>{{ $t("detail_page.musicbee") }}</td>
                        <td>2021-11-28</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="iq-button">
                            <nuxt-link
                              :to="{ name: 'movies-detail' }"
                              class="btn text-uppercase position-relative"
                            >
                              <span class="button-text">{{
                                $t("detail_page.play_now")
                              }}</span>
                              <i class="fa-solid fa-play"></i>
                            </nuxt-link>
                          </div>
                        </td>
                        <td>800p</td>
                        <td>{{ $t("detail_page.eng") }}</td>
                        <td>5{{ $t("detail_page.k_player") }}</td>
                        <td>2021-11-25</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="iq-button">
                            <nuxt-link
                              :to="{ name: 'movies-detail' }"
                              class="btn text-uppercase position-relative"
                            >
                              <span class="button-text">{{
                                $t("detail_page.play_now")
                              }}</span>
                              <i class="fa-solid fa-play"></i>
                            </nuxt-link>
                          </div>
                        </td>
                        <td>720p</td>
                        <td>{{ $t("detail_page.eng") }}</td>
                        <td>{{ $t("detail_page.mediamonkey") }}</td>
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
    <div class="cast-tabs">
      <b-container fluid>
        <div class="content-details trending-info g-border iq-rtl-direction">
          <ul
            class="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active show"
                data-bs-toggle="pill"
                href="#cast-01"
                role="tab"
                aria-selected="true"
              >
                Cast
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="pill"
                href="#crew-01"
                role="tab"
                aria-selected="true"
              >
                Crew
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div
              id="cast-01"
              class="tab-pane animated fadeInUp active show"
              role="tabpanel"
            >
              <Swiper
                v-if="render"
                :dir="rtl"
                :slides-per-view="5"
                class="swiper-banner-container mb-0"
              >
                <SwiperSlide v-for="item in videos.cast" :key="item.title">
                  <div
                    class="cast-images m-0 row align-items-center position-relative"
                  >
                    <div class="col-4 img-box p-0">
                      <img
                        class="img-fluid"
                        :src="item.thumbnail"
                        loading="lazy"
                        alt="image"
                      />
                    </div>
                    <div class="col-8 block-description">
                      <h6 class="iq-title">
                        <nuxt-link
                          :to="{ name: 'cast-detail' }"
                          class="text-white"
                          >{{ $t(item.title) }}</nuxt-link
                        >
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
            <div
              id="crew-01"
              class="tab-pane animated fadeInUp show"
              role="tabpanel"
            >
              <Swiper
                v-if="render"
                :dir="rtl"
                :slides-per-view="5"
                :modules="modules"
                :loop="true"
                :centered-slides="true"
                class="swiper-banner-container mb-0"
              >
                <SwiperSlide v-for="item in videos.crew" :key="item.title">
                  <div
                    class="cast-images m-0 row align-items-center position-relative"
                  >
                    <div class="col-4 img-box p-0">
                      <img
                        class="img-fluid"
                        :src="item.thumbnail"
                        loading="lazy"
                        alt="image"
                      />
                    </div>
                    <div class="col-8 block-description">
                      <h6 class="iq-title">
                        <nuxt-link
                          :to="{ name: 'cast-detail' }"
                          class="text-white"
                          >{{ item.title }}</nuxt-link
                        >
                      </h6>
                      <div class="video-time d-flex align-items-center my-2">
                        <small class="text-white">{{ item.as }}</small>
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
    <UpcomingMovies></UpcomingMovies>
    <FsLightbox
      :toggler="toggler"
      :sources="['/assets/images/video/trailer.mp4']"
    />
  </div>

  <!-- Movies Recommended For You Start  -->
  <section class="recommended-block">
    <MoviesRecommendedForYou></MoviesRecommendedForYou>
    <!-- <MoviesRecommendedForYou></MoviesRecommendedForYou> -->
    <UpcomingMovies></UpcomingMovies>
  </section>
</template>
<script setup>
import { ref } from "vue";
// plugins
import { Swiper, SwiperSlide } from "swiper/vue";
import FsLightbox from "fslightbox-vue/v3";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou.vue";
import UpcomingMovies from "../../components/sections/UpcomingMovies.vue";
import MovieDescription from "../../components/MovieDescription.vue";
import { useEnterExit } from "../../utilities/usePage";
import { generateImgPath } from "../../StaticData/data";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

const videos = {
  id: 1,
  slug: "zombie-world",
  thumbnail: generateImgPath("/assets/images/genre/01.webp"),
  title: "Zombie World",
  detail:
    "Zombie Island is a 1998 direct-to-video animated comedy horror film based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a year-long hiatus from Mystery, Inc. to investigate a bayou island said to be haunted by the ghost of the pirate Morgan Moonscar. The film was directed by Jim Stenstrum, from a screenplay by Glenn Leopold.",
  season_type: "2 Season",
  certificate: "Adventure",
  rating: 4.5,
  likes: 9,
  rating_from: "Imdb",
  geners: ["action", "adventure", "drama"],
  tags: ["brother", "brother-relationship", "kings", "vikings"],
  video_link: "",
  video_type: "video",
  is_restricted: false,

  cast: [
    {
      title: "detail_page.james_chinlund",
      thumbnail: generateImgPath("/assets/images/genre/g1.webp"),
      as: "detail_page.as_james",
    },
    {
      title: "detail_page.james_earl",
      thumbnail: generateImgPath("/assets/images/genre/g2.webp"),
      as: "detail_page.as_jones",
    },
  ],
  crew: [
    {
      title: "detail_page.jeff_nathanson",
      thumbnail: generateImgPath("/assets/images/genre/g3.webp"),
      as: "detail_page.writing",
    },
    {
      title: "detail_page.irene_mecchi",
      thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
      as: "detail_page.writing",
    },
    {
      title: "detail_page.karan_gilchrist",
      thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
      as: "detail_page.production",
    },
  ],
  created_by_username: "Admin",
  created_at: "Feb 2019",
  ranking: "#1 in Series Today ",
  date: "Nov 2020",
};
useEnterExit();

const toggler = ref(false);
const render = ref(true);
</script>
