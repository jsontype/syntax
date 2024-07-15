<template>
  <div class="section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-5">
          <div class="cast-box position-relative">
            <img src="/assets/images/cast/01.webp" class="img-fluid object-cover w-100" alt="person" loading="lazy" />
            <ul class="p-0 m-0 list-unstyled widget_social_media position-absolute w-100 text-center">
              <li class="">
                <a href="https://www.facebook.com/" class="position-relative">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              {{
                ''
              }}
              <li class="">
                <a href="https://twitter.com/" class="position-relative">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              {{
                ''
              }}
              <li class="">
                <a href="https://github.com/" class="position-relative">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              {{
                ''
              }}
              <li class="">
                <a href="https://www.instagram.com/" class="position-relative">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <h5 class="mt-5 mb-4 text-white fw-500">{{ $t('detail_page.personal_details') }}</h5>
          <h6 class="font-size-18 text-white fw-500">{{ $t('detail_page.official_sites') }}</h6>
          <p>
            <a href="https://iqonic.design/" target="_blank" class="text-uppercase">{{ $t('detail_page.iqonic_design') }}</a>
          </p>
          <h6 class="font-size-18 text-white fw-500">{{ $t('detail_page.born') }}</h6>
          <div class="seperator d-flex align-items-center flex-wrap mb-3">
            <span>{{ $t('detail_page.october') }} 15, 1982</span>
            <span class="circle"></span>
            <span>{{ $t('detail_page.westminster_london') }}</span>
          </div>
          <h6 class="font-size-18 text-white fw-500">{{ $t('detail_page.height') }}</h6>
          <p>6′ 1¾″ (1.87 m)</p>
          <h6 class="font-size-18 text-white fw-500">{{ $t('detail_page.parents') }} &amp; {{ $t('detail_page.relatives') }}</h6>
          <p class="mb-0">
            {{ $t('detail_page.diana_patricia') }} <span class="text-primary">{{ $t('detail_page.emma_hiddleston') }}</span
            >{{ $t('detail_page.sibling') }}
          </p>
        </div>
        <div class="col-lg-9 col-md-7 mt-5 mt-md-0">
          <h4 class="fw-500">{{ $t('detail_page.debbi_bossi') }}</h4>
          <div class="seperator d-flex align-items-center flex-wrap mb-3">
            <span class="fw-semibold">{{ $t('detail_page.direction') }}</span>
            <span class="circle"></span>
            <span class="fw-semibold">{{ $t('detail_page.writer') }}</span>
            <span class="circle"></span>
            <span class="fw-semibold">{{ $t('detail_page.actor') }}</span>
          </div>
          <p>
            {{ $t('detail_page.many_actors') }} <span class="text-primary">{{ $t('detail_page.storytelling') }} (2001)</span>, {{ $t('detail_page.mackin') }}
          </p>
          <div class="awards-box border-bottom">
            <h5>{{ $t('detail_page.awards') }}</h5>
            <span class="text-white fw-500">56 {{ $t('detail_page.wins') }} &amp; 83 {{ $t('detail_page.nominations') }}</span>
          </div>
          <div class="pb-md-5">
            <h5 class="main-title text-capitalize mb-4">{{ $t('detail_page.most_view') }}</h5>
            <div class="card-style-grid mb-5">
              <div class="row row-cols-xl-5 row-cols-sm-2 row-cols-1">
                <div class="col mb-4">
                  <div class="iq-card card-hover">
                    <div class="block-images position-relative w-100">
                      <div class="img-box w-100">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="position-absolute top-0 bottom-0 start-0 end-0"></router-link>
                        <img src="/assets/images/movies/popular/01.webp" alt="movie-card" class="img-fluid object-cover w-100 d-block border-0" loading="lazy" />
                      </div>
                      <div class="card-description with-transition">
                        <div class="cart-content">
                          <div class="content-left">
                            <h5 class="iq-title text-capitalize">
                              <router-link :to="{ name: 'landing-page.movies.detail' }">{{ $t('detail_page.crw') }}</router-link>
                            </h5>
                            <div class="movie-time d-flex align-items-center my-2">
                              <span class="movie-time-text font-normal">2{{ $t('countdown.hours') }}: 12 {{ $t('countdown.minute') }}</span>
                            </div>
                          </div>
                          <div class="watchlist">
                            <router-link class="watch-list-not" :to="{ name: 'landing-page.play-list' }">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-10">
                                <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              <span class="watchlist-label"> {{ $t('detail_page.watchlist') }} </span>
                            </router-link>
                          </div>
                        </div>
                      </div>
                      <div class="block-social-info align-items-center">
                        <ul class="p-0 m-0 d-flex gap-2 music-play-lists">
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fas fa-share-alt"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                  </router-link>
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                  </router-link>
                                  <router-link to="#">
                                    <i class="fas fa-link"></i>
                                  </router-link>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fa-regular fa-heart"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <span>+51</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="iq-button">
                          <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative rounded-circle">
                            <i class="fa-solid fa-play ms-0"></i>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col mb-4">
                  <div class="iq-card card-hover">
                    <div class="block-images position-relative w-100">
                      <div class="img-box w-100">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="position-absolute top-0 bottom-0 start-0 end-0"></router-link>
                        <img src="/assets/images/movies/popular/03.webp" alt="movie-card" loading="lazy" class="img-fluid object-cover w-100 d-block border-0" />
                      </div>
                      <div class="card-description with-transition">
                        <div class="cart-content">
                          <div class="content-left">
                            <h5 class="iq-title text-capitalize">
                              <router-link :to="{ name: 'landing-page.movies.detail' }">{{ $t('detail_page.goal') }}</router-link>
                            </h5>
                            <div class="movie-time d-flex align-items-center my-2">
                              <span class="movie-time-text font-normal">2{{ $t('countdown.hours') }}: 30 {{ $t('countdown.minute') }}</span>
                            </div>
                          </div>
                          <div class="watchlist">
                            <router-link class="watch-list-not" :to="{ name: 'landing-page.play-list' }">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-10">
                                <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              <span class="watchlist-label"> {{ $t('detail_page.watchlist') }} </span>
                            </router-link>
                          </div>
                        </div>
                      </div>
                      <div class="block-social-info align-items-center">
                        <ul class="p-0 m-0 d-flex gap-2 music-play-lists">
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fas fa-share-alt"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                  </router-link>
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                  </router-link>
                                  <router-link to="#">
                                    <i class="fas fa-link"></i>
                                  </router-link>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fa-regular fa-heart"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <span>+51</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="iq-button">
                          <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative rounded-circle">
                            <i class="fa-solid fa-play ms-0"></i>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col mb-4">
                  <div class="iq-card card-hover">
                    <div class="block-images position-relative w-100">
                      <div class="img-box w-100">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="position-absolute top-0 bottom-0 start-0 end-0"></router-link>
                        <img src="/assets/images/movies/popular/04.webp" alt="movie-card" loading="lazy" class="img-fluid object-cover w-100 d-block border-0" />
                      </div>
                      <div class="card-description with-transition">
                        <div class="cart-content">
                          <div class="content-left">
                            <h5 class="iq-title text-capitalize">
                              <router-link :to="{ name: 'landing-page.movies.detail' }">{{ $t('detail_page.dandacg') }}</router-link>
                            </h5>
                            <div class="movie-time d-flex align-items-center my-2">
                              <span class="movie-time-text font-normal">1{{ $t('countdown.hours') }}: 30 {{ $t('countdown.minute') }}</span>
                            </div>
                          </div>
                          <div class="watchlist">
                            <router-link class="watch-list-not" :to="{ name: 'landing-page.play-list' }">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-10">
                                <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              <span class="watchlist-label"> {{ $t('detail_page.watchlist') }} </span>
                            </router-link>
                          </div>
                        </div>
                      </div>
                      <div class="block-social-info align-items-center">
                        <ul class="p-0 m-0 d-flex gap-2 music-play-lists">
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fas fa-share-alt"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                  </router-link>
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                  </router-link>
                                  <router-link to="#">
                                    <i class="fas fa-link"></i>
                                  </router-link>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fa-regular fa-heart"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <span>+51</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="iq-button">
                          <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative rounded-circle">
                            <i class="fa-solid fa-play ms-0"></i>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col mb-4">
                  <div class="iq-card card-hover">
                    <div class="block-images position-relative w-100">
                      <div class="img-box w-100">
                        <router-link :to="{ name: 'landing-page.movies.detail' }" class="position-absolute top-0 bottom-0 start-0 end-0"></router-link>
                        <img src="/assets/images/movies/popular/05.webp" alt="movie-card" loading="lazy" class="img-fluid object-cover w-100 d-block border-0" />
                      </div>
                      <div class="card-description with-transition">
                        <div class="cart-content">
                          <div class="content-left">
                            <h5 class="iq-title text-capitalize">
                              <router-link :to="{ name: 'landing-page.movies.detail' }">{{ $t('detail_page.mexcan') }}</router-link>
                            </h5>
                            <div class="movie-time d-flex align-items-center my-2">
                              <span class="movie-time-text font-normal">1{{ $t('countdown.hours') }}: 30 {{ $t('countdown.minute') }}</span>
                            </div>
                          </div>
                          <div class="watchlist">
                            <router-link class="watch-list-not" :to="{ name: 'landing-page.play-list' }">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-10">
                                <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              <span class="watchlist-label"> {{ $t('detail_page.watchlist') }} </span>
                            </router-link>
                          </div>
                        </div>
                      </div>
                      <div class="block-social-info align-items-center">
                        <ul class="p-0 m-0 d-flex gap-2 music-play-lists">
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fas fa-share-alt"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                  </router-link>
                                  <router-link to="" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                  </router-link>
                                  <router-link to="#">
                                    <i class="fas fa-link"></i>
                                  </router-link>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="share position-relative d-flex align-items-center text-center mb-0">
                            <span class="w-100 h-100 d-inline-block bg-transparent">
                              <i class="fa-regular fa-heart"></i>
                            </span>
                            <div class="share-wrapper">
                              <div class="share-boxs d-inline-block">
                                <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                </svg>
                                <div class="overflow-hidden">
                                  <span>+51</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class="iq-button">
                          <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative rounded-circle">
                            <i class="fa-solid fa-play ms-0"></i>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col d-xl-block d-none"></div>
              </div>
            </div>
          </div>
          <!-- {{!-- tab start --}} -->
          <div class="content-details trending-info">
            <ul class="nav nav-underline d-flex nav nav-pills align-items-center text-center mb-5 gap-5" role="tablist">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="pill" href="#all" role="tab" aria-selected="true"> {{ $t('detail_page.all') }} </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#movies" role="tab" aria-selected="false"> {{ $t('detail_page.movies') }} </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#tvshows" role="tab" aria-selected="false"> {{ $t('detail_page.tv_shows') }} </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="all" class="tab-pane animated fadeInUp active show" role="tabpanel">
                <div class="description-content">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td class="w-15"><img src="/assets/images/movies/latest/01.webp" alt="image-icon" class="img-fluid person-img object-cover" /></td>
                          <td class="w-20">
                            <div class="font-size-18 d-flex gap-4 text-white fw-500">
                              <span>1</span>
                              <span class="text-capitalize"
                                >{{ $t('detail_page.mortal_norris') }} <span class="fw-normal text-body">{{ $t('detail_page.christina_ricci') }}</span></span
                              >
                            </div>
                          </td>
                          <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                        </tr>
                        <tr>
                          <td class="w-15"><img src="/assets/images/movies/latest/02.webp" alt="image-icon" class="img-fluid person-img object-cover" /></td>
                          <td class="w-20">
                            <div class="font-size-18 d-flex gap-4 text-white fw-500">
                              <span>2</span>
                              <span class="text-capitalize"
                                >{{ $t('detail_page.advetre') }} <span class="fw-normal text-body">{{ $t('detail_page.christina_ricci') }}</span></span
                              >
                            </div>
                          </td>
                          <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                        </tr>
                        <tr>
                          <td class="w-15"><img src="/assets/images/movies/latest/03.webp" alt="image-icon" class="img-fluid person-img object-cover" /></td>
                          <td class="w-20">
                            <div class="font-size-18 d-flex gap-4 text-white fw-500">
                              <span>3</span>
                              <span class="text-capitalize"
                                >{{ $t('detail_page.net_ailo') }} <span class="fw-normal text-body">{{ $t('detail_page.christina_ricci') }}</span></span
                              >
                            </div>
                          </td>
                          <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                        </tr>
                        <tr>
                          <td class="w-15"><img src="/assets/images/movies/latest/04.webp" alt="image-icon" class="img-fluid person-img object-cover" /></td>
                          <td class="w-20">
                            <div class="font-size-18 d-flex gap-4 text-white fw-500">
                              <span>4</span>
                              <span class="text-capitalize"
                                >{{ $t('detail_page.ariivaal') }} <span class="fw-normal text-body">{{ $t('detail_page.christina_ricci_3') }}</span></span
                              >
                            </div>
                          </td>
                          <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div id="movies" class="tab-pane animated fadeInUp" role="tabpanel">
                <div class="description-content">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td class="w-15"><img src="/assets/images/movies/latest/04.webp" alt="image-icon" class="img-fluid person-img object-cover" /></td>
                          <td class="w-20">
                            <div class="font-size-18 d-flex gap-4 text-white fw-500">
                              <span>4</span>
                              <span class="text-capitalize"
                                >{{ $t('detail_page.ariivaal') }} <span class="fw-normal text-body">{{ $t('detail_page.christina_ricci_3') }}</span></span
                              >
                            </div>
                          </td>
                          <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                        </tr>
                        <tr>
                          <td class="w-15"><img src="/assets/images/movies/latest/03.webp" alt="image-icon" class="img-fluid person-img object-cover" /></td>
                          <td class="w-20">
                            <div class="font-size-18 d-flex gap-4 text-white fw-500">
                              <span>3</span>
                              <span class="text-capitalize"
                                >{{ $t('detail_page.net_ailo') }} <span class="fw-normal text-body">{{ $t('detail_page.christina_ricci') }}</span></span
                              >
                            </div>
                          </td>
                          <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div id="tvshows" class="tab-pane animated fadeInUp" role="tabpanel">
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
                            <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative">
                              <span class="button-text">{{ $t('ott_home.play_now') }}</span>
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
                            <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative">
                              <span class="button-text">{{ $t('ott_home.play_now') }}</span>
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
                            <router-link :to="{ name: 'landing-page.movies.detail' }" class="btn text-uppercase position-relative">
                              <span class="button-text">{{ $t('ott_home.play_now') }}</span>
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
          <!-- {{!-- tab end --}} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useEnterExit } from '../../utilities/usePage';
useEnterExit();
</script>
