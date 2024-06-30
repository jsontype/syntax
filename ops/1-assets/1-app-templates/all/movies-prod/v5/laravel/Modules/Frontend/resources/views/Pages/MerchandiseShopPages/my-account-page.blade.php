@extends('frontend::layouts.master', ['isSelect2' => true], ['isBreadCrumb' => true, 'title' =>
__('frontendheader.my_account')])

@section('content')
<div class="section-padding service-details">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4">
                <div class="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
                    <div class="product-menu">
                        <ul class="list-inline m-0 nav nav-tabs flex-column bg-transparent border-0" role="tablist">
                            <li class="pb-3 nav-item">
                                <button class="nav-link active p-0 bg-transparent" data-bs-toggle="tab"
                                    data-bs-target="#dashboard" type="button" role="tab" aria-selected="true"><i
                                        class="fas fa-tachometer-alt"></i><span
                                        class="ms-2">{{__('frontendshop.dashboard')}}</span></button>
                            </li>
                            <li class="py-3 nav-item">
                                <button class="nav-link p-0 bg-transparent" data-bs-toggle="tab"
                                    data-bs-target="#orders" type="button" role="tab" aria-selected="true"><i
                                        class="fas fa-list"></i><span
                                        class="ms-2">{{__('frontendshop.orders')}}</span></button>
                            </li>
                            <li class="py-3 nav-item">
                                <button class="nav-link p-0 bg-transparent" data-bs-toggle="tab"
                                    data-bs-target="#downloads" type="button" role="tab" aria-selected="true"><i
                                        class="fas fa-download"></i><span
                                        class="ms-2">{{__('frontendshop.downloads')}}</span></button>
                            </li>
                            <li class="py-3 nav-item">
                                <button class="nav-link p-0 bg-transparent" data-bs-toggle="tab"
                                    data-bs-target="#address" type="button" role="tab" aria-selected="true"><i
                                        class="fas fa-map-marker-alt"></i><span
                                        class="ms-2">{{__('frontendshop.address')}}</span></button>
                            </li>
                            <li class="py-3 nav-item">
                                <button class="nav-link p-0 bg-transparent" data-bs-toggle="tab"
                                    data-bs-target="#account-details" type="button" role="tab" aria-selected="true"><i
                                        class="fas fa-user"></i><span
                                        class="ms-2">{{__('frontendshop.account_details')}}</span></button>
                            </li>
                            <li class="pt-3 nav-item">
                                <button class="nav-link p-0 bg-transparent" data-bs-toggle="tab"
                                    data-bs-target="#logout" type="button" role="tab" aria-selected="true"><i
                                        class="fas fa-sign-out-alt"></i><span
                                        class="ms-2">{{__('frontendshop.logout')}}</span></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-8">
                <div class="tab-content" id="product-menu-content">
                    <div class="tab-pane fade show active" id="dashboard" role="tabpanel">
                        <div class="myaccount-content text-body p-4">
                            <p>{{__('frontendshop.hello_jenny')}} <a href="login">{{__('frontendshop.log_out')}}</a>)
                            </p>
                            <p>{{__('frontendshop.your_account')}} <a
                                    href="javascript:void(0)">{{__('frontendshop.recent_orders')}}</a>,
                                {{__('frontendshop.manage_your')}} <a
                                    href="javascript:void(0)">{{__('frontendshop.shipping_billing')}}</a>,
                                {{__('frontendshop.and')}}<a href="javascript:void(0)">
                                    {{__('frontendshop.edit_password')}}</a>.
                            </p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="orders" role="tabpanel">
                        <div class="orders-table text-body p-4">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="border-bottom">
                                            <th class="fw-bolder p-3">{{__('frontendshop.order')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.date')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.status')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.total')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.actions')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-bottom">
                                            <td class="text-primary fs-6">#32604</td>
                                            <td>October 28, 2022</td>
                                            <td>{{__('frontendshop.cancelled')}}</td>
                                            <td>$215.00 For 0 Items</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' =>__('frontendshop.pay'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' =>__('frontendshop.view'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' =>__('frontendshop.cancel'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="border-bottom">
                                            <td class="text-primary fs-6">#32584</td>
                                            <td>October 27, 2022</td>
                                            <td>{{__('frontendshop.on_hold')}}</td>
                                            <td>$522.00 For 0 Items</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.pay'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.view'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.cancel'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="border-bottom">
                                            <td class="text-primary fs-6">#31756</td>
                                            <td>October 19, 2022</td>
                                            <td>{{__('frontendshop.processing')}}</td>
                                            <td>$243.00 For 0 Items</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.pay'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.view'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.cancel'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="border-bottom">
                                            <td class="text-primary fs-6">#23663</td>
                                            <td>October 7, 2022</td>
                                            <td>{{__('frontendshop.completed')}}</td>
                                            <td>$123.00 For 0 Items</td>
                                            <td class="fs-6">
                                                <div class="d-flex align-items-center gap-2">
                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.view'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )

                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="border-bottom">
                                            <td class="text-primary fs-6">#23612</td>
                                            <td>October 7, 2022</td>
                                            <td>{{__('frontendshop.completed')}}</td>
                                            <td>$64.00 For 0 Items</td>
                                            <td class="fs-6">
                                                <div class="d-flex align-items-center gap-2">
                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.view'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary fs-6">#19243</td>
                                            <td>April 1, 2022</td>
                                            <td>{{__('frontendshop.completed')}}</td>
                                            <td>$159.00 For 0 Items</td>
                                            <td class="fs-6">
                                                <div class="d-flex align-items-center gap-2">
                                                    @include(
                                                    'frontend::components.widgets.custom-button',
                                                    [
                                                    'buttonTitle' => __('frontendshop.view'),
                                                    'buttonUrl' => 'javascript:void(0)',
                                                    ]
                                                    )
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="downloads" role="tabpanel">
                        <div class="orders-table text-body p-4">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="border-bottom">
                                            <th class="fw-bolder p-3">{{__('frontendshop.product')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.download_remaining')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.expires')}}</th>
                                            <th class="fw-bolder p-3">{{__('frontendshop.download')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-3 fs-6">{{__('frontendshop.electric_toothbrush')}}</td>
                                            <td class="p-3">∞</td>
                                            <td class="p-3 fs-6">{{__('frontendshop.never')}}</td>
                                            <td class="p-3"><a href="#" class="p-2 bg-primary text-white fs-6"
                                                    >{{__('frontendshop.product_demo')}}</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="address" role="tabpanel">
                        <div class="text-body p-4">
                            <p class="my-3">{{__('frontendshop.default_addresses')}}</p>
                            <div class="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                                <h4 class="mb-0">{{__('frontendshop.billing_addess')}}</h4>
                                <div class="iq-button">
                                    <a href="#" class="btn text-uppercase position-relative" data-bs-toggle="collapse"
                                        data-bs-target="#edit-address-1" aria-expanded="false">
                                        <span class="button-text">{{__('frontendshop.edit')}}</span>
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                            <div id="edit-address-1" class="collapse">
                                <div class="text-body mb-4">
                                    <form>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.first_name')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="first-name" value="John" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.last_name')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="last-name" value="deo" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.company_name')}}</label>
                                            <input type="text" name="last-name" value="Iqonic Design"
                                                class="form-control">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.country_region')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <div class="mb-5">
                                                <select class="select2-basic-single js-states form-control"
                                                    aria-label="select country" required="required">
                                                    <option value="" selected>{{__('frontendshop.chooes_country')}}
                                                    </option>
                                                    <option value="1">{{__('frontendshop.india')}}</option>
                                                    <option value="2">{{__('frontendshop.united_kindom')}}</option>
                                                    <option value="3">{{__('frontendshop.united_states')}}</option>
                                                    <option value="4">{{__('frontendshop.australia')}}</option>
                                                    <option value="5">{{__('frontendshop.north_corea')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.street_address')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="address"
                                                placeholder="{{__('frontendform.billing_address')}}"
                                                value="4517 Kentucky" class="form-control mb-3 rounded-0"
                                                required="required">
                                            <input type="text" name="address"
                                                placeholder="{{__('frontendform.apartment')}}" class="form-control">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.town_city')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="city" value="Navsari" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.state')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <div class="mb-5">
                                                <select class="select2-basic-single js-states form-control"
                                                    aria-label="select state">
                                                    <option value="" selected>{{__('frontendshop.choose')}}</option>
                                                    <option value="1">{{__('frontendshop.gujrat')}}</option>
                                                    <option value="2">{{__('frontendshop.dehli')}}</option>
                                                    <option value="3">{{__('frontendshop.goa')}}</option>
                                                    <option value="4">{{__('frontendshop.haryana')}}</option>
                                                    <option value="5">{{__('frontendshop.ladakh')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.pin_code')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="pin code" value="396321" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.phone')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="tel" name="number" value="1234567890" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.email_address')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="email" name="email" value="johndeo@gmail.com"
                                                class="form-control" required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            @include('frontend::components.widgets.custom-button', [
                                            'buttonTitle' => __('frontendshop.save_address'),
                                            'buttonUrl' => 'my-account',
                                            ])
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="edit-address w-100">
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.name')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">{{__('frontendshop.john_deo')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.company')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">{{__('frontendshop.iqonic_design')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.country')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">{{__('frontendshop.india')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.address')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">4517 {{__('frontendshop.washington_manchester')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.e_mail')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">johndeo@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.phone')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">1234567890</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                                <h4 class="mb-0">{{__('frontendshop.shipping_address')}}</h4>
                                <div class="iq-button">
                                    <a href="#" class="btn text-uppercase position-relative" data-bs-toggle="collapse"
                                        data-bs-target="#edit-address-2" aria-expanded="false">
                                        <span class="button-text">{{__('frontendshop.edit')}}</span>
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                            <div id="edit-address-2" class="collapse">
                                <div class="text-body mb-4">
                                    <form>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.first_name')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="first-name" value="John" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.last_name')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="last-name" value="deo" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.company_name')}}</label>
                                            <input type="text" name="last-name" value="Iqonic Design"
                                                class="form-control">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.country_region')}} &nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <div class="mb-5">
                                                <select class="select2-basic-single js-states"
                                                    aria-label="select country" required="required">
                                                    <option value="" selected>{{__('frontendshop.chooes_country')}}
                                                    </option>
                                                    <option value="1">{{__('frontendshop.india')}}</option>
                                                    <option value="2">{{__('frontendshop.united_kindom')}}</option>
                                                    <option value="3">{{__('frontendshop.united_states')}}</option>
                                                    <option value="4">{{__('frontendshop.australia')}}</option>
                                                    <option value="5">{{__('frontendshop.north_corea')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.street_address')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="address"
                                                placeholder="{{__('frontendshop.billing_address')}}"
                                                value="4517 Kentucky" class="form-control mb-3 rounded-0"
                                                required="required">
                                            <input type="text" name="address"
                                                placeholder="{{__('frontendform.apartment')}}"
                                                class="form-control mb-5 rounded-0">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.town_city')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="city" value="Navsari" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.state')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <div class="mb-5">
                                                <select class="select2-basic-single js-states"
                                                    aria-label="select state">
                                                    <option value="" selected>{{__('frontendshop.choose')}}</option>
                                                    <option value="1">{{__('frontendshop.gujrat')}}</option>
                                                    <option value="2">{{__('frontendshop.dehli')}}</option>
                                                    <option value="3">{{__('frontendshop.goa')}}</option>
                                                    <option value="4">{{__('frontendshop.haryana')}}</option>
                                                    <option value="5">{{__('frontendshop.ladakh')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.pin_code')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="pin code" value="396321" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.phone')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="tel" name="number" value="1234567890" class="form-control"
                                                required="required">
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="mb-2">{{__('frontendshop.email_address')}}&nbsp; <span
                                                    class="text-danger">*</span></label>
                                            <input type="email" name="email" value="johndeo@gmail.com"
                                                class="form-control" required="required">
                                        </div>
                                        <div class="form-group">
                                            @include('frontend::components.widgets.custom-button', [
                                            'buttonTitle' => __('frontendshop.save_address'),
                                            'buttonUrl' => 'javascript:void(0)',
                                            ])
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="edit-address w-100">
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.name')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">{{__('frontendshop.john_deo')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.company')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">{{__('frontendshop.iqonic_design')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.country')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">{{__('frontendshop.india')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.address')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">4517 {{__('frontendshop.washington_manchester')}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.e_mail')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">johndeo@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td class="label-name p-2">{{__('frontendshop.phone')}}</td>
                                        <td class="seprator p-2"><span>:</span></td>
                                        <td class="p-2">1234567890</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="account-details" role="tabpanel">
                        <div class=" p-4 text-body">
                            <form>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.first_name')}}&nbsp; <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="first-name" value="John" class="form-control"
                                        required="required">
                                </div>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.last_name')}}&nbsp; <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="last-name" value="deo" class="form-control"
                                        required="required">
                                </div>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.display_name')}}&nbsp; <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="display-name" value="John" class="form-control"
                                        required="required">
                                </div>
                                <em class="d-block mb-5">{{__('frontendshop.displayed_name')}}</em>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.email_address')}}&nbsp; <span
                                            class="text-danger">*</span></label>
                                    <input type="email" name="email" value="johndeo@gmail.com" class="form-control"
                                        required="required">
                                </div>
                                <h4 class="fw-normal mb-5">{{__('frontendshop.password_change')}}</h4>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.current_password')}}</label>
                                    <input type="password" name="password" class="form-control">
                                </div>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.new_password')}}</label>
                                    <input type="password" name="password" class="form-control">
                                </div>
                                <div class="form-group mb-5">
                                    <label class="mb-2">{{__('frontendshop.comfirm_password')}}</label>
                                    <input type="password" name="password" class="form-control">
                                </div>
                                <div class="form-group">
                                    @include('frontend::components.widgets.custom-button', [
                                    'buttonTitle' => __('frontendshop.save_changes'),
                                    'buttonUrl' => 'javascript:void(0)',
                                    ])

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="logout" role="tabpanel">
                        <div class="p-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <h4 class="mb-5 text-primary">{{__('frontendshop.login')}}</h4>
                                    <form method="post">
                                        <div class="mb-4">
                                            <input type="text" name="user-name" class="form-control"
                                                placeholder="{{__('frontendform.username_or_email')}}" required>
                                        </div>
                                        <div class="mb-4">
                                            <input type="password" name="pwd" class="form-control"
                                                placeholder="{{__('frontendshop.password')}}" required>
                                        </div>
                                        <label class="custom-form-field mb-5">
                                            <input type="checkbox" required="required" class="mr-2">
                                            <span class="checkmark"> {{__('frontendshop.remember_me')}}</span>
                                            <span>

                                            </span>
                                        </label>
                                        @include('frontend::components.widgets.custom-button', [
                                        'buttonTitle' => __('frontendshop.login'),
                                        'buttonUrl' => 'javascript:void(0)',
                                        ])

                                    </form>
                                    <div class="mt-3">
                                        @include('frontend::components.widgets.custom-button', [
                                        'linkButton' => true,
                                        'buttonTitle' => __('frontendshop.lost_password'),
                                        'buttonUrl' => 'javascript:void(0)',
                                        ])

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">{{__('frontendshop.register')}}
                                    </h4>
                                    <form method="post">
                                        <div class="mb-4">
                                            <input type="text" name="user-name"
                                                placeholder="{{__('frontendform.username')}}" class="form-control"
                                                required>
                                        </div>
                                        <div class="mb-4">
                                            <input type="email" name="email-address"
                                                placeholder="{{__('frontendshop.email_address')}}*" class="form-control"
                                                required>
                                        </div>
                                        <div class="mb-4">
                                            <input type="password" name="password"
                                                placeholder="{{__('frontendform.password')}}" class="form-control"
                                                required>
                                        </div>
                                        <p class="mb-5">{{__('frontendshop.user_personal_data')}}<a
                                                href="privacy-policy">
                                                {{__('frontendshop.privacy_policy')}}</a>.
                                        </p>
                                        @include('frontend::components.widgets.custom-button', [
                                        'buttonTitle' => __('frontendshop.register'),
                                        'buttonUrl' => 'javascript:void(0)',
                                        ])
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection