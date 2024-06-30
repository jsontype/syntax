@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'bodyClass'=>"custom-header-relative"])

@section('content')
    <section class="banner-container ">
        <div class="movie-banner">
            <div class="swiper swiper-banner-container" data-swiper="banner-detail-slider">
                <div class="swiper-wrapper">
                    @include('frontend::components.cards.movie-slider', [
                        'movieCard' => 'tv-show-1',
                        'imagePath' => asset('frontend/images/tv-show/banner-1.webp'),
                        'movieTitle' => __('frontendheader.vikingr'),
                        'movieRange' => '3.5(lmdb)',
                        'movieCate' => 'PG',
                        'movieTime' => '1hr : 44mins',
                        'movieYear' => 'Feb 2018',
                        'buttonUrl' => route('frontend.tvshow_detail'),
                        'movieText' => __('frontendhome.dinosaurs_group'),
                    ])
                    @include('frontend::components.cards.movie-slider', [
                        'movieCard' => 'tv-show-2',
                        'imagePath' => asset('frontend/images/tv-show/banner-2.webp'),
                        'movieTitle' => __('frontendheader.the_boys'),
                        'movieRange' => '3.5(lmdb)',
                        'movieCate' => 'G',
                        'movieTime' => '2hr : 42mins',
                        'movieYear' => 'Nov 2017',
                        'buttonUrl' => route('frontend.tvshow_detail'),
                        'movieText' => __('frontendhome.brutal_emperor'),
                    ])
                    @include('frontend::components.cards.movie-slider', [
                        'movieCard' => 'tv-show-3',
                        'imagePath' => asset('frontend/images/tv-show/banner-3.webp'),
                        'movieTitle' => __('frontendheader.breaking_bad'),
                        'movieRange' => '3.5(lmdb)',
                        'movieCate' => 'PG-13',
                        'movieTime' => '2hr : 12mins',
                        'movieYear' => 'Dec 2018',
                        'buttonUrl' => route('frontend.tvshow_detail'),
                        'movieText' => __('frontendhome.jumbo_also'),
                    ])
                </div>
                <div class="swiper-banner-button-next">
                    <i class="iconly-Arrow-Right-2 icli arrow-icon"></i>
                </div>
                <div class="swiper-banner-button-prev">
                    <i class="iconly-Arrow-Left-2 icli arrow-icon"></i>
                </div>
            </div>
        </div>
    </section>

    @include('frontend::components.sections.popular-show')
    @include('frontend::components.sections.best-of-international-shows')
    @include('frontend::components.sections.shows-we-recommend')
@endsection
