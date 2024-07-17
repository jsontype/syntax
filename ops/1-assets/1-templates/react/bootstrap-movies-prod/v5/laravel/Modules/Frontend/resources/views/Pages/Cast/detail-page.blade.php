@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isVideoJs' => true ,'bodyClass'=>"
custom-header-relative " ])

@section('content')
<div class="section-padding">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-5">
                <div class="cast-box position-relative">
                    <img src="{{ asset('frontend/images/cast/01.webp') }}" class="img-fluid object-cover w-100"
                        alt="person" loading="lazy">
                    <ul class="p-0 m-0 list-unstyled widget_social_media position-absolute w-100 text-center">
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
                <h5 class="mt-5 mb-4 text-white fw-500">{{__('frontenddetail_page.personal_details')}}</h5>
                <h6 class="font-size-18 text-white fw-500">{{__('frontenddetail_page.official_sites')}}</h6>
                <p><a href="https://iqonic.design/" target="_blank"
                        class="text-uppercase">{{__('frontenddetail_page.iqonic_design')}}</a></p>
                <h6 class="font-size-18 text-white fw-500">{{__('frontenddetail_page.born')}}</h6>
                <div class="seperator d-flex align-items-center flex-wrap mb-3">
                    <span>{{__('frontenddetail_page.october')}} 15, 1982</span>
                    <span class="circle"></span>
                    <span>{{__('frontenddetail_page.westminster_london')}} </span>
                </div>
                <h6 class="font-size-18 text-white fw-500">{{__('frontenddetail_page.height')}}</h6>
                <p>6′ 1¾″ (1.87 m)</p>
                <h6 class="font-size-18 text-white fw-500">{{__('frontenddetail_page.parents')}} &
                    {{__('frontenddetail_page.relatives')}}</h6>
                <p class="mb-0">{{__('frontenddetail_page.diana_patricia')}} <span
                        class="text-primary">{{__('frontenddetail_page.emma_hiddleston')}}</span>{{__('frontenddetail_page.sibling')}}
                </p>
            </div>
            <div class="col-lg-9 col-md-7 mt-5 mt-md-0">
                <h4 class="fw-500">{{__('frontenddetail_page.debbi_bossi')}}</h4>
                <div class="seperator d-flex align-items-center flex-wrap mb-3">
                    <span class="fw-semibold">{{__('frontenddetail_page.direction')}}</span>
                    <span class="circle"></span>
                    <span class="fw-semibold">{{__('frontenddetail_page.writer')}}</span>
                    <span class="circle"></span>
                    <span class="fw-semibold">{{__('frontenddetail_page.actor')}}</span>
                </div>
                <p>{{__('frontenddetail_page.many_actors')}}
                    <span class="text-primary">{{__('frontenddetail_page.storytelling')}} (2001)</span>,
                    {{__('frontenddetail_page.mackin')}}
                </p>
                <div class="awards-box border-bottom">
                    <h5>{{__('frontenddetail_page.awards')}}</h5>
                    <span class="text-white fw-500">56 {{__('frontenddetail_page.wins')}} & 83
                        {{__('frontenddetail_page.nominations')}}</span>
                </div>
                <div class="pb-md-5">
                    <h5 class="main-title text-capitalize mb-4">{{__('frontenddetail_page.most_view')}}</h5>
                    <div class="card-style-grid mb-5">
                        <div class="row row-cols-xl-5 row-cols-sm-2 row-cols-1">
                            <div class="col mb-4">
                                <div class="swiper-slide">
                                    @include('frontend::components.cards.card-style', [
                                    'cardImage' => asset('frontend/images/movies/popular/01.webp'),
                                    'cardTitle' => __('frontenddetail_page.crw'),
                                    'movieTime' => '2hr : 12mins',
                                    ])

                                </div>
                            </div>
                            <div class="col mb-4">

                                <div class="swiper-slide">
                                    @include('frontend::components.cards.card-style', [
                                    'cardImage' => asset('frontend/images/movies/popular/03.webp'),
                                    'cardTitle' => __('frontenddetail_page.goal'),
                                    'movieTime' => '2hr : 30mins',
                                    ])

                                </div>

                            </div>
                            <div class="col mb-4">
                                <div class="swiper-slide">
                                    @include('frontend::components.cards.card-style', [
                                    'cardImage' => asset('frontend/images/movies/popular/04.webp'),
                                    'cardTitle' => __('frontenddetail_page.dandacg'),
                                    'movieTime' => '1hr : 30mins',
                                    ])

                                </div>

                            </div>
                            <div class="col mb-4">
                                <div class="swiper-slide">
                                    @include('frontend::components.cards.card-style', [
                                    'cardImage' => asset('frontend/images/movies/popular/05.webp'),
                                    'cardTitle' => __('frontenddetail_page.mexcan'),
                                    'movieTime' => '1hr : 30mins',
                                    ])

                                </div>

                            </div>
                            <div class="col d-xl-block d-none"></div>
                        </div>
                    </div>
                </div>

                <div class="content-details trending-info">
                    <ul class="nav nav-underline d-flex nav nav-pills align-items-center text-center mb-5 gap-5"
                        role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active show" data-bs-toggle="pill" href="#all" role="tab"
                                aria-selected="true">
                                {{__('frontenddetail_page.all')}}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="pill" href="#movies" role="tab" aria-selected="false">
                                {{__('frontenddetail_page.movies')}}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="pill" href="#tvshows" role="tab" aria-selected="false">
                                {{__('frontenddetail_page.tv_shows')}}
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="all" class="tab-pane animated fadeInUp active show" role="tabpanel">
                            <div class="description-content">
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="w-15"><img
                                                        src="{{ asset('frontend/images/movies/latest/01.webp') }}"
                                                        alt="image-icon" class="img-fluid person-img object-cover"></td>
                                                <td class="w-20">
                                                    <div class="font-size-18 d-flex gap-4 text-white fw-500">
                                                        <span>1</span>
                                                        <span
                                                            class="text-capitalize">{{__('frontenddetail_page.mortal_norris')}}
                                                            <span
                                                                class="fw-normal text-body">{{__('frontenddetail_page.christina_ricci')}}</span></span>
                                                    </div>
                                                </td>
                                                <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                                            </tr>
                                            <tr>
                                                <td class="w-15"><img
                                                        src="{{ asset('frontend/images/movies/latest/02.webp') }}"
                                                        alt="image-icon" class="img-fluid person-img object-cover">
                                                </td>
                                                <td class="w-20">
                                                    <div class="font-size-18 d-flex gap-4 text-white fw-500">
                                                        <span>2</span>
                                                        <span
                                                            class="text-capitalize">{{__('frontenddetail_page.advetre')}}
                                                            <span
                                                                class="fw-normal text-body">{{__('frontenddetail_page.christina_ricci')}}</span></span>
                                                    </div>
                                                </td>
                                                <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                                            </tr>
                                            <tr>
                                                <td class="w-15"><img
                                                        src="{{ asset('frontend/images/movies/latest/03.webp') }}"
                                                        alt="image-icon" class="img-fluid person-img object-cover">
                                                </td>
                                                <td class="w-20">
                                                    <div class="font-size-18 d-flex gap-4 text-white fw-500">
                                                        <span>3</span>
                                                        <span
                                                            class="text-capitalize">{{__('frontenddetail_page.net_ailo')}}
                                                            <span
                                                                class="fw-normal text-body">{{__('frontenddetail_page.christina_ricci')}}</span></span>
                                                    </div>
                                                </td>
                                                <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                                            </tr>
                                            <tr>
                                                <td class="w-15"><img
                                                        src="{{ asset('frontend/images/movies/latest/04.webp') }}"
                                                        alt="image-icon" class="img-fluid person-img object-cover">
                                                </td>
                                                <td class="w-20">
                                                    <div class="font-size-18 d-flex gap-4 text-white fw-500">
                                                        <span>4</span>
                                                        <span
                                                            class="text-capitalize">{{__('frontenddetail_page.ariivaal')}}
                                                            <span
                                                                class="fw-normal text-body">{{__('frontenddetail_page.christina_ricci_3')}}</span></span>
                                                    </div>
                                                </td>
                                                <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="movies" class="tab-pane animated fadeInUp" role="tabpanel">
                            <div class="description-content">
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="w-15"><img
                                                        src="{{ asset('frontend/images/movies/latest/04.webp') }}"
                                                        alt="image-icon" class="img-fluid person-img object-cover">
                                                </td>
                                                <td class="w-20">
                                                    <div class="font-size-18 d-flex gap-4 text-white fw-500">
                                                        <span>4</span>
                                                        <span
                                                            class="text-capitalize">{{__('frontenddetail_page.ariivaal')}}
                                                            <span
                                                                class="fw-normal text-body">{{__('frontenddetail_page.christina_ricci_3')}}</span></span>
                                                    </div>
                                                </td>
                                                <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                                            </tr>
                                            <tr>
                                                <td class="w-15"><img
                                                        src="{{ asset('frontend/images/movies/latest/03.webp') }}"
                                                        alt="image-icon" class="img-fluid person-img object-cover">
                                                </td>
                                                <td class="w-20">
                                                    <div class="font-size-18 d-flex gap-4 text-white fw-500">
                                                        <span>3</span>
                                                        <span
                                                            class="text-capitalize">{{__('frontenddetail_page.net_ailo')}}
                                                            <span
                                                                class="fw-normal text-body">{{__('frontenddetail_page.christina_ricci')}}</span></span>
                                                    </div>
                                                </td>
                                                <td><span class="fw-500 font-size-18 text-white">2009</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div id="tvshows" class="tab-pane animated fadeInUp" role="tabpanel">
                            <div class="source-list-content table-responsive">
                                <table class="table custom-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                {{__('frontenddetail_page.links')}}
                                            </th>
                                            <th>
                                                {{__('frontenddetail_page.quality')}}
                                            </th>
                                            <th>
                                                {{__('frontenddetail_page.language')}}
                                            </th>
                                            <th>
                                                {{__('frontenddetail_page.player')}}
                                            </th>
                                            <th>
                                                {{__('frontenddetail_page.play_now')}}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="iq-button">
                                                    <a href="{{ route('frontend.movie_detail') }}"
                                                        class="btn text-uppercase position-relative">
                                                        <span class="button-text">
                                                            {{__('frontenddetail_page.play_now')}}</span>
                                                        <i class="fa-solid fa-play"></i>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                1080p
                                            </td>
                                            <td>
                                                {{__('frontenddetail_page.eng')}}
                                            </td>
                                            <td>
                                                {{__('frontenddetail_page.musicbee')}}
                                            </td>
                                            <td>
                                                2021-11-28
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="iq-button">
                                                    <a href="{{ route('frontend.movie_detail') }}"
                                                        class="btn text-uppercase position-relative">
                                                        <span class="button-text">
                                                            {{__('frontenddetail_page.play_now')}}</span>
                                                        <i class="fa-solid fa-play"></i>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                800p
                                            </td>
                                            <td>
                                                {{__('frontenddetail_page.eng')}}
                                            </td>
                                            <td>
                                                5{{__('frontenddetail_page.k_player')}}
                                            </td>
                                            <td>
                                                2021-11-25
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="iq-button">
                                                    <a href="{{ route('frontend.movie_detail') }}"
                                                        class="btn text-uppercase position-relative">
                                                        <span class="button-text">
                                                            {{__('frontenddetail_page.play_now')}}</span>
                                                        <i class="fa-solid fa-play"></i>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                720p
                                            </td>
                                            <td>
                                                {{__('frontenddetail_page.eng')}}
                                            </td>
                                            <td>
                                                {{__('frontenddetail_page.mediamonkey')}}
                                            </td>
                                            <td>
                                                2021-11-20
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection