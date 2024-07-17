@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'IS_MEGA' => true])

@section('content')
<div class="iq-banner-thumb-slider">
    <div class="slider">
        <div class="position-relative slider-bg d-flex justify-content-end">

            <div class="position-relative my-auto">
                <div class="horizontal_thumb_slider" data-swiper="slider-thumbs-ott">
                    <div class="banner-thumb-slider-nav">
                        <div class="swiper-container " data-swiper="slider-thumbs-inner-ott">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="{{ asset('frontend/images/movies/ott1.webp') }}" class="img-fluid"
                                                alt="" loading="lazy">
                                            <div class="block-description ps-3">
                                                <h6 class="iq-title fw-500 mb-0">{{__('otthome.the_hunter')}}</h6>
                                                <span class="fs-12">2 hr 6 minute</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="{{ asset('frontend/images/movies/ott2.webp') }}" class="img-fluid"
                                                alt="" loading="lazy">
                                            <div class="block-description">
                                                <h6 class="iq-title fw-500 mb-0">{{__('otthome.the_mandalorian')}}</h6>
                                                <span class="fs-12">2 hr 14 minute</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="{{ asset('frontend/images/movies/ott3.webp') }}" class="img-fluid"
                                                alt="" loading="lazy">
                                            <div class="block-description">
                                                <h6 class="iq-title fw-500 mb-0">{{__('otthome.better_call_saul')}}</h6>
                                                <span class="fs-12">2 hr 55 minute</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-prev swiper-button">
                            <i class="iconly-Arrow-Left-2 icli"></i>
                        </div>
                        <div class="slider-next swiper-button">
                            <i class="iconly-Arrow-Right-2 icli"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider-images" data-swiper="slider-images-ott">
                <div class="swiper-container" data-swiper="slider-images-inner-ott">
                    <div class="swiper-wrapper m-0">
                        <div class="swiper-slide p-0">
                            <div class="slider--image block-images">
                                <img src="{{ asset('frontend/images/movies/ott1.webp') }}" loading="lazy"
                                    alt="banner" />
                            </div>
                            <div class="description">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="slider-content">
                                            <div class="d-flex align-items-center RightAnimate mb-3">
                                                <span
                                                    class="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">Pg</span>
                                                <ul
                                                    class="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.adventure')}}</a>
                                                    </li>
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.thriller')}}</a>
                                                    </li>
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.drama')}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                                                class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                                                {{__('otthome.the_hunter')}}
                                            </h1>
                                            <p class="line-count-3 RightAnimate-two"> {{__('otthome.after_death')}}</p>
                                            <div class="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                                                <div class="slider-ratting d-flex align-items-center">
                                                    <ul
                                                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                        <li>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </li>
                                                    </ul>
                                                    <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                                    <span class="ms-2">
                                                        <img src="{{ asset('frontend/images/movies/imdb-logo') }}.svg"
                                                            alt="imdb logo" class="img-fluid" loading="lazy">
                                                    </span>
                                                </div>
                                                <span class="font-size-14 fw-500">2 Hr : 6 Mins</span>
                                                <div class="text-primary font-size-14 fw-500 text-capitalize">
                                                    {{__('otthome.genres')}}: <a href="{{ route('frontend.view_all') }}"
                                                        class="text-decoration-none ms-1">{{__('otthome.drama')}}</a>
                                                </div>
                                                <div class="text-primary font-size-14 fw-500 text-capitalize">
                                                    {{__('otthome.starting')}}:
                                                    <a href="{{ route('frontend.cast_details') }}"
                                                        class="text-decoration-none ms-1">{{__('otthome.jeffrey_silver')}}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="RightAnimate-four">

                                            @include('frontend::components.widgets.custom-button', [
                                            'buttonTitle' => __('otthome.stream_now'),
                                            'buttonUrl' => 'movie-detail',
                                            ])


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide p-0">
                            <div class="slider--image block-images">
                                <img src="{{ asset('frontend/images/movies/ott2.webp') }}" loading="lazy" alt="" />
                            </div>
                            <div class="description">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="slider-content">
                                            <div class="d-flex align-items-center RightAnimate mb-3">
                                                <span
                                                    class="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">NC-17</span>
                                                <ul
                                                    class="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.animation')}}</a>
                                                    </li>
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.sci_fi')}}</a>
                                                    </li>
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.action')}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                                                class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                                                {{__('otthome.the_mandalorian')}}
                                            </h1>
                                            <p class="line-count-3 RightAnimate-two">{{__('otthome.after_galactic')}}
                                            </p>
                                            <div class="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                                                <div class="slider-ratting d-flex align-items-center">
                                                    <ul
                                                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                        <li>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </li>
                                                    </ul>
                                                    <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                                </div>
                                                <span class="font-size-14 fw-500">2 Hr : 14 Mins</span>
                                                <div class="text-primary font-size-14 fw-500 text-capitalize">
                                                    {{__('otthome.genres')}}:
                                                    <a href="{{ route('frontend.view_all') }}"
                                                        class="text-decoration-none ms-1">{{__('otthome.sci_fi')}}</a>
                                                </div>
                                                <div class="text-primary font-size-14 fw-500 text-capitalize">
                                                    {{__('otthome.starting')}}:
                                                    <a href="{{ route('frontend.cast_list') }}"
                                                        class="text-decoration-none ms-1">{{__('otthome.james_chinlund')}}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="RightAnimate-four">
                                            @include('frontend::components.widgets.custom-button', [
                                            'buttonTitle' => __('otthome.stream_now'),
                                            'buttonUrl' => 'movie-detail',
                                            ])

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide p-0">
                            <div class="slider--image block-images">
                                <img src="{{ asset('frontend/images/movies/ott3.webp') }}" loading="lazy" alt="" />
                            </div>
                            <div class="description">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="slider-content">
                                            <div class="d-flex align-items-center RightAnimate mb-3">
                                                <span
                                                    class="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">G</span>
                                                <ul
                                                    class="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.history')}}</a>
                                                    </li>
                                                    <li
                                                        class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                        <a href="{{ route('frontend.view_all') }}"
                                                            class="text-decoration-none">{{__('otthome.action')}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                                                class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                                                Better call saul </h1>
                                            <p class="line-count-3 RightAnimate-two">{{__('otthome.ex_jimmy')}}</p>
                                            <div class="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                                                <div class="slider-ratting d-flex align-items-center">
                                                    <ul
                                                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                        <li>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span class="font-size-14 fw-500">2 Hr : 55 Mins</span>
                                                <div class="text-primary font-size-14 fw-500 text-capitalize">
                                                    {{__('otthome.genres')}}:
                                                    <a href="{{ route('frontend.view_all') }}"
                                                        class="text-decoration-none ms-1">{{__('otthome.horror')}}</a>
                                                </div>
                                                <div class="text-primary font-size-14 fw-500 text-capitalize">
                                                    {{__('otthome.starting')}}:
                                                    <a href="#"
                                                        class="text-decoration-none ms-1">{{__('otthome.brenda_chapman')}}</a>
                                                    <span class="text-body">,</span>
                                                    <a href="{{ route('frontend.cast_list') }}"
                                                        class="text-decoration-none ms-1">{{__('otthome.caleb_deschannelr')}}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="RightAnimate-four">
                                            @include('frontend::components.widgets.custom-button', [
                                            'buttonTitle' => __('otthome.stream_now'),
                                            'buttonUrl' => 'movie-detail',
                                            ])
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="section-padding-top">
    @include('frontend::components.sections.continue-watching', ['value' => '5'])
</div>
@include('frontend::components.sections.top-ten-block')
@include('frontend::components.sections.only-on-streamit')
@include('frontend::components.sections.verticle-slider')
@include('frontend::components.sections.Your-Favourite-Personality')
@include('frontend::components.sections.Popular-movies')
@include('frontend::components.sections.tab-slider')
@include('frontend::components.sections.geners')
@include('frontend::components.sections.recommended', ['recommended' => __('otthome.recommended_for_you')])
@include('frontend::components.sections.top-pict')
@endsection