<template>
  <section id="iq-trending" class="s-margin">
    <b-container fluid>
      <b-row>
        <b-col sm="12" class=" overflow-hidden">
          <div class="iq-main-header d-flex align-items-center justify-content-between">
            <h4 class="main-title">
              Trending
            </h4>
            <nuxt-link to="/frontend/category-page" class="text-primary">
              View all
            </nuxt-link>
          </div>
          <div class="trending-contens">
            <Slick id="trending-slider-nav" class="list-inline p-0 mb-0 row align-items-center iq-rtl-direction" :option="trendingOption1">
              <li v-for="(item,index) in trendingSlider" :key="index">
                <a href="javascript:void(0)">
                  <div class="movie-slick position-relative">
                    <img :src="item" class="img-fluid" alt="">
                  </div>
                </a>
              </li>
            </Slick>
            <Slick id="trending-slider" class="list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction" :option="trendingOption">
              <li v-for="(item,index) in items" :key="index">
                <div class="tranding-block position-relative" :style="{backgroundImage:`url(${require('../../../assets/images/frontend/trending/'+item.backgroudImage)})`}">
                  <div class="trending-custom-tab">
                    <div class="tab-title-info position-relative">
                      <div class="tab-title-info position-relative">
                        <ul
                          class="trending-pills tranding-tab-nav d-flex nav nav-pills justify-content-center align-items-center text-center iq-ltr-direction"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a class="nav-link active show" data-toggle="pill" href="#trending-data1" role="tab" aria-selected="true">Overview</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#trending-data2" role="tab" aria-selected="false">Episodes</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#trending-data3" role="tab" aria-selected="false">Trailers</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#trending-data4" role="tab" aria-selected="false">Similar Like This</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="trending-content">
                      <div id="trending-data1" class="overview-tab-pane tab-pane fade active show">
                        <div class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                          <a href="#" tabindex="0">
                            <div class="res-logo">
                              <div class="channel-logo">
                                <img src="../../../assets/images/logo-full.png" class="c-logo" alt="streamit">
                              </div>
                            </div>
                          </a>
                          <h1 class="trending-text big-title text-uppercase">
                            {{ item.title }}
                          </h1>
                          <div class="d-flex align-items-center text-white text-detail">
                            <span class="badge badge-secondary p-3">{{ item.age }}</span>
                            <span class="ml-3">{{ item.session }}</span>
                            <span class="trending-year">{{ item.year }}</span>
                          </div>
                          <div class="d-flex align-items-center series mb-4">
                            <a href="#"><img
                              src="../../../assets/images/frontend/trending/trending-label.png"
                              class="img-fluid"
                              alt=""
                            ></a>
                            <span class="text-gold ml-3">#2 in Series Today</span>
                          </div>
                          <p class="trending-dec">
                            {{ item.text }}
                          </p>
                          <div class="p-btns">
                            <div class="d-flex align-items-center p-0">
                              <nuxt-link to="/frontend/show-detail" class="btn btn-hover mr-2" tabindex="0">
                                <i
                                  class="fa fa-play mr-2"
                                  aria-hidden="true"
                                />Play Now
                              </nuxt-link>
                              <a href="#" class="btn btn-link" tabindex="0"><i class="ri-add-line" />My
                                List</a>
                            </div>
                          </div>
                          <div class="trending-list mt-4">
                            <div class="text-primary title">
                              Starring: <span class="text-body">Wagner
                                Moura, Boyd Holbrook, Joanna</span>
                            </div>
                            <div class="text-primary title">
                              Genres: <span class="text-body">Crime,
                                Action, Thriller, Biography</span>
                            </div>
                            <div class="text-primary title">
                              This Is: <span class="text-body">Violent,
                                Forceful</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="trending-data2" class="overview-tab-pane tab-pane fade">
                        <div
                          class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction"
                        >
                          <nuxt-link to="/frontend/show-detail" tabindex="0">
                            <div class="channel-logo">
                              <img src="../../../assets/images/logo-full.png" class="c-logo" alt="stramit">
                            </div>
                          </nuxt-link>
                          <h1 class="trending-text big-title text-uppercase">
                            {{ item.title }}
                          </h1>
                          <div class="d-flex align-items-center text-white text-detail mb-4 iq-ltr-direction">
                            <span class="season_date ml-2">
                              {{ item.session }}
                            </span>
                            <span class="trending-year">Feb 2019</span>
                          </div>
                          <div class="iq-custom-select  d-inline-block sea-epi">
                            <V-select v-model="selected" :options="sessonOption" />
                          </div>
                          <div class="episodes-contens mt-4">
                            <div class="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/01.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 1
                                    </nuxt-link>
                                    <span class="text-primary">2.25 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/02.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 2
                                    </nuxt-link>
                                    <span class="text-primary">3.23 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/03.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 3
                                    </nuxt-link>
                                    <span class="text-primary">2 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/04.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 4
                                    </nuxt-link>
                                    <span class="text-primary">1.12 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/05.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 5
                                    </nuxt-link>
                                    <span class="text-primary">2.54 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="trending-data3" class="overview-tab-pane tab-pane fade">
                        <div
                          class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction"
                        >
                          <a href="#" tabindex="0">
                            <div class="channel-logo">
                              <img src="../../../assets/images/logo-full.png" class="c-logo" alt="stramit">
                            </div>
                          </a>
                          <h1 class="trending-text big-title text-uppercase">
                            {{ item.title }}
                          </h1>
                          <div class="episodes-contens mt-4">
                            <div class="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/01.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Trailer 1
                                    </nuxt-link>
                                    <span class="text-primary">2.25 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/02.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Trailer 2
                                    </nuxt-link>
                                    <span class="text-primary">3.23 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/03.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Trailer 3
                                    </nuxt-link>
                                    <span class="text-primary">2 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/04.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body mt-2">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Trailer 4
                                    </nuxt-link>
                                    <span class="text-primary">1.12 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/05.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body mt-2">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Trailer 5
                                    </nuxt-link>
                                    <span class="text-primary">2.54 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="trending-data4" class="overview-tab-pane tab-pane fade">
                        <div
                          class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction"
                        >
                          <a href="#" tabindex="0">
                            <div class="channel-logo">
                              <img src="../../../assets/images/logo-full.png" class="c-logo" alt="stramit">
                            </div>
                          </a>
                          <h1 class="trending-text big-title text-uppercase">
                            {{ item.title }}
                          </h1>
                          <div class="episodes-contens mt-4">
                            <div class="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/01.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 1
                                    </nuxt-link>
                                    <span class="text-primary">2.25 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/02.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 2
                                    </nuxt-link>
                                    <span class="text-primary">3.23 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/03.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 3
                                    </nuxt-link>
                                    <span class="text-primary">2 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/04.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body mt-2">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 4
                                    </nuxt-link>
                                    <span class="text-primary">1.12 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                              <div class="e-item">
                                <div class="block-image position-relative">
                                  <nuxt-link to="/frontend/show-detail">
                                    <img src="../../../assets/images/frontend/episodes/05.jpg" class="img-fluid" alt="">
                                  </nuxt-link>
                                  <div class="episode-play-info">
                                    <div class="episode-play">
                                      <nuxt-link to="/frontend/show-detail" tabindex="0">
                                        <i
                                          class="ri-play-fill"
                                        />
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                                <div class="episodes-description text-body mt-2">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <nuxt-link to="/frontend/show-detail">
                                      Episode 5
                                    </nuxt-link>
                                    <span class="text-primary">2.54 m</span>
                                  </div>
                                  <p class="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </slick>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import MovieOverview from '../../../config/MovieOverview'
