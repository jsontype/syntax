@extends('frontend::layouts.merchandise', ['isSwiperSlider' => true ,'isFooter'=>true,'isSweetalert'=>true ])

@section('content')
<div class="position-relative swiper swiper-slide-space-0" data-swiper="home-banner-slider">
    <div class="slider m-0 p-0 swiper-wrapper home-slider">
        <a class="swiper-slide slide" href="product-detail">
            <img src="{{ asset('frontend/images/shop/slider-01.webp') }}" class="img-fluid" alt="slider-img"
                loading="lazy" />
        </a>
        <a class="swiper-slide slide" href="product-detail">
            <img src="{{ asset('frontend/images/shop/slider-02.webp') }}" class="img-fluid" alt="slider-img"
                loading="lazy" />
        </a>
        <a class="swiper-slide slide" href="product-detail">
            <img src="{{ asset('frontend/images/shop/slider-03.webp') }}" class="img-fluid" alt="slider-img"
                loading="lazy" />
        </a>
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
</div>


<section class="category-slider-block">
    <div class="container-fluid">
        <div class="text-center">
            <h4 class="my-4 mt-md-3 mt-sm-3">{{__('frontendmerchandise.best_selling_categories')}}</h4>
        </div>
        <div class="position-relative swiper swiper-card" data-slide="4" data-laptop="4" data-tab="3" data-mobile="2"
            data-mobile-sm="1" data-autoplay="false" data-loop="false" data-navigation="true" data-pagination="true">
            <ul class="list-inline swiper-wrapper p-0 m-0">
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/01.webp'),
                    'id' => '01',
                    'shopsellingText' => __('frontendmerchandise.activeman'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/02.webp'),
                    'id' => '03',
                    'shopsellingText' => __('frontendmerchandise.avengers'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/03.webp'),
                    'id' => '03',
                    'shopsellingText' => __('frontendmerchandise.disney_world'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/04.webp'),
                    'id' => '04',
                    'shopsellingText' => __('frontendmerchandise.fantasia'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/05.webp'),
                    'id' => '05',
                    'shopsellingText' => __('frontendmerchandise.galaxy_heaven'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/06.webp'),
                    'id' => '06',
                    'shopsellingText' => __('frontendmerchandise.ghost_spider'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/07.webp'),
                    'id' => '07',
                    'shopsellingText' => __('frontendmerchandise.harry_david'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/08.webp'),
                    'id' => '08',
                    'shopsellingText' => __('frontendmerchandise.haunted_halloween'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/09.webp'),
                    'id' => '09',
                    'shopsellingText' => __('frontendmerchandise.studios'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/11.webp'),
                    'id' => '10',
                    'shopsellingText' => __('frontendmerchandise.monster_house'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/12.webp'),
                    'id' => '11',
                    'shopsellingText' => __('frontendmerchandise.quid_game'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/14.webp'),
                    'id' => '12',
                    'shopsellingText' => __('frontendmerchandise.the_madrid'),
                    ])

                </li>
                <li class="swiper-slide slide-item">
                    @include('frontend::components.cards.shop-selling-category', [
                    'shopsellingImg' => asset('frontend/images/shop/categories/15.webp'),
                    'id' => '15',
                    'shopsellingText' => __('frontendmerchandise.the_chapion'),
                    ])

                </li>
            </ul>
            <div class="swiper-button swiper-button-next"></div>
            <div class="swiper-button swiper-button-prev"></div>
        </div>
    </div>
</section>


<section class="">
    <div class="container-fluid p-xl-0">
        <div class="row gx-lg-0">
            <div class="col-lg-4 col-md-6 d-flex flex-column">
                <div class="product-box left-1-productbox ">
                    <a href="shop" class="card-link"></a>
                    <div class="card-img-overlay product-card-img-overlay"
                        style="background-image: url('{{ asset('frontend/images/shop/card/01.webp') }}');">
                    </div>
                    <div class="card-body w-100">
                        <h5 class="card-title">{{__('frontendmerchandise.ghost_spider')}} </h5>
                        <h4 class="parent-heading">{{__('frontendmerchandise.monster_house')}}</h4>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.shop_now'),
                        'linkButton' => 'true',
                        'buttonUrl' => 'product-detail',
                        ])

                    </div>
                </div>
                <div class="product-box left-2-productbox">
                    <a href="shop" class="card-link"></a>
                    <div class="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
                        style="background-image: url('{{ asset('frontend/images/shop/card/02.webp') }}');">
                    </div>
                    <div class="card-body w-100">
                        <h5 class="card-title">{{__('frontendmerchandise.harry_david')}} </h5>
                        <h4 class="parent-heading">{{__('frontendmerchandise.warner_bro_films')}}</h4>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.shop_now'),
                        'linkButton' => 'true',
                        'buttonUrl' => 'product-detail',
                        ])

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div class="center-productbox product-box">
                    <a href="shop" class="card-link"></a>
                    <div class="card-img-overlay product-card-img-overlay"
                        style="background-image: url('{{ asset('frontend/images/shop/card/03.webp') }}');">
                    </div>
                    <div class="card-body w-100">
                        <h5 class="card-title">{{__('frontendmerchandise.avengers')}} </h5>
                        <h4 class="parent-heading">{{__('frontendmerchandise.marvel_studios')}}</h4>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.shop_now'),
                        'linkButton' => 'true',
                        'buttonUrl' => 'product-detail',
                        ])

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 d-flex flex-column mt-lg-0 mt-md-4 mt-4">
                <div class="product-box right-1-productbox">
                    <a href="shop" class="card-link"></a>
                    <div class="card-img-overlay product-card-img-overlay md-mt-5"
                        style="background-image: url('{{ asset('frontend/images/shop/card/04.webp') }}');">
                    </div>
                    <div class="card-body w-100">
                        <h5 class="card-title">{{__('frontendmerchandise.harry_david')}} </h5>
                        <h4 class="parent-heading">{{__('frontendshop.warner_bros_film')}}</h4>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.shop_now'),
                        'linkButton' => 'true',
                        'buttonUrl' => 'product-detail',
                        ])

                    </div>
                </div>
                <div class="product-box right-2-productbox">
                    <a href="shop" class="card-link"></a>
                    <div class="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
                        style="background-image: url('{{ asset('frontend/images/shop/card/05.webp') }}');">
                    </div>
                    <div class="card-body w-100">
                        <h5 class="card-title">{{__('frontendmerchandise.fantasia')}} </h5>
                        <h4 class="parent-heading">{{__('frontendmerchandise.disney_world')}}</h4>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.shop_now'),
                        'linkButton' => 'true',
                        'buttonUrl' => 'product-detail',
                        ])

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<div class="newest-product-block section-padding-top">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendmerchandise.newest_products')}}</h5>
                <a href="{{ route('frontend.view_all') }}"
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



<section class="section-padding-bottom">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="categorie-about-left">
                    <div class="categorie-about-image">
                        <img src="{{ asset('frontend/images/shop/card/capton-america.webp') }}" class="img-fluid"
                            alt="shop" loading="lazy">
                    </div>
                    <div class=" text-left mb-4 pt-3">
                        <h4 class="mb-2 line-count-1">{{__('frontendmerchandise.captain_america')}}</h4>
                        <p class="mb-4 mt-2 line-count-3">{{__('frontendmerchandise.lorem_ipsum')}}</p>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.view_collection'),
                        'buttonUrl' => route('frontend.shop'),
                        ])

                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="categorie-about-right">
                    <div class="categorie-about-image">
                        <img src="{{ asset('frontend/images/shop/card/deadpool.webp') }}" class="img-fluid" alt="shop"
                            loading="lazy">
                    </div>
                    <div class=" text-left mb-4 pt-3">
                        <h4 class="mb-2 line-count-1">{{__('frontendmerchandise.deadpool')}}</h4>
                        <p class="mb-4 mt-2 line-count-3">{{__('frontendmerchandise.lorem_ipsum')}}</p>
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendmerchandise.view_collection'),
                        'buttonUrl' => route('frontend.shop'),
                        ])

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding"
    style="background:url('{{ asset('frontend/images/shop/card/bg-img.webp') }}') ; background-position: center center; background-repeat: no-repeat; background-size: cover;">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 ">
                <img src="{{ asset('frontend/images/shop/card/multipal.webp') }}" class="img-fluid" alt="shop"
                    loading="lazy">
            </div>
            <div class="col-lg-6 col-md-12 mt-4 mt-md-0">
                @include('frontend::components.widgets.logo')
                <h2 class="mt-3 mb-3"> {{__('frontendmerchandise.wear_streamit')}} </h2>
                <p class="mb-4 line-count-3">{{__('frontendmerchandise.buy_exclusive')}}
                </p>
                <div class="iq-button">
                    <a href="{{ route('frontend.product_detail') }}" class="btn text-uppercase position-relative">
                        <span class="button-text">{{__('frontendmerchandise.shop_now')}}</span>
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>



