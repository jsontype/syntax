<template>
  <!-- Banner Start -->
  <div class="iq-main-slider site-video">
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="pt-0">
            <VideoPlayer :options="playerOption"></VideoPlayer>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- Banner End -->

  <div class="details-part">
    <b-container fluid>
      <div class="trending-info mt-4 pt-0 pb-4">
        <b-row>
          <div class="col-md-9 col-12 mb-auto">
            <div class="d-md-flex">
              <h2
                class="trending-text fw-bold texture-text text-uppercase mt-0 fadeInLeft animated"
                data-animation-in="fadeInLeft"
                data-delay-in="0.6"
                style="opacity: 1; animation-delay: 0.6s"
              >
                {{ $t("episode_page.football") }} 3
              </h2>
              <div
                class="slider-ratting d-flex align-items-center gap-2 ms-md-3 ms-0"
              >
                <ul
                  class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                >
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-half" aria-hidden="true"></i></li>
                </ul>
                <span class="text-white"
                  >3.3
                  <img
                    src="/assets/images/movies/imdb-logo.svg"
                    alt="imdb logo"
                    loading="lazy"
                    class="img-fluid ms-2"
                /></span>
              </div>
            </div>
            <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
              <li class="font-size-18">S01E03</li>
              <li class="font-size-18">{{ $t("episode_page.football") }} 3</li>
              <li class="font-size-18">1.2K {{ $t("episode_page.views") }}</li>
            </ul>
            <ul class="list-inline p-0 m-0 share-icons music-play-lists mb-3">
              <li class="share">
                <span><i class="fa-solid fa-share-nodes"></i></span>
                <div class="share-box">
                  <svg
                    width="15"
                    height="40"
                    viewBox="0 0 15 40"
                    class="share-shape"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                      fill="#191919"
                    ></path>
                  </svg>
                  <div class="d-flex align-items-center">
                    <a href="#" class="share-ico"
                      ><i class="fa-brands fa-facebook-f"></i
                    ></a>
                    <a href="#" class="share-ico"
                      ><i class="fa-brands fa-twitter"></i
                    ></a>
                    <a href="#" class="share-ico"
                      ><i class="fa-solid fa-link"></i
                    ></a>
                  </div>
                </div>
              </li>
              <li>
                <span><i class="fa-solid fa-heart"></i></span>
              </li>
              <li>
                <span><i class="fa-solid fa-plus"></i></span>
              </li>
              <li>
                <span><i class="fa-solid fa-download"></i></span>
              </li>
            </ul>
          </div>
          <b-col
            md="3"
            class="trailor-video col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right"
          >
            <a
              data-fslightbox="html5-video"
              href="#"
              class="video-open playbtn block-images position-relative playbtn_thumbnail"
              @click="toggler = !toggler"
            >
              <img
                :src="generateImgPath('/assets/images/genre/01.webp')"
                class="attachment-medium-large size-medium-large wp-post-image"
                alt=""
                loading="lazy"
              />
              <span class="content btn btn-transparant iq-button">
                <i class="fa fa-play me-2 text-white"></i>
                <span>{{ $t("episode_page.trailer_link") }}</span>
              </span>
            </a>
          </b-col>
        </b-row>
      </div>
      <!-- Movie Source Start -->
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
              {{ $t("episode_page.description") }}
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
              {{ $t("episode_page.rate") }} &amp;
              {{ $t("episode_page.review") }}
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
              {{ $t("episode_page.sources") }}
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
              <p>
                {{ $t("episode_page.episod_desc") }}
              </p>
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
                  {{ $t("episode_page.reviews_yet") }}
                </p>
              </div>
              <div class="review_form">
                <div class="comment-respond">
                  <h3 class="fw-500 my-2">
                    {{ $t("episode_page.first_review") }}
                  </h3>
                  <b-row>
                    <b-col md="12">
                      <div class="form-group">
                        <label class="mb-2">
                          {{ $t("episode_page.your_review") }}
                          <span class="required"> * </span>
                        </label>
                        <textarea
                          class="form-control"
                          name="comment"
                          cols="5"
                          rows="8"
                        ></textarea>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <label class="mb-2">
                          {{ $t("episode_page.name") }}
                          <span class="required"> * </span>
                        </label>
                        <input
                          class="form-control"
                          name="author"
                          type="text"
                          value=""
                          size="30"
                        />
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <label class="mb-2">
                          {{ $t("episode_page.email") }}&nbsp;
                          <span class="required"> * </span>
                        </label>
                        <input
                          class="form-control"
                          name="email"
                          type="email"
                          value=""
                          size="30"
                        />
                      </div>
                    </b-col>
                    <b-col md="12">
                      <div class="mt-3 mt-3 d-flex gap-2 align-items-center">
                        <input
                          class="form-check-input mt-0"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="check1">
                          {{ $t("episode_page.save_name") }}
                        </label>
                      </div>
                    </b-col>
                    <b-col md="12">
                      <div class="form-submit mt-4">
                        <div class="iq-button">
                          <button
                            name="submit"
                            type="submit"
                            class="btn text-uppercase position-relative"
                            value="Submit"
                          >
                            <span class="button-text">{{
                              $t("episode_page.submit")
                            }}</span>
                            <i class="fa-solid fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
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
                          <span class="button-text">{{
                            $t("detail_page.play_now")
                          }}</span>
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
                          <span class="button-text">
                            {{ $t("detail_page.play_now") }}</span
                          >
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
                          <span class="button-text">
                            {{ $t("detail_page.play_now") }}</span
                          >
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
      <!-- Movie Source End -->
    </b-container>
  </div>
  <section class="recommended-block">
    <b-container fluid>
      <div class="overflow-hidden">
        <div
          class="d-flex align-items-center justify-content-between px-3 pt-2 my-4"
        >
          <h5 class="main-title text-capitalize mb-0">
            {{ $t("episode_page.latest_episodes") }}
          </h5>
        </div>
        <div class="row list-inline p-0 mb-0">
          <div class="col-lg-3 col-sm-12 col-md-6">
            <div class="episode-block">
              <div class="block-image position-relative">
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <img
                    src="/assets/images/tv-show/episodes/01.webp"
                    class="img-fluid img-zoom"
                    alt="showImg-"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="episode-number">S01E01</div>
                <div class="episode-play">
                  <nuxt-link :to="{ name: 'tv-shows-episode' }" tabindex="0"
                    ><i class="fa-solid fa-play"></i
                  ></nuxt-link>
                </div>
              </div>
              <div class="epi-desc p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <span class="border-gredient-left text-white rel-date"
                    >October 1, 2020</span
                  >
                  <span class="text-primary run-time">45min</span>
                </div>
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <h5 class="epi-name text-white mb-0">
                    {{ $t("episode_page.zombie_island") }} 1
                  </h5>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-6">
            <div class="episode-block">
              <div class="block-image position-relative">
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <img
                    src="/assets/images/tv-show/episodes/02.webp"
                    class="img-fluid img-zoom"
                    alt="showImg-"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="episode-number">S01E02</div>
                <div class="episode-play">
                  <nuxt-link :to="{ name: 'tv-shows-episode' }" tabindex="0"
                    ><i class="fa-solid fa-play"></i
                  ></nuxt-link>
                </div>
              </div>
              <div class="epi-desc p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <span class="border-gredient-left text-white rel-date"
                    >October 8, 2020</span
                  >
                  <span class="text-primary run-time">35min</span>
                </div>
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <h5 class="epi-name text-white mb-0">
                    {{ $t("episode_page.zombie_island") }} 2
                  </h5>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-6">
            <div class="episode-block">
              <div class="block-image position-relative">
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <img
                    src="/assets/images/tv-show/episodes/03.webp"
                    class="img-fluid img-zoom"
                    alt="showImg-"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="episode-number">S01E03</div>
                <div class="episode-play">
                  <nuxt-link :to="{ name: 'tv-shows-episode' }" tabindex="0"
                    ><i class="fa-solid fa-play"></i
                  ></nuxt-link>
                </div>
              </div>
              <div class="epi-desc p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <span class="border-gredient-left text-white rel-date"
                    >October 15, 2020</span
                  >
                  <span class="text-primary run-time">36min</span>
                </div>
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <h5 class="epi-name text-white mb-0">
                    {{ $t("episode_page.zombie_island") }} 3
                  </h5>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-6 mt-3 mt-md-0">
            <div class="episode-block">
              <div class="block-image position-relative">
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <img
                    src="/assets/images/tv-show/episodes/04.webp"
                    class="img-fluid img-zoom"
                    alt="showImg-"
                    loading="lazy"
                  />
                </nuxt-link>
                <div class="episode-number">S01E04</div>
                <div class="episode-play">
                  <nuxt-link :to="{ name: 'tv-shows-episode' }" tabindex="0"
                    ><i class="fa-solid fa-play"></i
                  ></nuxt-link>
                </div>
              </div>
              <div class="epi-desc p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <span class="border-gredient-left text-white rel-date"
                    >October 22, 2020</span
                  >
                  <span class="text-primary run-time">41min</span>
                </div>
                <nuxt-link :to="{ name: 'tv-shows-episode' }">
                  <h5 class="epi-name text-white mb-0">
                    {{ $t("episode_page.zombie_island") }} 4
                  </h5>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>
<script setup>
import { ref } from "vue";

//component
import VideoPlayer from "../../components/plugins/VideoPlayer.vue";

//static data
import { generateImgPath } from "../../StaticData/data";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

//videojs option
const playerOption = ref({
  autoplay: false,
  controls: true,
  techOrder: ["youtube"],
  sources: [
    {
      src: "https://www.youtube.com/watch?v=QCGq1epI9pQ",
      type: "video/youtube",
    },
  ],
  youtube: { iv_load_policy: 1 },
});
</script>
