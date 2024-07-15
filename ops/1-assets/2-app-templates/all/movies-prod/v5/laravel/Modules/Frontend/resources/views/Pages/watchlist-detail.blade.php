@extends('frontend::layouts.master', ['isSwiperSlider' => true, 'isVideoJs' => true, 'active' => 'playlist', 'bodyClass' => 'custom-header-relative'])

@section('content')
    <section class="section-padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <div class="playlist-main-banner position-relative">
                        <a href="{{ route('frontend.video_detail') }}"
                            class="position-absolute top-0 bottom-0 start-0 end-0 z-1"></a>
                        <div class="img-box">
                            <img src="{{ asset('frontend/images/movies/ott2.webp') }}" alt="movie-card"
                                class="img-fluid object-cover d-block" loading="lazy" />
                        </div>
                        <div class="img-detail z-3">
                            <a data-fslightbox="html5-video" href="{{ asset('frontend/images/video/trailer.mp4') }}"
                                class="video-open playbtn text-decoration-none" tabindex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px"
                                    viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                                    <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                    <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8"
                                        r="103.3"></circle>
                                </svg>
                                <span class="w-trailor text-uppercase font-size-14 ms-2 fw-500">{{__('frontenddetail_page.play_all')}}</span>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7">
                    <div class="playlist-listing mt-4 mt-md-0">
                        <h4 class="fw-500">{{__('frontenddetail_page.playlist_demo')}} 1</h4>
                        <div class="seperator d-flex align-items-center">
                            <span class="text-body fw-semibold font-size-12 text-capitalize">{{__('frontenddetail_page.public')}}</span>
                            <span class="circle circle-small"></span>
                            <span class="text-body fw-semibold font-size-12 text-capitalize">5 {{__('frontenddetail_page.videos')}}</span>
                        </div>
                        <ul class="list-inline mt-3 mt-md-5 p-0">
                            <li>

                                @include('frontend::components.cards.watchlist-card', [
                                    'isWatchlist2' => true,
                                    'duration' => '1 '. __('frontendplaylist.month_ago'),
                                    'cardImage' => asset('frontend/images/movies/playlist/01.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list1'),
                                    'category' => 'Public',
                                    'views' => '3 ' .__('frontendplaylist.views'),
                                ])
                            </li>
                            <li>

                                @include('frontend::components.cards.watchlist-card', [
                                    'isWatchlist2' => true,
                                    'duration' => '3 '.__('frontendplaylist.month_ago'),
                                    'cardImage' => asset('frontend/images/movies/playlist/02.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list2'),
                                    'category' => 'Public',
                                    'views' => '1 '.__('frontendplaylist.views'),
                                ])
                            </li>
                            <li>

                                @include('frontend::components.cards.watchlist-card', [
                                    'isWatchlist2' => true,
                                    'duration' => '2 '.__('frontendplaylist.month_ago'),
                                    'cardImage' => asset('frontend/images/movies/playlist/03.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list3'),
                                    'category' => 'Public',
                                    'views' => '10 '.__('frontendplaylist.views'),
                                ])
                            </li>
                            <li>

                                @include('frontend::components.cards.watchlist-card', [
                                    'isWatchlist2' => true,
                                    'duration' => '5 '.__('frontendplaylist.month_ago'),
                                    'cardImage' => asset('frontend/images/movies/playlist/04.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list4  '),
                                    'category' => 'Public',
                                    'views' => '30 '.__('frontendplaylist.views'),
                                ])
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
