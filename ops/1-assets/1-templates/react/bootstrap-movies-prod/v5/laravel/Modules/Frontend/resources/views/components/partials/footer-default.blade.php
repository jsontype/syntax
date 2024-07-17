<footer class="footer footer-default">
    <div class="container-fluid">
        <div class="footer-top">
            <div class="row">
                <div class="col-xl-3 col-lg-6 mb-5 mb-lg-0">
                    <div class="footer-logo">
                        @include('frontend::components.brand.logo')
                    </div>
                    <p class="mb-4 font-size-14">{{__('frontendfooter.email_us')}} <span
                            class="text-white">{{__('frontendfooter.customer@stremit')}}</span></p>
                    <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">
                        {{__('frontendfooter.customer_services')}}</p>
                    <p class="mb-0 contact text-white">+ (480) 555-0103</p>
                </div>
                <div class="col-xl-2 col-lg-6 mb-5 mb-lg-0">
                    <h4 class="footer-link-title">{{__('frontendfooter.quick_links')}} </h4>
                    <ul class="list-unstyled footer-menu">
                        <li class="mb-3">
                            <a href="{{ route('frontend.about_us') }}"
                                class="ms-3">{{__('frontendheader.about_us')}}</a>
                        </li>
                        <li class="mb-3">
                            <a href="{{ route('frontend.list_page') }}" class="ms-3">{{__('frontendheader.blog')}}</a>
                        </li>
                        <li class="mb-3">
                            <a href="{{ route('frontend.pricing-page') }}"
                                class="ms-3">{{__('frontendheader.pricing_plan')}}</a>
                        </li>
                        <li>
                            <a href="{{ route('frontend.faq_page') }}" class="ms-3">{{__('frontendheader.faq')}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-2 col-lg-6 mb-5 mb-lg-0">
                    <h4 class="footer-link-title">{{__('frontendfooter.movies_to_watch')}}</h4>
                    <ul class="list-unstyled footer-menu">
                        <li class="mb-3">
                            <a href="{{ route('frontend.view_all') }}"
                                class="ms-3">{{__('frontendfooter.top_trending')}}</a>
                        </li>
                        <li class="mb-3">
                            <a href="{{ route('frontend.view_all') }}"
                                class="ms-3">{{__('frontendfooter.recommended')}}</a>
                        </li>
                        <li>
                            <a href="{{ route('frontend.view_all') }}" class="ms-3">{{__('frontendfooter.popular')}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-2 col-lg-6 mb-5 mb-lg-0">
                    <h4 class="footer-link-title">{{__('frontendfooter.about_company')}}</h4>
                    <ul class="list-unstyled footer-menu">
                        <li class="mb-3">
                            <a href="{{ route('frontend.contact_us') }}"
                                class="ms-3">{{__('frontendheader.contact_us')}}</a>
                        </li>
                        <li class="mb-3">
                            <a href="{{ route('frontend.privacy-policy') }}"
                                class="ms-3">{{__('frontendheader.privacy_policy')}}</a>
                        </li>
                        <li>
                            <a href="{{ route('frontend.terms-and-policy') }}"
                                class="ms-3">{{__('frontendfooter.terms_of_use')}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <h4 class="footer-link-title">{{__('frontendfooter.newsletter')}}</h4>
                    <div class="mailchimp mailchimp-dark">
                        <div class="input-group mb-3 mt-4">
                            <input type="text" class="form-control mb-0 font-size-14"
                                placeholder="{{__('frontendfooter.email')}}" aria-describedby="button-addon2" />
                            <div class="iq-button">
                                <button type="submit" class="btn btn-sm"
                                    id="button-addon2">{{__('frontendfooter.subscribe')}}</button>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-5">
                        <span class="font-size-14 me-2">{{__('frontendfooter.follow_us')}}</span>
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
        <div class="footer-bottom border-top">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <ul class="menu list-inline p-0 d-flex flex-wrap align-items-center">
                        <li class="menu-item">
                            <a href="{{ route('frontend.terms-and-policy') }}"> {{__('frontendfooter.terms_of_use')}}
                            </a>
                        </li>
                        <li id="menu-item-7316" class="menu-item">
                            <a href="{{ route('frontend.privacy-policy') }}"> {{__('frontendfooter.privacy-policy')}}
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="{{ route('frontend.faq_page') }}"> {{__('frontendheader.faq')}} </a>
                        </li>
                        <li class="menu-item">
                            <a href="{{ route('frontend.play_list') }}"> {{__('frontendfooter.watch_list')}} </a>
                        </li>
                    </ul>
                    <p class="font-size-14">© <span class="currentYear">2023</span> <span
                            class="text-primary">STREAMIT</span>. {{__('frontendfooter.desc')}}</p>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <h6 class="font-size-14 pb-1">{{__('frontendfooter.download_app')}}</h6>
                    <div class="d-flex align-items-center">
                        <a class="app-image" href="#">
                            <img src="{{ asset('frontend/images/footer/google-play.webp') }}" loading="lazy"
                                alt="play-store" />
                        </a>
                        <br />
                        <a class="ms-3 app-image" href="#">
                            <img src="{{ asset('frontend/images/footer/apple.webp') }}" loading="lazy"
                                alt="app-store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>