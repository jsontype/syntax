@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'bodyClass'=>"custom-header-relative"])

@section('content')
<section class="banner-container">
    <div class="movie-banner">
        <div class="swiper swiper-banner-container" data-swiper="banner-detail-slider">
            <div class="swiper-wrapper">
                @include('frontend::components.cards.movie-slider', [
                'movieCard' => 'video-1',
                'imagePath' => asset('frontend/images/video/banner-1.webp'),
                'movieTitle' => __('otthome.sapce'),
                'movieRange' => '3.5(lmdb)',
                'movieCate' => 'PG',
                'movieTime' => '1hr : 44mins',
                'movieYear' => 'Feb 2018',
                'buttonUrl' => route('frontend.video_detail'),
                'movieText' => __('frontendhome.dinosaurs_group')
                ])
                @include('frontend::components.cards.movie-slider', [
                'movieCard' => 'video-2',
                'imagePath' => asset('frontend/images/video/banner-2.webp'),
                'movieTitle' => __('frontendhome.dragon_king'),
                'movieRange' => '3.5(lmdb)',
                'movieCate' => 'G',
                'movieTime' => '2hr : 42mins',
                'movieYear' => 'Nov 2017',
                'buttonUrl' => route('frontend.video_detail'),
                'movieText' => __('frontendhome.brutal_emperor')
                ])
                @include('frontend::components.cards.movie-slider', [
                'movieCard' => 'video-3',
                'imagePath' => asset('frontend/images/video/banner-3.webp'),
                'movieTitle' => __('frontendhome.charlie_chaplin'),
                'movieRange' => '3.5(lmdb)',
                'movieCate' => 'PG-13',
                'movieTime' => '2hr : 12mins',
                'movieYear' => 'Dec 2018',
                'buttonUrl' => route('frontend.video_detail'),
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

@include('frontend::components.sections.popular-videos')
@include('frontend::components.sections.specials-latest-videol')
@include('frontend::components.sections.videos-recommended')
@endsection
