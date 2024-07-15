<div class="verticle-slider section-padding-bottom">
    <div class="container-fluid">
        <div class="slider">
            <div class="slider-flex position-relative">
                <div class="slider--col position-relative">
                    <div class="vertical-slider-prev swiper-button"><i class="iconly-Arrow-Up-2 icli"></i></div>
                    <div class="slider-thumbs" data-swiper="slider-thumbs">
                        <div class="swiper-container " data-swiper="slider-thumbs-inner">
                            <div class="swiper-wrapper top-ten-slider-nav">
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative ">
                                        <div class="img-box slider--image">
                                            <img src="{{ asset('frontend/images/top-10/06.webp') }} " class="img-fluid"
                                                alt="6" loading="lazy">
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title">{{__('frontendhome.wars_dragons')}}</h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-body">2 hr 14 mint</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative ">
                                        <div class="img-box slider--image">
                                            <img src="{{ asset('frontend/images/top-10/07.webp') }}" class="img-fluid"
                                                alt="7" loading="lazy">
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title">{{__('frontendhome.the_escape')}}</h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-body">1 hr 45 mint</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="{{ asset('frontend/images/top-10/08.webp') }} " class="img-fluid"
                                                alt="8" loading="lazy">
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title">{{__('frontendhome.x_men')}}</h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-body">1hr : 45mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="{{ asset('frontend/images/top-10/09.webp') }}" class="img-fluid"
                                                alt="9" loading="lazy">
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title">{{__('frontendhome.logan')}}</h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-body">1hr : 22mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-bg">
                                    <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="{{ asset('frontend/images/top-10/05.webp') }} " class="img-fluid"
                                                alt="10" loading="lazy">
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title">{{__('frontendhome.black_queen')}}</h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-body">1h 45mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vertical-slider-next swiper-button"><i class="iconly-Arrow-Down-2 icli"></i></div>
                </div>
                <div class="slider-images" data-swiper="slider-images">
                    <div class="swiper-container " data-swiper="slider-images-inner">
                        <div class="swiper-wrapper ">
                            <div class="swiper-slide">
                                <div class="slider--image block-images"><img
                                        src="{{ asset('frontend/images/top-10/06.webp') }}" loading="lazy" alt="6" />
                                </div>
                                <div class="description">
                                    <div class="block-description">
                                        <ul
                                            class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.comedy')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.romance')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.action')}}</a>
                                            </li>
                                        </ul>
                                        <h2 class="iq-title mb-3"><a
                                                href="tv-show-detail">{{__('frontendhome.wars_dragons')}}</a></h2>
                                        <div class="d-flex align-items-center gap-3 mb-3">
                                            <div class="slider-ratting d-flex align-items-center">
                                                <ul
                                                    class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                            </div>
                                            <span class="text-body">2hr : 14mins</span>
                                        </div>
                                        <p class="mt-0 mb-3">{{__('otthome.content_here')}}</p>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => route('frontend.movie_detail'),
                                        'buttonTitle' => __('otthome.play_now'),
                                        ])
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slider--image block-images"><img
                                        src="{{ asset('frontend/images/top-10/07.webp') }} " loading="lazy" alt="7" />
                                </div>
                                <div class="description">
                                    <div class="block-description">
                                        <ul
                                            class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.comedy')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.romance')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.action')}}</a>
                                            </li>
                                        </ul>
                                        <h2 class="iq-title mb-3"><a href="">{{__('frontendhome.the_escape')}}</a></h2>
                                        <div class="d-flex align-items-center gap-3 mb-3">
                                            <div class="slider-ratting d-flex align-items-center">
                                                <ul
                                                    class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                            </div>
                                            <span class="text-body">1hr : 45mins</span>
                                        </div>
                                        <p class="mt-0 mb-3 line-count-2">{{__('otthome.content_here')}}</p>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => route('frontend.movie_detail'),
                                        'buttonTitle' => __('otthome.play_now'),
                                        ])
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slider--image block-images"><img
                                        src="{{ asset('frontend/images/top-10/08.webp') }} " loading="lazy" alt="8" />
                                </div>
                                <div class="description">
                                    <div class="block-description">
                                        <ul
                                            class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.comedy')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.romance')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.action')}}</a>
                                            </li>
                                        </ul>
                                        <h2 class="iq-title mb-3"><a href="">{{__('frontendhome.x_men')}}</a></h2>
                                        <div class="d-flex align-items-center gap-3 mb-3">
                                            <div class="slider-ratting d-flex align-items-center">
                                                <ul
                                                    class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                            </div>
                                            <span class="text-body">1hr : 50mins</span>
                                        </div>
                                        <p class="mt-0 mb-3">{{__('otthome.content_here')}}</p>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => route('frontend.movie_detail'),
                                        'buttonTitle' => __('otthome.play_now'),
                                        ])
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slider--image block-images"><img
                                        src="{{ asset('frontend/images/top-10/09.webp') }} " loading="lazy" alt="" />
                                </div>
                                <div class="description">
                                    <div class="block-description">
                                        <ul
                                            class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.comedy')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.romance')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.action')}}</a>
                                            </li>
                                        </ul>
                                        <h2 class="iq-title mb-3"><a href="">{{__('frontendhome.logan')}}</a></h2>
                                        <div class="d-flex align-items-center gap-3 mb-3">
                                            <div class="slider-ratting d-flex align-items-center">
                                                <ul
                                                    class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                            </div>
                                            <span class="text-body">1hr : 50mins</span>
                                        </div>
                                        <p class="mt-0 mb-3">{{__('otthome.content_here')}}</p>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => route('frontend.movie_detail'),
                                        'buttonTitle' => __('otthome.play_now')
                                        ])
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slider--image block-images"><img
                                        src="{{ asset('frontend/images/top-10/05.webp') }}" loading="lazy" alt="9" />
                                </div>
                                <div class="description">
                                    <div class="block-description">
                                        <ul
                                            class="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.comedy')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.romance')}}</a>
                                            </li>
                                            <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                                                <a href="{{ route('frontend.view_all') }}"
                                                    class="text-white text-decoration-none">{{__('frontendhome.action')}}</a>
                                            </li>
                                        </ul>
                                        <h2 class="iq-title mb-3"><a href="">{{__('frontendhome.black_queen')}}</a></h2>
                                        <div class="d-flex align-items-center gap-3 mb-3">
                                            <div class="slider-ratting d-flex align-items-center">
                                                <ul
                                                    class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span class="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                            </div>
                                            <span class="text-body">1hr : 50mins</span>
                                        </div>
                                        <p class="mt-0 mb-3">{{__('otthome.content_here')}}</p>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => route('frontend.movie_detail'),
                                        'buttonTitle' => __('otthome.play_now'),
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