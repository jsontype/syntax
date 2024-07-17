@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => __('frontenddetail_page.cast')])

@section('content')
    <section class="section-padding">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/01.webp'),
                        'id' => '01',
                        'castTime' => '8.4',
                        'castTitle' => __('frontenddata_js.tagname2'),
                        'castSubTitle' => __('frontenddata_js.production'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/02.webp'),
                        'id' => '02',
                        'castTime' => '8.4',
                        'castTitle' => __('frontenddata_js.tagname1'),
                        'castSubTitle' => __('frontenddata_js.production'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/03.webp'),
                        'id' => '03',
                        'castTime' => '9.9',
                        'castTitle' => __('frontenddata_js.tagname3'),
                        'castSubTitle' => __('frontenddata_js.art'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/04.webp'),
                        'id' => '04',
                        'castTime' => '8.5',
                        'castTitle' => __('frontenddata_js.tagname4'),
                        'castSubTitle' => __('frontenddata_js.writing'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/05.webp'),
                        'id' => '05',
                        'castTime' => '9.4',
                        'castTitle' => __('frontenddata_js.tagname5'),
                        'castSubTitle' => __('frontenddata_js.editing'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/06.webp'),
                        'id' => '06',
                        'castTime' => '9.4',
                        'castTitle' => __('frontenddata_js.tagname7'),
                        'castSubTitle' => __('frontenddata_js.camera'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">@include('frontend::components.cards.cast', [
                    'castImg' => asset('frontend/images/cast/02.webp'),
                    'id' => '02',
                    'castTime' => '8.4',
                    'castTitle' => __('frontenddata_js.tagname6'),
                    'castSubTitle' => __('frontenddata_js.sound'),
                    'castLink' => route('frontend.cast_details'),
                ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/01.webp'),
                        'id' => '08',
                        'castTime' => '9',
                        'castTitle' => __('frontenddata_js.tagname8'),
                        'castSubTitle' => __('frontenddata_js.production'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/04.webp'),
                        'id' => '09',
                        'castTime' => '8.1',
                        'castTitle' => __('frontenddata_js.tagname9'),
                        'castSubTitle' => __('frontenddata_js.production'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/05.webp'),
                        'id' => '10',
                        'castTime' => '9.3',
                        'castTitle' => __('frontenddata_js.tagname10'),
                        'castSubTitle' => __('frontenddata_js.writing'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/06.webp'),
                        'id' => '11',
                        'castTime' => '9.7',
                        'castTitle' => __('frontenddata_js.tagname32'),
                        'castSubTitle' => __('frontenddata_js.writing'),
                        'castLink' => route('frontend.cast_details'),
                    ])
                </div>
                <div class="col">
                    @include('frontend::components.cards.cast', [
                        'castImg' => asset('frontend/images/cast/01.webp'),
                        'id' => '12',
                        'castTime' => '9.4',
                        'castTitle' => __('frontenddata_js.tagname31'),
                        'castSubTitle' => __('frontenddata_js.writing'),
                        'castLink' => route('frontend.cast_details'),
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
