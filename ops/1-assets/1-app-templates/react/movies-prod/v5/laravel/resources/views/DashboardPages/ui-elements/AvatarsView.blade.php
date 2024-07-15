@extends('layouts.app')

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Avatar Sizing</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="iq-avatars d-flex flex-wrap align-items-center">
                        <div class="iq-avatar me-2">
                            <img class="avatar-100 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-90 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-80 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-70 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-60 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-50 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-40 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-30 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Shape Rounded</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="iq-avatars d-flex flex-wrap align-items-center">
                        <div class="iq-avatar me-2">
                            <img class="avatar-80 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-70 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-60 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-50 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-40 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-30 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Shape Rounded Circle</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="iq-avatars d-flex flex-wrap align-items-center">
                        <div class="iq-avatar me-2">
                            <img class="avatar-80 rounded-small" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-70 rounded-small" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-60 rounded-small" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-50 rounded-small" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-40 rounded-small" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-30 rounded-small" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Status Indicator</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="iq-avatars d-flex flex-wrap align-items-center">
                        <div class="iq-avatar me-2">
                            <img class="avatar-80 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title=""> <span class="bg-success iq-dots dots-100"></span>
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-70 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title=""> <span class="iq-dots dots-90"></span>
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-60 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title=""> <span class="bg-success iq-dots dots-80"></span>
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-50 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title=""> <span class="iq-dots dots-80"></span>
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-40 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title=""> <span class="bg-success iq-dots dots-80"></span>
                        </div>
                        <div class="iq-avatar me-2">
                            <img class="avatar-30 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="#" data-original-title="" title=""> <span class="iq-dots dots-80"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Image Groups</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="iq-avatars d-flex flex-wrap align-items-center">
                        <div class="iq-avatar">
                            <div class="iq-media-group me-3">
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-60 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-60 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-60 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="iq-avatar">
                            <div class="iq-media-group me-3">
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-50 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-50 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-50 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="iq-avatar">
                            <div class="iq-media-group me-3">
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-40 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-40 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                                <a href="#" class="iq-media">
                                    <img class="img-fluid avatar-40 rounded" loading="lazy" src="{{ asset('dashboard/images/avatars/01.png') }}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection