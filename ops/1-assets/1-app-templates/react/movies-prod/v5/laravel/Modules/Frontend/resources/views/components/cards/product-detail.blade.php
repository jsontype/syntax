<div class="section-padding-top product-detail">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                @include('frontend::components.cards.product-tab-slider', [
                'productSliderImage1' => asset('frontend/images/shop/product/01.webp'),
                'productSliderImage2' => asset('frontend/images/shop/product/02.webp'),
                'productSliderImage3' => asset('frontend/images/shop/product/03.webp'),
                'productSliderImage4' => asset('frontend/images/shop/product/04.webp'),
                ])

            </div>
            <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-5">
                <h3>{{ $productTitle }}</h3>
                <div class="mt-2">
                    @include('frontend::components.cards.filter-rating', ['rating' => '5'])

                </div>
                <h4 class="price mt-3 mb-0 ">{{ $productPrice }}</h4>
                {{-- <h4 class="ms-2 sale-price mt-3 mb-0">{{ $productSalePrice }}</h4> --}}
                <p class="mt-4 mb-0">{{ $productDescription }}</p>
                <div class="add-product-wrapper mt-5 pb-5">
                    <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
                        <li>
                            <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
                                <button type="button"
                                    class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3"
                                        fill="none">
                                        <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </button>
                                <input type="text" class="btn btn-sm btn-outline-light input-display border-0"
                                    data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2"
                                    title="Qty">
                                <button type="button"
                                    class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8"
                                        fill="none">
                                        <path
                                            d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li class="wish-list">
                            <a href="#" class="d-inline-block bg-soft-primary border border-white wishlist-btn">
                                <i class="far fa-heart"></i>
                            </a>
                        </li>
                        <li>
                            <div class="iq-button">
                                <a href="#" class="btn btn-sm cart-btn text-uppercase position-relative">
                                    <span class="button-text">{{__('frontendshop.add_to_cart')}}</span>
                                    <i class="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="product-meta-wrapper">
                    <ul class="list-inline m-0 p-0">
                        <li class="mb-2">
                            <span class="text-white fw-semibold">{{__('frontendshop.sku')}}</span>
                            <h6 class="d-inline">{{ $productSku }}</h6>
                        </li>
                        <li class="mb-2">
                            <span class="text-white fw-semibold">{{__('frontendshop.category')}}</span>
                            <h6 class="d-inline text-primary">{{ $productCategories }}</h6>
                        </li>
                        <li>
                            <span class="text-white fw-semibold">{{__('frontendshop.tag:')}}</span>
                            <h6 class="d-inline text-primary">{{ $productTag }}</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section-padding-top px-0">
            <div class="product-detail-tabs">
                <ul class="list-inline nav nav-pills justify-content-center iq-custom-tab tab-bg-gredient-center flex-md-row flex-column gap-md-5 gap-3 mb-5"
                    id="product-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="javascript:void(0)" class="nav-link active bg-transparent" data-bs-toggle="tab"
                            data-bs-target="#description" role="tab"
                            aria-selected="true">{{__('frontendshop.description')}}</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="javascript:void(0)" class="nav-link bg-transparent" data-bs-toggle="tab"
                            data-bs-target="#additional-information" role="tab"
                            aria-selected="false">{{__('frontendshop.addtional_information')}}</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="javascript:void(0)" class="nav-link bg-transparent" data-bs-toggle="tab"
                            data-bs-target="#reviews" role="tab"
                            aria-selected="false">{{__('frontendshop.reviews')}}</a>
                    </li>
                </ul>
                <div class="tab-content" id="product-tab-content">
                    <div class="tab-pane fade show active" id="description" role="tabpanel">
                        <p class="m-0">{{__('frontendshop.desc1')}} {{__('frontendshop.desc3')}}
                        </p>
                    </div>
                    <div class="tab-pane fade" id="additional-information" role="tabpanel">
                        <div class="table-responsive additional-info-table">
                            <table class="table table-border">
                                <tbody>
                                    <tr class="text-body">
                                        <th class="text-white">{{__('frontendshop.color')}}</th>
                                        <td>{{__('frontendshop.blue_green_red')}}</td>
                                    </tr>
                                    <tr class="text-body">
                                        <th class="text-white">{{__('frontendshop.size')}}</th>
                                        <td>L, M, S</td>
                                    </tr>
                                    <tr class="text-body">
                                        <th class="text-white">{{__('frontendshop.weight')}}</th>
                                        <td>50ml, 100ml</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel">
                        <h4 class="mb-4">{{__('frontendshop.reviews_believe_mask')}}</h4>
                        <div class="product-review-list">
                            <ul class="list-inline m-0 p-0">
                                <li class="pb-5 mb-5 border-bottom">
                                    <div
                                        class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                                        <div class="user-image flex-shrink-0">
                                            <img src="{{ asset('frontend/images/shop/avatar.webp') }}" alt="user-image"
                                                class="img-fluid" loading="lazy" />
                                        </div>
                                        <div class="about-user">
                                            <div class="d-flex align-items-center flex-wrap gap-2">
                                                <h5 class="mb-0">{{__('frontendshop.jack_stark')}}</h5>
                                                <span class="text-uppercase fst-italic fw-semibold published-date">
                                                    <i class="fas fa-minus fa-xs"></i> march 2,
                                                    2022</span>
                                                <div class="lh-1 ratting">
                                                    @include('frontend::components.cards.filter-rating', [
                                                    'rating' => '4',
                                                    ])
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0">
                                                {{__('frontendshop.many_variations')}}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-5">
                                    <div
                                        class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                                        <div class="user-image flex-shrink-0">
                                            <img src="{{ asset('frontend/images/shop/avatar.webp') }}" alt="user-image"
                                                class="img-fluid" loading="lazy" />
                                        </div>
                                        <div class="about-user">
                                            <div class="d-flex align-items-center flex-wrap gap-2">
                                                <h5 class="mb-0">{{__('frontendshop.john_deo')}}</h5>
                                                <span class="text-uppercase fst-italic fw-semibold published-date">
                                                    <i class="fas fa-minus fa-xs"></i> march 2,
                                                    2022</span>
                                                <div class="lh-1 ratting">
                                                    @include('frontend::components.cards.filter-rating', [
                                                    'rating' => '4',
                                                    ])
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0">
                                                {{__('frontendshop.long_established')}}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-5 review-form">
                            <h4>{{__('frontendshop.add_review')}}</h4>
                            <p class="mb-5">{{__('frontendshop.email_address_will_not')}} *
                            </p>
                            <p class="mb-2">{{__('frontendshop.your_rating')}} *</p>
                            <form class="needs-validation" novalidate>
                                <div class="ratting">
                                    @include('frontend::components.cards.filter-rating', ['rating' => '5'])
                                </div>
                                <div class="mb-5 mt-4">
                                    <label class="form-label">{{__('frontendshop.your_review')}} *</label>
                                    <textarea class="form-control rounded-0" required></textarea>
                                </div>
                                <div class="mb-5">
                                    <label class="form-label">{{__('frontendshop.name')}}*</label>
                                    <input type="text" class="form-control rounded-0" required>
                                </div>
                                <div class="mb-5">
                                    <label class="form-label">{{__('frontendepisode_page.email')}}*</label>
                                    <input type="email" class="form-control rounded-0" required>
                                </div>
                                <div class="mb-5 form-check">
                                    <input type="checkbox" class="form-check-input rounded-0" id="exampleCheck1"
                                        required>
                                    <label class="form-check-label"
                                        for="exampleCheck1">{{__('frontendshop.save_name')}}</label>
                                </div>
                                @include('frontend::components.cards.custom-button', [
                                'buttonTitle' => __('frontendshop.submit'),
                                'buttonUrl' => 'javascript:void(0)',
                                ])

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="related-product-block section-padding-top">
        <div class="container p-0">
            <div class="overflow-hidden">
                <div class="d-flex align-items-center justify-content-between px-3 my-4">
                    <h5 class="main-title text-capitalize mb-0">{{__('frontendmerchandise.related_products')}}</h5>
                    <a href="{{ route('frontend.all-products') }}"
                        class="text-primary iq-view-all text-decoration-none flex-none">{{__('frontendmerchandise.want_more')}}</a>
                </div>
                <div class="card-style-slider">
                    <div class="position-relative swiper swiper-card" data-slide="4" data-laptop="4" data-tab="3"
                        data-mobile="2" data-mobile-sm="2" data-autoplay="true" data-loop="true" data-navigation="true"
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
                                'shopSale' =>__('frontendshop.sale!'),
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

                                'bgShop' => 'primary',
                                'shopDel' => "$20.00",
                                'shopPrice' => "$18.00",
                                'rating' => '5',
                                ])

                            </li>
                        </ul>
                        {{-- <div class="swiper-button swiper-button-next"></div>
                        <div class="swiper-button swiper-button-prev"></div> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>