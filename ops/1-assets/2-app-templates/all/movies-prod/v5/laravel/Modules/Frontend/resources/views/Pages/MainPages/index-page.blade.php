@extends('frontend::layouts.master', ['isSwiperSlider' => true ,'bodyClass'=>"custom-header-relative","isSelect2"=>true])

@section('content')
<section id="home-banner-slider" class="iq-main-slider p-0 swiper banner-home-swiper overflow-hidden"
    data-swiper="home-banner-slider">
    <div class="slider m-0 p-0 swiper-wrapper home-slider">
        <div class="swiper-slide slide s-bg-1 p-0">
            <div class="banner-home-swiper-image">
                <img src="{{ asset('frontend/images/movies/banner1.webp') }}" alt="banner-home-swiper-image"
                    loading="lazy" />
            </div>
            <div class="container-fluid position-relative h-100">
                <div class="slider-inner h-100">
                    <div class="row align-items-center iq-ltr-direction h-100">
                        <div class="col-lg-7 col-md-12">
                            <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                                class="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                                {{__('frontendhome.another_danger')}}
                            </h1>
                            <div class="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                                <div class="slider-ratting d-flex align-items-center">
                                    <ul
                                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                    <span class="ms-2">
                                        <img src="{{ asset('frontend/images/movies/imdb-logo.svg') }}" alt="imdb logo"
                                            class="img-fluid" loading="lazy">
                                    </span>
                                </div>
                                <span
                                    class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">{{__('frontendhome.action')}}</span>
                                <span class="font-size-14 fw-500 time">2 Hr : 6 Mins</span>
                            </div>
                            <p class="line-count-3 RightAnimate-two"> {{__('frontendhome.piracy_act_robbery')}}
                            </p>
                            <div class="trending-list RightAnimate-three">
                                <div class="text-primary genres fw-500"> Genres:
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.action')}} </a>
                                </div>
                                <div class="text-primary tag fw-500"> Tag:
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.action')}}, </a>
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.adventure')}}, </a>
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.horror')}} </a>
                                </div>
                            </div>
                            <div class="RightAnimate-four">
                                @include('frontend::components.cards.custom-button', [
                                'buttonUrl' => route('frontend.movie_detail'),
                                'buttonTitle' => __('otthome.play_now'),
                                ])
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                            <a href="{{ asset('frontend/images/video/trailer.mp4') }}"
                                class="video-open playbtn text-decoration-none" tabindex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px"
                                    height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                    xml:space="preserve">
                                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                    </circle>
                                </svg>
                                <span class="w-trailor text-uppercase"> {{__('frontendhome.watch_trailer')}} </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-slide slide s-bg-1 p-0">
            <div class="banner-home-swiper-image">
                <img src="{{ asset('frontend/images/movies/banner2.webp') }} " alt="banner-home-swiper-image"
                    loading="lazy" />
            </div>
            <div class="container-fluid position-relative h-100">
                <div class="slider-inner h-100">
                    <div class="row align-items-center iq-ltr-direction h-100">
                        <div class="col-lg-7 col-md-12">
                            <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                                class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                                {{__('frontendhome.bumblebee')}} </h1>
                            <div class="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                                <div class="slider-ratting d-flex align-items-center">
                                    <ul
                                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                    <span class="ms-2">
                                        <img src="{{ asset('frontend/images/movies/imdb-logo.svg') }}" alt="imdb logo"
                                            class="img-fluid" loading="lazy">
                                    </span>
                                </div>
                                <span
                                    class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">{{__('frontendhome.action')}}</span>
                                <span class="font-size-14 fw-500 time">2 Hr : 6 Mins</span>
                            </div>
                            <p class="line-count-3 RightAnimate-two">{{__('frontendhome.optimus_autobot')}}
                            </p>
                            <div class="trending-list RightAnimate-three">
                                <div class="text-primary genres fw-500"> Genres:
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.action')}} </a>
                                </div>
                                <div class="text-primary tag fw-500"> Tag:
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.action')}}, </a>
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.adventure')}}, </a>
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.horror')}} </a>
                                </div>
                            </div>
                            <div class="RightAnimate-four">
                                @include('frontend::components.cards.custom-button', [
                                'buttonUrl' => route('frontend.movie_detail'),
                                'buttonTitle' => __('otthome.play_now'),
                                ])
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                            <a href="{{ asset('frontend/images/video/trailer.mp4') }} "
                                class="video-open playbtn text-decoration-none" tabindex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px"
                                    height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                    xml:space="preserve">
                                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                    </circle>
                                </svg>
                                <span class="w-trailor text-uppercase"> {{__('frontendhome.watch_trailer')}} </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-slide slide s-bg-1 p-0">
            <div class="banner-home-swiper-image">
                <img src="{{ asset('frontend/images/movies/banner3.webp') }}" alt="banner-home-swiper-image"
                    loading="lazy" />
            </div>
            <div class="container-fluid position-relative h-100">
                <div class="slider-inner h-100">
                    <div class="row align-items-center iq-ltr-direction h-100">
                        <div class="col-lg-7 col-md-12">
                            <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                                class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                                {{__('frontendhome.another_danger')}}
                            </h1>
                            <div class="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                                <div class="slider-ratting d-flex align-items-center">
                                    <ul
                                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star-half" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                    <span class="ms-2">
                                        <img src="{{ asset('frontend/images/movies/imdb-logo.svg') }} " alt="imdb logo"
                                            class="img-fluid" loading="lazy">
                                    </span>
                                </div>
                                <span
                                    class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">{{__('frontendhome.action')}}</span>
                                <span class="font-size-14 fw-500 time">2 Hr : 6 Mins</span>
                            </div>
                            <p class="line-count-3 RightAnimate-two"> {{__('frontendhome.piracy_robbery')}}
                            </p>
                            <div class="trending-list RightAnimate-three">
                                <div class="text-primary genres fw-500"> Genres:
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.action')}} </a>
                                </div>
                                <div class="text-primary tag fw-500"> Tag:
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.action')}}, </a>
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.adventure')}}, </a>
                                    <a href="{{ route('frontend.view_all') }}"
                                        class="fw-normal text-white text-decoration-none ms-2">
                                        {{__('frontendhome.horror')}} </a>
                                </div>
                            </div>
                            <div class="RightAnimate-four">
                                @include('frontend::components.cards.custom-button', [
                                'buttonUrl' => route('frontend.movie_detail'),
                                'buttonTitle' => __('otthome.play_now'),
                                ])
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                            <a href="{{ asset('frontend/images/video/trailer.mp4') }}"
                                class="video-open playbtn text-decoration-none" tabindex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px"
                                    height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                    xml:space="preserve">
                                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                    </circle>
                                </svg>
                                <span class="w-trailor text-uppercase"> {{__('frontendhome.watch_trailer')}} </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-banner-button-prev swiper-nav" id="home-banner-slider-prev">
        <i></i>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none"
            stroke="currentColor">
            <circle r="20" cy="22" cx="22"></circle>
        </svg>
    </div>
    <div class="swiper-banner-button-next swiper-nav" id="home-banner-slider-next">
        <i></i>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none"
            stroke="currentColor">
            <circle r="20" cy="22" cx="22"></circle>
        </svg>
    </div>
    <div class="swiper-pagination"></div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle"
            fill="none" stroke="currentColor">
            <circle r="20" cy="22" cx="22" id="test"></circle>
        </symbol>
    </svg>
</section>


@include('frontend::components.sections.continue-watching', ['value' => '4'])
@include('frontend::components.sections.upcomming')
@include('frontend::components.sections.latest-movies')
@include('frontend::components.sections.2verticle-slider')
@include('frontend::components.sections.suggested')
@include('frontend::components.sections.parallax')
@include('frontend::components.sections.tranding-tab')
@include('frontend::components.sections.recommended', ['recommended' => __('frontendform.recommended_tv_show')])
@endsection
