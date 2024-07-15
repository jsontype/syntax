@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => __('otthome.view_all')])

@section('content')
    <div class="section-padding">
        <div class="container-fluid">
            <div class="card-style-grid">
                <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/01.webp'),
                            'cardTitle' => __('otthome.giikre'),
                            'movieTime' => '2hr : 12mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/02.webp'),
                            'cardTitle' => __('frontendepisode_page.yoshi'),
                            'movieTime' => '1hr : 22mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/03.webp'),
                            'cardTitle' => __('frontendepisode_page.we_gare'),
                            'movieTime' => '1hr : 30mins',
                        ])

                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/04.webp'),
                            'cardTitle' => __('frontendepisode_page.avengers'),
                            'movieTime' => '1hr : 45mins',
                        ])

                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/05.webp'),
                            'cardTitle' => __('frontendepisode_page.chosfies'),
                            'movieTime' => '1hr : 30mins',
                        ])

                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/06.webp'),
                            'cardTitle' => __('frontendepisode_page.tf_oaler'),
                            'movieTime' => '1hr : 30mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/related/07.webp'),
                            'cardTitle' => __('frontendepisode_page.another_danger'),
                            'movieTime' => '1hr : 30mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/01.webp'),
                            'cardTitle' => __('otthome.crw'),
                            'movieTime' => '2hr : 12mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/02.webp'),
                            'cardTitle' => __('frontendepisode_page.batte_wiire'),
                            'movieTime' => '1hr : 22mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/03.webp'),
                            'cardTitle' => __('frontendepisode_page.goal'),
                            'movieTime' => '2hr : 30mins',
                        ])

                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/04.webp'),
                            'cardTitle' => __('frontendepisode_page.avengers'),
                            'movieTime' => '1hr : 30mins',
                        ])

                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/05.webp'),
                            'cardTitle' => __('frontendepisode_page.mexcan'),
                            'movieTime' => '1hr : 30mins',
                        ])

                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/06.webp'),
                            'cardTitle' => __('frontendepisode_page.oit_moleld'),
                            'movieTime' => '1hr : 30mins',
                        ])


                    </div>
                    <div class="col mb-4">
                        @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/07.webp'),
                            'cardTitle' => __('frontendepisode_page.another_danger'),
                            'movieTime' => '1hr : 30mins',
                        ])


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
