@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => __('frontendhome.geners')])

@section('content')
    <section class="section-padding">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="main-title text-capitalize mb-0">{{__('otthome.movie_genres')}}</h4>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendepisode_page.action'),
                        'genersImage' => asset('frontend/images/genre/01.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendhome.adventure'),
                        'genersImage' => asset('frontend/images/genre/02.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' =>  __('otthome.animation'),
                        'genersImage' => asset('frontend/images/genre/03.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendhome.comedy'),
                        'genersImage' => asset('frontend/images/genre/04.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendepisode_page.drama'),
                        'genersImage' => asset('frontend/images/genre/05.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.family'),
                        'genersImage' => asset('frontend/images/genre/06.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.fantasy'),
                        'genersImage' => asset('frontend/images/genre/07.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
            </div>
            <div class="text-center">
                @include('frontend::components.widgets.custom-button', [
                    'buttonTitle' => __('otthome.load_more'),
                    'buttonUrl' => 'javascript:void(0)',
                ])

            </div>
        </div>
    </section>

    <section class="section-padding-bottom">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="main-title text-capitalize mb-0">{{__('otthome.tv_show_genres')}}</h4>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.4k_ultra'),
                        'genersImage' => asset('frontend/images/genre/01.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.brother'),
                        'genersImage' => asset('frontend/images/genre/02.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.brother_relationship'),
                        'genersImage' => asset('frontend/images/genre/03.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.kings'),
                        'genersImage' => asset('frontend/images/genre/04.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' =>  __('otthome.music'),
                        'genersImage' => asset('frontend/images/genre/05.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.mythology'),
                        'genersImage' => asset('frontend/images/genre/06.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.premieres'),
                        'genersImage' => asset('frontend/images/genre/07.webp'),
                        'genersUrl' => '',
                    ])

                </div>
            </div>
            <div class="text-center">
                @include('frontend::components.widgets.custom-button', [
                    'buttonTitle' => __('otthome.load_more'),
                    'buttonUrl' => 'javascript:void(0)',
                ])

            </div>
        </div>
    </section>


    <section class="section-padding-bottom">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="main-title text-capitalize mb-0">{{__('otthome.video_genres')}}</h4>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendepisode_page.action'),
                        'genersImage' => asset('frontend/images/genre/01.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendhome.adventure'),
                        'genersImage' => asset('frontend/images/genre/02.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.animation'),
                        'genersImage' => asset('frontend/images/genre/03.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('frontendhome.comedy'),
                        'genersImage' => asset('frontend/images/genre/04.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.crime'),
                        'genersImage' => asset('frontend/images/genre/05.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.drama'),
                        'genersImage' => asset('frontend/images/genre/06.webp'),
                        'genersUrl' => '',
                    ])

                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => __('otthome.family'),
                        'genersImage' => asset('frontend/images/genre/07.webp'),
                        'genersUrl' => '',
                    ])

                </div>
            </div>
            <div class="text-center">
                @include('frontend::components.widgets.custom-button', [
                    'buttonTitle' => __('otthome.load_more'),
                    'buttonUrl' => 'javascript:void(0)',
                ])

            </div>
        </div>
    </section>
@endsection
