<footer class="footer-merchandise">
    <div class="footer-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="footer-inner">
                        <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{__('frontendfooter.customer_services')}}</p>
                        <h4 class="mb-0 contact text-white fw-bold"><a href="tel:+4805550103">+ (480) 555-0103</a></h4>
                        <span class="d-inline-block mt-4 mb-0 font-size-14">{{__('frontendfooter.email_us')}} <a
                                href="maito:customer@streamit.com">customer@streamit.com</a></span>
                        <div class="mt-5">
                            <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{__('frontendfooter.stay_connected')}}</p>
                            <ul class="p-0 mt-4 mb-0 list-unstyled widget_social_media">
                                <li class="">
                                    <a href="https://www.facebook.com/" target="_blank" class="position-relative">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://twitter.com/" target="_blank" class="position-relative">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://github.com/" target="_blank" class="position-relative">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://www.instagram.com/" target="_blank" class="position-relative">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mt-sm-0 mt-5">
                    <div class="footer-inner position-relative text-center px-xl-5 px-3">
                        <div
                            class="vr text-dark opacity-100 h-100 position-absolute end-0 top-0 d-lg-inline-block d-none">
                        </div>
                        <div class="footer-logo">
                            <!--Logo -->
                            @include('frontend::components.widgets.logo')
                        </div>
                        <p class="mt-lg-5 mt-4 mb-3 text-uppercase letter-spacing-1 font-size-14 mb-1">{{__('frontendfooter.best_deals')}}</p>
                        <div class="mailchimp mailchimp-dark">
                            <div class="input-group mb-3 mt-4">
                                <input type="text" class="form-control mb-0 font-size-14" placeholder="Email*"
                                    aria-describedby="button-addon2">
                                <div class="iq-button">
                                    <button type="submit" class="btn btn-sm" id="button-addon2">{{__('frontendfooter.subscribe')}}</button>
                                </div>
                            </div>
                            <span class="d-inline-block font-size-14">* {{__('frontendfooter.email_anyone')}} </span>
                        </div>
                        <div
                            class="vr text-dark opacity-100 h-100 position-absolute start-0 top-0 d-lg-inline-block d-none">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12 mt-lg-0 mt-5">
                    <div class="footer-inner">
                        <h5 class="footer-link-title mb-3">{{__('frontendfooter.quick_links')}}</h5>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul class="list-unstyled footer-menu mb-0">
                                    <li class="mb-2">
                                        <a href="{{ route('frontend.contact_us') }}" class="ms-3">{{__('frontendheader.contact_us')}}</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('frontend.privacy-policy') }}" class="ms-3">{{__('frontendheader.privacy_policy')}}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 mt-lg-0 mt-2">
                                <ul class="list-unstyled footer-menu mb-0">
                                    <li>
                                        <a href="{{ route('frontend.terms-and-policy') }}" class="ms-3">{{__('frontendfooter.terms_of_use')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-5">
                            <p class="pt-3 mb-3 text-uppercase">{{__('frontendfooter.payments')}}</p>
                            <ul class="list-inline d-flex align-items-center flex-wrap gap-3 m-0">
                                <li>
                                    <img src="{{ asset('frontend/images/footer/01.webp') }}" alt="visa">
                                </li>
                                <li>
                                    <img src="{{ asset('frontend/images/footer/02.webp') }}" alt="visa">
                                </li>
                                <li>
                                    <img src="{{ asset('frontend/images/footer/03.webp') }}" alt="visa">
                                </li>
                                <li>
                                    <img src="{{ asset('frontend/images/footer/04.webp') }}" alt="visa">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom bg-body py-3">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6 text-md-start text-center">
                    <p class="m-0 font-size-14 text-capitalize">© <span class="currentYear">2023</span><a
                            href="./index.html"> STREAMIT </a> All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end text-center">
                    <p class="m-0 font-size-14">Powered by <a href="https://iqonic.design/" target="_blank">IQONIC
                            DESIGN</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>
