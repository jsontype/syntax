@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isVideoJs' => true, 'bodyClass' =>
'custom-header-relative', 'isSelect2' => true])

@section('content')
<div class="iq-main-slider site-video">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="pt-0">
                    <video id="my-video" poster="https://i.ytimg.com/vi_webp/rKVEoyTedv4/maxresdefault.webp"
                        class="video-js vjs-big-play-centered w-100" controls preload="auto"
                        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=QCGq1epI9pQ"}], "youtube": { "iv_load_policy": 1 } }'>
                        <source src="{{ asset('frontend/images/video/sample-video.mp4') }}" type="video/mp4" />
                        <source src="MY_VIDEO.webm" type="video/webm" />
                    </video>
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
                'moveName' => __('frontendepisode_page.zombie_island'),
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
                                            <a href="{{route('frontend.cast_details')}}"
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
                                            <a href="{{route('frontend.cast_details')}}"
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
                                        <img src="{{ asset('frontend/images/genre/g4.webp') }}" class="img-fluid"
                                            alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description starring-desc ">
                                        <h6 class="iq-title">
                                            <a href="" tabindex="0"> {{__('frontenddetail_page.jeff_nathanson')}} </a>
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
                                            <a href="" tabindex="0"> {{__('frontenddetail_page.irene_mecchi')}} </a>
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
                                        <img src="{{ asset('frontend/images/genre/g1.webp') }}"
                                            class="person__poster--image img-fluid" alt="image" loading="lazy">
                                    </div>
                                    <div class="col-8 block-description starring-desc ">
                                        <h6 class="iq-title">
                                            <a href="" tabindex="0"> {{__('frontenddetail_page.karan_gilchrist')}} </a>
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

<section class="recommended-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('otthome.recommended')}}</h5>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2"
                    data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                    data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/01.webp'),
                            'cardTitle' => __('frontendepisode_page.giikre'),
                            'movieTime' => '2hr : 12mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/02.webp'),
                            'cardTitle' => __('frontendepisode_page.arrival'),
                            'movieTime' => '1hr : 22mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/03.webp'),
                            'cardTitle' => __('frontendepisode_page.pricess'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/04.webp'),
                            'cardTitle' => __('frontendepisode_page.soull_meate'),
                            'movieTime' => '2hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/05.webp'),
                            'cardTitle' =>__('frontendepisode_page.dangacg'),
                            'movieTime' => '1hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/06.webp'),
                            'cardTitle' => __('frontendepisode_page.crcikeft'),
                            'movieTime' => '2hr : 25mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/recommended/07.webp'),
                            'cardTitle' => __('otthome.avengrs'),
                            'movieTime' => '1hr : 45mins',
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="related-movie-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendform.related_movies')}}</h5>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2"
                    data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                    data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/01.webp'),
                            'cardTitle' => __('frontendepisode_page.giikre'),
                            'movieTime' => '2hr : 12mins',
                            ])


                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/02.webp'),
                            'cardTitle' => __('frontendepisode_page.yoshi'),
                            'movieTime' => '1hr : 22mins',
                            ])


                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/03.webp'),
                            'cardTitle' => __('frontendepisode_page.we_gare'),
                            'movieTime' => '1hr : 30mins',
                            ])


                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/04.webp'),
                            'cardTitle' => __('frontendepisode_page.avengers'),
                            'movieTime' => '1hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/05.webp'),
                            'cardTitle' =>__('frontendepisode_page.chosfies'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/06.webp'),
                            'cardTitle' => __('frontendepisode_page.tf_oaler'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/07.webp'),
                            'cardTitle' => __('frontendepisode_page.another_danger'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="video-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendform.related_videos')}}</h5>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2"
                    data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                    data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/01.webp'),
                            'cardTitle' => __('frontendepisode_page.giikre'),
                            'movieTime' => '2hr : 12mins',
                            ])


                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/02.webp'),
                            'cardTitle' => __('frontendepisode_page.yoshi'),
                            'movieTime' => '1hr : 22mins',
                            ])


                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/03.webp'),
                            'cardTitle' => __('frontendepisode_page.we_gare'),
                            'movieTime' => '1hr : 30mins',
                            ])


                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/04.webp'),
                            'cardTitle' => __('frontendepisode_page.avengers'),
                            'movieTime' => '1hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/05.webp'),
                            'cardTitle' => __('frontendepisode_page.chosfies'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/06.webp'),
                            'cardTitle' => __('frontendepisode_page.tf_oaler'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/07.webp'),
                            'cardTitle' =>__('frontendepisode_page.another_danger'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="upcomimg-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('widgets.Upcoming')}}</h5>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2"
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
                            'cardTitle' =>__('frontenddetail_page.fast_furious'),
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
        </div>
    </div>
</section>

<div class="newest-product-block ">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendmerchandise.related_products')}}</h5>
                <a href="{{ route('frontend.all-products') }}"
                    class="text-primary iq-view-all text-decoration-none flex-none">{{__('frontendmerchandise.want_more')}}</a>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="3"
                    data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                    data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.product-card', [
                            'productImg' => asset('frontend/images/shop/product/01.webp'),
                            'id' => '01',
                            'shopTitle' => __('frontendshop.black_bow'),
                            'shopSale' => __('frontendshop.sale!'),
                            'bgShop' => 'primary',
                            'shopDel' => "$48.00",
                            'shopPrice' => "$28.00",
                            'rating' => '4',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.product-card', [
                            'productImg' => asset('frontend/images/shop/product/02.webp'),
                            'id' => '02',
                            'shopTitle' => __('frontendshop.believe_mask'),
                            'shopSale' => '',
                            'bgShop' => 'primary',
                            'shopDel' => '',
                            'shopPrice' => "$13.00",
                            'rating' => '5',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.product-card', [
                            'productImg' => asset('frontend/images/shop/product/03.webp'),
                            'id' => '03',
                            'shopTitle' => __('frontendshop.black_bow'),
                            'shopSale' => __('frontendshop.sale!'),
                            'bgShop' => 'primary',
                            'shopDel' => '',
                            'shopPrice' => "$18.00 - $45.00",
                            'rating' => '5',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.product-card', [
                            'productImg' => asset('frontend/images/shop/product/04.webp'),
                            'id' => '04',
                            'shopTitle' => __('frontendshop.black_cap'),
                            'shopSale' => __('frontendshop.new!'),
                            'bgShop' => 'dark',
                            'shopDel' => "$10.00",
                            'shopPrice' => "$16.00",
                            'rating' => '5',
                            ])
                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.product-card', [
                            'productImg' => asset('frontend/images/shop/product/05.webp'),
                            'id' => '05',
                            'shopTitle' => __('frontendshop.boxing_gloves'),
                            'shopSale' =>'',
                            'bgShop' => 'primary',
                            'shopDel' => "$20.00",
                            'shopPrice' => "$18.00",
                            'rating' => '5',
                            ])
                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection