@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'View All'])

@section('content')
    <section class="section-padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 my-4">
                    <div class="d-flex align-items-center justify-content-between">
                        <h5 class="main-title text-capitalize mb-0">Favourite Personality</h5>
                    </div>
                </div>
            </div>
            <div class="card-style-grid">
            <div class="row row-cols-xl-5 row-cols-md-2 row-cols-1 personality-card">
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/01.webp'),
                        'id' => '01',
                        'castTime' => '8.4',
                        'castTitle' => 'John Abraham',
                        'castSubTitle' => 'actor',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/02.webp'),
                        'id' => '02',
                        'castTime' => '8.4',
                        'castTitle' => 'Leena Burton',
                        'castSubTitle' => 'actress',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/03.webp'),
                        'id' => '03',
                        'castTime' => '9.9',
                        'castTitle' => 'Lorina williams',
                        'castSubTitle' => 'actress',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/04.webp'),
                        'id' => '04',
                        'castTime' => '8.5',
                        'castTitle' => 'Davina decorous',
                        'castSubTitle' => 'actress',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/05.webp'),
                        'id' => '05',
                        'castTime' => '9.4',
                        'castTitle' => 'Thomas bailey',
                        'castSubTitle' => 'producer',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/06.webp'),
                        'id' => '06',
                        'castTime' => '9.4',
                        'castTitle' => 'Kelly Reilly',
                        'castSubTitle' => 'actress',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">@include('frontend::components.cards.cast', [
                    'castImg' => asset('frontend/images/cast/07.webp'),
                    'id' => '02',
                    'castTime' => '8.4',
                    'castTitle' => 'smith Jonas',
                    'castSubTitle' => 'director',
                    'castLink' => route('frontend.cast_details'),
                ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/08.webp'),
                        'id' => '08',
                        'castTime' => '9',
                        'castTitle' => 'angel louis',
                        'castSubTitle' => 'producer',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/09.webp'),
                        'id' => '09',
                        'castTime' => '8.1',
                        'castTitle' => 'Millar joseph',
                        'castSubTitle' => 'actor',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/10.webp'),
                        'id' => '10',
                        'castTime' => '9.3',
                        'castTitle' => 'mark wilson',
                        'castSubTitle' => 'actor',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/11.webp'),
                        'id' => '11',
                        'castTime' => '9.7',
                        'castTitle' => 'Kelley walker',
                        'castSubTitle' => 'director',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col mb-4">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/12.webp'),
                        'id' => '12',
                        'castTime' => '9.4',
                        'castTitle' => 'Amy Sedaris',
                        'castSubTitle' => 'actress',
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
            </div>
            </div>
            {{-- <div class="text-center">
                @include('frontend::components.widgets.custom-button', [
                    'buttonTitle' => 'load more',
                    'buttonUrl' => 'javascript:void(0)',
                ])
            </div> --}}
        </div>
    </section>
@endsection