import Slick from '../../../components/core/slider/Slick'
export default {
  name: 'Details',
  components: {
    Slick
  },
  data () {
    return {
      items: MovieOverview,
      trendingSlider: [
        require('../../../assets/images/frontend/trending/01.jpg'),
        require('../../../assets/images/frontend/trending/02.jpg'),
        require('../../../assets/images/frontend/trending/03.jpg'),
        require('../../../assets/images/frontend/trending/04.jpg'),
        require('../../../assets/images/frontend/trending/05.jpg'),
        require('../../../assets/images/frontend/trending/06.jpg')
      ],
      episodData: [
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), title: 'Episode 1', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../assets/images/frontend/episodes/02.jpg'), title: 'Episode 2', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../assets/images/frontend/episodes/03.jpg'), title: 'Episode 3', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../assets/images/frontend/episodes/04.jpg'), title: 'Episode 4', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../assets/images/frontend/episodes/05.jpg'), title: 'Episode 5', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' }
      ],
      selected: '3',
      sessonOption: [
        { id: 1, value: 'season1', text: 'Season 1' },
        { id: 2, value: 'season2', text: 'Season 2' },
        { id: 3, value: 'season3', text: 'Season 3' }
      ],
      trendingOption1: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#trending-slider',
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      trendingOption: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#trending-slider-nav'
      }
    }
  },
  mounted () {
    const tabEl = document.getElementsByClassName('tranding-tab-nav')
    Array.from(tabEl).map((elem) => {
      elem.addEventListener('click', function (e) {
        e.target.closest('.tranding-tab-nav').getElementsByClassName('show')[0].classList.remove('show')
        e.target.classList.add('show')
      })
    })
  }
}
</script>
