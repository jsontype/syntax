@if (isset($isProductList) && $isProductList)
    <div class="product-block product-list">
        <div class="row">
            <div class="col-md-4 ps-0">
                @if (isset($shopSale) && $shopSale)
                    <span class="onsale bg-primary">
                        {{ $shopSale }}
                    </span>
                @endif
                <div class="image-wrap">
                    <a href="product-detail">
                        <div class="product-image">
                            <img src="{{ $productImg }}" class="img-fluid w-100" alt="productImg-{{ $id }}"
                                loading="lazy" />
                        </div>
                    </a>
                    <div class="buttons-holder">
                        <ul class="list-unstyled m-0 p-0">
                            <li>
                                <a class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="product-caption">
                    <h5 class="product__title">
                        <a href="product-detail" class="title-link">
                            {{ $shopTitle }}</a>
                    </h5>
                    <div class="price-detail">
                        <div class="price">
                            <del>{{ $shopDel }}</del>{{ $shopPrice }}
                        </div>
                    </div>
                    <div class="container-rating">
                        <div class="star-rating text-primary">
                            @include('frontend::components.cards.filter-rating')

                        </div>
                    </div>
                    <ul class="iq-button-holder list-inline d-flex flex-wrap gap-3">
                        <li>
                            <div class="iq-button">
                                <a href="#" class="btn btn-sm cart-btn text-uppercase position-relative">
                                    <span class="button-text">add to cart</span>
                                    <i class="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="add_to_wishlist wishlist-btn"><i class="far fa-heart"></i></a>
                        </li>
                    </ul>
                    <p class="blog-desc line-count-2">{{ $shopDesc }}</p>
                </div>
            </div>
        </div>
    </div>
@else
    <div class="product-block">
        @if (isset($shopSale) && $shopSale)
            <span class="onsale bg-primary">
                {{ $shopSale }}
            </span>
        @endif
        <div class="image-wrap">
            <a href="product-detail">
                <div class="product-image">
                    <img src="{{ $productImg }}" class="img-fluid w-100" alt="productImg-{{ $id }}"
                        loading="lazy" />
                </div>
            </a>
            <div class="buttons-holder">
                <ul class="list-unstyled m-0 p-0">
                    <li>
                        <a class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="add_to_wishlist wishlist-btn"><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li>
                        <a href="#" class="added_to_cart cart-btn d-flex align-items-center">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-caption">
            <h5 class="product__title">
                <a href="product-detail" class="title-link">
                    {{ $shopTitle }}</a>
            </h5>
            <div class="price-detail">
                <div class="price">
                    <del>{{ $shopDel }}</del>{{ $shopPrice }}
                </div>
            </div>
            <div class="container-rating">
                <div class="star-rating text-primary">
                    @include('frontend::components.cards.filter-rating')

                </div>
            </div>
        </div>
    </div>
@endif
