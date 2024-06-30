<div class="tab-slider">
    <div class="slider">
        <div class="position-relative swiper swiper-card" data-slide="1" data-laptop="1" data-tab="1" data-mobile="1"
            data-mobile-sm="1" data-autoplay="false" data-loop="false" data-navigation="true" data-pagination="true"
            data-effect="fade">
            <ul class="p-0 swiper-wrapper m-0 list-inline">
                <li class="swiper-slide tab-slider-banner p-0">
                    <div class="tab-slider-banner-images">
                        <img src="{{ asset('frontend/images/tab-slider/01.webp') }}" alt="tab-slider-background"
                            loading="lazy" />
                    </div>
                    <div class="block-images position-relative w-100">
                        <div class="container-fluid">
                            <div class="row align-items-center min-vh-100 h-100 my-4">
                                <div class="col-md-5 col-lg-5 col-xxl-5">
                                    <div class="tab-left-details">
                                        <div class="d-flex align-items-center gap-3 mb-4">
                                            <a href="javascript:void(0);"><img
                                                    src="{{ asset('frontend/images/movies/trending-label.webp') }}"
                                                    class="img-fluid" alt="" loading="lazy" /></a>
                                            <h5 class="text-gold"><span class="text-primary">#4</span>
                                                {{__('otthome.series_today')}}
                                            </h5>
                                        </div>
                                        <h1 class="mb-2 fw-500 text-capitalize texture-text"
                                            style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                            {{__('otthome.the_hunter')}}
                                        </h1>
                                        <p class="mb-0 font-size-14 line-count-2">{{__('otthome.sds')}}</p>
                                        <ul
                                            class="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                                            <li class="font-size-18">Nov 2022</li>
                                            <li class="font-size-18">{{__('otthome.season1')}}</li>
                                        </ul>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => 'movie-detail',
                                        'buttonTitle' => __('otthome.stream_now'),
                                        ])

                                    </div>
                                </div>
                                <div class="col-md-1 col-lg-2 col-xxl-3">
                                </div>
                                <div class="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                                    <div class="tab-block">
                                        <h4 class="tab-title text-capitalize mb-0">{{__('otthome.all_episode')}}</h4>
                                        <div class="tab-bottom-bordered border-0">
                                            <ul class="nav nav-tabs nav-pills mb-3 overflow-x-scroll" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series1-season-one" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season1')}}</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series1-season-two" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season2')}}</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series1-season-three" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season3')}}</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content iq-tab-fade-up">
                                            <div class="tab-pane fade show active" id="pills-series1-season-one"
                                                role="tabpanel" tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/01.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>{{__('otthome.fire_and_blood')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/02.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>
                                                                {{__('otthome.the_pointy_endr')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/03.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>
                                                                {{__('otthome.you_Win_die')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/04.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.the_black_queen')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="pills-series1-season-two" role="tabpanel"
                                                tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/05.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>
                                                                {{__('otthome.valar_Morghulis')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/06.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>
                                                                {{__('otthome.blackwater')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/07.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>
                                                                {{__('otthome.the_ghost_of_harrenhal')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/08.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.garden_of_bones')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="pills-series1-season-three" role="tabpanel"
                                                tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/09.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>
                                                                {{__('otthome.mhysa')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/10.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>
                                                                {{__('otthome.second_sons')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/11.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>
                                                                {{__('otthome.the_climb')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/12.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.kissed_by_fire')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide tab-slider-banner p-0">
                    <div class="tab-slider-banner-images">
                        <img src="{{ asset('frontend/images/tab-slider/02.webp') }}" alt="tab-slider-background"
                            loading="lazy" />
                    </div>
                    <div class="block-images position-relative w-100">
                        <div class="container-fluid">
                            <div class="row align-items-center min-vh-100 h-100 my-4">
                                <div class="col-md-5 col-lg-5 col-xxl-5">
                                    <div class="tab-left-details">
                                        <div class="d-flex align-items-center gap-3 mb-4">
                                            <a href="javascript:void(0);"><img
                                                    src="{{ asset('frontend/images/movies/trending-label.webp') }}"
                                                    class="img-fluid" alt="1" loading="lazy" /></a>
                                            <h5 class="text-gold"><span class="text-primary">#4</span>
                                                {{__('otthome.series_yesterday')}}
                                            </h5>
                                        </div>
                                        <h1 class="mb-2 fw-500 text-capitalize texture-text"
                                            style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                            {{__('otthome.pirates_of_dayones')}}
                                        </h1>
                                        <p class="mb-0 font-size-14 line-count-2">{{__('otthome.sds')}}</p>
                                        <ul
                                            class="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                                            <li class="font-size-18">Nov 2022</li>
                                            <li class="font-size-18">{{__('otthome.season1')}}</li>
                                        </ul>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => 'movie-detail',
                                        'buttonTitle' => __('otthome.stream_now'),
                                        ])

                                    </div>
                                </div>
                                <div class="col-md-1 col-lg-2 col-xxl-3">
                                </div>
                                <div class="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                                    <div class="tab-block">
                                        <h4 class="tab-title text-capitalize">{{__('otthome.all_episode')}}</h4>
                                        <div class="tab-bottom-bordered border-0">
                                            <ul class="nav nav-tabs nav-pills mb-3 overflow-x-scroll" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series2-season-one" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season1')}}</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series2-season-two" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season2')}}</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series2-season-three" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season3')}}</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content iq-tab-fade-up">
                                            <div class="tab-pane fade show active" id="pills-series2-season-one"
                                                role="tabpanel" tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/13.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>
                                                                {{__('otthome.the_curse_of')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/14.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>
                                                                {{__('otthome.dead_chest')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/15.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span> {{__('otthome.at_world')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/16.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.on_stranger')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="pills-series2-season-two" role="tabpanel"
                                                tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/17.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>
                                                                {{__('otthome.dead_men')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/18.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>
                                                                {{__('otthome.tales_code')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/19.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>
                                                                {{__('otthome.romance_dawn')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/20.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.man_the_straw')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="pills-series2-season-three" role="tabpanel"
                                                tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/21.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>
                                                                {{__('otthome.tell_tales')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/22.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>
                                                                {{__('otthome.The_pirates_coming')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/23.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>
                                                                {{__('otthome.eat_baratie')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/24.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.chef_chore_boy')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide tab-slider-banner p-0">
                    <div class="tab-slider-banner-images">
                        <img src="{{ asset('frontend/images/tab-slider/03.webp') }} " alt="tab-slider-background">
                    </div>
                    <div class="block-images position-relative w-100">
                        <div class="container-fluid">
                            <div class="row align-items-center min-vh-100 h-100 my-4">
                                <div class="col-md-5 col-lg-5 col-xxl-5">
                                    <div class="tab-left-details">
                                        <div class="d-flex align-items-center gap-3 mb-4">
                                            <a href="javascript:void(0);"><img
                                                    src="{{ asset('frontend/images/movies/trending-label.webp') }} "
                                                    class="img-fluid" alt="label" loading="lazy"></a>
                                            <h5 class="text-gold"><span
                                                    class="text-primary">#4</span> {{__('otthome.series_tomorrow')}}</h5>
                                        </div>
                                        <h1 class="mb-2 fw-500 text-capitalize texture-text"
                                            style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">
                                            {{__('otthome.peaky_blinders')}}
                                        </h1>
                                        <p class="mb-0 font-size-14 line-count-2">{{__('otthome.sds')}}</p>
                                        <ul
                                            class="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                                            <li class="font-size-18">Nov 2022</li>
                                            <li class="font-size-18">{{__('otthome.season1')}}</li>
                                        </ul>
                                        @include('frontend::components.cards.custom-button', [
                                        'buttonUrl' => 'movie-detail',
                                        'buttonTitle' => __('otthome.stream_now'),
                                        ])

                                    </div>
                                </div>
                                <div class="col-md-1 col-lg-2 col-xxl-3">
                                </div>
                                <div class="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                                    <div class="tab-block">
                                        <h4 class="tab-title text-capitalize">{{__('otthome.all_episode')}}</h4>
                                        <div class="tab-bottom-bordered border-0">
                                            <ul class="nav nav-tabs nav-pills mb-3 overflow-x-scroll" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series3-season-one" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season1')}}</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series3-season-two" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season2')}}</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="pill"
                                                        data-bs-target="#pills-series3-season-three" type="button"
                                                        role="tab"
                                                        aria-selected="false">{{__('otthome.season3')}}</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content iq-tab-fade-up">
                                            <div class="tab-pane fade show active" id="pills-series3-season-one"
                                                role="tabpanel" tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/25.webp') }}"
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span> {{__('otthome.episode1')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/26.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span> {{__('otthome.episode2')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/27.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>
                                                                {{__('otthome.episode3')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/28.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>
                                                                {{__('otthome.episode4')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="pills-series3-season-two" role="tabpanel"
                                                tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/29.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>{{__('otthome.episode1')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/30.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>{{__('otthome.episode2')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/31.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>{{__('otthome.episode3')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/32.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>{{__('otthome.episode4')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="pills-series3-season-three" role="tabpanel"
                                                tabindex="0">
                                                <ul class="list-inline m-0 p-0">
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/33.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E1</span>{{__('otthome.episode1')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/34.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E2</span>{{__('otthome.episode2')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/35.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E3</span>{{__('otthome.episode3')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center gap-3">
                                                        <div class="image-box flex-shrink-0">
                                                            <img src="{{ asset('frontend/images/tv-show/season/36.webp') }} "
                                                                alt="image-icon" class="img-fluid rounded"
                                                                loading="lazy" />
                                                        </div>
                                                        <div class="image-details">
                                                            <h6 class="mb-1 text-capitalize"><span
                                                                    class="text-primary">E4</span>{{__('otthome.episode4')}}
                                                            </h6>
                                                            <small>45 minute</small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="joint-arrows">
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
            </div>
        </div>
    </div>
</div>
