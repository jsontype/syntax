@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isSweetalert' => true,'isFslightbox'=>true])

@section('content')
    @include('frontend::components.cards.product-detail', [
        'productImage' => asset('frontend/images/shop/product/01.webp'),
        'productTitle' => __('frontendshop.believe_mask'),
        'productPrice' => "$13.00",
        'productSalePrice' => "$25.00",
        'productDescription' =>__('frontendshop.desc1'),
        'productSku' => __('frontendshop.bag_pack'),
        'productCategories' => __('frontendshop.uptight_bird'),
        'productTag' => __('frontendshop.costume'). __('frontendshop.lighting'),
    ])
@endsection
