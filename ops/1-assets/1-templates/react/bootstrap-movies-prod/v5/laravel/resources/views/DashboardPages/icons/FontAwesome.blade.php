@extends('layouts.app', ['module_title' => 'FontAwesome Icons'])

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h4 class="fw-bold">Icons</h4>
                    </div>
                    <div class="border-bottom mt-3"></div>
                    <div class="row">
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-solid fa-address-book',
                                'name' =>  __('fontawesome.address_book') ,
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-envelope-open',
                                'name' => __('fontawesome.envelope_open'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-id-card',
                                'name' =>  __('fontawesome.id_card'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-brands fa-telegram',
                                'name' =>  __('fontawesome.telegram'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-user-circle',
                                'name' => __('fontawesome.circle_user'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-area-chart',
                                'name' => __('fontawesome.chart_area'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-asterisk',
                                'name' =>  __('fontawesome.asterisk'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-car',
                                'name' => __('fontawesome.car'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-bars',
                                'name' => __('fontawesome.bars'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-battery-full',
                                'name' => __('fontawesome.battery_full'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-brands fa-bluetooth fa-xl me-2 lh-lg',
                                'name' => __('fontawesome.bluetooth'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-book',
                                'name' => __('fontawesome.book'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-bug',
                                'name' => __('fontawesome.bug'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-building',
                                'name' => __('fontawesome.building'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-calculator',
                                'name' =>  __('fontawesome.calculator'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-solid fa-calendar-days fa-xl me-2 lh-lg',
                                'name' => __('fontawesome.calendar_days'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-camera',
                                'name' => __('fontawesome.camera'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-commenting',
                                'name' => __('fontawesome.commenting'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-crop',
                                'name' => __('fontawesome.crop'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-download',
                                'name' => __('fontawesome.download'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-folder',
                                'name' => __('fontawesome.folder'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-gift',
                                'name' => __('fontawesome.gift'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-users',
                                'name' => __('fontawesome.users'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-hashtag',
                                'name' => __('fontawesome.hashtag'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-solid fa-house-chimney fa-xl me-2 lh-lg',
                                'name' =>  __('fontawesome.house_chimney'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-lock',
                                'name' =>  __('fontawesome.lock'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-graduation-cap',
                                'name' =>  __('fontawesome.graduation_cap'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-paper-plane',
                                'name' => __('fontawesome.paper_plane'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-star',
                                'name' => __('fontawesome.star'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-tag',
                                'name' => __('fontawesome.tag'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-trash',
                                'name' => __('fontawesome.trash'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-upload',
                                'name' => __('fontawesome.upload'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-university',
                                'name' => __('fontawesome.university'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-wifi',
                                'name' => __('fontawesome.wifi'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-thumbs-up',
                                'name' => __('fontawesome.thumbs_up'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-train',
                                'name' => __('fontawesome.train'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa fa-file',
                                'name' => __('fontawesome.file'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-brands fa-snapchat fa-xl me-2 lh-lg',
                                'name' => __('fontawesome.snapchat'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-brands fa-twitter',
                                'name' => __('fontawesome.twitter'),
                            ])
                        </div>
                        <div class="col-lg-3">
                            @include('components/widget/IconComponent', [
                                'className' => 'fa-brands fa-wordpress',
                                'name' => __('fontawesome.wordpress'),
                            ])
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
