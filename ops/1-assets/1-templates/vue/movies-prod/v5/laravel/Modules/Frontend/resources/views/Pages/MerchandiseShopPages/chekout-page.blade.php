@extends('frontend::layouts.master', ['isSelect2' => true], ['isBreadCrumb' => true, 'title' => 'Checkout'])

@section('content')
    <div class="checkout-page  section-padding">
        <div class="container">
            <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
                <ul
                    class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
                    <li class="cart-page-item">
                        <span class=" cart-pre-number  border-radius rounded-circle me-1"> 1 </span>
                        <span class="cart-page-link ">
                            {{__('frontendshop.shopping_cart')}}</span>
                    </li>
                    <li class="cart-page-item">
                        <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </li>
                    <li class="cart-page-item  active">
                        <span class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                            2 </span>
                        <span class="cart-page-link ">{{__('frontendshop.checkout')}}</span>
                    </li>
                    <li class="cart-page-item">
                        <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </li>
                    <li class="cart-page-item ">
                        <span class=" cart-pre-number  border-radius rounded-circle me-1"> 3 </span>
                        <span class="cart-page-link ">
                            {{__('frontendshop.order_summary')}} </span>
                    </li>
                </ul>
            </div>
            <div class="mb-5">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <div class="woocommerce-info">
                        <span class="text-primary"><i class="fa-solid fa-percent"></i></span>
                        <span class="text-body ps-2"> {{__('frontendshop.have_a_coupon')}}</span>
                        <a href="#" data-bs-toggle="collapse" data-bs-target="#apply-coupon" class="text-white">{{__('frontendshop.enter_code')}}</a>
                    </div>
                </div>
                <div id="apply-coupon" class="collapse mt-5">
                    <form class="checkout-coupon">
                        <p class="mt-0">{{__('frontendshop.apply_coupon_code')}}</p>
                        <div class="iq-checkout-coupon">
                            <input name="coupon-code" type="text" required="required" placeholder="{{__('frontendshop.coupon_code')}}"
                                class="form-control">
                            @include('frontend::components.widgets.custom-button', [
                                'buttonTitle' => __('frontendshop.apply_coupon'),
                                'buttonUrl' => 'javascript:void(0)',
                            ])
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <form action="{{ route('frontend.order_tracking') }}">
                        <h5 class="mb-4">{{__('frontendshop.billing_details')}}</h5>
                        <div class="mb-4">
                            <input name="first-name" type="text" required="required" placeholder="{{__('frontendshop.first_name')}}"
                                class="form-control">
                        </div>
                        <div class="mb-4">
                            <input name="last-name" type="text" required="required" placeholder="{{__('frontendshop.last_name')}}"
                                class="form-control">
                        </div>
                        <div class="mb-4">
                            <input name="billing-company" type="text" required="required" placeholder="{{__('frontendshop.company')}}"
                                class="form-control">
                        </div>
                        <div class="mb-4">
                            <select class="select2-basic-single js-states form-control" aria-label="Default select example">
                                <option selected>{{__('frontendshop.india')}}</option>
                                <option value="1">{{__('frontendshop.united_kindom')}}</option>
                                <option value="2">{{__('frontendshop.united_states')}}</option>
                                <option value="3">{{__('frontendshop.australia')}}</option>
                                <option value="1">{{__('frontendshop.north_corea')}}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <input name="billing-address" type="text" required="required"
                                placeholder="{{__('frontendform.billing_address')}}" class="form-control">
                        </div>
                        <div class="mb-4">
                            <input name="billing-address2" type="text" required="required"
                                placeholder="{{__('frontendform.apartment')}}" class="form-control">
                        </div>
                        <div class="mb-4">
                            <input name="city" type="text" required="required" placeholder="{{__('frontendshop.town_city')}}"
                                class="form-control">
                        </div>
                        <div class="mb-4">
                            <select class="select2-basic-single js-states form-control"
                                aria-label="Default select example">
                                <option selected>{{__('frontendshop.colorado')}}</option>
                                <option value="2">{{__('frontendshop.alaska')}}</option>
                                <option value="1">{{__('frontendshop.hawai')}}</option>
                                <option value="3">{{__('frontendshop.texas')}}</option>
                                <option value="1">{{__('frontendshop.washington')}}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <input name="postcode" type="text" required="required" placeholder="{{__('frontendform.zip_code')}}"
                                class="form-control">
                        </div>
                        <div class="mb-4">
                            <input name="phone" type="tel" required="required" placeholder="{{__('frontendform.phone')}}"
                                class="form-control">
                        </div>
                        <div class="mb-4">
                            <input name="billing-company" type="email" required="required"
                                placeholder="{{__('frontendshop.mail_address')}}" class="form-control rounded-0 mb-5">
                        </div>
                        <h5 class="mb-4">{{__('frontendshop.additional_information')}}</h5>
                        <div class="mb-4">
                            <label class="mb-2">{{__('frontendshop.order_notes')}}</label>
                            <textarea name="your-message" placeholder="{{__('frontendshop.order_notes_eg')}}"
                                class="form-control mb-5" required></textarea>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4 col-md-5">
                    <div class="order_review-box border p-4">
                        <h5 class="mb-3 mt-0 mt-md-2">{{__('frontendshop.product')}}</h5>
                        <div class="checkout-review-order">
                            <div class="table-responsive">
                                <table class="table w-100">
                                    <tbody>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                <div class="product-image"><img width="300" height="400"
                                                        src="{{ asset('frontend/images/shop/product/01.webp') }}"
                                                        class="cartimg" alt="image" loading="lazy"></div>
                                                <div class="text">
                                                    <span class="fw-500 text-body">{{__('frontendshop.bag_pack')}}</span><br><strong
                                                        class="text-white font-size-12 fw-bold">{{__('frontendshop.qty')}}&nbsp;1</strong>
                                                </div>
                                            </td>
                                            <td class="product-total">
                                                <span class="Price-amount"><bdi
                                                        class="fw-500 text-body"><span>$</span>28.00</bdi></span>
                                            </td>
                                        </tr>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                <div class="product-image"><img width="300" height="400"
                                                        src="{{ asset('frontend/images/shop/product/07.webp') }}"
                                                        class="cartimg" alt="image" loading="lazy"></div>
                                                <div class="text">
                                                    <span class="fw-500 text-body">{{__('frontendshop.cartoon')}}</span><br><strong
                                                        class="text-white font-size-12 fw-bold">{{__('frontendshop.qty')}}&nbsp;1</strong>
                                                </div>
                                            </td>
                                            <td class="product-total">
                                                <span class="Price-amount"><bdi
                                                        class="fw-500 text-body"><span>$</span>25.00</bdi></span>
                                            </td>
                                        </tr>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                <div class="product-image"><img width="300" height="400"
                                                        src="{{ asset('frontend/images/shop/product/05.webp') }} "
                                                        class="cartimg" alt="image" loading="lazy"></div>
                                                <div class="text">
                                                    <span class="fw-500 text-body">{{__('frontendshop.boxing_gloves')}}</span><br><strong
                                                        class="text-white font-size-12 fw-bold">{{__('frontendshop.qty')}}&nbsp;1</strong>
                                                </div>
                                            </td>
                                            <td class="product-total">
                                                <span class="Price-amount"><bdi
                                                        class="fw-500 text-body"><span>$</span>18.00</bdi></span>
                                            </td>
                                        </tr>

                                    </tbody>
                                    <tfoot>
                                        <tr class="border-bottom">
                                            <td class="ps-0 p-3 fw-500 font-size-18">{{__('frontendshop.subtotal')}}</td>
                                            <td class="pe-0 p-3 fw-500 text-end">
                                                <span class="mb-0 text-body">$71.00</span>
                                            </td>
                                        </tr>
                                        <tr class="border-bottom">
                                            <td class="ps-0 p-3 fw-500 font-size-18">{{__('frontendshop.total')}}</td>
                                            <td class="pe-0 p-3 fw-500 text-end">
                                                <span class="text-primary mb-0">$71.00</span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div class="checkout-payment mt-4 pt-3 pb-2">
                                    <div class="payment-box border-bottom mb-5 pb-4">
                                        <div class="accordion" id="accordionPayment">
                                            <div class="accordion-item-payment">
                                                <h6 class="accordion-header" id="payment-1">
                                                    <div class="accordion-button-payment" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOnepayment" aria-expanded="true"
                                                        aria-controls="collapseOnepayment">
                                                        <span class="form-check">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault1"
                                                                checked="checked">
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                {{__('frontendshop.bank_transfer')}}
                                                            </label>
                                                        </span>
                                                    </div>
                                                </h6>
                                                <div id="collapseOnepayment" class="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionPayment">
                                                    <div class="accordion-body">
                                                        {{__('frontendshop.make_direct_payment')}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item-payment">
                                                <h6 class="accordion-header" id="payment-2">
                                                    <div class="accordion-button-payment collapsed"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwopayment"
                                                        aria-expanded="false" aria-controls="collapseTwopayment">
                                                        <span class="form-check">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault2">
                                                            <label class="form-check-label" for="flexRadioDefault2">
                                                                {{__('frontendshop.check_payments')}}
                                                            </label>
                                                        </span>
                                                    </div>
                                                </h6>
                                                <div id="collapseTwopayment" class="accordion-collapse collapse"
                                                    aria-labelledby="payment-2" data-bs-parent="#accordionPayment">
                                                    <div class="accordion-body">
                                                    {{__('frontendshop.cheque_to_store')}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item-payment">
                                                <h6 class="accordion-header" id="payment-3">
                                                    <div class="accordion-button-payment collapsed"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThreepayment"
                                                        aria-expanded="false" aria-controls="collapseThreepayment">
                                                        <span class="form-check">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault3">
                                                            <label class="form-check-label" for="flexRadioDefault3">
                                                                {{__('frontendshop.cod')}}
                                                            </label>
                                                        </span>
                                                    </div>
                                                </h6>
                                                <div id="collapseThreepayment" class="accordion-collapse collapse"
                                                    aria-labelledby="payment-3" data-bs-parent="#accordionPayment">
                                                    <div class="accordion-body">
                                                        {{__('frontendshop.pay_with_cash')}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="mt-3 mb-5">
                                    {{__('frontendshop.your_personal_data')}} <a
                                            href="{{ route('frontend.privacy-policy') }}"> {{__('frontendshop.privacy_policy')}}</a>
                                        .</p>
                                    @include('frontend::components.widgets.custom-button', [
                                        'buttonTitle' => __('frontendshop.place_order'),
                                        'buttonUrl' => 'order-tracking',
                                    ])
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