<div class="newest-product-block section-padding-top">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendmerchandise.best_sellers')}}</h5>
                <a href="{{ route('frontend.view_all') }}"
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
                            'shopSale' => __('frontendshop.sale!'),
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
                            'shopSale' => '',
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

<div class="product_container">
    <div class="row gx-0">
        <div class="col-lg-6 shop-contact-one">
            <a href="javascript:void(0);">
                <div class="channel-logo border-gredient-left">
                    <h5>{{__('frontendmerchandise.our_multiple')}}</h5>
                </div>
            </a>
            <div class="row my-4">
                <div class="col-lg-6 col-md-12">
                    <h5 class="mb-3">{{__('frontendshop.australia')}}:</h5>
                    <p>24 Isaac Road. Ellendale, Tasmania 7140</p>
                </div>
                <div class="col-lg-6 col-md-12">
                    <h5 class="mb-3">{{__('frontendshop.australia')}}: </h5>
                    <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <h5 class="m-0">{{__('frontendmerchandise.working_hours')}}: </h5>
                <i class="text-primary shop_store_time"> Mon – Fri : 09:00 AM to 06:00 PM</i>
            </div>
        </div>
        <div class="shop-contact col-lg-6 col-md-12">
            <img class="img-fluid h-100 w-100" src="{{ asset('frontend/images/shop/card/location.webp') }}" alt="shop"
                loading="lazy">
        </div>
    </div>
</div>

<div class="modal fade" id="woosq-popup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered positon-relative">
        <div class="modal-content rounded-0 border-0">
            <div class="modal-body p-0">
                <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="{{ asset('frontend/images/shop/product/01.webp') }}" class="object-cover"
                            alt="shop-img">
                    </div>
                    <div class="col-md-6">
                        <div class="entry-summary p-md-4">
                            <h3>{{__('frontendshop.bag_pack')}}</h3>
                            <div class="review">
                                <span>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                            </div>
                            <h4 class="price text-white mt-3"><del class="text-body fw-normal me-1">$48.00</del>$28.00
                            </h4>
                            <p>{{__('frontendshop.desc1')}}</p>
                            <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                                <li>
                                    <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn"
                                        role="group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3"
                                                viewBox="0 0 6 3" fill="none">
                                                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </button>
                                        <input type="text" class="btn btn-sm btn-outline-light input-display border-0"
                                            data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2"
                                            value="2" title="Qty">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"
                                                viewBox="0 0 9 8" fill="none">
                                                <path
                                                    d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div class="iq-button">
                                        <a href="#" class="btn btn-sm text-uppercase position-relative cart-btn">
                                            <span class="button-text">{{__('frontendshop.add_to_cart')}}</span>
                                            <i class="fa-solid fa-play"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center gap-2">
                                <span class="fw-semibold text-white">{{__('frontendshop.sku')}}</span>
                                <span>{{__('frontendshop.bag_pack')}}</span>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <span class="fw-semibold text-white">{{__('frontendshop.categorys')}}</span>
                                <span class="text-primary">{{__('frontendshop.uptight_bird')}}</span>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <span class="fw-semibold text-white">{{__('frontendshop.tags')}}</span>
                                <span class="text-primary">{{__('frontendshop.costume')}}</span>
                                <span class="text-primary">{{__('frontendshop.lighting')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
