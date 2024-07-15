@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'Tags'])

@section('content')
    <section class="section-padding">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="main-title text-capitalize mb-0">{{__('otthome.movie_tag')}}</h4>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('frontendhome.action')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.adventure')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.animation')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.comedy')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.drama')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.family')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.fantasy')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.history')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.horror')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.mystery')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.recommended')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.sci_fi')])

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
                <h4 class="main-title text-capitalize mb-0">{{__('otthome.tv_show_tag')}}</h4>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.4k_ultra')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.brother')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.brother_relationship')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.kings')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.music')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.mythology')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.premieres')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('otthome.vikings')])

                </div>
            </div>
            <div class="text-center">
                @include('frontend::components.widgets.custom-button', [
                    'buttonTitle' => __('otthome.load_more')    ,
                    'buttonUrl' => 'javascript:void(0)',
                ])

            </div>
        </div>
    </section>


    <section class="section-padding-bottom">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h4 class="main-title text-capitalize mb-0">{{__('otthome.video_tag')}}</h4>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' => __('frontendhome.action')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.adventure')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.animation')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.comedy')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.crime')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.drama')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.family')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.fantasy')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.horror')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.romance')])

                </div>
                <div class="col">
                    @include('frontend::components.cards.tags-card', ['title' =>  __('otthome.thriller')])

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
