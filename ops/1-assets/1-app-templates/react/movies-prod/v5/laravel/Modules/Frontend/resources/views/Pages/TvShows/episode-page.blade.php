@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isVideoJs' => true, 'bodyClass' =>
'custom-header-relative', 'isSelect2' => true])

@section('content')
<div class="iq-main-slider site-video">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="pt-0">
                    <video id="my-video" poster="https://i.ytimg.com/vi_webp/rKVEoyTedv4/maxresdefault.webp" class="video-js vjs-big-play-centered w-100" controls preload="auto" data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=QCGq1epI9pQ"}], "youtube": { "iv_load_policy": 1 } }'>
                        <source src="{{ asset('frontend/images/video/sample-video.mp4') }}" type="video/mp4" />
                        <source src="MY_VIDEO.webm" type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="details-part">
    <div class="container-fluid">
        <div class="trending-info mt-4 pt-0 pb-4">
            <div class="row">
                <div class="col-md-9 col-12 mb-auto">
                    <div class="d-md-flex">
                        <h2 class="trending-text fw-bold texture-text text-uppercase mt-0" style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                            Football 3
                        </h2>
                        <div class="slider-ratting d-flex align-items-center gap-2 ms-md-3 ms-0">
                            <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star-half" aria-hidden="true"></i></li>
                            </ul>
                            <span class="text-white">3.3 <img src="{{ asset('frontend/images/movies/imdb-logo.svg') }}" alt="imdb logo" class="img-fluid ms-2"></span>
                        </div>
                    </div>
                    <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                        <li class="font-size-18">S01E03</li>
                        <li class="font-size-18">Football 3</li>
                        <li class="font-size-18">1.2K views</li>
                    </ul>
                    <ul class="list-inline p-0 m-0 share-icons music-play-lists mb-3">
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
                        <li><span><i class="fa-solid fa-heart"></i></span></li>
                        <li><span><i class="fa-solid fa-plus"></i></span></li>
                        <li><span><i class="fa-solid fa-download"></i></span></li>

                    </ul>
                </div>
                <div class="trailor-video col-md-3 col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right">
                    <a href="https://www.youtube.com/watch?v=QCGq1epI9pQ" class="video-open playbtn block-images position-relative playbtn_thumbnail">
                        <img src="{{ asset('frontend/images/genre/01.webp') }}" class="attachment-medium-large size-medium-large wp-post-image" alt="trailer" loading="lazy" />
                        <span class="content btn btn-transparant iq-button">
                            <i class="fa fa-play me-2 text-white"></i>
                            <span>Trailer Link</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        @include('frontend::components.cards.movie-source')
    </div>
</div>

<section class="recommended-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
                <h5 class="main-title text-capitalize mb-0">Latest Episodes</h5>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="4" data-laptop="4" data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.episode-card', [
                            'showImg' => asset('frontend/images/tv-show/episodes/01.webp'),
                            'id' => '01',
                            'showEpisod' => 'S01E01',
                            'episodDate' => 'October 1, 2020',
                            'episodTime' => '45min',
                            'episodTitle' => __('frontenddetail_page.zombie_island').' 1',
                            ])
                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.episode-card', [
                            'showImg' => asset('frontend/images/tv-show/episodes/02.webp'),
                            'id' => '02',
                            'showEpisod' => 'S01E02',
                            'episodDate' => 'October 8, 2020',
                            'episodTime' => '35min',
                            'episodTitle' => __('frontenddetail_page.zombie_island').' 2',
                            ])
                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.episode-card', [
                            'showImg' => asset('frontend/images/tv-show/episodes/03.webp'),
                            'id' => '03',
                            'showEpisod' => 'S01E03',
                            'episodDate' => 'October 15, 2020',
                            'episodTime' => '36min',
                            'episodTitle' => __('frontenddetail_page.zombie_island').' 3',
                            ])
                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.episode-card', [
                            'showImg' => asset('frontend/images/tv-show/episodes/04.webp'),
                            'id' => '04',
                            'showEpisod' => 'S01E03',
                            'episodDate' => 'October 22, 2020',
                            'episodTime' => '41min',
                            'episodTitle' => __('frontenddetail_page.zombie_island').' 4',
                            ])
                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.episode-card', [
                            'showImg' => asset('frontend/images/tv-show/episodes/01.webp'),
                            'id' => '05',
                            'showEpisod' => 'S01E05',
                            'episodDate' => 'October 22, 2020',
                            'episodTime' => '41min',
                            'episodTitle' => __('frontenddetail_page.zombie_island').' 5',
                            ])
                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
