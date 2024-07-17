@extends('frontend::layouts.master', ['isSwiperSlider' => true ,'bodyClass'=>"custom-header-relative"])

@section('content')
<section class="banner-container ">
    <div class="movie-banner">
        <div class="swiper swiper-banner-container" data-swiper="banner-detail-slider">
            <div class="swiper-wrapper">
                @include('frontend::components.cards.movie-slider', [
                'movieCard' => 'movie-banner-1',
                'imagePath' => asset('frontend/images/movies/movie-banner-1.webp'),
                'movieTitle' => __('frontendheader.john_wick'),
                'movieRange' => '3.5(lmdb)',
                'movieCate' => 'PG',
                'movieTime' => '1hr : 44mins',
                'movieYear' => 'Feb 2018',
                'buttonUrl' => route('frontend.movie_detail'),
                'movieText' => __('frontendhome.dinosaurs_group',)
                ])
                @include('frontend::components.cards.movie-slider', [
                'movieCard' => 'movie-banner-2',
                'imagePath' => asset('frontend/images/movies/movie-banner-2.webp'),
                'movieTitle' => __('frontendheader.jumanjj'),
                'movieRange' => '3.5(lmdb)',
                'movieCate' => 'G',
                'movieTime' => '2hr : 42mins',
                'movieYear' => 'Nov 2017',
                'buttonUrl' => route('frontend.movie_detail'),
                'movieText' => __('frontendhome.brutal_emperor'),
                ])
                @include('frontend::components.cards.movie-slider', [
                'movieCard' => 'movie-banner-3',
                'imagePath' => asset('frontend/images/movies/movie-banner-3.webp'),
                'movieTitle' => __('frontendhome.the_witcher'),
                'movieRange' => '3.5(lmdb)',
                'movieCate' => 'PG-13',
                'movieTime' => '2hr : 12mins',
                'movieYear' => 'Dec 2018',
                'buttonUrl' => route('frontend.movie_detail'),
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

@include('frontend::components.sections.Popular-movies')
@include('frontend::components.sections.specials-latest-movies')
@include('frontend::components.sections.recommended', ['recommended' => __('frontendform.movies_recommended') ])
@endsection
