@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'Pricing Plan'])

@section('content')
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-3 mb-lg-0">
                    <div class="pricing-plan-wrapper">
                        <div class="pricing-plan-header">
                            <h4 class="plan-name text-capitalize text-body mb-0">{{__('frontendpricing.free')}}</h4>
                        </div>
                        <div class="pricing-details">
                            <div class="pricing-plan-description">
                                <ul class="list-inline p-0">
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.free_movies')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-times"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.watch_on_tv')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-times"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.streamit_special')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-times"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.video_quality')}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="pricing-plan-footer">
                                @include('frontend::components.cards.custom-button', [
                                    'buttonTitle' => __('frontendpricing.select_free'),
                                    'buttonUrl' => 'javascript:void(0)',
                                ])

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-3 mb-lg-0">
                    <div class="pricing-plan-wrapper">
                        <div class="pricing-plan-discount bg-primary p-2 text-center">
                            <span class="text-white">{{__('frontendpricing.save')}} 20%</span>
                        </div>
                        <div class="pricing-plan-header">
                            <h4 class="plan-name text-capitalize text-body">{{__('frontendpricing.premium')}}</h4>
                            <span class="sale-price text-decoration-line-through">$49</span>
                            <span class="main-price text-primary">$39</span>
                            <span class="font-size-18">/ 3 {{__('frontendpricing.month')}}</span>
                        </div>
                        <div class="pricing-details">
                            <div class="pricing-plan-description">
                                <ul class="list-inline p-0">
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.free_movies')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.watch_on_tv')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.streamit_special')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.video_quality')}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="pricing-plan-footer">
                                @include('frontend::components.cards.custom-button', [
                                    'buttonTitle' => __('frontendpricing.select_premium'),
                                    'buttonUrl' => 'javascript:void(0)',
                                ])

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="pricing-plan-wrapper">
                        <div class="pricing-plan-header">
                            <h4 class="plan-name text-capitalize text-body">{{__('frontendpricing.basic')}}</h4>
                            <span class="main-price text-primary">$19</span>
                            <span class="font-size-18">/ 1 {{__('frontendpricing.month')}}</span>
                        </div>
                        <div class="pricing-details">
                            <div class="pricing-plan-description">
                                <ul class="list-inline p-0">
                                    <li>
                                        <i class="fas fa-times"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.free_movies')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.watch_on_tv')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.streamit_special')}}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check text-primary"></i>
                                        <span class="font-size-18 fw-500">{{__('frontendpricing.video_quality')}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="pricing-plan-footer">
                                @include('frontend::components.cards.custom-button', [
                                    'buttonTitle' => __('frontendpricing.select_basic'),
                                    'buttonUrl' => 'javascript:void(0)',
                                ])
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
