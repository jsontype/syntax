<header class="header-center-home header-default header-sticky">
    <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0">
        <div class="container-fluid navbar-inner">
            <div class="d-flex align-items-center justify-content-between w-100 landing-header">
                <div class="d-flex gap-3 gap-xl-0 align-items-center">
                    <div>
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar_main" aria-controls="navbar_main" class="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn">
                            <svg width="20px" class="icon-20" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                            </svg>
                        </button>
                    </div>
                    @include('frontend::components.brand.logo')
                </div>
                <nav id="navbar_main" class="offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0 {{ isset($IS_MEGA) && $IS_MEGA ? 'mega-menu-content' : '' }}">
                    <div class="container-fluid p-lg-2">
                        <div class="offcanvas-header px-0">
                            <div class="navbar-brand ms-3">
                                @include('frontend::components.brand.logo')
                            </div>
                            <button type="button" class="btn-close float-end px-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <ul class="navbar-nav iq-nav-menu list-unstyled" id="header-menu">
                            <li class="nav-item">

                                <a class="nav-link" data-bs-toggle="collapse" href="#homePages" role="button" aria-expanded="false" aria-controls="homePages">
                                    <span class="item-name">{{__('frontendheader.home')}}</span>
                                    <span class="menu-icon">
                                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                                        <span class="toggle-menu">
                                            <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                            <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </a>
                                <ul class="sub-nav collapse justify-content-center list-unstyled {{ isset($IS_MEGA) && $IS_MEGA ? 'mega-menu-item' : '' }}" id="homePages">
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($IS_MEGA) && $IS_MEGA ? 'p-0' : '' }} {{ activeRoute(route('frontend.ott')) }}" href="{{ route('frontend.ott') }}">
                                            @if (isset($IS_MEGA))
                                            <img src="{{ asset('frontend/images/mega-menu/new-home.webp') }}" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                                            @endif

                                            <span class="d-inline-block">{{__('frontendheader.ott_home')}}</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($IS_MEGA) && $IS_MEGA ? 'p-0' : '' }} {{ activeRoute(route('frontend.index')) }}" href="{{ route('frontend.index') }}">
                                            @if (isset($IS_MEGA))
                                            <img src="{{ asset('frontend/images/mega-menu/home.webp') }}" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                                            @endif
                                            <span class="d-inline-block">{{__('frontendheader.home')}}</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($IS_MEGA) && $IS_MEGA ? 'p-0' : '' }} {{ activeRoute(route('frontend.movie')) }}" href="{{ route('frontend.movie') }}">
                                            @if (isset($IS_MEGA))
                                            <img src="{{ asset('frontend/images/mega-menu/movie.webp') }}" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                                            @endif
                                            <span class="d-inline-block">{{__('frontendheader.movie')}}</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($IS_MEGA) && $IS_MEGA ? 'p-0' : '' }} {{ activeRoute(route('frontend.tv-show')) }}" href="{{ route('frontend.tv-show') }}">
                                            @if (isset($IS_MEGA))
                                            <img src="{{ asset('frontend/images/mega-menu/tv-show.webp') }}" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                                            @endif
                                            <span class="d-inline-block">{{__('frontendheader.tv_show')}}</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($IS_MEGA) && $IS_MEGA ? 'p-0' : '' }} {{ activeRoute(route('frontend.video')) }}" href="{{ route('frontend.video') }}">
                                            @if (isset($IS_MEGA))
                                            <img src="{{ asset('frontend/images/mega-menu/video.webp') }}" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                                            @endif
                                            <span class="d-inline-block">{{__('frontendheader.video')}}</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($IS_MEGA) && $IS_MEGA ? 'p-0' : '' }} {{ activeRoute(route('frontend.merchandise')) }}" href="{{ route('frontend.merchandise') }}">
                                            @if (isset($IS_MEGA))
                                            <img src="{{ asset('frontend/images/mega-menu/shop-home.webp') }}" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                                            @endif
                                            <span class="d-inline-block">{{__('frontendheader.merchandise_store')}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#features" role="button" aria-expanded="false" aria-controls="homePages">
                                    <span class="item-name">{{__('frontendheader.features')}}</span>
                                    <span class="menu-icon">
                                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                                        <span class="toggle-menu">
                                            <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                            <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </a>
                                <ul class="sub-nav collapse list-unstyled" id="features">
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.resticted')) }}" href="{{ route('frontend.resticted') }}">
                                            {{__('frontendheader.restricted_content')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.releted_merchandies')) }}" href="{{ route('frontend.releted_merchandies') }}">
                                            {{__('frontendheader.related_merchandise')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.play_list')) }}" href="{{ route('frontend.play_list') }}"> {{__('frontendheader.playlist')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.genres')) }}" href="{{ route('frontend.genres') }}"> {{__('frontendheader.geners')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.cast_list')) }}" href="{{ route('frontend.cast_list') }}"> {{__('frontendheader.cast')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.tag')) }}" href="{{ route('frontend.tag') }}"> {{__('frontendheader.tags')}} </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#pages" role="button" aria-expanded="false" aria-controls="homePages">
                                    <span class="item-name">{{__('frontendheader.pages')}}</span>
                                    <span class="menu-icon">
                                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                                        <span class="toggle-menu">
                                            <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                            <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </a>
                                <ul class="sub-nav collapse list-unstyled" id="pages">
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.about_us')) }}" href="{{ route('frontend.about_us') }}"> {{__('frontendheader.about_us')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.contact_us')) }}" href="{{ route('frontend.contact_us') }}">
                                            {{__('frontendheader.contact_us')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.faq_page')) }}" href="{{ route('frontend.faq_page') }}"> {{__('frontendheader.faq')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.privacy-policy')) }}" href="{{ route('frontend.privacy-policy') }}">
                                            {{__('frontendheader.privacy_policy')}}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.pricing-page')) }}" href="{{ route('frontend.pricing-page') }}">
                                            {{__('frontendheader.pricing_plan')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.comming-soon')) }}" href="{{ route('frontend.comming-soon') }}">
                                            {{__('frontendheader.coming_soon')}}
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="collapse" href="#error-page" role="button" aria-expanded="false" aria-controls="error-page">
                                            <span class="item-name">{{__('frontendheader.error_page')}}</span>
                                            <span class="menu-icon">
                                                <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                                <span class="toggle-menu">
                                                    <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                                    <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <ul class="sub-nav collapse list-unstyled" id="error-page">
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('frontend.error_page1') }}">
                                                    {{__('frontendheader.error_page')}} 1
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('frontend.error_page2') }}">
                                                    {{__('frontendheader.error_page')}} 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#blog" role="button" aria-expanded="false" aria-controls="blog">
                                    <span class="item-name">{{__('frontendheader.blog')}}</span>
                                    <span class="menu-icon">
                                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                                        <span class="toggle-menu">
                                            <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                            <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </a>
                                <ul class="sub-nav collapse list-unstyled" id="blog">
                                    <li class="nav-item {{ activeRoute(route('frontend.list_page')) }}">
                                        <a class="nav-link" href="{{ route('frontend.list_page') }}">
                                            {{__('frontendheader.listing')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="collapse" href="#blog-grid" role="button" aria-expanded="false" aria-controls="blog-grid">
                                            <span class="item-name"> {{__('frontendheader.blog_grid')}}</span>
                                            <span class="menu-icon">
                                                <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                                <span class="toggle-menu">
                                                    <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                                    <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <ul class="sub-nav collapse list-unstyled" id="blog-grid">
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_column_grid', 'one-column')) }}" href="{{ route('frontend.blog_column_grid', 'one-column') }}"> 1
                                                    {{__('frontendheader.column')}} </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_column_grid', 'two-column')) }}" href="{{ route('frontend.blog_column_grid', 'two-column') }}"> 2
                                                    {{__('frontendheader.column')}} </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_column_grid', 'three-column')) }}" href="{{ route('frontend.blog_column_grid', 'three-column') }}">
                                                    3
                                                    {{__('frontendheader.column')}} </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_column_grid', 'four-column')) }}" href="{{ route('frontend.blog_column_grid', 'four-column') }}">
                                                    4
                                                    {{__('frontendheader.column')}} </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="collapse" href="#blog-sidebar" role="button" aria-expanded="false" aria-controls="blog-sidebar">
                                            <span class="item-name">{{__('frontendheader.blog_sidebar')}}</span>
                                            <span class="menu-icon">
                                                <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                                <span class="toggle-menu">
                                                    <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                                    <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <ul class="sub-nav collapse list-unstyled" id="blog-sidebar">
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.left_sidebar')) }}" href="{{ route('frontend.left_sidebar') }}">
                                                    {{__('frontendheader.left_sidebar')}} </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.right_sidebar')) }}" href="{{ route('frontend.right_sidebar') }}">
                                                    {{__('frontendheader.right_sidebar')}}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="collapse" href="#blog-single" role="button" aria-expanded="false" aria-controls="blog-single">
                                            <span class="item-name">{{__('frontendheader.blog_single')}}</span>
                                            <span class="menu-icon">
                                                <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                                <span class="toggle-menu">
                                                    <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                                    <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <ul class="sub-nav collapse list-unstyled" id="blog-single">
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_template')) }}" href="{{ route('frontend.blog_template') }}">
                                                    {{__('frontendheader.blog_template')}}
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.detail_page')) }}" href="{{ route('frontend.detail_page') }}">
                                                    {{__('frontendheader.standard')}} </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_audio')) }}" href="{{ route('frontend.blog_audio') }}">
                                                    {{__('frontendheader.audio')}}
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_video')) }}" href="{{ route('frontend.blog_video') }}">
                                                    {{__('frontendheader.video')}}
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_link')) }}" href="{{ route('frontend.blog_link') }}">
                                                    {{__('frontendheader.link')}}
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_quote')) }}" href="{{ route('frontend.blog_quote') }}">
                                                    {{__('frontendheader.quote')}}
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link {{ activeRoute(route('frontend.blog_gallery')) }}" href="{{ route('frontend.blog_gallery') }}">
                                                    {{__('frontendheader.gallery')}} </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#shop" role="button" aria-expanded="false" aria-controls="shop">
                                    <span class="item-name">{{__('frontendheader.shop')}}</span>
                                    <span class="menu-icon">
                                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                                        <span class="toggle-menu">
                                            <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                            <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </a>
                                <ul class="sub-nav collapse list-unstyled" id="shop">
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('frontend.shop') }}">
                                            {{__('frontendheader.shop')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.my_account')) }}" href="{{ route('frontend.my_account') }}">
                                            {{__('frontendheader.my_account_page')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.cart')) }}" href="{{ route('frontend.cart') }}">
                                            {{__('frontendheader.cart_page')}} </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.wishlist')) }}" href="{{ route('frontend.wishlist') }}">
                                            {{__('frontendheader.wishlist_page')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.chekout')) }}" href="{{ route('frontend.chekout') }}">
                                            {{__('frontendheader.checkout_page')}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ activeRoute(route('frontend.order_tracking')) }}" href="{{ route('frontend.order_tracking') }}">
                                            {{__('frontendheader.order_tracking')}} </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style="color: inherit !important;">
                                    <i class="fa-solid fa-globe me-1"></i>{{strtoupper(App::getLocale())}}
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">

                                    @foreach(config('app.available_locales') as $locale => $title)
                                    <a class="dropdown-item" href="{{route("language.switch", $locale)}}">
                                        {{ $title }}
                                    </a>
                                    @endforeach
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- container-fluid.// -->
                </nav>
                <div class="right-panel">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-btn">
                            <span class="navbar-toggler-icon"></span>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav align-items-center ms-auto mb-2 mb-xl-0">
                            <li class="nav-item dropdown iq-responsive-menu">
                                <div class="search-box">
                                    <a href="#" class="nav-link p-0" id="search-drop" data-bs-toggle="dropdown">
                                        <div class="btn-icon btn-sm rounded-pill btn-action">
                                            <span class="btn-inner">
                                                <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </a>
                                    <ul class="dropdown-menu p-0 dropdown-search m-0 iq-search-bar" style="width: 20rem">
                                        <li class="p-0">
                                            <div class="form-group input-group mb-0">
                                                <input type="text" class="form-control border-0" placeholder="{{__('frontendheader.search_dot')}}" />
                                                <button type="submit" class="search-submit">
                                                    <svg class="icon-15" width="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            @if (auth()->user())
                            <li class="nav-item dropdown" id="itemdropdown1">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="btn-icon rounded-pill user-icons">
                                        <span class="btn-inner">
                                            <svg class="icon-18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                                <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" aria-labelledby="navbarDropdown">
                                    <li class="user-info d-flex align-items-center gap-3 mb-3">
                                        <img src="{{ asset('/frontend/images/user/user1.webp') }}" class="img-fluid" alt="" loading="lazy" />
                                        <span class="font-size-14 fw-500 text-capitalize text-white">{{__('frontendheader.jenny')}}</span>
                                    </li>
                                    <li>
                                        <a href="{{ route('frontend.play_list') }}" class="iq-sub-card d-flex align-items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 22" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <h6 class="mb-0 font-size-14 fw-normal">{{__('frontendheader.my_account')}}
                                            </h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ route('frontend.play_list') }}" class="iq-sub-card d-flex align-items-center gap-3">
                                            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"></path>
                                                <path d="m19 11h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" fill="currentColor"></path>
                                            </svg>
                                            <h6 class="mb-0 font-size-14 fw-normal">{{__('frontendheader.watchlist')}}
                                            </h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ route('frontend.pricing-page') }}" class="iq-sub-card d-flex align-items-center gap-3">
                                            <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <h6 class="mb-0 font-size-14 fw-normal">
                                                {{__('frontendheader.subscription')}}
                                            </h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z" fill="currentColor"></path>
                                            </svg>
                                            <h6 class="mb-0 font-size-14 fw-normal">{{__('frontendheader.logout')}}</h6>
                                        </a>
                                    </li>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;"> @csrf </form>
                                </ul>
                            </li>
                            @else
                            <li class="nav-item dropdown" id="itemdropdown1">
                                <a href="{{ route('login') }}" class="nav-link">{{__('frontendheader.login')}}</a>
                            </li>
                            @endif
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
