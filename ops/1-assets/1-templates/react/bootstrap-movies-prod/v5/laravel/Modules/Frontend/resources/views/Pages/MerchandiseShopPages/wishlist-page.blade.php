@extends('frontend::layouts.master', ['isSweetalert' => true], ['isBreadCrumb' => true, 'title' => 'Wishlist'])

@section('content')
    <div class="wishlist-page section-padding">
        <div class="container">
            <h5 class="mb-5">{{__('frontendshop.my_wishlist')}}</h5>
            <div class="table-responsive">
                <table class="table cart-table">
                    <thead class="border-bottom">
                        <tr>
                            <th class="fw-500 font-size-18"></th>
                            <th class="fw-500 font-size-18">{{__('frontendshop.product_name')}}</th>
                            <th class="fw-500 font-size-18">{{__('frontendshop.unit_price')}}</th>
                            <th class="fw-500 font-size-18">{{__('frontendshop.stock_status')}}</th>
                            <th class="fw-500 font-size-18"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-item="list">
                            <td>
                                <button
                                    class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                    <span class="btn-inner">
                                        <i class="far fa-trash-alt"></i>
                                    </span>
                                </button>
                            </td>
                            <td>
                                <div class="product-thumbnail">
                                    <a class="mb-2 me-3" href="product-detail">
                                        <img class="avatar-80" src="{{ asset('frontend/images/shop/product/01.webp') }} "
                                            alt="01" loading="lazy" />
                                    </a>
                                    <span class="mt-2">{{__('frontendshop.bag_pack')}}</span>
                                </div>
                            </td>
                            <td>
                                <span class="fw-500">$25.00</span>
                            </td>
                            <td>
                                <span>{{__('frontendshop.in_stock')}}</span>
                            </td>
                            <td>
                                @include('frontend::components.widgets.custom-button', [
                                    'buttonTitle' => __('frontendshop.view_product'),
                                    'buttonUrl' => 'product-detail',
                                ])

                            </td>
                        </tr>
                        <tr data-item="list">
                            <td>
                                <button
                                    class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                    <span class="btn-inner">
                                        <i class="far fa-trash-alt"></i>
                                    </span>
                                </button>
                            </td>
                            <td>
                                <div class="product-thumbnail">
                                    <a class="mb-2 me-3" href="product-detail">
                                        <img class="avatar-80" src="{{ asset('frontend/images/shop/product/02.webp') }}  "
                                            alt="01" loading="lazy" />
                                    </a>
                                    <span class="mt-2">{{__('frontendshop.believe_mask')}}</span>
                                </div>
                            </td>
                            <td>
                                <span class="fw-500">$13.00</span>
                            </td>
                            <td>
                                <span>{{__('frontendshop.in_stock')}}</span>
                            </td>
                            <td>
                                @include('frontend::components.widgets.custom-button', [
                                    'buttonTitle' => __('frontendshop.view_product'),
                                    'buttonUrl' => 'product-detail',
                                ])

                            </td>
                        </tr>
                        <tr data-item="list">
                            <td>
                                <button
                                    class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                    <span class="btn-inner">
                                        <i class="far fa-trash-alt"></i>
                                    </span>
                                </button>
                            </td>
                            <td>
                                <div class="product-thumbnail">
                                    <a class="mb-2 me-3" href="product-detail">
                                        <img class="avatar-80" src="{{ asset('frontend/images/shop/product/03.webp') }} "
                                            alt="01" loading="lazy" />
                                    </a>
                                    <span class="mt-2">{{__('frontendshop.black_bow')}}</span>
                                </div>
                            </td>
                            <td>
                                <span class="fw-500">$18.00 – $45.00</span>
                            </td>
                            <td>
                                <span>Out of Stock</span>
                            </td>
                            <td>
                                @include('frontend::components.widgets.custom-button', [
                                    'buttonTitle' => __('frontendshop.view_product'),
                                    'buttonUrl' => 'product-detail',
                                ])

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="product-social-share mt-5 d-flex flex-wrap align-items-center gap-3">
                <h5 class="mb-0">Share On:</h5>
                <ul class="list-inline m-0 p-0 d-flex flex-wrap align-items-center gap-2">
                    <li class="flex-shrink-0">
                        <a href="https://www.facebook.com/"
                            class="d-inline-block border-radius rounded-circle bg-primary text-white text-center"
                            target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="flex-shrink-0">
                        <a href="https://twitter.com/"
                            class="d-inline-block border-radius rounded-circle bg-info text-white text-center"
                            target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="flex-shrink-0">
                        <a href="https://in.pinterest.com/"
                            class="d-inline-block border-radius rounded-circle bg-danger text-white text-center"
                            target="_blank">
                            <i class="fab fa-pinterest-p"></i>
                        </a>
                    </li>
                    <li class="flex-shrink-0">
                        <a href="https://iqonic.design/"
                            class="d-inline-block border-radius rounded-circle bg-warning text-white text-center"
                            target="_blank">
                            <i class="far fa-envelope"></i>
                        </a>
                    </li>
                    <li class="flex-shrink-0">
                        <a href="https://www.whatsapp.com/"
                            class="d-inline-block border-radius rounded-circle bg-success text-white text-center"
                            target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
@endsection
