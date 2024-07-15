@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isVideoJs' => true, 'isSelect2' => true, 'bodyClass' =>
'custom-header-relative'])

@section('content')
<div class="tv-show-detail">
    <div class="container-fluid">
        <div class="overlay-wrapper iq-main-slider "
            style="background:url({{ asset('frontend/images/tv-show/episodes/main-banner.webp') }}); background-repeat: no-repeat;">
            <div class="banner-caption">
                <div class="trending-info p-0">
                    <h1 style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                        class="texture-text big-font text-uppercase mt-2">{{__('frontendepisode_page.zombie_world')}}
                    </h1>
                    <div class="slider-ratting d-flex align-items-center gap-3" data-animation-in="fadeInLeft">
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
                                <i class="fa fa-star-half" aria-hidden="true"></i>
                            </li>
                        </ul>
                        <span class="text-white">4.5 <img src="{{ asset('frontend/images/movies/imdb-logo.svg') }}"
                                alt="imdb logo" loading="lazy" class="img-fluid ms-2"></span>
                    </div>
                    <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                        <li class="trending-list"><a class="text-primary text-uppercase font-size-18"
                                href="{{ route('frontend.view_all') }}">{{__('otthome.comedy')}}</a></li>
                        <li class="trending-list"><a class="text-primary text-uppercase font-size-18"
                                href="{{ route('frontend.view_all') }}">{{__('otthome.drama')}}</a></li>
                    </ul>
                    <div class="d-flex flex-wrap align-items-center gap-3 font-size-20 mb-3 fw-500 text-white">
                        <span>{{__('frontendepisode_page.seasons')}} 1 </span>
                        <span>{{__('movielist.Feb_2019')}}</span>
                    </div>
                    <p class="line-count-2 my-3">
                        {{__('frontendepisode_page.travels_lone')}}
                    </p>
                </div>
                <div class="position-relative my-4">
                    <a href="{{route('frontend.episode')}}" class="d-flex align-items-center gap-3">
                        <div class="play-button">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <h4 class="text-white fw-bold m-0">{{__('frontendepisode_page.latest_episode')}}</h4>
                    </a>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-4 mb-4">
                    <ul class="list-inline p-0 m-0 share-icons music-play-lists mb-n2 mx-n2">
                        <li class="share">
                            <span><i class="fa-solid fa-share-nodes"></i></span>
                            <div class="share-box">
                                <svg width="15" height="40" viewBox="0 0 15 40" class="share-shape" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                        fill="#191919"></path>
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
                    </ul>
                    <div class="movie-detail-select">
                        <select name="movieselect" class="form-control movie-select select2-basic-single js-states">
                            <option value="1">{{__('frontendheader.playlist')}}</option>
                            <option value="2">{{__('frontenddetail_page.zombie_island')}}</option>
                            <option value="3">{{__('frontenddetail_page.sand_dust')}}</option>
                            <option value="4">{{__('frontenddetail_page.jumbo_queen')}}</option>
                        </select>
                    </div>
                </div>
                <ul class="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                    <li class="iq-tag-title text-primary mb-0">
                        <i class="fa fa-tags" aria-hidden="true"></i>
                        {{__('frontenddetail_page.tags')}}:
                    </li>
                    <li><a class="title" href="{{ route('frontend.view_all') }}">{{__('otthome.4k_ultra')}} </a><span
                            class="text-secondary">,</span>
                    </li>
                    <li><a class="title" href="{{ route('frontend.view_all') }}">{{__('otthome.brother')}}</a><span
                            class="text-secondary">,</span>
                    </li>
                    <li><a class="title"
                            href="{{ route('frontend.view_all') }}">{{__('otthome.brother_relationship')}}</a><span
                            class="text-secondary">,</span></li>
                    <li><a class="title" href="{{ route('frontend.view_all') }}">{{__('otthome.kings')}}</a><span
                            class="text-secondary">,</span></li>
                    <li><a class="title" href="{{ route('frontend.view_all') }}">{{__('otthome.vikings')}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


<div class="show-episode section-padding">
    <div class="container-fluid">
        <div class="show-movie-section">
            <div class="iq-custom-select d-inline-block">
                <select class="select2-basic-single js-states form-control">
                    <option value="season1">{{__('frontenddetail_page.season')}} 1</option>
                    <option value="season1">{{__('frontenddetail_page.season')}} 2</option>
                </select>
            </div>
            <div class="show-custom-tab">
                <ul class="iq-custom-tab tab-bg-fill nav nav-pills text-center list-inline my-4" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active show m-0" data-bs-toggle="pill" href="#episodes" role="tab"
                            aria-selected="true">{{__('frontenddetail_page.episode')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  m-0" data-bs-toggle="pill" href="#description" role="tab"
                            aria-selected="false">{{__('frontenddetail_page.description')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  m-0" data-bs-toggle="pill" href="#rate-review" role="tab"
                            aria-selected="false">{{__('frontenddetail_page.rate')}} &
                            {{__('frontenddetail_page.review')}}</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="episodes" class="tab-pane animated fadeInUp active show">
                        <div class="row list-inline p-0 mb-0">
                            <div class="col-lg-3 col-sm-12 col-md-6">
                                @include('frontend::components.cards.episode-card', [
                                'showImg' => asset('frontend/images/tv-show/episodes/01.webp'),
                                'id' => '01',
                                'showEpisod' => 'S01E01',
                                'episodDate' => __('frontenddetail_page.october').' 1, 2020',
                                'episodTime' => '45min',
                                'episodTitle' => __('frontenddetail_page.zombie_island')." 1",
                                ])
                            </div>
                            <div class="col-lg-3 col-sm-12 col-md-6">
                                @include('frontend::components.cards.episode-card', [
                                'showImg' => asset('frontend/images/tv-show/episodes/02.webp'),
                                'id' => '02',
                                'showEpisod' => 'S01E02',
                                'episodDate' => __('frontenddetail_page.october').' 8, 2020',
                                'episodTime' => '35min',
                                'episodTitle' => __('frontenddetail_page.zombie_island')." 2",
                                ])
                            </div>
                            <div class="col-lg-3 col-sm-12 col-md-6">
                                @include('frontend::components.cards.episode-card', [
                                'showImg' => asset('frontend/images/tv-show/episodes/03.webp'),
                                'id' => '03',
                                'showEpisod' => 'S01E03',
                                'episodDate' => __('frontenddetail_page.october').' 15, 2020',
                                'episodTime' => '36min',
                                'episodTitle' => __('frontenddetail_page.zombie_island')." 3",
                                ])
                            </div>
                            <div class="col-lg-3 col-sm-12 col-md-6 mt-3 mt-md-0">
                                @include('frontend::components.cards.episode-card', [
                                'showImg' => asset('frontend/images/tv-show/episodes/04.webp'),
                                'id' => '04',
                                'showEpisod' => 'S01E03',
                                'episodDate' => __('frontenddetail_page.october').' 22, 2020',
                                'episodTime' => '41min',
                                'episodTitle' => __('frontenddetail_page.zombie_island')." 4",
                                ])
                            </div>
                        </div>
                    </div>
                    <div id="description" class="tab-pane animated fadeInUp">
                        <p class="my-3">{{__('frontendepisode_page.travels_lone')}}
                        </p>
                    </div>
                    <div id="rate-review" class="tab-pane animated fadeInUp">
                        <div class="streamit-reviews">
                            <div id="comments" class="comments-area validate-form">
                                <p class="masvideos-noreviews mt-3">
                                    {{__('frontenddetail_page.no_reviews')}}
                                </p>
                            </div>
                            <div class="review_form">
                                <div class="comment-respond">
                                    <h3 class="fw-500 my-2">
                                        {{__('frontenddetail_page.first_review')}}
                                    </h3>
                                    <form class="comment-form">
                                        <p class="comment-notes">
                                            <span>
                                                {{__('frontenddetail_page.published_email')}}
                                            </span>
                                            <span> {{__('frontenddetail_page.required_fields')}}
                                                <span class="required"> * </span>
                                            </span>
                                        </p>
                                        <div class="d-flex align-items-center mb-4">
                                            <label>
                                                {{__('frontenddetail_page.your_rating')}}
                                            </label>
                                            <div class="star ms-4 text-primary">
                                                <span>
                                                    <i class="fa-regular fa-star"></i>
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-star"></i>
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-star"></i>
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-star"></i>
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-star"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="mb-2">
                                                        {{__('frontenddetail_page.your_review')}}
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <textarea class="form-control" name="comment" cols="5" rows="8"
                                                        required=""></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="mb-2">
                                                        {{__('frontenddetail_page.name')}}
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input class="form-control" name="author" type="text" value=""
                                                        size="30" required="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="mb-2">
                                                        {{__('frontenddetail_page.email')}}&nbsp;
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input class="form-control" name="email" type="email" value=""
                                                        size="30" required="" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="mt-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="check1"
                                                        checked />
                                                    <label class="form-check-label" for="check1">
                                                        {{__('frontenddetail_page.save_name')}}
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-submit mt-4">
                                                    <div class="iq-button">
                                                        <button name="submit" type="submit" id="submit"
                                                            class="btn text-uppercase position-relative" value="Submit">
                                                            <span
                                                                class="button-text">{{__('frontenddetail_page.submit')}}</span>
                                                            <i class="fa-solid fa-play"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="cast-tabs">
    <div class="container-fluid">
        <div class="content-details trending-info g-border iq-rtl-direction">
            <ul class="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 list-inline" role="tablist">
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
                                            <small class="text-white">{{__('frontenddetail_page.as_jones')}} </small>
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
                                            <a href="{{ route('frontend.cast_details') }}"
                                                tabindex="0">{{__('frontenddetail_page.jeff_nathanson')}} </a>
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
                                            <a href="{{ route('frontend.cast_details') }}"
                                                tabindex="0">{{__('frontenddetail_page.karan_gilchrist')}} </a>
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
@endsection
