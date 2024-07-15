@extends('frontend::layouts.blank')

@section('content')
    <div class="section-padding height-auto-100 image-flip-rtl"
        style="background: url('{{ asset('frontend/images/pages/coming-soon.webp') }}'); background-size: cover; background-repeat: no-repeat; position: relative;min-height:500px">
        <div class="container h-100">
            <div class="d-flex flex-column justify-content-center h-100">
                <h1 class="text-capitalize fw-500 mb-0 text-center text-md-start">{{__('frontendcountdown.comin_back')}}</h1>
                <ul class="countdown d-flex align-items-center list-inline count-down my-5 py-3"
                    data-date="May 30 2025 20:20:22">
                    <li class="position-relative d-inline-lock">
                        <span data-days class="numberDisplay">0</span>
                        <span class="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">{{__('frontendcountdown.days')}}</span>
                    </li>
                    <li class="position-relative d-inline-block">
                        <span data-hours class="numberDisplay">0</span>
                        <span class="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">{{__('frontendcountdown.hours')}}</span>
                    </li>
                    <li class="position-relative d-inline-block">
                        <span data-minutes class="numberDisplay">0</span>
                        <span class="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">{{__('frontendcountdown.minutes')}}</span>
                    </li>
                    <li class="position-relative d-inline-block">
                        <span data-seconds class="numberDisplay">0</span>
                        <span class="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">{{__('frontendcountdown.seconds')}}</span>
                    </li>
                </ul>
                <div class="mailchimp">
                    <div class="input-group  mail-box-width">
                        <input type="text" class="form-control mb-0 font-size-14" placeholder="{{__('frontendform.email')}}*"
                            aria-describedby="button-addon2">
                        <div class="iq-button">
                            <button type="submit" class="btn" id="button-addon2">{{__('frontendcountdown.subscribe')}}</button>
                        </div>
                    </div>
                </div>
                <p class="mt-2 mb-3 text-center text-md-start">{{__('frontendcountdown.working_hard')}}</p>
                <div class="d-flex align-items-center mt-3 mt-md-5 justify-content-center justify-content-md-start">
                    <span class="font-size-14 me-3">{{__('frontendcountdown.follow_us')}}</span>
                    <ul class="p-0 m-0 list-unstyled widget_social_media">
                        <li class="">
                            <a href="https://www.facebook.com/" class="position-relative">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li class="">
                            <a href="https://twitter.com/" class="position-relative">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="">
                            <a href="https://github.com/" class="position-relative">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li class="">
                            <a href="https://www.instagram.com/" class="position-relative">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection
