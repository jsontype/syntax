<div class="shop-box">
    <h5 class="mb-4 text-uppercase">{{__('frontendshop.product_categories')}}</h5>
    <ul class="list-unstyled p-0 m-0 shop-list-checkbox">
        <li>
            {{__('frontendshop.activeman')}}
        </li>
        <li>
            <div class="d-flex align-items-center justify-content-between">
                <span>{{__('frontendshop.disney_world')}}</span>
                <a class="checkbox" data-bs-toggle="collapse" href="#categoriesone" role="button" aria-expanded="false" aria-controls="categoriesone">
                </a>
            </div>
            <div class="collapse" id="categoriesone">
                <ul class="list-unstyled ps-2 mt-3">
                    <li>{{__('frontendshop.fantasia')}}</li>
                </ul>
            </div>
        </li>
        <li>
            {{__('frontendshop.galaxy_heaven')}}
        </li>
        <li>
            {{__('frontendshop.haunted_halloween')}}
        </li>
        <li>
            {{__('frontendshop.marvel_studios')}}
        </li>
        <li>
            {{__('frontendshop.monster_house')}}
        </li>
        <li>
            {{__('frontendshop.quick_game')}}
        </li>
        <li>
            {{__('frontendshop.the_flashv')}}
        </li>
        <li>
            {{__('frontendshop.the_madrid')}}
        </li>
        <li>
            {{__('frontendshop.the_champion')}}
        </li>
        <li>
            {{__('frontendshop.uptight_birds')}}
        </li>
        <li>
            {{__('frontendshop.warner_bros_films')}}
        </li>
    </ul>
</div>
<div class="shop-box">
    <h5 class="">{{__('frontendshop.price_filter')}}</h5>
    <div class="form-group my-4 product-range">
        <div class="range-slider" id="product-price-range"></div>
    </div>
    <div class=" d-flex align-items-center my-3">
        <small>{{__('frontendshop.price')}}&nbsp;</small>
        <small id="lower-value">&nbsp; $11</small>
        <small id="lower-value1">&nbsp; - &nbsp;</small>
        <small id="upper-value">&nbsp;$50</small>
    </div>
</div>

<div class="shop-box">
    <h5 class="mb-4">{{__('frontendshop.product_size')}}</h5>
    <ul class="shop_list_checkbox list-unstyled">
        <li>
            <label class="shop_checkbox_label">L</label>
            <input type="hidden" value="L" />
        </li>
        <li>
            <label class="shop_checkbox_label">M</label>
            <input type="hidden" value="M" />
        </li>
        <li>
            <label class="shop_checkbox_label">S</label>
            <input type="hidden" value="S" />
        </li>
    </ul>
</div>
<div class="shop-box border-bottom-0">
    <h5 class="mb-4">{{__('frontendshop.products')}}</h5>
    <ul class="list-unstyled m-0 p-0 shop-product">
        <li class="d-flex align-items-center mb-4">
            <div class="top-product-img pe-3">
                <img src="{{asset('frontend/images/shop/product/01.webp')}} " class="img-fluid" alt="img" loading="lazy" />
            </div>
            <div class="">
                <a href="product-detail" class="">{{__('frontendshop.magic_hat')}}</a>
                <p>$10.00</p>
            </div>
        </li>
        <li class="d-flex align-items-center mb-4">
            <div class="top-product-img pe-3">
                <img src="{{asset('frontend/images/shop/product/30.webp')}}  " class="img-fluid" alt="img" loading="lazy" />
            </div>
            <div class="">
                <a href="shop" class="">{{__('frontendshop.green_specs')}}</a>
                <div>
                    <del>$22.00</del> $18.00
                </div>
            </div>
        </li>
        <li class="d-flex align-items-center">
            <div class="top-product-img pe-3">
                <img src="{{asset('frontend/images/shop/product/07.webp')}} " class="img-fluid" alt="img" loading="lazy" />
            </div>
            <div class="">
                <a href="shop" class="">{{__('frontendshop.cartoon_character')}}</a>
                <p class="mb-0">
                    $25.00
                </p>
            </div>
        </li>
    </ul>
</div>
