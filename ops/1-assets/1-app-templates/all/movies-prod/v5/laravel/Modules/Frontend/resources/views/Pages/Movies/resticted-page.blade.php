@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isSelect2' => true])

@section('content')
<div class="iq-main-slider site-video">
    <div class="container-fluid">
        <div class="iq-content_restriction">
            <div class="iq-restriction_box">
                <span class="subscribe-text">{{__('frontendrestricted.logged_in')}}</span>
                @include('frontend::components.widgets.custom-button', [
                'buttonTitle' => __('frontendrestricted.subscribe_watch'),
                'buttonUrl' => 'javascript:void(0)',
                ])

                <span>{{__('frontendrestricted.already_member')}}</span>
                @include('frontend::components.widgets.custom-button', [
                'buttonTitle' => __('frontendrestricted.log_in'),
                'buttonUrl' => 'javascript:void(0)',
                ])
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



<div class="cast-tabs">
    <div class="container-fluid">
        <div class="content-details trending-info g-border iq-rtl-direction">
            <ul class="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 " role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="pill" href="#cast-1" role="tab"
                        aria-selected="true">{{__('frontenddetail_page.cast')}}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#crew-1" role="tab"
                        aria-selected="false">{{__('frontenddetail_page.crew')}}</a>
                </li>
            </ul>
            <div class="tab-content">
                <div id="cast-1" class="tab-pane animated fadeInUp active show" role="tabpanel">
                    <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="3"
                        data-mobile="2" data-mobile-sm="1" data-autoplay="false" data-loop="false"
                        data-navigation="true" data-pagination="true">
                        <ul class="list-inline swiper-wrapper">
                            <li class="swiper-slide">
                                <div class="cast-images m-0 row align-items-center position-relative">
                                    <div class="col-4 img-box p-0">
                                        <img src="{{ asset('frontend/images/genre/g1.webp') }}" class="img-fluid"
                                            alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description">
                                        <h6 class="iq-title">
                                            <a href="{{ route('frontend.cast_details') }}"
                                                tabindex="0">{{__('frontenddetail_page.james_chinlund')}} </a>
                                        </h6>
                                        <div class="video-time d-flex align-items-center my-2">
                                            <small class="text-white">{{__('frontenddetail_page.as_james')}}</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="cast-images m-0 row align-items-center position-relative">
                                    <div class="col-4 img-box p-0">
                                        <img src="{{ asset('frontend/images/genre/g2.webp') }}" class="img-fluid"
                                            alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description">
                                        <h6 class="iq-title">
                                            <a href="{{ route('frontend.cast_details') }}"
                                                tabindex="0">{{__('frontenddetail_page.james_earl')}} </a>
                                        </h6>
                                        <div class="video-time d-flex align-items-center my-2">
                                            <small class="text-white">{{__('frontenddetail_page.as_jones')}}</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="crew-1" class="tab-pane animated fadeInUp" role="tabpanel">
                    <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="3"
                        data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="false"
                        data-navigation="true" data-pagination="true">
                        <ul class="list-inline swiper-wrapper">
                            <li class="swiper-slide">
                                <div class="cast-images m-0 row align-items-center position-relative">
                                    <div class="col-4 img-box p-0">
                                        <img src="{{ asset('frontend/images/genre/g3.webp') }}" class="img-fluid"
                                            alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description starring-desc ">
                                        <h6 class="iq-title">
                                            <a href="{{ route('frontend.cast_details') }}" tabindex="0">
                                                {{__('frontenddetail_page.jeff_nathanson')}} </a>
                                        </h6>
                                        <div class="video-time d-flex align-items-center my-2">
                                            <small class="text-white">{{__('frontenddetail_page.writing')}}</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="cast-images m-0 row align-items-center position-relative">
                                    <div class="col-4 img-box p-0">
                                        <img src="{{ asset('frontend/images/genre/g5.webp') }}"
                                            class="person__poster--image img-fluid" alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description starring-desc ">
                                        <h6 class="iq-title">
                                            <a href="{{ route('frontend.cast_details') }}" tabindex="0">
                                                {{__('frontenddetail_page.irene_mecchi')}} </a>
                                        </h6>
                                        <div class="video-time d-flex align-items-center my-2">
                                            <small class="text-white">{{__('frontenddetail_page.writing')}}</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="cast-images m-0 row align-items-center position-relative">
                                    <div class="col-4 img-box p-0">
                                        <img src="{{ asset('frontend/images/genre/g4.webp') }}"
                                            class="person__poster--image img-fluid" alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description starring-desc ">
                                        <h6 class="iq-title">
                                            <a href="{{ route('frontend.cast_details') }}" tabindex="0">
                                                {{__('frontenddetail_page.karan_gilchrist')}} </a>
                                        </h6>
                                        <div class="video-time d-flex align-items-center my-2">
                                            <small class="text-white">{{__('frontenddetail_page.production')}}</small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@include('frontend::components.sections.movies-recommended-for')
@include('frontend::components.sections.related-movies')
@include('frontend::components.sections.related-videos')
@include('frontend::components.sections.upcoming')
@endsection