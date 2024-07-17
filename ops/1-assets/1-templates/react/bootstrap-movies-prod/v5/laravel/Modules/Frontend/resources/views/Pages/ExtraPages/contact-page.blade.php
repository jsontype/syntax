@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'Contact Us'])

@section('content')
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="title-box">
                        <h2>{{__('frontendcontact_us.create_with_us')}}</h2>
                        <p class="mb-0">{{__('frontendcontact_us.learn_more')}}</p>
                    </div>
                    <form class="mb-5 mb-lg-0">
                        <div class="row">
                            <div class="col-md-6 mb-4 mb-lg-5">
                                <input type="text" class="form-control font-size-14" placeholder="{{__('frontendform.your_name')}}*" required>
                            </div>
                            <div class="col-md-6 mb-4 mb-lg-5">
                                <input type="text" class="form-control font-size-14" placeholder="{{__('frontendform.last_name')}}*" required>
                            </div>
                            <div class="col-md-6 mb-4 mb-lg-5">
                                <input type="tel" class="form-control font-size-14" maxlength="140" minlength="10"
                                    placeholder="{{__('frontendform.phone')}}*" required>
                            </div>
                            <div class="col-md-6 mb-4 mb-lg-5">
                                <input type="email" class="form-control font-size-14" placeholder="{{__('frontendcontact_us.your_email')}}*" required>
                            </div>
                            <div class="col-md-12 mb-4 mb-lg-5">
                                <textarea class="form-control font-size-14" cols="40" rows="10" placeholder="{{__('frontendform.message')}}"></textarea>
                            </div>
                            <div class="col-md-12">
                                <div class="iq-button">
                                    <button type="submit" class="btn">{{__('frontendcontact_us.send_message')}}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-1 d-none d-lg-block"></div>
                <div class="col-lg-3">
                    <div class="border-bottom pb-4 mb-4">
                        <h5>{{__('frontendcontact_us.come_see_use')}}</h5>
                        <span>{{__('frontendcontact_us.townhouse_consoling')}}</span>
                    </div>
                    <div class="border-bottom pb-4 mb-4">
                        <h5>{{__('frontendcontact_us.get_in_touch')}}</h5>
                        <a class="text-primary">support@streamit.com</a>
                        <p class="mb-0"> (144) 1234 4567</p>
                    </div>
                    <div>
                        <h5>{{__('frontendcontact_us.follow_us')}}</h5>
                        <ul class="p-0 m-0 mt-4 list-unstyled widget_social_media">
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
    </div>

    <div class="map">
        <div class="container-fluid p-0">
            <iframe loading="lazy" class="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902543.2003194243!2d-118.04220880485131!3d36.56083290513502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2sin!4v1576668158879!5m2!1sen!2sin"
                height="600" allowfullscreen=""></iframe>
        </div>
    </div>

    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-10">
                    <div class="title-box">
                        <h3 class="fw-500">{{__('frontendcontact_us.take_challenge')}}</h3>
                    </div>
                </div>
                <div class="col-lg-2 d-none d-lg-block"></div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="contact-box d-flex gap-3 rounded mb-3 mb-lg-0">
                        <img src="{{ asset('frontend/images/pages/box-pattern.webp') }}"
                            class="img-fluid position-absolute top-0 end-0" alt="pattern" loading="lazy">
                        <div class="icon-wrapper rounded-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 17"
                                fill="none">
                                <path
                                    d="M4.22501 8.70833C4.86668 7.55 6.10001 6.86667 6.81668 5.84167C7.57501 4.76667 7.15001 2.75833 5.00001 2.75833C3.59168 2.75833 2.90001 3.825 2.60835 4.70833L0.450012 3.8C1.04168 2.025 2.65001 0.5 4.99168 0.5C6.95001 0.5 8.29168 1.39167 8.97501 2.50833C9.55835 3.46667 9.90001 5.25833 9.00001 6.59167C8.00001 8.06667 7.04168 8.51667 6.52501 9.46667C6.31668 9.85 6.23335 10.1 6.23335 11.3333H3.82501C3.81668 10.6833 3.71668 9.625 4.22501 8.70833ZM6.66668 14.6667C6.66668 15.5833 5.91668 16.3333 5.00001 16.3333C4.08335 16.3333 3.33335 15.5833 3.33335 14.6667C3.33335 13.75 4.08335 13 5.00001 13C5.91668 13 6.66668 13.75 6.66668 14.6667Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div style="z-index: 1;">
                            <h6 class="font-size-18 fw-500 mb-4">{{__('frontendcontact_us.general_enquiries')}}</h6>
                            <p class="mb-1 font-size-14">{{__('frontendcontact_us.call_on')}}<span class="text-primary"> (144) 1234 4567</span>
                            </p>
                            <p class="mb-0">{{__('frontendcontact_us.mail')}} <a href="mailto:info@medyapim.com"
                                    class="text-white fw-500">info@enquiries.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="contact-box d-flex gap-3 rounded mb-3 mb-lg-0">
                        <img src="{{ asset('frontend/images/pages/box-pattern.webp') }}"
                            class="img-fluid position-absolute top-0 end-0" alt="pattern" loading="lazy">
                        <div class="icon-wrapper rounded-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path
                                    d="M8 0.5C3.85833 0.5 0.5 3.85833 0.5 8V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H5.5V8.83333H2.16667V8C2.16667 4.775 4.775 2.16667 8 2.16667C11.225 2.16667 13.8333 4.775 13.8333 8V8.83333H10.5V15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8C15.5 3.85833 12.1417 0.5 8 0.5ZM3.83333 10.5V13.8333H2.16667V10.5H3.83333ZM13.8333 13.8333H12.1667V10.5H13.8333V13.8333Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div style="z-index: 1;">
                            <h6 class="font-size-18 fw-500 mb-4">{{__('frontendcontact_us.user_support')}}</h6>
                            <p class="mb-1 font-size-14">{{__('frontendcontact_us.call_on')}}<span class="text-primary"> (144) 4321 4567</span>
                            </p>
                            <p class="mb-0">{{__('frontendcontact_us.mail')}} <a href="mailto:info@medyapim.com"
                                    class="text-white fw-500">support@enquiries.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="contact-box d-flex gap-3 rounded">
                        <img src="{{ asset('frontend/images/pages/box-pattern.webp') }}"
                            class="img-fluid position-absolute top-0 end-0" alt="pattern" loading="lazy">
                        <div class="icon-wrapper rounded-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                fill="none">
                                <path
                                    d="M16.8416 8.50829L9.48329 1.14996C9.17496 0.841626 8.74996 0.666626 8.30829 0.666626H2.33329C1.41663 0.666626 0.666626 1.41663 0.666626 2.33329V8.30829C0.666626 8.74996 0.841626 9.17496 1.15829 9.48329L8.51663 16.8416C9.16663 17.4916 10.225 17.4916 10.875 16.8416L16.85 10.8666C17.5 10.2166 17.5 9.16663 16.8416 8.50829ZM9.69163 15.6666L2.33329 8.30829V2.33329H8.30829L15.6666 9.69163L9.69163 15.6666Z"
                                    fill="white"></path>
                                <path
                                    d="M4.41663 5.66663C5.10698 5.66663 5.66663 5.10698 5.66663 4.41663C5.66663 3.72627 5.10698 3.16663 4.41663 3.16663C3.72627 3.16663 3.16663 3.72627 3.16663 4.41663C3.16663 5.10698 3.72627 5.66663 4.41663 5.66663Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div style="z-index: 1;">
                            <h6 class="font-size-18 fw-500 mb-4">{{__('frontendcontact_us.sales_support')}}</h6>
                            <p class="mb-1 font-size-14"> Call On: <span class="text-primary"> (144) 1234 1234</span>
                            </p>
                            <p class="mb-0">{{__('frontendcontact_us.mail')}} <a href="mailto:info@medyapim.com"
                                    class="text-white fw-500">user@enquiries.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
