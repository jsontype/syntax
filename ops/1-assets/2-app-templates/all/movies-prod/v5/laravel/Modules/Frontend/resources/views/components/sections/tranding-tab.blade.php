<section class="tranding-tab-slider section-padding">
    <div class="container-fluid">
        <div class="row m-0 p-0">
            <div id="iq-trending" class="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden">
                <div class="d-flex align-items-center justify-content-between px-0 px-md-3">
                    <h5 class="main-title text-capitalize mb-0">{{__('frontendhome.trending')}}</h5>
                </div>
                <div class="trending-contens position-relative ">
                    <div id="gallery-top" class="swiper gallery-thumbs" data-swiper="gallery-top">
                        <ul class="swiper-wrapper list-inline p-0 m-0 trending-slider-nav align-items-center ">
                            <li class="swiper-slide">
                                <a href="javascript:void(0);">
                                    <div class="movie-swiper position-relative">
                                        <img src="{{ asset('frontend/images/movies/ott1.webp') }}" alt="ott"
                                            loading="lazy" />
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="javascript:void(0);">
                                    <div class="movie-swiper position-relative">
                                        <img src="{{ asset('frontend/images/movies/ott2.webp') }}" alt="ott"
                                            loading="lazy" />
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="javascript:void(0);">
                                    <div class="movie-swiper position-relative">
                                        <img src="{{ asset('frontend/images/movies/ott3.webp') }}" alt="ott"
                                            loading="lazy" />
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="javascript:void(0);">
                                    <div class="movie-swiper position-relative">
                                        <img src="{{ asset('frontend/images/movies/banner1.webp') }} " alt="ott"
                                            loading="lazy" />
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="javascript:void(0);" tabindex="0">
                                    <div class="movie-swiper position-relative">
                                        <img src="{{ asset('frontend/images/movies/banner2.webp') }} " alt="ott"
                                            loading="lazy" />
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="javascript:void(0);" tabindex="0">
                                    <div class="movie-swiper position-relative">
                                        <img src="{{ asset('frontend/images/movies/banner3.webp') }} " alt="ott"
                                            loading="lazy" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="gallery-bottom" class="swiper trending-tab-slider" data-swiper="gallery-bottom">
                        <ul class="swiper-wrapper list-inline p-0 m-0 d-flex align-items-center trending-slider">
                            <li class="swiper-slide slider-big-img-1 p-0">
                                <div class="trending-tab-slider-image">
                                    <img src="{{ asset('frontend/images/movies/ott1.webp') }} "
                                        alt="trending-tab-slider-image" loading="lazy" />
                                </div>
                                <div class="tranding-block position-relative">
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <ul class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                                id="trending-tab-1" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="trending-data-tab-1"
                                                        data-bs-toggle="pill" data-bs-target="#trending-data-1"
                                                        aria-controls="trending-data-1" role="tab"
                                                        aria-selected="true">{{__('frontendhome.overview')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-2" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-2"
                                                        aria-controls="trending-data-2" role="tab"
                                                        aria-selected="false">{{__('frontendhome.episodes')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-3" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-3"
                                                        aria-controls="trending-data-3" role="tab"
                                                        aria-selected="false">{{__('frontendhome.trailers')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-4" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-4"
                                                        aria-controls="trending-data-4" role="tab"
                                                        aria-selected="false">{{__('frontendhome.similar_like')}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content trending-content" id="trending-tab-1-content">
                                            <div id="trending-data-1" class="tab-pane fade show active" role="tabpanel"
                                                aria-labelledby="trending-data-tab-1" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap">
                                                        <span>3 Seasons</span>
                                                        <span class="trending-year">2023</span>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{ asset('frontend/images/movies/trending-label.webp') }}"
                                                                class="img-fluid" alt="" loottading="lazy"></a>
                                                        <span class="text-gold">#2 {{__('otthome.series_today')}}</span>
                                                    </div>
                                                    <p class="trending-dec line-count-3">{{__('otthome.content_here')}}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="iq-button">
                                                            <a href="tv-show-detail"
                                                                class="btn text-uppercase position-relative">
                                                                <span
                                                                    class="button-text">{{__('otthome.play_now')}}</span>
                                                                <i class="fa-solid fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">{{__('frontendhome.starring')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.wagner_moura')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.geners')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.crime_action')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.this_is')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.violent_forceful')}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-2" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-2" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                        <span class="season_date ms-2">
                                                            2 {{__('movielist.seasons')}}
                                                        </span>
                                                        <span class="trending-year"> {{__('movielist.Feb_2019')}}</span>
                                                    </div>
                                                    <div class="iq-custom-select d-inline-block sea-epi mb-4">
                                                        <select name="cars"
                                                            class="form-control select2-basic-single js-states season-select">
                                                            <option value="season1">{{__('otthome.season1')}}</option>
                                                            <option value="season2">{{__('otthome.season2')}}</option>
                                                            <option value="season3">{{__('otthome.season3')}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/episodes/01.webp'),
                                                                'id' => '01',
                                                                'showEpisod' => 'S01E01',
                                                                'episodDate' => __('frontenddetail_page.october') . ' 1,
                                                                2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/episodes/02.webp'),
                                                                'id' => '02',
                                                                'showEpisod' => 'S01E02',
                                                                'episodDate' => __('frontenddetail_page.october') . ' 8,
                                                                2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/episodes/03.webp'),
                                                                'id' => '03',
                                                                'showEpisod' => 'S01E03',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                15, 2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/episodes/04.webp'),
                                                                'id' => '04',
                                                                'showEpisod' => 'S01E04',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode4'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/episodes/05.webp'),
                                                                'id' => '05',
                                                                'showEpisod' => 'S01E05',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-3" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-3" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mt-2"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.watch_trailer')}}
                                                    </h3>
                                                    <div class="episodes-contens mt-5">
                                                        <div
                                                            class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                            <div
                                                                class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                                <img src="{{ asset('frontend/images/tv-show/season/01.webp') }}"
                                                                    class="trailer-image" alt="trailer-image"
                                                                    loading="lazy" />
                                                                <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                                                    class="video-open playbtn text-decoration-none"
                                                                    tabindex="0">
                                                                    <svg version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        x="0px" y="0px" width="80px" height="80px"
                                                                        viewBox="0 0 213.7 213.7"
                                                                        enable-background="new 0 0 213.7 213.7"
                                                                        xml:space="preserve">
                                                                        <polygon class="triangle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10"
                                                                            points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                                                        </polygon>
                                                                        <circle class="circle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10" cx="106.8" cy="106.8"
                                                                            r="103.3">
                                                                        </circle>
                                                                    </svg>
                                                                    <span class="w-trailor text-uppercase">
                                                                        {{__('frontendhome.watch_trailer')}}</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-4" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-4" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mb-5"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('otthome.recommended_for_you')}}
                                                    </h3>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/02.webp'),
                                                                'id' => '06',
                                                                'showEpisod' => 'Seasons 1-2',
                                                                'episodDate' => __('frontenddetail_page.october') . ' 1,
                                                                2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/03.webp'),
                                                                'id' => '07',
                                                                'showEpisod' => 'Seasons 1-3',
                                                                'episodDate' => __('frontenddetail_page.october') . ' 8,
                                                                2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/04.webp'),
                                                                'id' => '08',
                                                                'showEpisod' => 'Seasons 1-4',
                                                                'episodDate' => 'October 15, 2022',
                                                                'episodTime' => '36min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/05.webp'),
                                                                'id' => '09',
                                                                'showEpisod' => 'Seasons 1-5',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode4'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/06.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'Seasons 1-6',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide slider-big-img-2">
                                <div class="trending-tab-slider-image">
                                    <img src="{{ asset('frontend/images/movies/ott2.webp') }}"
                                        alt="trending-tab-slider-image" loading="lazy" />
                                </div>
                                <div class="tranding-block position-relative">
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <ul class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                                id="trending-tab-2" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="trending-data-tab-5"
                                                        data-bs-toggle="pill" data-bs-target="#trending-data-5"
                                                        aria-controls="trending-data-5" role="tab"
                                                        aria-selected="true">{{__('frontendhome.overview')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-6" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-6"
                                                        aria-controls="trending-data-6" role="tab"
                                                        aria-selected="false">{{__('frontendhome.episodes')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-7" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-7"
                                                        aria-controls="trending-data-7" role="tab"
                                                        aria-selected="false">{{__('frontendhome.trailers')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-8" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-8"
                                                        aria-controls="trending-data-8" role="tab"
                                                        aria-selected="false">{{__('frontendhome.similar_like')}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content trending-content" id="trending-tab-2-content">
                                            <div id="trending-data-5" class="tab-pane fade show active" role="tabpanel"
                                                aria-labelledby="trending-data-tab-5" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap">
                                                        <span>3 Seasons</span>
                                                        <span class="trending-year">2023</span>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{ asset('frontend/images/movies/trending-label.webp') }}"
                                                                class="img-fluid" alt="" loottading="lazy"></a>
                                                        <span class="text-gold">#2 {{__('otthome.series_today')}}</span>
                                                    </div>
                                                    <p class="trending-dec line-count-3">{{__('otthome.content_here')}}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="iq-button">
                                                            <a href="tv-show-detail"
                                                                class="btn text-uppercase position-relative">
                                                                <span
                                                                    class="button-text">{{__('otthome.play_now')}}</span>
                                                                <i class="fa-solid fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">{{__('frontendhome.starring')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.wagner_moura')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.geners')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.crime_action')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.this_is')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.violent_forceful')}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-6" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-6" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                        <span class="season_date ms-2">
                                                            2 {{__('movielist.seasons')}}
                                                        </span>
                                                        <span class="trending-year">{{__('movielist.Feb_2019')}}</span>
                                                    </div>
                                                    <div class="iq-custom-select d-inline-block sea-epi mb-4">
                                                        <select name="cars"
                                                            class="form-control season-select select2-basic-single js-states">
                                                            <option value="season1">{{__('otthome.season1')}}</option>
                                                            <option value="season2">{{__('otthome.season2')}}</option>
                                                            <option value="season3">{{__('otthome.season3')}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/01.webp'),
                                                                'id' => '01',
                                                                'showEpisod' => 'S01E01',
                                                                'episodDate' => __('frontenddetail_page.october') . ' 1,
                                                                2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/02.webp'),
                                                                'id' => '02',
                                                                'showEpisod' => 'S01E02',
                                                                'episodDate' => __('frontenddetail_page.october') . ' 8,
                                                                2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/03.webp'),
                                                                'id' => '03',
                                                                'showEpisod' => 'S01E03',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                15, 2022',
                                                                'episodTime' => '36min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/04.webp'),
                                                                'id' => '04',
                                                                'showEpisod' => 'S01E04',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode4'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/05.webp'),
                                                                'id' => '05',
                                                                'showEpisod' => 'S01E05',
                                                                'episodDate' => __('frontenddetail_page.october') . '
                                                                22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-7" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-7" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mt-2"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{(__('frontendhome.watch_trailer'))}}
                                                    </h3>
                                                    <div class="episodes-contens mt-5">
                                                        <div
                                                            class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                            <div
                                                                class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                                <img src="{{ asset('frontend/images/tv-show/episodes/01.webp') }} "
                                                                    class="trailer-image" alt="trailer-image"
                                                                    loading="lazy" />
                                                                <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                                                    class="video-open playbtn text-decoration-none"
                                                                    tabindex="0">
                                                                    <svg version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        x="0px" y="0px" width="80px" height="80px"
                                                                        viewBox="0 0 213.7 213.7"
                                                                        enable-background="new 0 0 213.7 213.7"
                                                                        xml:space="preserve">
                                                                        <polygon class="triangle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10"
                                                                            points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                                                        </polygon>
                                                                        <circle class="circle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10" cx="106.8" cy="106.8"
                                                                            r="103.3">
                                                                        </circle>
                                                                    </svg>
                                                                    <span class="w-trailor text-uppercase">
                                                                        {{(__('frontendhome.watch_trailer'))}} </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-8" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-8" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mb-5"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('otthome.recommended_for_you')}}
                                                    </h3>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott2.webp'),
                                                                'id' => '06',
                                                                'showEpisod' => 'Seasons 1-1',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott3.webp'),
                                                                'id' => '07',
                                                                'showEpisod' => 'Seasons 1-2',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner1.webp'),
                                                                'id' => '08',
                                                                'showEpisod' => 'Seasons 1-3',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner2.webp'),
                                                                'id' => '09',
                                                                'showEpisod' => 'Seasons 1-4',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode4'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner3.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'Seasons 1-5',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide slider-big-img-3">
                                <div class="trending-tab-slider-image">
                                    <img src="{{ asset('frontend/images/movies/ott3.webp') }}  "
                                        alt="trending-tab-slider-image" loading="lazy">
                                </div>
                                <div class="tranding-block position-relative">
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <ul class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                                id="trending-tab-3" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="trending-data-tab-9"
                                                        data-bs-toggle="pill" data-bs-target="#trending-data-9"
                                                        aria-controls="trending-data-9" role="tab"
                                                        aria-selected="true">{{__('frontendhome.overview')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-10" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-10"
                                                        aria-controls="trending-data-10" role="tab"
                                                        aria-selected="false">{{__('frontendhome.episodes')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-11" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-11"
                                                        aria-controls="trending-data-11" role="tab"
                                                        aria-selected="false">{{__('frontendhome.trailers')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-12" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-12"
                                                        aria-controls="trending-data-12" role="tab"
                                                        aria-selected="false">{{__('frontendhome.similar_like')}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content trending-content" id="trending-tab-3-content">
                                            <div id="trending-data-9" class="tab-pane fade show active" role="tabpanel"
                                                aria-labelledby="trending-data-tab-9" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap">
                                                        <span>3 Seasons</span>
                                                        <span class="trending-year">2023</span>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{ asset('frontend/images/movies/trending-label.webp') }}"
                                                                class="img-fluid" alt="" loottading="lazy"></a>
                                                        <span class="text-gold">#2 {{__('otthome.series_today')}}</span>
                                                    </div>
                                                    <p class="trending-dec line-count-3">{{__('otthome.content_here')}}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="iq-button">
                                                            <a href="tv-show-detail"
                                                                class="btn text-uppercase position-relative">
                                                                <span
                                                                    class="button-text">{{__('otthome.play_now')}}</span>
                                                                <i class="fa-solid fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">{{__('frontendhome.starring')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.wagner_moura')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.geners')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.crime_action')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.this_is')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.violent_forceful')}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-10" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-10" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                        <span class="season_date ms-2">
                                                            2 {{__('movielist.seasons')}}
                                                        </span>
                                                        <span class="trending-year">{{__('movielist.Feb_2019')}}</span>
                                                    </div>
                                                    <div class="iq-custom-select d-inline-block sea-epi mb-4">
                                                        <select name="cars"
                                                            class="form-control season-select select2-basic-single js-states">
                                                            <option value="season1">{{__('otthome.season1')}}</option>
                                                            <option value="season2">{{__('otthome.season2')}}</option>
                                                            <option value="season3">{{__('otthome.season3')}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/25.webp'),
                                                                'id' => '01',
                                                                'showEpisod' => 'S01E01',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/26.webp'),
                                                                'id' => '02',
                                                                'showEpisod' => 'S01E02',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/27.webp'),
                                                                'id' => '03',
                                                                'showEpisod' => 'S01E03',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '36min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/28.webp'),
                                                                'id' => '04',
                                                                'showEpisod' => 'S01E04',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/29.webp'),
                                                                'id' => '05',
                                                                'showEpisod' => 'S01E05',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-11" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-11" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mt-2"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{(__('frontendhome.watch_trailer'))}}
                                                    </h3>
                                                    <div class="episodes-contens mt-5">
                                                        <div
                                                            class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                            <div
                                                                class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                                <img src="{{ asset('frontend/images/tv-show/season/35.webp') }} "
                                                                    class="trailer-image" alt="trailer-image"
                                                                    loading="lazy">
                                                                <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                                                    class="video-open playbtn text-decoration-none"
                                                                    tabindex="0">
                                                                    <svg version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        x="0px" y="0px" width="80px" height="80px"
                                                                        viewBox="0 0 213.7 213.7"
                                                                        enable-background="new 0 0 213.7 213.7"
                                                                        xml:space="preserve">
                                                                        <polygon class="triangle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10"
                                                                            points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                                                        </polygon>
                                                                        <circle class="circle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10" cx="106.8" cy="106.8"
                                                                            r="103.3">
                                                                        </circle>
                                                                    </svg>
                                                                    <span class="w-trailor text-uppercase">
                                                                        {{(__('frontendhome.watch_trailer'))}} </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-12" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-12" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mb-5"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('otthome.recommended_for_you')}}
                                                    </h3>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/30.webp'),
                                                                'id' => '06',
                                                                'showEpisod' => 'Seasons 1-2',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/31.webp'),
                                                                'id' => '0 7',
                                                                'showEpisod' => 'Seasons 1-3',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/32.webp'),
                                                                'id' => '08',
                                                                'showEpisod' => 'Seasons 1-4',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '36min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/33.webp'),
                                                                'id' => '09',
                                                                'showEpisod' => 'Seasons 1-5',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/34.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'Seasons 1-6',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide slider-big-img-4">
                                <div class="trending-tab-slider-image">
                                    <img src="{{ asset('frontend/images/movies/banner1.webp') }} "
                                        alt="trending-tab-slider-image" loading="lazy" />
                                </div>
                                <div class="tranding-block position-relative">
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <ul class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                                id="trending-tab-4" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="trending-data-tab-13"
                                                        data-bs-toggle="pill" data-bs-target="#trending-data-13"
                                                        aria-controls="trending-data-13" role="tab"
                                                        aria-selected="true">{{__('frontendhome.overview')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-14" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-14"
                                                        aria-controls="trending-data-14" role="tab"
                                                        aria-selected="false">{{__('frontendhome.episodes')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-15" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-15"
                                                        aria-controls="trending-data-15" role="tab"
                                                        aria-selected="false">{{__('frontendhome.trailers')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-16" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-16"
                                                        aria-controls="trending-data-16" role="tab"
                                                        aria-selected="false">{{__('frontendhome.similar_like')}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content trending-content" id="trending-tab-4-content">
                                            <div id="trending-data-13" class="tab-pane fade show active" role="tabpanel"
                                                aria-labelledby="trending-data-tab-13" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap">
                                                        <span>3 Seasons</span>
                                                        <span class="trending-year">2023</span>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{ asset('frontend/images/movies/trending-label.webp') }} "
                                                                class="img-fluid" alt="" loottading="lazy"></a>
                                                        <span class="text-gold">#2 {{__('otthome.series_today')}}</span>
                                                    </div>
                                                    <p class="trending-dec line-count-3">{{__('otthome.content_here')}}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="iq-button">
                                                            <a href=" " class="btn text-uppercase position-relative">
                                                                <span
                                                                    class="button-text">{{__('otthome.play_now')}}</span>
                                                                <i class="fa-solid fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">{{__('frontendhome.starring')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.wagner_moura')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.geners')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.crime_action')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.this_is')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.violent_forceful')}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-14" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-14" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                        <span class="season_date ms-2">
                                                            2 {{__('movielist.seasons')}}
                                                        </span>
                                                        <span class="trending-year">{{__('movielist.Feb_2019')}}</span>
                                                    </div>
                                                    <div class="iq-custom-select d-inline-block sea-epi mb-4">
                                                        <select name="cars"
                                                            class="form-control season-select select2-basic-single js-states">
                                                            <option value="season1">{{__('otthome.season1')}}</option>
                                                            <option value="season2">{{__('otthome.season2')}}</option>
                                                            <option value="season3">{{__('otthome.season3')}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/11.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'S01E01',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/12.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'S01E02',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/13.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'S01E03',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => ' 36min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/14.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'S01E04',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/15.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'S01E05',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-15" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-15" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mt-2"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{(__('frontendhome.watch_trailer'))}}
                                                    </h3>
                                                    <div class="episodes-contens mt-5">
                                                        <div
                                                            class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                            <div
                                                                class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                                <img src="{{ asset('frontend/images/tv-show/episodes/01.webp') }} "
                                                                    class="trailer-image" alt="trailer-image"
                                                                    loading="lazy" />
                                                                <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                                                    class="video-open playbtn text-decoration-none"
                                                                    tabindex="0">
                                                                    <svg version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        x="0px" y="0px" width="80px" height="80px"
                                                                        viewBox="0 0 213.7 213.7"
                                                                        enable-background="new 0 0 213.7 213.7"
                                                                        xml:space="preserve">
                                                                        <polygon class="triangle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10"
                                                                            points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                                                        </polygon>
                                                                        <circle class="circle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10" cx="106.8" cy="106.8"
                                                                            r="103.3">
                                                                        </circle>
                                                                    </svg>
                                                                    <span class="w-trailor text-uppercase">
                                                                        {{(__('frontendhome.watch_trailer'))}} </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-16" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-16" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mb-5"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('otthome.recommended_for_you')}}
                                                    </h3>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott2.webp'),
                                                                'id' => '06',
                                                                'showEpisod' => 'Seasons 1-1',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott3.webp'),
                                                                'id' => '07',
                                                                'showEpisod' => 'Seasons 1-2',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner1.webp'),
                                                                'id' => '08',
                                                                'showEpisod' => 'Seasons 1-3',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner2.webp'),
                                                                'id' => '09',
                                                                'showEpisod' => 'Seasons 1-4',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner3.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'Seasons 1-5',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide slider-big-img-5">
                                <div class="trending-tab-slider-image">
                                    <img src="{{ asset('frontend/images/movies/banner2.webp') }} "
                                        alt="trending-tab-slider-image" loading="lazy" />
                                </div>
                                <div class="tranding-block position-relative">
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <ul class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                                id="trending-tab-5" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="trending-data-tab-17"
                                                        data-bs-toggle="pill" data-bs-target="#trending-data-17"
                                                        aria-controls="trending-data-17" role="tab"
                                                        aria-selected="true">{{__('frontendhome.overview')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-18" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-18"
                                                        aria-controls="trending-data-18" role="tab"
                                                        aria-selected="false">{{__('frontendhome.episodes')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-19" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-19"
                                                        aria-controls="trending-data-19" role="tab"
                                                        aria-selected="false">{{__('frontendhome.trailers')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-20" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-20"
                                                        aria-controls="trending-data-20" role="tab"
                                                        aria-selected="false">{{__('frontendhome.similar_like')}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content trending-content" id="trending-tab-5-content">
                                            <div id="trending-data-17" class="tab-pane fade show active" role="tabpanel"
                                                aria-labelledby="trending-data-tab-17" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap">
                                                        <span>3 Seasons</span>
                                                        <span class="trending-year">2023</span>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{ asset('frontend/images/movies/trending-label.webp') }} "
                                                                class="img-fluid" alt="" loottading="lazy"></a>
                                                        <span class="text-gold">#2 {{__('otthome.series_today')}}</span>
                                                    </div>
                                                    <p class="trending-dec line-count-3">{{__('otthome.content_here')}}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="iq-button">
                                                            <a href="tv-show-detail"
                                                                class="btn text-uppercase position-relative">
                                                                <span
                                                                    class="button-text">{{__('otthome.play_now')}}</span>
                                                                <i class="fa-solid fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">{{__('frontendhome.starring')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.wagner_moura')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.geners')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.crime_action')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.this_is')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.violent_forceful')}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-18" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-18" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                        <span class="season_date ms-2">
                                                            2 {{__('movielist.seasons')}}
                                                        </span>
                                                        <span class="trending-year">{{__('movielist.Feb_2019')}}</span>
                                                    </div>
                                                    <div class="iq-custom-select d-inline-block sea-epi mb-4">
                                                        <select name="cars"
                                                            class="form-control season-select select2-basic-single js-states">
                                                            <option value="season1">{{__('otthome.season1')}}</option>
                                                            <option value="season2">{{__('otthome.season2')}}</option>
                                                            <option value="season3">{{__('otthome.season3')}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/16.webp'),
                                                                'id' => '01',
                                                                'showEpisod' => 'S01E01',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/17.webp'),
                                                                'id' => '02',
                                                                'showEpisod' => 'S01E02',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/18.webp'),
                                                                'id' => '03',
                                                                'showEpisod' => 'S01E03',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '36min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/19.webp'),
                                                                'id' => '04',
                                                                'showEpisod' => 'S01E04',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/20.webp'),
                                                                'id' => '05',
                                                                'showEpisod' => 'S01E05',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-19" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-19" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mt-2"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{(__('frontendhome.watch_trailer'))}}
                                                    </h3>
                                                    <div class="episodes-contens mt-5">
                                                        <div
                                                            class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                            <div
                                                                class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                                <img src="{{ asset('frontend/images/tv-show/episodes/01.webp') }} "
                                                                    class="trailer-image" alt="trailer-image"
                                                                    loading="lazy" />
                                                                <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                                                    class="video-open playbtn text-decoration-none"
                                                                    tabindex="0">
                                                                    <svg version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        x="0px" y="0px" width="80px" height="80px"
                                                                        viewBox="0 0 213.7 213.7"
                                                                        enable-background="new 0 0 213.7 213.7"
                                                                        xml:space="preserve">
                                                                        <polygon class="triangle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10"
                                                                            points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                                                        </polygon>
                                                                        <circle class="circle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10" cx="106.8" cy="106.8"
                                                                            r="103.3">
                                                                        </circle>
                                                                    </svg>
                                                                    <span class="w-trailor text-uppercase">
                                                                        {{(__('frontendhome.watch_trailer'))}} </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-20" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-20" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mb-5"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('otthome.recommended_for_you')}}
                                                    </h3>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott2.webp'),
                                                                'id' => '06',
                                                                'showEpisod' => 'Seasons 1-1',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott3.webp'),
                                                                'id' => '07',
                                                                'showEpisod' => 'Seasons 1-2',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner1.webp'),
                                                                'id' => '08',
                                                                'showEpisod' => 'Seasons 1-3',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner2.webp'),
                                                                'id' => '09',
                                                                'showEpisod' => 'Seasons 1-4',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner3.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'Seasons 1-5',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide slider-big-img-6">
                                <div class="trending-tab-slider-image">
                                    <img src="{{ asset('frontend/images/movies/banner3.webp') }} "
                                        alt="trending-tab-slider-image" loading="lazy" />
                                </div>
                                <div class="tranding-block position-relative">
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <ul class="trending-pills iq-custom-tab d-flex nav nav-pills justify-content-center align-items-center text-center list-inline"
                                                id="trending-tab-5" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="trending-data-tab-21"
                                                        data-bs-toggle="pill" data-bs-target="#trending-data-21"
                                                        aria-controls="trending-data-21" role="tab"
                                                        aria-selected="true">{{__('frontendhome.overview')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-22" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-22"
                                                        aria-controls="trending-data-22" role="tab"
                                                        aria-selected="false">{{__('frontendhome.episodes')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-23" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-23"
                                                        aria-controls="trending-data-23" role="tab"
                                                        aria-selected="false">{{__('frontendhome.trailers')}}</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="trending-data-tab-24" data-bs-toggle="pill"
                                                        data-bs-target="#trending-data-24"
                                                        aria-controls="trending-data-24" role="tab"
                                                        aria-selected="false">{{__('frontendhome.similar_like')}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content trending-content" id="trending-tab-5-content">
                                            <div id="trending-data-21" class="tab-pane fade show active" role="tabpanel"
                                                aria-labelledby="trending-data-tab-21" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap">
                                                        <span>3 Seasons</span>
                                                        <span class="trending-year">2023</span>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                        <a href="javascript:void(0);"><img
                                                                src="{{ asset('frontend/images/movies/trending-label.webp') }}"
                                                                class="img-fluid" alt="" loottading="lazy"></a>
                                                        <span class="text-gold">#2 {{__('otthome.series_today')}}</span>
                                                    </div>
                                                    <p class="trending-dec line-count-3">{{__('otthome.content_here')}}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="iq-button">
                                                            <a href="tv-show-detail"
                                                                class="btn text-uppercase position-relative">
                                                                <span
                                                                    class="button-text">{{__('otthome.play_now')}}</span>
                                                                <i class="fa-solid fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">{{__('frontendhome.starring')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.wagner_moura')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.geners')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.crime_action')}}</span>
                                                        </div>
                                                        <div class="text-primary title">{{__('frontendhome.this_is')}}:
                                                            <span
                                                                class="text-body">{{__('frontendhome.violent_forceful')}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-22" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-22" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                                    <h1 class="trending-text big-title text-uppercase texture-text"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('frontendhome.hero_camp')}}
                                                    </h1>
                                                    <div
                                                        class="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                        <span class="season_date ms-2">
                                                            2 {{__('movielist.seasons')}}
                                                        </span>
                                                        <span class="trending-year">{{__('movielist.Feb_2019')}}</span>
                                                    </div>
                                                    <div class="iq-custom-select d-inline-block sea-epi mb-4">
                                                        <select name="cars"
                                                            class="form-control season-select select2-basic-single js-states">
                                                            <option value="season1">{{__('otthome.season1')}}</option>
                                                            <option value="season2">{{__('otthome.season2')}}</option>
                                                            <option value="season3">{{__('otthome.season3')}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="2" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/21.webp'),
                                                                'id' => '01',
                                                                'showEpisod' => 'S01E01',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '45min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/22.webp'),
                                                                'id' => '02',
                                                                'showEpisod' => 'S01E02',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '35min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/23.webp'),
                                                                'id' => '03',
                                                                'showEpisod' => 'S01E03',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '36min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/24.webp'),
                                                                'id' => '04',
                                                                'showEpisod' => 'S01E04',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/tv-show/season/25.webp'),
                                                                'id' => '0 5',
                                                                'showEpisod' => 'S01E05',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-23" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-23" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mt-2"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{(__('frontendhome.watch_trailer'))}}
                                                    </h3>
                                                    <div class="episodes-contens mt-5">
                                                        <div
                                                            class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                            <div
                                                                class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                                <img src="{{ asset('frontend/images/tv-show/episodes/01.webp') }}"
                                                                    class="trailer-image" alt="trailer-image"
                                                                    loading="lazy" />
                                                                <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                                                    class="video-open playbtn text-decoration-none"
                                                                    tabindex="0">
                                                                    <svg version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        x="0px" y="0px" width="80px" height="80px"
                                                                        viewBox="0 0 213.7 213.7"
                                                                        enable-background="new 0 0 213.7 213.7"
                                                                        xml:space="preserve">
                                                                        <polygon class="triangle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10"
                                                                            points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                                                        </polygon>
                                                                        <circle class="circle" fill="none"
                                                                            stroke-width="7" stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-miterlimit="10" cx="106.8" cy="106.8"
                                                                            r="103.3">
                                                                        </circle>
                                                                    </svg>
                                                                    <span class="w-trailor text-uppercase">
                                                                        {{(__('frontendhome.watch_trailer'))}}</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="trending-data-24" class="tab-pane fade" role="tabpanel"
                                                aria-labelledby="trending-data-tab-24" tabindex="0">
                                                <div
                                                    class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <h3 class="trending-text big-title text-uppercase texture-text mb-5"
                                                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                                        {{__('otthome.recommended_for_you')}}
                                                    </h3>
                                                    <div class="position-relative swiper swiper-card" data-slide="4"
                                                        data-laptop="3" data-tab="2" data-mobile="1" data-mobile-sm="1"
                                                        data-autoplay="false" data-loop="false" data-navigation="true"
                                                        data-pagination="true">
                                                        <ul class="p-0 swiper-wrapper m-0  list-inline">
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott2.webp'),
                                                                'id' => '06',
                                                                'showEpisod' => 'Seasons 1-1',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode1'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/ott3.webp'),
                                                                'id' => '07',
                                                                'showEpisod' => 'Seasons 1-2',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode2'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner1.webp'),
                                                                'id' => '08',
                                                                'showEpisod' => 'Seasons 1-3',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode3'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner2.webp'),
                                                                'id' => '09',
                                                                'showEpisod' => 'Seasons 1-4',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode4'),
                                                                ]
                                                                )

                                                            </li>
                                                            <li class="swiper-slide">
                                                                @include(
                                                                'frontend::components.cards.episode-card',
                                                                [
                                                                'showImg' => asset(
                                                                'frontend/images/movies/banner3.webp'),
                                                                'id' => '10',
                                                                'showEpisod' => 'Seasons 1-5',
                                                                'episodDate' => 'October 22, 2022',
                                                                'episodTime' => '41min',
                                                                'episodTitle' => __('frontenddetail_page.episode5'),
                                                                ]
                                                                )

                                                            </li>
                                                        </ul>
                                                        <div class="swiper-button swiper-button-next"></div>
                                                        <div class="swiper-button swiper-button-prev"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="swiper-arrow swiper-button-next">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="swiper-arrow swiper-button-prev">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
