@extends('layouts.app', ['isBanner' => false,'isTour'=>true])

@section('title')
{{ 'Dashboard' }}
@endsection


@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-lg-8">
            <div class="row">
                <div class="col-sm-6 col-lg-6 col-xl-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="iq-cart-text text-capitalize">
                                    <p class="mb-0">{{ __('dashboard.view') }}</p>
                                </div>
                                <div class="icon iq-icon-box-top rounded-circle bg-primary">
                                    <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <h4 class="mb-0">+24K</h4>
                                <p class="mb-0 text-primary">
                                    <span><i class="fa fa-caret-down me-2"></i></span>35%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6 col-xl-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="iq-cart-text text-capitalize">
                                    <p class="mb-0 font-size-14">{{ __('dashboard.app') }}</p>
                                </div>
                                <div class="icon iq-icon-box-top rounded-circle bg-warning">
                                    <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <h4 class="mb-0">+55K</h4>
                                <p class="mb-0 text-warning">
                                    <span><i class="fa fa-caret-up me-2"></i></span>50%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6 col-xl-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="iq-cart-text text-capitalize">
                                    <p class="mb-0 font-size-14">{{ __('dashboard.download') }}</p>
                                </div>
                                <div class="icon iq-icon-box-top rounded-circle bg-info">
                                    <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 17.108 6.891 21.25 12 21.25C17.108 21.25 21.25 17.108 21.25 12C21.25 6.892 17.108 2.75 12 2.75C6.891 2.75 2.75 6.892 2.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M8.52832 10.5576L11.9993 14.0436L15.4703 10.5576" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <h4 class="mb-0">+1M</h4>
                                <p class="mb-0 text-info">
                                    <span><i class="fa fa-caret-up me-2"></i></span>80%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6 col-xl-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="iq-cart-text ">
                                    <p class="mb-0 font-size-14">{{ __('dashboard.visitors') }}</p>
                                </div>
                                <div class="icon iq-icon-box-top rounded-circle bg-success">
                                    <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="currentColor" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <h4 class="mb-0">+2M</h4>
                                <p class="mb-0 text-success">
                                    <span><i class="fa fa-caret-up me-2"></i></span>80%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center top-rated-slider">
                    <div class="iq-header-title ">
                        <h4 class="card-title">{{ __('dashboard.top-item') }}</h4>
                    </div>
                    <div class="top-swiper-arrow d-flex align-items-center">
                        <div class="swiper-button-prev me-2"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
                <div class="card-body ">
                    <div class="swiper pt-2 pt-md-4 pt-lg-4 overflow-hidden" data-swiper="top-slider">
                        <ul class="swiper-wrapper list-inline p-0 m-0">
                            <li class="iq-rated-box swiper-slide">
                                @include('DashboardPages/partials/TopRatedComponent', [
                                'topimage' => 'dashboard/images/dashboard/01.jpg',
                                'toptitle' => 'The Last Breath',
                                'toptext' => 'T.V Show',
                                'topview' => '134',
                                'topdownload' => '30k',
                                ])
                            </li>
                            <li class="iq-rated-box swiper-slide">
                                @include('DashboardPages/partials/TopRatedComponent', [
                                'topimage' => 'dashboard/images/dashboard/02.jpg',
                                'toptitle' => 'Last Night',
                                'toptext' => 'Movie',
                                'topview' => '133',
                                'topdownload' => '20k',
                                ])
                            </li>
                            <li class="iq-rated-box swiper-slide">
                                @include('DashboardPages/partials/TopRatedComponent', [
                                'topimage' => 'dashboard/images/dashboard/03.jpg',
                                'toptitle' => 'Jeon Woochie',
                                'toptext' => 'Movie',
                                'topview' => '222',
                                'topdownload' => '40k',
                                ])
                            </li>
                            <li class="iq-rated-box swiper-slide">
                                @include('DashboardPages/partials/TopRatedComponent', [
                                'topimage' => 'dashboard/images/dashboard/04.jpg',
                                'toptitle' => 'Dino Land',
                                'toptext' => 'T.V Show',
                                'topview' => '122',
                                'topdownload' => '25k',
                                ])
                            </li>
                            <li class="iq-rated-box swiper-slide">
                                @include('DashboardPages/partials/TopRatedComponent', [
                                'topimage' => 'dashboard/images/dashboard/05.jpg',
                                'toptitle' => 'Last Race',
                                'toptext' => 'T. V Show',
                                'topview' => '144',
                                'topdownload' => '35k',
                                ])
                            </li>
                            <li class="iq-rated-box swiper-slide">
                                @include('DashboardPages/partials/TopRatedComponent', [
                                'topimage' => 'dashboard/images/dashboard/06.jpg',
                                'toptitle' => 'Open Dead Show',
                                'toptext' => 'T. V Show',
                                'topview' => '134',
                                'topdownload' => '30k',
                                ])
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card card card-block card-stretch card-height">
                <div class="card-header">
                    <div class="iq-header-title">
                        <h4 class="card-title text-center">{{ __('dashboard.product') }}</h4>
                    </div>
                </div>
                <div class="card-body pb-0">
                    <div id="view-chart-01">
                    </div>
                    <div class="row mt-1">
                        <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                            <div class="card border-0">
                                <div class="card-body bg-body p-3">
                                    <div class="d-flex align-items-center">
                                        <div class="iq-user-box bg-primary"></div>
                                        <div class=" ">
                                            <p class="mb-0 font-size-14 line-height">{{ __('dashboard.new') }}<br>
                                                {{ __('dashboard.customer') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                            <div class="card border-0">
                                <div class="card-body bg-body p-3">
                                    <div class="d-flex align-items-center">
                                        <div class="iq-user-box bg-warning"></div>
                                        <div class=" ">
                                            <p class="mb-0 font-size-14 line-height">{{ __('dashboard.existing') }}
                                                <br>
                                                {{ __('dashboard.subscribers') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                            <div class="card border-0">
                                <div class="card-body bg-body p-3">
                                    <div class="d-flex align-items-center">
                                        <div class="iq-user-box bg-info"></div>
                                        <div class=" ">
                                            <p class="mb-0 font-size-14 line-height">{{ __('dashboard.daily') }}<br>
                                                {{ __('dashboard.visitor') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                            <div class="card border-0">
                                <div class="card-body bg-body p-3">
                                    <div class="d-flex align-items-center">
                                        <div class="iq-user-box bg-danger"></div>
                                        <div class=" ">
                                            <p class="mb-0 font-size-14 line-height">{{ __('dashboard.extend') }} <br>
                                                {{ __('dashboard.subs') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12  col-lg-4">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">{{ __('dashboard.categories') }}</h4>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div id="view-chart-03"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">{{ __('dashboard.Top_Category') }}</h4>
                    </div>
                    <div class="card-header-toolbar d-flex align-items-center seasons">
                        <div class="iq-custom-select d-inline-block sea-epi s-margin">
                            <select name="cars" class="form-control season-select">
                                <option value="season1">{{ __('dashboard.today') }}</option>
                                <option value="season2">{{ __('dashboard.This_Week') }}</option>
                                <option value="season2">{{ __('dashboard.This_Month') }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-body row align-items-center">
                    <div class="col-lg-7">
                        <div class="row list-unstyled mb-0 pb-0">
                            <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                                <div class="iq-progress-bar progress-bar-vertical iq-bg-primary">
                                    <span class="bg-primary" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 40%;"></span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="iq-icon-box-view rounded me-3 text-primary">
                                        <i class="fa-solid fa-film font-size-32"></i>
                                    </div>
                                    <div class=" ">
                                        <h6 class="mb-0 font-size-14 line-height">{{ __('dashboard.actions') }}</h6>
                                        <small class="text-primary mb-0">+34%</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                                <div class="iq-progress-bar progress-bar-vertical iq-bg-secondary">
                                    <span class="bg-secondary" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 70%;"></span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="iq-icon-box-view rounded me-3 text-secondary">
                                        <i class="fa-solid fa-masks-theater font-size-32"></i>
                                    </div>
                                    <div class=" ">
                                        <p class="mb-0 font-size-14 line-height">{{ __('dashboard.comedy') }}</p>
                                        <small class="text-secondary mb-0">+44%</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                                <div class="iq-progress-bar progress-bar-vertical iq-bg-info">
                                    <span class="bg-info" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 40%;"></span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="iq-icon-box-view rounded me-3 text-info">
                                        <i class="fa-solid fa-skull-crossbones font-size-32"></i>
                                    </div>
                                    <div class=" ">
                                        <p class="mb-0 font-size-14 line-height">{{ __('dashboard.horror') }}</p>
                                        <small class="text-info mb-0">+56%</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                                <div class="iq-progress-bar progress-bar-vertical iq-bg-warning">
                                    <span class="bg-warning" data-percent="100" style="transition: height 2s ease 0s; width: 40%; height: 40%;"></span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="iq-icon-box-view rounded me-3 text-warning">
                                        <i class="fa-solid fa-masks-theater font-size-32"></i>
                                    </div>
                                    <div class=" ">
                                        <p class="mb-0 font-size-14 line-height">{{ __('dashboard.drama') }}</p>
                                        <small class="text-warning mb-0">+65%</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 mb-lg-0 mb-3">
                                <div class="iq-progress-bar progress-bar-vertical iq-bg-success">
                                    <span class="bg-success" data-percent="100" style="transition: height 2s ease 0s; width: 60%; height: 60%;"></span>
                                </div>
                                <div class="d-flex align-items-center mb-lg-0 mb-3">
                                    <div class="iq-icon-box-view rounded me-3 text-success">
                                        <i class="fa-solid fa-child font-size-32"></i>
                                    </div>
                                    <div class=" ">
                                        <p class="mb-0 font-size-14 line-height">{{ __('dashboard.kids') }}</p>
                                        <small class="text-success mb-0">+74%</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6  mb-lg-0 mb-3">
                                <div class="iq-progress-bar progress-bar-vertical iq-bg-danger">
                                    <span class="bg-danger" data-percent="100" style="transition: height 2s ease 0s; width: 80%; height: 80%;"></span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="iq-icon-box-view rounded me-3 text-danger">
                                        <i class="fa-solid fa-face-grin-beam-sweat font-size-32"></i>
                                    </div>
                                    <div class=" ">
                                        <p class="mb-0 font-size-14 line-height">{{ __('dashboard.thrilled') }}</p>
                                        <small class="text-danger mb-0">+40%</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div id="view-chart-02" class="view-cahrt-02"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center gap-2">
                    <div class="card-title">
                        <h4 class="mb-0">{{ __('dashboard.Viewed_Items') }}</h4>
                    </div>
                    <div class="card-header-toolbar d-flex align-items-center seasons ms-1">
                        <div class="iq-custom-select d-inline-block sea-epi s-margin">
                            <select name="cars" class="form-control season-select">
                                <option value="season1">{{ __('dashboard.most_likely') }}</option>
                                <option value="season2">{{ __('dashboard.unlikely') }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-view table-space">
                        <table class="data-tables table custom-table movie_table" style="width:100%" data-toggle="data-table">
                            <thead>
                                <tr>
                                    <th style="width:20%;">Movie</th>
                                    <th style="width:10%;">Rating</th>
                                    <th style="width:20%;">Category</th>
                                    <th style="width:10%;">Download/Views</th>
                                    <th style="width:10%;">User</th>
                                    <th style="width:20%;">Date</th>
                                    <th style="width:10%;"><i class="fa-solid fa-heart"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                @include('DashboardPages/widgets/RecentlyViewCard', [
                                'recentlyImg' => '01.jpg',
                                'id' => '02',
                                'recentlyText' => 'Champions',
                                'recentlyTime' => '1h 40min',
                                'recentlyRating' => '9.2',
                                'recentlyCate' => 'Horror',
                                'recentlyUser' => 'Unsubcriber',
                                'recentlyDate' => '21 July,2020',
                                ])

                                @include('DashboardPages/widgets/RecentlyViewCard', [
                                'recentlyImg' => '05.jpg',
                                'id' => '03',
                                'recentlyText' => 'Last Race',
                                'recentlyTime' => '',
                                'recentlyRating' => '7.2',
                                'recentlyCate' => 'Horror',
                                'recentlyUser' => 'Subcriber',
                                'recentlyDate' => '22 July,2020',
                                ])

                                @include('DashboardPages/widgets/RecentlyViewCard', [
                                'recentlyImg' => '07.jpg',
                                'id' => '01',
                                'recentlyText' => 'Boop Bitty',
                                'recentlyTime' => '',
                                'recentlyRating' => '8.2',
                                'recentlyCate' => 'Thriller',
                                'recentlyUser' => 'Unsubcriber',
                                'recentlyDate' => '23 July,2020',
                                ])

                                @include('DashboardPages/widgets/RecentlyViewCard', [
                                'recentlyImg' => '10.jpg',
                                'id' => '04',
                                'recentlyText' => 'Dino Land',
                                'recentlyTime' => '',
                                'recentlyRating' => '8.5',
                                'recentlyCate' => 'Action',
                                'recentlyUser' => 'Unsubcriber',
                                'recentlyDate' => '24 July,2020',
                                ])

                                @include('DashboardPages/widgets/RecentlyViewCard', [
                                'recentlyImg' => '04.jpg',
                                'id' => '05',
                                'recentlyText' => 'The Last Breath',
                                'recentlyTime' => '',
                                'recentlyRating' => '8.9',
                                'recentlyCate' => 'Horror',
                                'recentlyUser' => 'Subcriber',
                                'recentlyDate' => '25 July,2020',
                                ])
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {{-- row end --}}
    </div>
</div>
@endsection

@push('after-scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.40.0/apexcharts.min.js" integrity="sha512-Kr1p/vGF2i84dZQTkoYZ2do8xHRaiqIa7ysnDugwoOcG0SbIx98erNekP/qms/hBDiBxj336//77d0dv53Jmew==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="{{ asset('Dashboard/js/apexcharts.js') }}"></script>
<script src="{{ asset('Dashboard/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/chart-custom.js') }}"></script>
<script src="{{ asset('Dashboard/js/countdown.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/custom.js') }}"></script>
<script src="{{ asset('Dashboard/js/dataTables.bootstrap5.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/flatpickr.js') }}"></script>
<script src="{{ asset('Dashboard/js/jquery.appear.js') }}"></script>
<script src="{{ asset('Dashboard/js/jquery.counterup.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/jquery.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/masonry.pkgd.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/owl.carousel.js') }}"></script>
<script src="{{ asset('Dashboard/js/popper.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/rtl.js') }}"></script>
<script src="{{ asset('Dashboard/js/smooth-scrollbae.js') }}"></script>
<script src="{{ asset('Dashboard/js/waypoints.min.js') }}"></script>
<script src="{{ asset('Dashboard/js/wow.min.js') }}"></script>
@endpush
