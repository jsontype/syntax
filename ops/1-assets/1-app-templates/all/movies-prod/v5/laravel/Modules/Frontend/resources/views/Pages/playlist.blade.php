@extends('frontend::layouts.master', ['bodyClass' => 'custom-header-relative'])

@section('content')
<section class="section-padding-bottom">
    <div class="profile-box">
        <div class="container-fluid">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
                <div class="d-flex align-items-center gap-3">
                    <div class="account-logo d-flex align-items-center position-relative">
                        <img src="{{ asset('frontend/images/pages/profile.webp') }}"
                            class="img-fluid object-cover rounded-3" alt="profile" loading="lazy" />
                        <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                    <div>
                        <h6 class="font-size-18 text-capitalize text-white fw-500">{{__('frontendplaylist.admin')}}</h6>
                        <span class="font-size-14 text-white fw-500">admin@admin.com</span>
                    </div>
                </div>
                @include('frontend::components.widgets.custom-button', [
                'buttonTitle' => __('frontendplaylist.subscription'),
                'buttonUrl' => 'pricing-page',
                ])
            </div>
        </div>
    </div>
    <div class="tabs">
        <div class="container-fluid">
            <div class="content-details iq-custom-tab-style-two">
                <ul class="d-flex justify-content-center nav nav-pills tab-header" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active show" data-bs-toggle="pill" href="#playlist" role="tab"
                            aria-selected="true">{{__('frontenddetail_page.playlist')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="pill" href="#watchlist" role="tab"
                            aria-selected="false">{{__('frontenddetail_page.watchlist')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="pill" href="#favorites" role="tab"
                            aria-selected="false">{{__('frontendheader.favorites')}}</a>
                    </li>
                </ul>
                <div class="tab-content px-0">
                    <div id="playlist" class="tab-pane animated fadeInUp active show" role="tabpanel">
                        <div class="overflow-hidden">
                            <div class="d-flex align-items-center justify-content-between my-4">
                                <h5 class="main-title text-capitalize mb-0">{{__('frontendplaylist.my_playlist')}}</h5>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/01.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list1'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '3 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/02.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list2'),
                                    'category' => __('frontendplaylist.private'),
                                    'views' => '1 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/03.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list3'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '10 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/04.webp'),
                                    'cardTitle' =>__('frontendplaylist.play_list4'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '30 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/05.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list5'),
                                    'category' => __('frontendplaylist.private'),
                                    'views' => '2 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/06.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list6'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '10 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/07.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list7'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '50 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                            </div>
                            <div class="text-center">
                                <div class="iq-button">
                                    <button type="button" class="btn text-uppercase position-relativ"
                                        data-bs-toggle="modal" data-bs-target="#addNewPlaylist">
                                        <span class="button-text">Create Playlist</span>
                                        <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="watchlist" class="tab-pane animated fadeInUp" role="tabpanel">
                        <div class="overflow-hidden">
                            <div class="d-flex align-items-center justify-content-between my-4">
                                <h5 class="main-title text-capitalize mb-0">{{__('frontendplaylist.my_watchlist')}}</h5>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/01.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list1'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '3 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/02.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list2'),
                                    'category' => __('frontendplaylist.private'),
                                    'views' => '1 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/03.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list3'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '10 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/04.webp'),
                                    'cardTitle' =>__('frontendplaylist.play_list4'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '30 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                            </div>
                            <div class="text-center">
                                <div class="iq-button">
                                    <button type="button" class="btn text-uppercase position-relativ"
                                        data-bs-toggle="modal" data-bs-target="#addNewPlaylist">
                                        <span class="button-text">Create Watchlist</span>
                                        <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="favorites" class="tab-pane animated fadeInUp" role="tabpanel">
                        <div class="overflow-hidden">
                            <div class="d-flex align-items-center justify-content-between my-4">
                                <h5 class="main-title text-capitalize mb-0">{{__('frontendplaylist.my_favourite')}}</h5>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/01.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list1'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '3 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/02.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list2'),
                                    'category' => __('frontendplaylist.private'),
                                    'views' => '1 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/03.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list3'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '10 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/04.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list4'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '30 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/05.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list5'),
                                    'category' => __('frontendplaylist.private'),
                                    'views' => '2 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/06.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list6'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '10 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                                <div class="col mb-4">
                                    @include('frontend::components.cards.watchlist-card', [
                                    'cardImage' => asset('frontend/images/movies/playlist/07.webp'),
                                    'cardTitle' => __('frontendplaylist.play_list7'),
                                    'category' => __('frontendplaylist.public'),
                                    'views' => '50 '.__('frontendplaylist.views'),
                                    ])

                                </div>
                            </div>
                            <div class="text-center">
                                <div class="iq-button">
                                    <button type="button" class="btn text-uppercase position-relativ"
                                        data-bs-toggle="modal" data-bs-target="#addNewPlaylist">
                                        <span class="button-text">Create Playlist</span>
                                        <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="modal fade" id="addNewPlaylist" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content border-0">
            <div class="modal-header border-0">
                <div>
                    <h1 class="modal-title text-capitalize fs-5 fw-500">Create new Playlist</h1>
                    <p class="mb-0">Please fill in all information below to create new playlist.</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label class="text-white fw-500 mb-2">Name *</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="text-white fw-500 mb-2">Description</label>
                        <textarea class="form-control" cols="5"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="text-white fw-500 mb-2">Privacy</label>
                        <select class="form-control">
                            <option>Public</option>
                            <option>Private</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="text-white fw-500">Playlist Thumbnail</label>
                        <small class="d-block my-2">Support *.webp, *webp, *.gif, *.webp. Maximun upload file size:
                            5mb.</small>
                        <input type="file" class="form-control">
                    </div>
                    <div class="form-group d-flex align-items-center gap-3">
                        <button class="btn btn-sm btn-light text-uppercase fw-medium">cancel</button>
                        <button class="btn btn-sm btn-primary text-uppercase fw-medium">save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection