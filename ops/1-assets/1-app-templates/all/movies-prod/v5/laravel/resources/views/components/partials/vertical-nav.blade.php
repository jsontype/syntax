<!-- Sidebar Menu Start -->
<ul class="navbar-nav iq-main-menu" id="sidebar-menu">
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard')) }} {{ activeRoute(route('dashboard')) }}"
            aria-current="page" href="{{ route('dashboard') }}">
            <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
                data-bs-original-title="Dashboard">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.dashboard')}}</span>
        </a>
    </li>
    @can('view_rating')
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard.rating')) }}" aria-current="page"
            href="{{ route('dashboard.rating') }} ">
            <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Rating"
                data-bs-original-title="Rating">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95658 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361Z"
                        fill="currentColor"></path>
                    <path
                        d="M11.992 18.9171C11.7983 18.9231 11.6096 18.9752 11.4399 19.0682L7.00072 21.3871C6.45756 21.6464 5.80756 21.4452 5.50303 20.9258C5.39021 20.7136 5.34927 20.4704 5.38721 20.2322L6.27384 15.3032C6.33375 14.9449 6.21394 14.5806 5.95334 14.3284L2.32794 10.8185C1.8976 10.3971 1.88961 9.70556 2.31096 9.27421C2.31695 9.26821 2.32195 9.2632 2.32794 9.2582C2.49967 9.08806 2.72133 8.97597 2.95996 8.94094L7.96523 8.20433C8.32767 8.1583 8.64219 7.93211 8.80194 7.60384L10.9776 3.06312C11.1843 2.69682 11.5806 2.47864 12 2.50166C11.992 2.7989 11.992 18.715 11.992 18.9171Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.rating')}}</span>
        </a>
    </li>
    @endcan
    @can('view_comments')
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard.comment')) }}" aria-current="page"
            href="{{ route('dashboard.comment') }}">
            <i class="icon" data-bs-toggle="tooltip" title="Comment" data-bs-placement="right" aria-label="Comment"
                data-bs-original-title="Comment">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9805 13.2901C11.2705 13.2801 10.7005 12.7101 10.7005 12.0001C10.7005 11.3001 11.2805 10.7201 11.9805 10.7301C12.6905 10.7301 13.2605 11.3001 13.2605 12.0101C13.2605 12.7101 12.6905 13.2901 11.9805 13.2901ZM7.3701 13.2901C6.6701 13.2901 6.0901 12.7101 6.0901 12.0101C6.0901 11.3001 6.6601 10.7301 7.3701 10.7301C8.0801 10.7301 8.6501 11.3001 8.6501 12.0101C8.6501 12.7101 8.0801 13.2801 7.3701 13.2901ZM15.3103 12.0101C15.3103 12.7101 15.8803 13.2901 16.5903 13.2901C17.3003 13.2901 17.8703 12.7101 17.8703 12.0101C17.8703 11.3001 17.3003 10.7301 16.5903 10.7301C15.8803 10.7301 15.3103 11.3001 15.3103 12.0101Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.comments')}}</span>
        </a>
    </li>
    @endcan
    @can('view_users')
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard.user-list')) }}" href="{{ route('dashboard.user-list') }}">
            <i class="icon" data-bs-toggle="tooltip" title="User" data-bs-placement="right" aria-label="User"
                data-bs-original-title="User">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                        fill="currentColor"></path>
                    <path opacity="0.4"
                        d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.users')}}</span>
        </a>
    </li>
    @endcan
    @can('view_movies')
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard.movie-list')) }}" href="{{ route('dashboard.movie-list') }}">
            <i class="icon" data-bs-toggle="tooltip" title="Movie List" data-bs-placement="right"
                aria-label="Movie List" data-bs-original-title="Movie List">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
                        fill="currentColor"></path>
                    <path
                        d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.movie_list')}}</span>
        </a>
    </li>
    @endcan

    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#sidebar-Shows" role="button" aria-expanded="false"
            aria-controls="sidebar-user">
            <i class="icon" data-bs-toggle="tooltip" title="TV Shows" data-bs-placement="right" aria-label="TV Shows"
                data-bs-original-title="TV Shows">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M13.7505 9.70303V7.68318C13.354 7.68318 13.0251 7.36377 13.0251 6.97859V4.57356C13.0251 4.2532 12.764 4.00049 12.4352 4.00049H5.7911C3.70213 4.00049 2 5.653 2 7.68318V10.1155C2 10.3043 2.07737 10.4828 2.21277 10.6143C2.34816 10.7449 2.53191 10.8201 2.72534 10.8201C3.46035 10.8201 4.02128 11.3274 4.02128 11.9944C4.02128 12.6905 3.45068 13.2448 2.73501 13.2533C2.33849 13.2533 2 13.5257 2 13.9203V16.3262C2 18.3555 3.70213 19.9995 5.78143 19.9995H12.4352C12.764 19.9995 13.0251 19.745 13.0251 19.4265V17.3963C13.0251 17.0027 13.354 16.6917 13.7505 16.6917V14.8701C13.354 14.8701 13.0251 14.5497 13.0251 14.1655V10.4076C13.0251 10.0224 13.354 9.70303 13.7505 9.70303Z"
                        fill="currentColor"></path>
                    <path
                        d="M19.9787 11.9948C19.9787 12.69 20.559 13.2443 21.265 13.2537C21.6615 13.2537 22 13.5262 22 13.9113V16.3258C22 18.3559 20.3075 20 18.2186 20H15.0658C14.7466 20 14.4758 19.7454 14.4758 19.426V17.3967C14.4758 17.0022 14.1567 16.6921 13.7505 16.6921V14.8705C14.1567 14.8705 14.4758 14.5502 14.4758 14.1659V10.4081C14.4758 10.022 14.1567 9.70348 13.7505 9.70348V7.6827C14.1567 7.6827 14.4758 7.36328 14.4758 6.9781V4.57401C14.4758 4.25366 14.7466 4 15.0658 4H18.2186C20.3075 4 22 5.64406 22 7.6733V10.0407C22 10.2286 21.9226 10.4081 21.7872 10.5387C21.6518 10.6702 21.4681 10.7453 21.2747 10.7453C20.559 10.7453 19.9787 11.31 19.9787 11.9948Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.tv_shows')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="sidebar-Shows" data-bs-parent="#sidebar-menu">
            @can('view_shows')
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.show-list')) }}"
                    href="{{ route('dashboard.show-list') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Show Lists" data-bs-placement="right"
                        aria-label="Show Lists" data-bs-original-title="Show Lists">
                        <i class="fa-solid fa-film"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.show_list')}}</span>
                </a>
            </li>
            @endcan
            @can('view_seasons')
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.seasons')) }}"
                    href="{{ route('dashboard.seasons') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Seasons" data-bs-placement="right"
                        aria-label="Seasons" data-bs-original-title="Seasons">
                        <i class="fa-solid fa-film"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.seasons')}}</span>
                </a>
            </li>
            @endcan
            @can('view_episodes')
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.episodes')) }}"
                    href="{{ route('dashboard.episodes') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Episodes" data-bs-placement="right"
                        aria-label="Episodes" data-bs-original-title="Episodes">
                        <i class="fa-solid fa-film"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.episodes')}}</span>
                </a>
            </li>
            @endcan
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard.pricing')) }}" href="{{ route('dashboard.pricing') }}">
            <i class="icon" data-bs-toggle="tooltip" title="Pricing" data-bs-placement="right" aria-label="Pricing"
                data-bs-original-title="Pricing">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                        fill="currentColor"></path>
                    <path opacity="0.4"
                        d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                        fill="currentColor"></path>
                    <circle cx="18" cy="11.8999" r="1" fill="currentColor"></circle>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.pricing')}}</span>
        </a>
    </li>

    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#sidebar-auth" role="button" aria-expanded="false"
            aria-controls="sidebar-auth">
            <i class="icon" data-bs-toggle="tooltip" title="Authentication" data-bs-placement="right"
                aria-label="Authentication" data-bs-original-title="Authentication">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                        fill="currentColor"></path>
                    <path
                        d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.authentication')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="sidebar-auth" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <a class="nav-link" href="{{ route('dashboard.login') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Login" data-bs-placement="right" aria-label="Login"
                        data-bs-original-title="Login">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.login')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('dashboard.register') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Register" data-bs-placement="right"
                        aria-label="Register" data-bs-original-title="Register">
                        <i class="fa-regular fa-registered"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.register')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('dashboard.reset-password') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Recover Password" data-bs-placement="right"
                        aria-label="Recover Password" data-bs-original-title="Recover Password">
                        <i class="fa-solid fa-voicemail"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.recover_password')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('dashboard.verify-email') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Confirm Mail" data-bs-placement="right"
                        aria-label="Confirm Mail" data-bs-original-title="Confirm Mail">
                        <i class="fa-regular fa-file"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.confirm_mail')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ route('dashboard.TwoFactor') }}" href="{{ route('dashboard.TwoFactor') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Two Factor Authentication" data-bs-placement="right"
                        aria-label="Two Factor Authentication" data-bs-original-title="Two Factor Authentication">
                        <i class="fa-solid fa-fingerprint"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.two_factor_authentication')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ route('dashboard.AccountDeactivated') }}"
                    href="{{ route('dashboard.AccountDeactivated') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Account Deactivate" data-bs-placement="right"
                        aria-label="Account Deactivate" data-bs-original-title="Account Deactivate">
                        <i class="fa-solid fa-user-xmark"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.account_deactivated')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('dashboard.lock-screen') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Lock Screen" data-bs-placement="right"
                        aria-label="Lock Screen" data-bs-original-title="Lock Screen">
                        <i class="fa-solid fa-lock"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.lock_screen')}}</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#utilities-error" role="button" aria-expanded="false"
            aria-controls="utilities-error">
            <i class="icon" data-bs-toggle="tooltip" title="Utilities" data-bs-placement="right" aria-label="Utilities"
                data-bs-original-title="Utilities">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.utilities')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="utilities-error" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.error-404')) }}"
                    href="{{ route('dashboard.error-404') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Error 404" data-bs-placement="right"
                        aria-label="Error 404" data-bs-original-title="Error 404">
                        <i class="fa-solid fa-circle-exclamation"> </i>
                    </i>
                    <span class="item-name">{{__('sidebar.error_404')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.error-500')) }}"
                    href="{{ route('dashboard.error-500') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Error 500" data-bs-placement="right"
                        aria-label="Error 500" data-bs-original-title="Error 500">
                        <i class="fa-solid fa-circle-exclamation"> </i>
                    </i>
                    <span class="item-name">{{__('sidebar.error_500')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.maintenance')) }}"
                    href="{{ route('dashboard.maintenance') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Maintenance" data-bs-placement="right"
                        aria-label="Maintenance" data-bs-original-title="Maintenance">
                        <i class="fa-solid fa-box-archive"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.maintenance')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.coming-soon')) }}"
                    href="{{ route('dashboard.coming-soon') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Coming Soon" data-bs-placement="right"
                        aria-label="Coming Soon" data-bs-original-title="Coming Soon">
                        <i class="fa-solid fa-clock"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.coming_soon')}}</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link {{ activeRoute(route('dashboard.blank-page')) }} "
            href="{{ route('dashboard.blank-page') }}">
            <i class="icon" data-bs-toggle="tooltip" title="Blank Page" data-bs-placement="right"
                aria-label="Blank Page" data-bs-original-title="Blank Page">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.blank_page')}}</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#ui" role="button" aria-expanded="false"
            aria-controls="utilities-error">
            <i class="icon" data-bs-toggle="tooltip" title="UI Elements" data-bs-placement="right"
                aria-label="UI Elements" data-bs-original-title="UI Elements">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z"
                        fill="currentColor"></path>
                    <path
                        d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z"
                        fill="currentColor">
                    </path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.ui_elements')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="ui" data-parent="#sidebar-menu">
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.avatars')) }}"
                    href="{{ route('dashboard.avatars') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Avatars" data-bs-placement="right"
                        aria-label="Avatars" data-bs-original-title="Avatars">
                        <i class="fa-regular fa-user"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.avatars')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.alerts')) }}" href="{{ route('dashboard.alerts') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Alerts" data-bs-placement="right"
                        aria-label="Alerts" data-bs-original-title="Alerts">
                        <i class="fa-regular fa-bell"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.alerts')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.badge')) }}" href="{{ route('dashboard.badge') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Badges" data-bs-placement="right"
                        aria-label="Badges" data-bs-original-title="Badges">
                        <i class="fa-brands fa-atlassian"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.badge')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.breadcrumb')) }}"
                    href="{{ route('dashboard.breadcrumb') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Breadcrumb" data-bs-placement="right"
                        aria-label="Breadcrumb" data-bs-original-title="Breadcrumb">
                        <i class="fa-solid fa-bars"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.bread_crumb')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.buttons')) }}"
                    href="{{ route('dashboard.buttons') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Buttons" data-bs-placement="right"
                        aria-label="Buttons" data-bs-original-title="Buttons">
                        <i class="fa-solid fa-ticket-simple"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.buttons')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.buttonsgroup')) }}"
                    href="{{ route('dashboard.buttonsgroup') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Button Group" data-bs-placement="right"
                        aria-label="Button Group" data-bs-original-title="Button Group">
                        <i class="fa-solid fa-server"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.buttons_group')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.offcanvas')) }}"
                    href="{{ route('dashboard.offcanvas') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Offcanvas" data-bs-placement="right"
                        aria-label="Offcanvas" data-bs-original-title="Offcanvas">
                        <i class="fa-solid fa-expand"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.offcanvas')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.colors')) }}" href="{{ route('dashboard.colors') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Colors" data-bs-placement="right"
                        aria-label="Colors" data-bs-original-title="Colors">
                        <i class="fa-solid fa-palette"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.colors')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.cards')) }}" href="{{ route('dashboard.cards') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Cards" data-bs-placement="right" aria-label="Cards"
                        data-bs-original-title="Cards">
                        <i class="fa-regular fa-address-card"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.cards')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.carousel')) }}"
                    href="{{ route('dashboard.carousel') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Carousel" data-bs-placement="right"
                        aria-label="Carousel" data-bs-original-title="Carousel">
                        <i class="fa-solid fa-sliders"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.carousel')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.grid')) }}" href="{{ route('dashboard.grid') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Grid" data-bs-placement="right" aria-label="Grid"
                        data-bs-original-title="Grid">
                        <i class="fa-solid fa-table-cells-large"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.grid')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.images')) }}" href="{{ route('dashboard.images') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Images" data-bs-placement="right"
                        aria-label="Images" data-bs-original-title="Images">
                        <i class="fa-solid fa-image"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.images')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.listgroup')) }}"
                    href="{{ route('dashboard.listgroup') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="List Group" data-bs-placement="right"
                        aria-label="List Group" data-bs-original-title="List Group">
                        <i class="fa-solid fa-list-check"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.list_group')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.modal')) }}" href="{{ route('dashboard.modal') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Modal" data-bs-placement="right" aria-label="Modal"
                        data-bs-original-title="Modal">
                        <i class="fa-solid fa-table-columns"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.modal')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.notifications')) }}"
                    href="{{ route('dashboard.notifications') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Notifications" data-bs-placement="right"
                        aria-label="Notifications" data-bs-original-title="Notifications">
                        <i class="fa-solid fa-bell"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.notifications')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.pagination')) }}"
                    href="{{ route('dashboard.pagination') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Pagination" data-bs-placement="right"
                        aria-label="Pagination" data-bs-original-title="Pagination">
                        <i class="fa-solid fa-ellipsis"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.pagination')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.popovers')) }}"
                    href="{{ route('dashboard.popovers') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Popovers" data-bs-placement="right"
                        aria-label="Popovers" data-bs-original-title="Popovers">
                        <i class="fa-solid fa-eraser"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.popovers')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.typography')) }}"
                    href="{{ route('dashboard.typography') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Typography" data-bs-placement="right"
                        aria-label="Typography" data-bs-original-title="Typography">
                        <i class="fa-solid fa-keyboard"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.typography')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.tabs')) }}" href="{{ route('dashboard.tabs') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Tabs" data-bs-placement="right" aria-label="Tabs"
                        data-bs-original-title="Tabs">
                        <i class="fa-solid fa-layer-group"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.tabs')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.tooltips')) }}"
                    href="{{ route('dashboard.tooltips') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Tooltips" data-bs-placement="right"
                        aria-label="Tooltips" data-bs-original-title="Tooltips">
                        <i class="fa-solid fa-magnet fas-rotate-180"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.tooltips')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.VideoView')) }}"
                    href="{{ route('dashboard.VideoView') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Video" data-bs-placement="right" aria-label="Video"
                        data-bs-original-title="Video">
                        <i class="fa-solid fa-video"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.video')}}</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#sidebar-widget" role="button" aria-expanded="false"
            aria-controls="sidebar-widget">
            <i class="icon" data-bs-toggle="tooltip" title="Widgets" data-bs-placement="right" aria-label="Widgets"
                data-bs-original-title="Widgets">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z"
                        fill="currentColor"></path>
                    <path
                        d="M15.4303 11.5887L14.2513 12.7367L14.5303 14.3597C14.5783 14.6407 14.4653 14.9177 14.2343 15.0837C14.0053 15.2517 13.7063 15.2727 13.4543 15.1387L11.9993 14.3737L10.5413 15.1397C10.4333 15.1967 10.3153 15.2267 10.1983 15.2267C10.0453 15.2267 9.89434 15.1787 9.76434 15.0847C9.53434 14.9177 9.42134 14.6407 9.46934 14.3597L9.74734 12.7367L8.56834 11.5887C8.36434 11.3907 8.29334 11.0997 8.38134 10.8287C8.47034 10.5587 8.70034 10.3667 8.98134 10.3267L10.6073 10.0897L11.3363 8.61268C11.4633 8.35868 11.7173 8.20068 11.9993 8.20068H12.0013C12.2843 8.20168 12.5383 8.35968 12.6633 8.61368L13.3923 10.0897L15.0213 10.3277C15.2993 10.3667 15.5293 10.5587 15.6173 10.8287C15.7063 11.0997 15.6353 11.3907 15.4303 11.5887Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.widgets')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="sidebar-widget" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.widget-basic')) }}"
                    href="{{ route('dashboard.widget-basic') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Widget Basic" data-bs-placement="right"
                        aria-label="Widget Basic" data-bs-original-title="Widget Basic">
                        <i class="fa-solid fa-box"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.widgets_basic')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.widget-chart')) }}"
                    href="{{ route('dashboard.widget-chart') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Widget Chart" data-bs-placement="right"
                        aria-label="Widget Chart" data-bs-original-title="Widget Chart">
                        <i class="fa-solid fa-box"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.widgets_chart')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.widget-card')) }}"
                    href="{{ route('dashboard.widget-card') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Widget Card" data-bs-placement="right"
                        aria-label="Widget Card" data-bs-original-title="Widget Card">
                        <i class="fa-solid fa-box"></i>
                    </i>
                    </i>
                    <span class="item-name">{{__('sidebar.widgets_card')}}</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#sidebar-form" role="button" aria-expanded="false"
            aria-controls="sidebar-form">
            <i class="icon" data-bs-toggle="tooltip" title="Form" data-bs-placement="right" aria-label="Form"
                data-bs-original-title="Form">
                <svg width="20" class="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.form')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="sidebar-form" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.elements')) }}"
                    href="{{ route('dashboard.elements') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Elements" data-bs-placement="right"
                        aria-label="Elements" data-bs-original-title="Elements">
                        <i class="fa-solid fa-book"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.elements')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.wizard')) }}" href="{{ route('dashboard.wizard') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Wizard" data-bs-placement="right"
                        aria-label="Wizard" data-bs-original-title="Wizard">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.wizard')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.validation')) }}"
                    href="{{ route('dashboard.validation') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Validation" data-bs-placement="right"
                        aria-label="Validation" data-bs-original-title="Validation">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.validation')}}</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#sidebar-table" role="button" aria-expanded="false"
            aria-controls="sidebar-table">
            <i class="icon" data-bs-toggle="tooltip" title="Table" data-bs-placement="right" aria-label="Table"
                data-bs-original-title="Table">
                <svg class="icon-20" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none">
                    <path d="M2 5C2 4.44772 2.44772 4 3 4H8.66667H21C21.5523 4 22 4.44772 22 5V8H15.3333H8.66667H2V5Z"
                        fill="currentColor" stroke="currentColor"></path>
                    <path
                        d="M6 8H2V11M6 8V20M6 8H14M6 20H3C2.44772 20 2 19.5523 2 19V11M6 20H14M14 8H22V11M14 8V20M14 20H21C21.5523 20 22 19.5523 22 19V11M2 11H22M2 14H22M2 17H22M10 8V20M18 8V20"
                        stroke="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.table')}}</span>
            <i class="right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </i>
        </a>
        <ul class="sub-nav collapse" id="sidebar-table" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.bootstrap')) }}"
                    href="{{ route('dashboard.bootstrap') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Bootstrap Table" data-bs-placement="right"
                        aria-label="Bootstrap Table" data-bs-original-title="Bootstrap Table">
                        <i class="fa-brands fa-bootstrap"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.bootstrap_table')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.table-data')) }}"
                    href="{{ route('dashboard.table-data') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Datatable" data-bs-placement="right"
                        aria-label="Datatable" data-bs-original-title="Datatable">
                        <i class="fa-solid fa-table-list"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.data_table')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.border')) }}" href="{{ route('dashboard.border') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Bordered Table" data-bs-placement="right"
                        aria-label="Bordered Table" data-bs-original-title="Bordered Table">
                        <i class="fa-solid fa-table-list"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.bordered_table')}}</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeRoute(route('dashboard.fixed-table')) }}"
                    href="{{ route('dashboard.fixed-table') }}">
                    <i class="icon" data-bs-toggle="tooltip" title="Fancy Table" data-bs-placement="right"
                        aria-label="Fancy Tabl" data-bs-original-title="Fancy Tabl">
                        <i class="fa-solid fa-table-cells"></i>
                    </i>
                    <span class="item-name">{{__('sidebar.fixed_table')}}</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="nav-item ">
        <a class="nav-link {{ activeRoute(route('dashboard.font-awesome')) }}"
            href="{{ route('dashboard.font-awesome') }}">
            <i class="icon" data-bs-toggle="tooltip" title="Icons" data-bs-placement="right" aria-label="Icons"
                data-bs-original-title="Icons">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                        d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                        fill="currentColor"></path>
                    <path
                        d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                        fill="currentColor"></path>
                    <path opacity="0.4"
                        d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                        fill="currentColor"></path>
                </svg>
            </i>
            <span class="item-name">{{__('sidebar.fontawesome')}}</span>
        </a>
    </li>
    <li class="nav-item mb-4">
        <a class="nav-link {{ activeRoute(route('backend.permission-role')) }}"
            href="{{ route('backend.permission-role') }}">
            <i class="icon fa-solid fa-user-shield" data-bs-toggle="tooltip" data-bs-placement="right"
                aria-label="Access Control" data-bs-original-title="Access Control"></i>
            <span class="item-name">{{__('sidebar.access_control')}}</span>
        </a>
    </li>
</ul>

<!-- Sidebar Menu End -->