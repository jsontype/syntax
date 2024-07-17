@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'View All '])

@section('content')
    <section class="section-padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 my-4">
                    <div class="d-flex align-items-center justify-content-between">
                        <h5 class="main-title text-capitalize mb-0">geners</h5>
                    </div>
                </div>
            </div>
            <div class="row row-cols-xl-5 row-cols-md-2 row-cols-1 geners-card geners-style-grid">
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'Action',
                        'genersImage' => asset('frontend/images/genre/01.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'action',
                        'genersImage' => asset('frontend/images/genre/02.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'action',
                        'genersImage' => asset('frontend/images/genre/03.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'action',
                        'genersImage' => asset('frontend/images/genre/04.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'action',
                        'genersImage' => asset('frontend/images/genre/05.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'action',
                        'genersImage' => asset('frontend/images/genre/06.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
                <div class="col slide-items">
                    @include('frontend::components.cards.genres-card', [
                        'genersTitle' => 'action',
                        'genersImage' => asset('frontend/images/genre/07.webp'),
                        'genersUrl' => 'view-all',
                    ])

                </div>
            </div>
        </div>
    </section>
@endsection
