
@if(isset($isProductImage) && $isProductImage)
<div class="position-relative">
    <a data-fslightbox="product" href="{{$productImage}}">
        <img src="{{$productImage}}" class="img-fluid w-100 product-detail-image" alt="product-image" loading="lazy">
    </a>

    @if(isset($isSale) && $isSale)
        <span class="iq-on-sale badge bg-dark">Sale!</span>
        @endif
    @if(isset($isNew) && $isNew)

        <span class="iq-on-new badge bg-primary">New</span>
        @endif
</div>
@else
<div class="product-tab-slider">
    <div class="swiper product-tab-slider-thumb" data-swiper="slider-prodcut-images">
        <div class="swiper-wrapper m-0">
            <div class="swiper-slide p-0">
                <a data-fslightbox="product" href="{{$productSliderImage1}}">
                    <img src="{{$productSliderImage1}}" class="img-fluid product-detail-image"
                        alt="product-slide-image" loading="lazy" />
                </a>
            </div>
            <div class="swiper-slide p-0">
                <a data-fslightbox="product" href="{{$productSliderImage2}}">
                    <img src="{{$productSliderImage2}}" class="img-fluid product-detail-image"
                        alt="product-slide-image" loading="lazy" />
                </a>
            </div>
            <div class="swiper-slide p-0">
                <a data-fslightbox="product" href="{{$productSliderImage3}}">
                    <img src="{{$productSliderImage3}}" class="img-fluid product-detail-image"
                        alt="product-slide-image" loading="lazy" />
                </a>
            </div>
            <div class="swiper-slide p-0">
                <a data-fslightbox="product" href="{{$productSliderImage4}}">
                    <img src="{{$productSliderImage4}}" class="img-fluid product-detail-image"
                        alt="product-slide-image" loading="lazy" />
                </a>
            </div>
        </div>
    </div>
    <div class="swiper product-tab-slider-images" data-swiper="slider-thumbs-product">
        <div class="swiper-wrapper m-0">
            <div class="swiper-slide p-0">
                <img src="{{$productSliderImage1}}" class="img-fluid" alt="product-slide-image" loading="lazy" />
            </div>
            <div class="swiper-slide p-0">
                <img src="{{$productSliderImage2}}" class="img-fluid" alt="product-slide-image" loading="lazy" />
            </div>
            <div class="swiper-slide p-0">
                <img src="{{$productSliderImage3}}" class="img-fluid" alt="product-slide-image" loading="lazy" />
            </div>
            <div class="swiper-slide p-0">
                <img src="{{$productSliderImage4}}" class="img-fluid" alt="product-slide-image" loading="lazy" />
            </div>
        </div>
    </div>
</div>
@endif
