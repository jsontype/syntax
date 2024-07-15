<nav class="nav navbar navbar-expand-xl header-hover-menu navbar-light iq-navbar">
    <div class="container-fluid navbar-inner">
        <a href="{{ route('dashboard') }}" class="navbar-brand">
            @include('components.widget.logo')
        </a>
        <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
            <i class="icon d-flex">
                <svg class="icon-20" width="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
            </i>
        </div>
        <div class="d-flex align-items-center justify-content-between product-offcanvas">
            @if (isset($title) && $title)
                <div class="breadcrumb-title border-end pe-3 d-none d-xl-block">
                    <small class="mb-0 text-capitalize">{{ $title }}</small>
                </div>
            @endif
            <div class="offcanvas offcanvas-end shadow-none iq-product-menu-responsive" tabindex="-1"
                id="offcanvasBottom">
                <div class="offcanvas-body">
                    <ul class="iq-nav-menu list-unstyled">
                        <li class="nav-item"><a class="nav-link {{ activeRoute(route('dashboard')) }} {{ activeRoute(route('dashboard')) }}" href="{{ route('dashboard') }}">{{__('header.home')}}</a></li>
                        @can('view_movies')
                            <li class="nav-item"><a class="nav-link  {{ activeRoute(route('dashboard.movie-list')) }} {{ activeRoute(route('dashboard.movie-list')) }}" href="{{ route('dashboard.movie-list') }}"> {{__('header.movie_list')}}</a>
                            @endcan
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu-arrow {{ isset($Activelink) && $Activelink === "Tvshow" ? "active" : "" }}" data-bs-toggle="collapse" href="#tv-shows" role="button"
                                aria-expanded="false" aria-controls="tv-shows">
                                {{__('header.tv_shows')}}
                                <i class="right-icon">
                                    <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </i>
                            </a>
                            <ul aria-expanded="false" class="iq-header-sub-menu left list-unstyled collapse"
                                id="tv-shows">
                                @can('view_shows')
                                    <li class="nav-item"><a class="nav-link {{ activeRoute(route('dashboard.show-list')) }} " href="{{ route('dashboard.show-list') }}">
                                        {{__('header.show_list')}}</a></li>
                                @endcan
                                @can('view_seasons')
                                    <li class="nav-item"><a class="nav-link {{ activeRoute(route('dashboard.seasons')) }} "
                                            href="{{ route('dashboard.seasons') }}">{{__('header.seasons')}}</a></li>
                                @endcan
                                @can('view_episodes')
                                    <li class="nav-item"><a class="nav-link {{ activeRoute(route('dashboard.episodes')) }} "
                                            href="{{ route('dashboard.episodes') }}">{{__('header.episodes')}}</a></li>
                                @endcan
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <button id="navbar-toggle" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <span class="navbar-toggler-bar bar1 mt-1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0 ">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" id="search-drop" data-bs-toggle="dropdown">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                            <path
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <ul class="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="search-drop">
                        <li class="">
                            <div class="p-3 card-header justify-content-between border-bottom rounded-top">
                                <div class="header-title">
                                    <div class="iq-search-bar device-search  position-relative">
                                        <form action="#" class="searchbox">
                                            <input type="text" class="text search-input form-control bg-primary-subtle w-100"
                                                placeholder="{{__('header.search_here')}}">
                                            <a class="d-lg-none d-flex" href="javascript:void(0);">
                                                <span class="material-symbols-outlined">{{__('header.search')}}</span>
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="p-0 card-body all-notification">
                                <div class="d-flex align-items-center border-bottom search-hover py-2 px-3">
                                    <div class="flex-shrink-0">
                                        <img src="{{ asset('dashboard/images/avatars/01.png') }}" loading="lazy"
                                            class="align-self-center img-fluid avatar-50 rounded-pill" alt="#">
                                    </div>
                                    <div class="d-flex flex-column ms-3 w-100">
                                        <a href="javascript:void(0);" class="h5">{{__('header.paige_turner')}}</a>
                                        <span>{{__('header.paige')}}</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center border-bottom search-hover py-2 px-3">
                                    <div class="flex-shrink-0">
                                        <img src="{{ asset('dashboard/images/avatars/02.png') }}" loading="lazy"
                                            class="align-self-center img-fluid avatar-50 rounded-pill" alt="#">
                                    </div>
                                    <div class="d-flex flex-column ms-3 w-100">
                                        <a href="javascript:void(0);" class="h5">{{__('header.monty_carlo')}}</a>
                                        <span>{{__('header.carlo_m')}}</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center search-hover py-2 px-3 border-bottom">
                                    <div class="flex-shrink-0">
                                        <img src="{{ asset('dashboard/images/avatars/03.png') }}" loading="lazy"
                                            class="align-self-center img-fluid avatar-50 rounded-pill" alt="#">
                                    </div>
                                    <div class="d-flex flex-column ms-3 w-100">
                                        <a href="javascript:void(0);" class="h5">{{__('header.paul_molive')}}</a>
                                        <span>{{__('header.paul')}}</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center border-bottom search-hover py-2 px-3">
                                    <div class="flex-shrink-0">
                                        <img src="{{ asset('dashboard/images/avatars/04.png') }}" loading="lazy"
                                            class="align-self-center img-fluid avatar-50 rounded-pill" alt="#">
                                    </div>
                                    <div class="d-flex flex-column ms-3 w-100">
                                        <a href="javascript:void(0);" class="h5">{{__('header.monty_carlo')}}</a>
                                        <span>{{__('header.carlo_m')}}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" id="langues-drop" data-bs-toggle="dropdown">
                        <svg class="icon-24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802">
                            </path>
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li data-setting="attribute">
                            <div class="dropdown-item d-flex align-items-center">
                                <input type="radio" value="ltr" class="btn-check" name="theme_scheme_direction"
                                    data-prop="dir" id="theme-scheme-direction-ltr" checked>
                                <label class="d-block" for="theme-scheme-direction-ltr">
                                    <svg width="20" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.9702 19.757L15.3502 5.27201C15.1884 4.62224 14.8136 4.04541 14.2856 3.63359C13.7576 3.22177 13.1068 2.99871 12.4372 3.00001H11.5602C10.8911 2.99938 10.2411 3.22275 9.71368 3.63452C9.18629 4.04628 8.81191 4.62274 8.65022 5.27201L5.03022 19.757C4.9679 20.0135 5.00954 20.2843 5.14605 20.5102C5.28257 20.7362 5.50288 20.899 5.75895 20.9631C6.01502 21.0273 6.28606 20.9875 6.51297 20.8527C6.73988 20.7178 6.90424 20.4986 6.97022 20.243L8.28022 15H15.7202L17.0302 20.243C17.0962 20.4986 17.2606 20.7178 17.4875 20.8527C17.7144 20.9875 17.9854 21.0273 18.2415 20.9631C18.4976 20.899 18.7179 20.7362 18.8544 20.5102C18.9909 20.2843 19.0325 20.0135 18.9702 19.757V19.757ZM8.78022 13L10.5912 5.75801C10.6449 5.5414 10.7696 5.34903 10.9454 5.21163C11.1213 5.07423 11.3381 4.99972 11.5612 5.00001H12.4392C12.6624 4.99972 12.8792 5.07423 13.055 5.21163C13.2308 5.34903 13.3556 5.5414 13.4092 5.75801L15.2192 13H8.78022Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span class="ms-2 mb-0"> LTR </span>
                                </label>

                            </div>
                        </li>
                        <li data-setting="attribute">
                            <div class="dropdown-item d-flex align-items-center">
                                <input type="radio" value="rtl" class="btn-check" name="theme_scheme_direction"
                                    data-prop="dir" id="theme-scheme-direction-rtl">
                                <label class=" d-block" for="theme-scheme-direction-rtl">
                                    <svg width="20" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 4C10.08 4 8.5 5.58 8.5 7.5C8.5 8.43 8.88 9.28 9.5 9.91C7.97 10.91 7 12.62 7 14.5C7 17.53 9.47 20 12.5 20C14.26 20 16 19.54 17.5 18.66L16.5 16.93C15.28 17.63 13.9 18 12.5 18C10.56 18 9 16.45 9 14.5C8.99823 13.7298 9.2513 12.9806 9.71978 12.3692C10.1883 11.7578 10.8458 11.3186 11.59 11.12L16.8 9.72L16.28 7.79L11.83 9C11.08 8.9 10.5 8.28 10.5 7.5C10.5 6.66 11.16 6 12 6C12.26 6 12.5 6.07 12.75 6.2L13.75 4.47C13.22 4.16 12.61 4 12 4Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span class="ms-2 mb-0"> RTL </span>
                                </label>
                            </div>
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

                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" id="notification-drop" data-bs-toggle="dropdown">
                        <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                                fill="currentColor"></path>
                            <path opacity="0.4"
                                d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z"
                                fill="currentColor"></path>
                        </svg>
                        <span class="bg-danger dots"></span>
                    </a>
                    <ul class="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="notification-drop">
                        <li class="">
                            <div class="p-3 card-header d-flex justify-content-between bg-primary rounded-top">
                                <div class="header-title">
                                    <h5 class="mb-0 text-white">{{__('header.all_notifications')}}</h5>
                                </div>
                            </div>
                            <div class="p-0 card-body all-notification">
                                <a href="#" class="iq-sub-card">
                                    <div class="d-flex align-items-center">
                                        <img class="p-1 avatar-40 rounded-pill bg-primary-subtle"
                                            src="{{ asset('dashboard/images/shapes/01.png') }}" alt=""
                                            loading="lazy">
                                        <div class="ms-3 w-100">
                                            <h6 class="mb-0 ">{{__('header.emma_watson_bni')}}</h6>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <p class="mb-0">95 MB</p>
                                                <small class="float-end font-size-12">{{__('header.just_now')}}</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="iq-sub-card">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <img class="p-1 avatar-40 rounded-pill bg-primary-subtle"
                                                src="{{ asset('dashboard/images/shapes/02.png') }}" alt=""
                                                loading="lazy">
                                        </div>
                                        <div class="ms-3 w-100">
                                            <h6 class="mb-0 ">{{__('header.new_customer_is_join')}}</h6>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <p class="mb-0">{{__('header.cyst_bni')}}</p>
                                                <small class="float-end font-size-12">5 {{__('header.days_ago')}}</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="iq-sub-card">
                                    <div class="d-flex align-items-center">
                                        <img class="p-1 avatar-40 rounded-pill bg-primary-subtle"
                                            src="{{ asset('dashboard/images/shapes/03.png') }}" alt=""
                                            loading="lazy">
                                        <div class="ms-3 w-100">
                                            <h6 class="mb-0 ">{{__('header.two_customer_is_left')}}</h6>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <p class="mb-0">{{__('header.cyst_bni')}}</p>
                                                <small class="float-end font-size-12">2 {{__('header.days_ago')}}</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="iq-sub-card">
                                    <div class="d-flex align-items-center">
                                        <img class="p-1 avatar-40 rounded-pill bg-primary-subtle"
                                            src="{{ asset('dashboard/images/shapes/04.png') }}" alt=""
                                            loading="lazy">
                                        <div class="w-100 ms-3">
                                            <h6 class="mb-0 ">{{__('header.new_mail_from_fenny')}}</h6>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <p class="mb-0">{{__('header.cyst_bni')}}</p>
                                                <small class="float-end font-size-12">3 {{__('header.days_ago')}}</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="nav-item theme-scheme-dropdown dropdown">
                    <a href="#" class="nav-link" id="mode-drop" data-bs-toggle="dropdown">
                        <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                                fill="currentColor"></path>
                            <path
                                d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                                fill="currentColor"></path>
                            <path
                                d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                                fill="currentColor"></path>
                            <path
                                d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                                fill="currentColor"></path>
                            <path
                                d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                                fill="currentColor"></path>
                            <path
                                d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                                fill="currentColor"></path>
                            <path
                                d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                                fill="currentColor"></path>
                            <path
                                d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                                fill="currentColor"></path>
                            <path
                                d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <ul class="list-unstyled dropdown-menu dropdown-content">
                        <li data-setting="radio">
                            <div class="dropdown-item d-flex align-items-center">
                                <input type="radio" value="light" class="btn-check" name="theme_scheme"
                                    id="color-mode-light">
                                <label class="d-block" for="color-mode-light">
                                    <svg class="icon-24" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <span class="ms-3 mb-0">{{__('header.light')}}</span>
                                </label>
                            </div>
                        </li>
                        <li data-setting="radio">
                            <div class="dropdown-item d-flex align-items-center">
                                <input type="radio" value="dark" class="btn-check" name="theme_scheme"
                                    id="color-mode-dark">
                                <label class="d-block" for="color-mode-dark">
                                    <svg class="icon-24" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <span class="ms-3 mb-0">{{__('header.dark')}}</span>
                                </label>
                            </div>
                        </li>
                        <li data-setting="radio">
                            <div class="dropdown-item d-flex align-items-center">
                                <input type="radio" value="auto" class="btn-check" name="theme_scheme"
                                    id="color-mode-auto" checked>
                                <label class="d-block" for="color-mode-auto">
                                    <svg class="icon-24" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <span class="ms-3 mb-0">{{__('header.auto')}}</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="nav-item iq-full-screen d-none  d-xl-block border-end" id="fullscreen-item">
                    <a href="#" class="nav-link pe-3" id="btnFullscreen" data-bs-toggle="dropdown">
                        <span class="btn-inner">
                            <svg class="normal-screen icon-24" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5528 5.99656L13.8595 10.8961" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.8574 18.896L10.5507 13.9964" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <svg class="full-normal-screen icon-32 d-none" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7542 10.1932L18.1867 5.79319" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.4224 13.5726L5.82149 18.1398" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="py-0 nav-link d-flex align-items-center ps-3" href="#" id="profile-setting"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="{{ asset('dashboard/images/avatars/01.png') }}" alt="User-Profile"
                            class="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy">
                        <img src="{{ asset('dashboard/images/avatars/01.png') }}" alt="User-Profile"
                            class="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy">
                        <img src="{{ asset('dashboard/images/avatars/02.png') }}" alt="User-Profile"
                            class="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy">
                        <img src="{{ asset('dashboard/images/avatars/03.png') }}" alt="User-Profile"
                            class="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy">
                        <img src="{{ asset('dashboard/images/avatars/04.png') }}" alt="User-Profile"
                            class="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy">
                        <img src="{{ asset('dashboard/images/avatars/05.png') }}" alt="User-Profile"
                            class="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy">
                        <div class="caption ms-3 d-none d-md-block ">
                            <h6 class="mb-0 caption-title">{{__('header.austin_robertson')}}</h6>
                            <p class="mb-0 caption-sub-title">{{__('header.marketing_administrator')}}</p>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profile-setting">
                        <li><a class="dropdown-item" href="{{ route('dashboard.profile') }}">{{__('header.profile')}}</a></li>
                        <li><a class="dropdown-item" href="{{ route('dashboard.privacy') }}">{{__('header.privacy_setting')}}</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                {{__('header.logout')}}
                            </a>
                        </li>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                            style="display: none;"> @csrf </form>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>


