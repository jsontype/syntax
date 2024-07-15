@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isVideoJs' => true ,'isSelect2'=>'true'])

@section('content')
<div class="iq-main-slider site-video">
    <div class="container-fluid">
        <div class="iq-content_restriction">
            <div class="iq-restriction_box">
                <span class="subscribe-text">You must be logged in to view this content.</span>
                <div class="iq-button">
                    <a href="" class="btn text-uppercase position-relative">
                        <span class="button-text">Subscribe To Watch</span>
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
                <span> Already a Member?</span>
                <div class="iq-button">
                    <a href="" class="btn text-uppercase position-relative">
                        <span class="button-text">Log in</span>
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="details-part">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                @include('frontend::components.cards.movie-description', [
                'moveName' => __('frontenddetail_page.zombie_island'),
                'imdbRating' => '4.8',
                'movieType' => 'Horror',
                'movieDuration' => '1hr : 48mins',
                'movieReleased' => 'Feb 2017',
                ])

                @include('frontend::components.cards.movie-source')

            </div>
        </div>
    </div>
</div>

<div class="upcomimg-block">
    <div class="container-fluid">
        <section class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendhome.upcoming')}}</h5>
                <!-- <a href="{{ route('frontend.view_all') }}"
                    class="text-primary iq-view-all text-decoration-none flex-none">{{__('otthome.view_all')}}</a> -->
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="3"
                    data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                    data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/01.webp'),
                            'cardTitle' => __('frontenddetail_page.dinoosaur'),
                            'movieTime' => '2hr : 12mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/02.webp'),
                            'cardTitle' => __('frontenddetail_page.godilla'),
                            'movieTime' => '1hr : 22mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/03.webp'),
                            'cardTitle' => __('frontenddetail_page.batter_caill'),
                            'movieTime' => '1hr : 55mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/04.webp'),
                            'cardTitle' => __('frontenddetail_page.co_nouerllng'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/05.webp'),
                            'cardTitle' => __('frontenddetail_page.fast_furious'),
                            'movieTime' => '2hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/06.webp'),
                            'cardTitle' => __('frontenddetail_page.spiderman'),
                            'movieTime' => '1hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/upcoming/07.webp'),
                            'cardTitle' => __('frontenddetail_page.onepeoc'),
                            'movieTime' => '2hr : 30mins',
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </section>
    </div>
</div>
@endsection