@extends('frontend::layouts.merchandise', ['isSelect2' => true, 'isNoUISlider' => true, 'isSweetalert' => true],
['isBreadCrumb' => true, 'title' => __('frontendheader.shop')])

@section('content')
<div class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-xl-3">
                <div class="pe-3">
                    @include('frontend::components.widgets.shop-sidebar')

                </div>
            </div>
            <div class="col-xl-9">
                <div class="d-flex align-items-center justify-content-between mb-5 shop-filter flex-wrap">
                    <p>{{__('frontendshop.showing')}}</p>
                    <div class="d-flex align-items-center ">
                        <div class="product-view-button">
                            <ul class="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center list-inline" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link btn-sm btn-icon rounded-pill p-0" id="list-view-tab" data-bs-toggle="pill" data-bs-target="#pills-list-view" type="button" role="tab" aria-controls="pills-list-view" aria-selected="true">
                                        <span class="btn-inner">
                                            <svg class="hover_effect active_effect" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_355)">
                                                    <path d="M3.42857 0H0V3.42857H3.42857V0Z" fill=""></path>
                                                    <path d="M18 0.857422H6V2.57171H18V0.857422Z" fill="">
                                                    </path>
                                                    <path d="M3.42857 6H0V9.42857H3.42857V6Z" fill=""></path>
                                                    <path d="M18 6.85742H6V8.57171H18V6.85742Z" fill=""></path>
                                                    <path d="M3.42857 12H0V15.4286H3.42857V12Z" fill=""></path>
                                                    <path d="M18 12.8574H6V14.5717H18V12.8574Z" fill=""></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1379_355">
                                                        <rect width="18" height="15.4286" fill=""></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link btn-sm btn-icon rounded-pill p-0" id="grid-view-tab" data-bs-toggle="pill" data-bs-target="#pills-grid-view" type="button" role="tab" aria-controls="pills-grid-view" aria-selected="false">
                                        <span class="btn-inner">
                                            <svg class="hover_effect active_effect" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.57143 0H0V8.57143H8.57143V0Z" fill=""></path>
                                                <path d="M17.9999 0H9.42847V8.57143H17.9999V0Z" fill=""></path>
                                                <path d="M8.57143 9.42871H0V18.0001H8.57143V9.42871Z" fill="">
                                                </path>
                                                <path d="M17.9999 9.42871H9.42847V18.0001H17.9999V9.42871Z" fill="">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link btn-sm btn-icon rounded-pill p-0 active" id="grid-three-view-tab" data-bs-toggle="pill" data-bs-target="#pills-grid-three-view-tab" type="button" role="tab" aria-controls="pills-grid-three-view-tab" aria-selected="false">
                                        <span class="btn-inner">
                                            <svg class="hover_effect active_effect" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.90909 0H0V4.90909H4.90909V0Z" fill=""></path>
                                                <path d="M11.4545 0H6.54541V4.90909H11.4545V0Z" fill=""></path>
                                                <path d="M17.9999 0H13.0908V4.90909H17.9999V0Z" fill=""></path>
                                                <path d="M4.90909 6.5459H0V11.455H4.90909V6.5459Z" fill="">
                                                </path>
                                                <path d="M11.4545 6.5459H6.54541V11.455H11.4545V6.5459Z" fill="">
                                                </path>
                                                <path d="M17.9999 6.5459H13.0908V11.455H17.9999V6.5459Z" fill="">
                                                </path>
                                                <path d="M4.90909 13.0908H0V17.9999H4.90909V13.0908Z" fill="">
                                                </path>
                                                <path d="M11.4545 13.0908H6.54541V17.9999H11.4545V13.0908Z" fill="">
                                                </path>
                                                <path d="M17.9999 13.0908H13.0908V17.9999H17.9999V13.0908Z" fill="">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link btn-sm btn-icon rounded-pill p-0" id="grid-three-four-tab" data-bs-toggle="pill" data-bs-target="#pills-grid-three-four-view-tab" type="button" role="tab" aria-controls="pills-grid-three-four-view-tab" aria-selected="false">
                                        <span class="btn-inner">
                                            <svg class="hover_effect active_effect" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.85714 0H0V3.85714H3.85714V0Z" fill=""></path>
                                                <path d="M8.5715 0H4.71436V3.85714H8.5715V0Z" fill=""></path>
                                                <path d="M13.2856 0H9.42847V3.85714H13.2856V0Z" fill=""></path>
                                                <path d="M18 0H14.1428V3.85714H18V0Z" fill=""></path>
                                                <path d="M3.85714 4.71387H0V8.57101H3.85714V4.71387Z" fill="">
                                                </path>
                                                <path d="M8.5715 4.71387H4.71436V8.57101H8.5715V4.71387Z" fill="">
                                                </path>
                                                <path d="M13.2856 4.71387H9.42847V8.57101H13.2856V4.71387Z" fill="">
                                                </path>
                                                <path d="M18 4.71387H14.1428V8.57101H18V4.71387Z" fill="">
                                                </path>
                                                <path d="M3.85714 9.42871H0V13.2859H3.85714V9.42871Z" fill="">
                                                </path>
                                                <path d="M8.5715 9.42871H4.71436V13.2859H8.5715V9.42871Z" fill="">
                                                </path>
                                                <path d="M13.2856 9.42871H9.42847V13.2859H13.2856V9.42871Z" fill="">
                                                </path>
                                                <path d="M18 9.42871H14.1428V13.2859H18V9.42871Z" fill="">
                                                </path>
                                                <path d="M3.85714 14.1426H0V17.9997H3.85714V14.1426Z" fill="">
                                                </path>
                                                <path d="M8.5715 14.1426H4.71436V17.9997H8.5715V14.1426Z" fill="">
                                                </path>
                                                <path d="M13.2856 14.1426H9.42847V17.9997H13.2856V14.1426Z" fill="">
                                                </path>
                                                <path d="M18 14.1426H14.1428V17.9997H18V14.1426Z" fill="">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="iq-custom-select d-inline-block shop-select">
                            <select name="cars" class="form-control season-select select2-basic-single js-states">
                                <option value="season1">{{__('frontendshop.default_sorting')}}</option>
                                <option>{{__('frontendshop.sort_by_popularity')}}</option>
                                <option>{{__('frontendshop.sort_by_rating')}}</option>
                                <option>{{__('frontendshop.sort_by_latest')}}</option>
                                <option>{{__('frontendshop.price_low_to_high')}}</option>
                                <option>{{__('frontendshop.price_high_to_low')}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade " id="pills-list-view" role="tabpanel" aria-labelledby="list-view-tab">
                        <div class="row row-cols-1">
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/01.webp'),
                                'isProductList' => true,
                                'id' => '01',
                                'shopTitle' => __('frontendshop.bag_pack'),
                                'shopSale' => __('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => "$48.00",
                                'shopPrice' => "$28.00",
                                'rating' => '4',
                                'shopDesc' =>__('frontendshop.desc1'),
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/02.webp'),
                                'isProductList' => true,
                                'id' => '02',
                                'shopTitle' => __('frontendshop.believe_mask'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$13.00",
                                'rating' => '5',
                                'shopDesc' =>__('frontendshop.desc1'),
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/03.webp'),
                                'isProductList' => true,
                                'id' => '03',
                                'shopTitle' => __('frontendshop.black_bow'),
                                'shopSale' => __('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$18.00 - $45.00",
                                'rating' => '5',
                                'shopDesc' =>__('frontendshop.desc1'),
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/04.webp'),
                                'isProductList' => true,
                                'id' => '04',
                                'shopTitle' => __('frontendshop.black_cap'),
                                'shopSale' => __('frontendshop.new!'),
                                'bgShop' => 'dark',
                                'shopDel' => "$10.00",
                                'shopPrice' => "$16.00",
                                'rating' => '5',
                                'shopDesc' =>__('frontendshop.desc1'),
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/05.webp'),
                                'isProductList' => true,
                                'id' => '05',
                                'shopTitle' =>__('frontendshop.boxing_gloves'),
                                'shopSale' =>'',
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                'shopDesc' =>__('frontendshop.desc1'),
                                ])
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/01.webp'),
                                'id' => '01',
                                'shopTitle' => __('frontendshop.bag_pack'),
                                'shopSale' => __('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => "$48.00",
                                'shopPrice' => "$28.00",
                                'rating' => '4',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/02.webp'),
                                'id' => '02',
                                'shopTitle' => __('frontendshop.believe_mask'),
                                'shopSale' =>'',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$13.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
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
                            </div>
                            <div class="col">
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
                            </div>
                            <div class="col">
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
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/06.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.carry_bag'),
                                'shopSale' =>'',
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade active show" id="pills-grid-three-view-tab" role="tabpanel" aria-labelledby="grid-three-view-tab">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/01.webp'),
                                'id' => '01',
                                'shopTitle' => __('frontendshop.bag_pack'),
                                'shopSale' => __('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => "$48.00",
                                'shopPrice' => "$28.00",
                                'rating' => '4',
                                ])
                            </div>
                            <div class="col">
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
                            </div>
                            <div class="col">
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
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/04.webp'),
                                'id' => '04',
                                'shopTitle' => __('frontendshop.black_cap'),
                                'shopSale' => __('frontendshop.new!'),
                                'bgShop' => 'dark',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$16.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/05.webp'),
                                'id' => '05',
                                'shopTitle' =>__('frontendshop.boxing_gloves'),
                                'shopSale' =>'',
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])

                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/06.webp'),
                                'id' => '06',
                                'shopTitle' =>__('frontendshop.carry_bag'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => "",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/07.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.cartoon_character'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$25.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/08.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.coffee_cup'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/09.webp'),
                                'id' => '06',
                                'shopTitle' =>__('frontendshop.crown'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => "$10.00",
                                'shopPrice' => "$07.00",
                                'rating' => '5',
                                ])
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-grid-three-four-view-tab" role="tabpanel">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/01.webp'),
                                'id' => '01',
                                'shopTitle' =>__('frontendshop.bag_pack'),
                                'shopSale' =>__('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => "$48.00",
                                'shopPrice' => "$28.00",
                                'rating' => '4',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/02.webp'),
                                'id' => '02',
                                'shopTitle' =>__('frontendshop.believe_mask'),
                                'shopSale' =>'',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$13.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
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
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/04.webp'),
                                'id' => '04',
                                'shopTitle' =>__('frontendshop.black_cap'),
                                'shopSale' => __('frontendshop.new!'),
                                'bgShop' => 'dark',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$16.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/05.webp'),
                                'id' => '05',
                                'shopTitle' =>__('frontendshop.boxing_gloves'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/06.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.carry_bag'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/07.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.cartoon_character'),
                                'shopSale' =>'',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$25.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/08.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.coffee_cup'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/09.webp'),
                                'id' => '06',
                                'shopTitle' => __('frontendshop.crown'),
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => "$10.00",
                                'shopPrice' => "$07.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/10.webp'),
                                'id' => '06',
                                'shopTitle' => 'Daily Diary',
                                'shopSale' => __('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/11.webp'),
                                'id' => '06',
                                'shopTitle' => 'Floral Badges',
                                'shopSale' => '',
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$20",
                                'rating' => '3',
                                ])
                            </div>
                            <div class="col">
                                @include('frontend::components.cards.product-card', [
                                'productImg' => asset('frontend/images/shop/product/12.webp'),
                                'id' => '06',
                                'shopTitle' => 'Ghost Cap',
                                'shopSale' => __('frontendshop.sale!'),
                                'bgShop' => 'primary',
                                'shopDel' => '',
                                'shopPrice' => "$90.00",
                                'rating' => '4',
                                ])
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="woosq-popup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered positon-relative">
                    <div class="modal-content rounded-0 border-0">
                        <div class="modal-body p-0">
                            <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <img src="{{ asset('frontend/images/shop/product/01.webp') }}" class="object-cover" alt="shop-img">
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
                                        <h4 class="price text-white mt-3"><del class="text-body fw-normal me-1">$48.00</del>$28.00 </h4>
                                        <p>{{__('frontendshop.desc1')}}</p>
                                        <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                                            <li>
                                                <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
                                                    <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                                                            <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
                                                        </svg>
                                                    </button>
                                                    <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty">
                                                    <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                                            <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
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