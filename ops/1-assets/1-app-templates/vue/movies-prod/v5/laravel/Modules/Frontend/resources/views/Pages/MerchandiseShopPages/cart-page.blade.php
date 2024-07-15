@extends('frontend::layouts.master', ['isSweetalert' => true], ['isBreadCrumb' => true, 'title' => 'Cart'])

@section('content')
<div class="cart-page  section-padding">
    <div class="container">
        <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
            <ul
                class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
                <li class="cart-page-item active">
                    <span class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1"> 1
                    </span>
                    <span class="cart-page-link ">
                        {{__('frontendshop.shopping_cart')}} </span>
                </li>
                <li>
                    <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </li>
                <li>
                    <span class=" cart-pre-number border-radius rounded-circle me-1">
                        2 </span>
                    <span class="cart-page-link ">
                        {{__('frontendshop.checkout')}} </span>
                </li>
                <li>
                    <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </li>
                <li>
                    <span class=" cart-pre-number border-radius rounded-circle me-1"> 3 </span>
                    <span class="cart-page-link ">
                        {{__('frontendshop.order_summary')}} </span>
                </li>
            </ul>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="table-responsive">
                    <table class="table cart-table">
                        <thead class="border-bottom">
                            <tr>
                                <th scope="col" class="font-size-18 fw-500">{{__('frontendshop.product')}}</th>
                                <th scope="col" class="font-size-18 fw-500">Price</th>
                                <th scope="col" class="font-size-18 fw-500">{{__('frontendshop.quantity')}}</th>
                                <th scope="col" class="font-size-18 fw-500">{{__('frontendshop.subtotal')}}</th>
                                <th scope="col" class="font-size-18 fw-500"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-item="list">
                                <td>
                                    <div class="product-thumbnail d-flex align-items-center gap-3">
                                        <a class="d-block mb-2" href="">
                                            <img class="avatar-80"
                                                src="{{ asset('frontend/images/shop/product/08.webp') }}" alt="cart"
                                                loading="lazy">
                                        </a>
                                        <span class="text-white">{{__('frontendshop.coffee_cup')}}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="fw-500">$15.00</span>
                                </td>
                                <td>
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
                                </td>
                                <td>
                                    <span class="fw-500">$123.00</span>
                                </td>
                                <td>
                                    <button
                                        class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                        <span class="btn-inner">
                                            <i class="far fa-trash-alt"></i>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr data-item="list">
                                <td>
                                    <div class="product-thumbnail d-flex align-items-center gap-3">
                                        <a class="d-block mb-2" href="">
                                            <img class="avatar-80"
                                                src="{{ asset('frontend/images/shop/product/09.webp') }} " alt="cart"
                                                loading="lazy">
                                        </a>
                                        <span class="text-white">{{__('frontendshop.medical_box')}}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="fw-500">$92.00</span>
                                </td>
                                <td>
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
                                </td>
                                <td>
                                    <span class="fw-500">$92.00</span>
                                </td>
                                <td>
                                    <button
                                        class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                        <span class="btn-inner">
                                            <i class="far fa-trash-alt"></i>
                                        </span>
                                    </button>

                                </td>
                            </tr>
                            <tr data-item="list">
                                <td>
                                    <div class="product-thumbnail d-flex align-items-center gap-3">
                                        <a class="d-block mb-2" href="">
                                            <img class="avatar-80"
                                                src="{{ asset('frontend/images/shop/product/10.webp') }} " alt="cart"
                                                loading="lazy">
                                        </a>
                                        <span class="text-white">{{__('frontendshop.hand_sanitizer')}}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="fw-500">$90.00</span>
                                </td>
                                <td>
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
                                </td>
                                <td>
                                    <span class="fw-500">$90.00</span>
                                </td>
                                <td>
                                    <button
                                        class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                        <span class="btn-inner">
                                            <i class="far fa-trash-alt"></i>
                                        </span>
                                    </button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    class="coupon-main d-flex justify-content-between  gap-5 flex-wrap align-items-center pt-4 pb-5 border-bottom">
                    <div class="wrap-coupon d-flex align-items-center gap-3 flex-wrap">
                        <label>{{__('frontendshop.coupon')}} :</label>
                        <input class="form-control d-inline-block w-auto me-2" name="coupon_code" type="text"
                            placeholder="{{__('frontendshop.coupon_code')}}">
                        <div class=" d-inline-block">
                            @include('frontend::components.widgets.custom-button', [
                            'buttonTitle' => __('frontendshop.apply_coupon'),
                            'buttonUrl' => 'javascript:void(0)',
                            ])

                        </div>
                    </div>
                    <div class="button-primary">
                        @include('frontend::components.widgets.custom-button', [
                        'buttonTitle' => __('frontendshop.update_cart'),
                        'buttonUrl' => 'javascript:void(0)',
                        ])
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="cart_totals p-4">
                    <h5 class="mb-3 font-size-18 fw-500">{{__('frontendshop.cart_total')}}</h5>
                    <div class="css_prefix-woocommerce-cart-box table-responsive">
                        <table class="table">
                            <tbody>
                                <tr class="cart-subtotal">
                                    <th class="border-0"><span class="fw-500">{{__('frontendshop.subtotal')}}</span>
                                    </th>
                                    <td class="border-0">
                                        <span>$305.00</span>
                                    </td>
                                </tr>
                                <tr class="order-total">
                                    <th class="border-0">
                                        <span class="fw-500"> {{__('frontendshop.total')}}</span>
                                    </th>
                                    <td class="border-0">
                                        <span class="fw-500 text-primary">$305.00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="button-primary">
                            @include('frontend::components.widgets.custom-button', [
                            'buttonTitle' =>__('frontendshop.proceed_to_checkout'),
                            'buttonUrl' => 'chekout',
                            ])
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection