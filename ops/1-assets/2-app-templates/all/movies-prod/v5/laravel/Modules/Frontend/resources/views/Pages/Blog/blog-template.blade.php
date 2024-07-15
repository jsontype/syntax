@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true, 'title' => 'Scarlett Drops Out Of
Playing a Transgender Man Following Backlash'])

@section('content')
<div class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-sm-12">
                <div class="blog-box">
                    <img src="{{ asset('frontend/images/blog/blog2.webp') }}" class="img-fluid mb-4 pb-3 rounded" loading="lazy" id="01" alt="template">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <ul class="iq-blog-category-2 m-0  p-0 list-unstyled">
                            <li>
                                <a class="fw-500" href="">{{__('frontendblogs.tv_series')}}</a>
                            </li>
                        </ul>
                        <div class="d-flex align-items-center gap-2">
                            <span class="font-size-12"> 5 {{__('frontendblogs.min_read')}} </span>
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2428 12.2419C10.4091 14.0758 7.69386 14.472 5.47185 13.4444C5.14382 13.3123 4.87489 13.2056 4.61922 13.2056C3.90709 13.2098 3.0207 13.9003 2.56002 13.4402C2.09933 12.9795 2.79036 12.0924 2.79036 11.3759C2.79036 11.1202 2.68785 10.8561 2.55579 10.5274C1.5277 8.30577 1.92447 5.58961 3.75816 3.75632C6.09896 1.41466 9.90201 1.41466 12.2428 3.75572C14.5878 6.101 14.5836 9.90086 12.2428 12.2419Z" stroke="#E50914" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.3637 8.24775H10.3691" stroke="#E50914" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7.95843 8.24775H7.96383" stroke="#E50914" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M5.55316 8.24775H5.55856" stroke="#E50914" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span class="font-size-12"> {{__('frontendblogs.comments')}}</span>
                            </div>
                        </div>
                    </div>
                    <h3 class="fw-500">{{__('frontendblogs.everything_about')}}</h3>
                    <div class="iq-author-details d-flex align-items-center justify-content-between gap-2">
                        <div class="iq-author-image d-flex align-items-center gap-2">
                            <img src="{{ asset('frontend/images/user/user1.webp') }}" class="img-fluid avatar-40 rounded-circle" alt="user" loading="lazy" />
                            <div class="gap-1 d-flex align-items-center font-size-14"> By <span>
                                    <a href="{{ route('frontend.blog_author') }}" class="fw-500">
                                        {{__('frontendblogs.jeni')}}</a>
                                </span>
                            </div>
                        </div>
                        <div class="iq-published-date">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.19336 5.59936H11.8109" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M9.39685 7.70678H9.40185" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M7.00232 7.70678H7.00732" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M4.60291 7.70678H4.6079" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M9.39685 9.80371H9.40185" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M7.00232 9.80371H7.00732" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M4.60291 9.80371H4.6079" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M9.18255 1.60425V3.37991" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path d="M4.82318 1.60425V3.37991" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8571 2.4563H2.14453V12.3959H11.8571V2.4563Z" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                            </svg>
                            <span class="font-size-14 text-uppercase">
                                <a href="#">30 Jan 2019</a>
                            </span>
                        </div>
                    </div>
                </div>
                <p class="pb-4">{{__('frontendblogs.integer_volutpat')}}<span class="text-primary fw-bold">{{__('frontendblogs.rutrum')}}</span>
                    {{__('frontendblogs.posuere_placerat')}}
                </p>
                <div class="blockquote text-center mb-3">
                    <div class="blockquote-icon">
                        <i aria-hidden="true" class="fas fa-quote-right"></i>
                    </div>
                    <p>{{__('frontendblogs.movies_tretmendos')}} </p>
                    <div class="my-4">
                        <h6 class="border-gredient-left d-inline-block ps-2 fw-normal py-1">
                            {{__('frontendblogs.walt_disney')}}
                        </h6>
                    </div>
                </div>
                <p class="pt-4"> {{__('frontendblogs.collaboratively_administrate')}} <span class="text-white text-decoration-underline">{{__('frontendblogs.convergence')}}</span>
                    {{__('frontendblogs.sem_efficitur')}}
                </p>
                <h4 class="mb-3 mt-5 pt-2">{{__('frontendblogs.middle')}}</h4>
                <p>{{__('frontendblogs.collaboratively_administrate')}} {{__('frontendblogs.convergence')}}
                    {{__('frontendblogs.sem_efficitur')}}
                </p>
                <div class="row my-5">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="position-relative padding-200" style="background-image: url('{{ asset('frontend/images/pages/bg-rectangle.webp') }}'); background-size:cover">
                            @include('frontend::components.cards.video-popup', [
                            'videoLinkrl' => 'https://www.youtube.com/watch?v=VeDdpy4CdeM',
                            ])
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                </div>
                <p>{{__('frontendblogs.efficitur_vestibulum_dolor')}}</p>
                <ul>
                    <li class="mb-3">{{__('frontendblogs.mauris')}} <span class="text-white text-capitalize">{{__('frontendblogs.nunc')}} </span>
                        {{__('frontendblogs.auctor_nulla')}}
                    </li>
                    <li class="mb-3">{{__('frontendblogs.placerat_tempor')}}</li>
                    <li>{{__('frontendblogs.quisque')}}<span class="text-primary fw-bold fst-italic">
                            {{__('frontendblogs.venenatis_fringilla')}} </span> {{__('frontendblogs.sem_sceleris')}}
                    </li>
                </ul>
                <p>{{__('frontendblogs.quisque_suscipit')}}</p>
                <div class="iq-blog-tag">
                    <ul class="p-0 m-0 list-unstyled gap-2 widget_tags">
                        <li>
                            <i class="fas fa-tags text-primary" aria-hidden="true"></i>
                            <span class="font-size-12 fw-semibold">TAGS:</span>
                        </li>
                        <li>
                            <a href="" class="position-relative">{{__('otthome.action')}}</a>
                        </li>
                        <li>
                            <a href="" class="position-relative">{{__('frontendblogs.comedies')}}</a>
                        </li>
                        <li>
                            <a href="" class="position-relative">{{__('frontendblogs.comedy')}}</a>
                        </li>
                    </ul>
                </div>
                <div class="widget my-5 my-md-0">
                    <div class="iq-author-meta-details d-flex align-items-start align-items-md-center gap-4 flex-column flex-md-row">
                        <div class="iq-author-image">
                            <img src="{{ asset('frontend/images/user/user1.webp') }}" class="img-fluid rounded" alt="user" loading="lazy" />
                        </div>
                        <div>
                            <h5>{{__('frontendblogs.jeni')}}</h5>
                            <ul class="p-0 m-0 list-unstyled widget_social_media mt-4">
                                <li class="">
                                    <a href="https://www.facebook.com/">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://www.instagram.com/">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://twitter.com/">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://dribbble.com/">
                                        <i class="fab fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="blog-nav row">
                    <div class="blog-prev-post col-lg-6 mb-5 mb-lg-0">
                        <a href="{{route('frontend.blog_gallery')}}">
                            <div class="blog-arrow font-size-14 fw-normal mb-3">
                                <i class="fas fa-arrow-left"></i>
                                <span class="previous fw-medium fst-italic"> {{__('frontendform.previous_post')}}</span>
                            </div>
                            <span class="fw-semibold text-white">{{__('frontendblogs.glass_photos')}}
                            </span>
                        </a>
                    </div>
                    <div class="blog-next-post col-lg-6 text-start text-lg-end">
                        <a href="{{route('frontend.detail_page')}}">
                            <div class="blog-arrow font-size-14 fw-normal mb-3">
                                <span class="next fw-medium fst-italic"> {{__('frontendform.next_post')}}</span>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <span class="fw-semibold text-white">{{__('frontendblogs.birds_of_prey')}}</span>
                        </a>
                    </div>
                </div>

                <form>
                    <h4 class="fw-500 mb-3">Leave a Reply </h4>
                    <p class="mb-4">{{__('frontendform.logged_jenny')}} <span class="text-primary">{{__('frontendform.edit_profile')}}</span>
                        {{__('frontendblogs.fields_marked')}}
                    </p>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea class="form-control" name="comment" cols="5" rows="8" required="" placeholder="Comment"></textarea>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-submit mt-4">
                                <div class="iq-button">
                                    <button name="submit" type="submit" id="submit" class="btn text-uppercase position-relative" value="Submit">
                                        <span class="button-text">{{__('frontendform.post_comment')}}</span>
                                        <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <div class="col-lg-4 col-sm-12 mt-5 mt-lg-0">
                @include('frontend::components.cards.blog-sidebar', [])
            </div>
        </div>
    </div>
</div>
@endsection
