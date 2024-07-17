@extends('layouts.app', ['isCircleProgress' => true,'isFslightbox'=>"true" ])

@section('content')
<div class="row">
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-center">
                    <div class="d-flex flex-column text-center align-items-center justify-content-between ">
                        <div class="fs-italic">
                            <h5> {{ __('widgets.Regina_Miles') }}</h5>
                            <div class="text-muted-50 mb-1">
                                <small>{{ __('widgets.Trainer_Expert') }}</small>
                            </div>
                        </div>
                        <div class="text-black-50 text-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="gary">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="gary">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div class="card-profile-progress">
                            <div id="circle-progress-1" class="circle-progress  circle-progress-basic circle-progress-primary" data-min-value="0" data-max-value="100" data-value="80" data-type="percent"></div>
                            <img src="{{ asset('dashboard/images/avatars/01.png') }}" alt="User-Profile" loading="lazy" class="theme-color-default-img img-fluid rounded-circle card-img">
                            <img src="{{ asset('dashboard/images/avatars/avtar_1.png') }}" alt="User-Profile" loading="lazy" class="theme-color-purple-img img-fluid rounded-circle card-img">
                            <img src="{{ asset('dashboard/images/avatars/avtar_2.png') }}" alt="User-Profile" loading="lazy" class="theme-color-blue-img img-fluid rounded-circle card-img">
                            <img src="{{ asset('dashboard/images/avatars/avtar_4.png') }}" alt="User-Profile" loading="lazy" class="theme-color-green-img img-fluid rounded-circle card-img">
                            <img src="{{ asset('dashboard/images/avatars/avtar_5.png') }}" alt="User-Profile" loading="lazy" class="theme-color-yellow-img img-fluid rounded-circle card-img">
                            <img src="{{ asset('dashboard/images/avatars/avtar_3.png') }}" alt="User-Profile" loading="lazy" class="theme-color-pink-img img-fluid rounded-circle card-img">
                        </div>
                        <div class="mt-3 text-center text-muted-50">
                            <p>{{ __('widgets.Slate_helps_you') }}</p>
                        </div>
                        <div class="d-flex icon-pill">
                            <a href="#" class="btn btn-sm rounded-pill px-2 py-2 ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="btn btn-sm rounded-pill px-2 py-2  ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-danger" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                            </a>
                            <a href="#" class="btn btn-sm rounded-pill px-2 py-2 ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-success" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <div class="p-2 rounded bg-warning disabled">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h4 class="px-3">{{ __('widgets.Conversion') }}</h4>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="#" class=" ">
                            <svg width="24px" viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form class="d-grid gap-card">
                    <div class="form-group mb-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="1000" aria-label="Recipient's username" aria-describedby="basic-addon3">
                            <span class="input-group-text" id="basic-addon3">{{ __('widgets.GRD') }}</span>
                        </div>
                    </div>
                    <div class="form-group mb-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="100" aria-label="Recipient's username" aria-describedby="basic-addon4">
                            <span class="input-group-text" id="basic-addon4">{{ __('widgets.USD') }}</span>
                        </div>
                    </div>
                    <div class="form-group mb-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="150" aria-label="Recipient's username" aria-describedby="basic-addon4">
                            <span class="input-group-text" id="basic-addon44">{{ __('widgets.Euro') }}</span>
                        </div>
                    </div>
                    <button class="btn btn-primary">{{ __('widgets.Archive') }}</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-4">
                    <div>
                        <h2>59</h2>
                        <h5>{{ __('widgets.Holidays') }}</h5>
                    </div>
                    <div>
                        <div class="badge bg-danger p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="d-flex  justify-content-start align-items-center mb-3">
                    <div class="pe-3">
                        <img src="{{ asset('dashboard/images/avatars/02.png') }}" class="rounded-circle p-1 bg-danger-subtle" width="60" height="60" alt="1" loading="lazy">
                    </div>
                    <div>
                        <h5>{{ __('widgets.Web_Workshop') }}</h5>
                        <h6 class="mb-0">1 {{ __('widgets.hour_ago') }}</h6>
                    </div>
                </div>
                <div>
                    <small>{{ __('widgets.it_is_impossible_to_withhold') }}</small>
                    <small>{{ __('widgets.as_it_is_impossible_to') }}</small>
                </div>
                <div class="pt-3">
                    <small>- {{ __('widgets.Agens_Reppligers') }}</small>
                </div>
                <div class="pt-3">
                    <small>- {{ __('widgets.Managements') }}</small>
                </div>
                <div class="pt-3">
                    <small>- {{ __('widgets.Creative_Sprint') }}</small>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                    <h4 class="card-title">{{ __('widgets.Upcoming_Birthday') }}</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-start align-items-center">
                    <div class="pe-3">
                        <img src="{{ asset('dashboard/images/avatars/03.png') }}" loading="lazy" class="rounded-circle bg-soft-primary p-1" width="50" height="50" alt="1">
                    </div>
                    <div>
                        <h6 class="mb-1">{{ __('widgets.Anna_Sthesia') }}</h6>
                        <p class="mb-0">{{ __('widgets.Today') }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <div class="pe-3">
                        <img src="{{ asset('dashboard/images/avatars/04.png') }}" loading="lazy" class="rounded-circle bg-soft-danger p-1" width="50" height="50" alt="1">
                    </div>
                    <div>
                        <h6 class="mb-1">{{ __('widgets.Annette_Black') }}</h6>
                        <p class="mb-0">{{ __('widgets.Today') }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <div class="pe-3">
                        <img src="{{ asset('dashboard/images/avatars/05.png') }}" loading="lazy" class="rounded-circle bg-soft-info p-1" width="50" height="50" alt="1">
                    </div>
                    <div>
                        <h6 class="mb-1">{{ __('widgets.Daivid_Wall') }}</h6>
                        <p class="mb-0">{{ __('widgets.Today') }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <div class="pe-3">
                        <img src="{{ asset('dashboard/images/avatars/02.png') }}" loading="lazy" class="rounded-circle bg-soft-danger p-1" width="50" height="50" alt="1">
                    </div>
                    <div>
                        <h6 class="mb-1">{{ __('widgets.John_Devid') }}</h6>
                        <p class="mb-0">{{ __('widgets.Today') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-5">
        <div class="card">
            <div class="card-body">
                <div class="user-post-data">
                    <div class="d-flex flex-wrap">
                        <div class="media-support-user-img me-3">
                            <img class="rounded-circle p-1 bg-danger-subtle img-fluid avatar-60" src="{{ asset('dashboard/images/avatars/02.png') }}" alt="" loading="lazy">
                        </div>
                        <div class="media-support-info mt-2">
                            <h5 class="mb-0 d-inline-block">{{ __('widgets.Ira_Membrit') }}</h5>
                            <p class="mb-0 text-primary">6 {{ __('widgets.hour_ago') }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <p>{{ __('widgets.Lorem_ipsum_dolor') }}</p>
                </div>
                <div class="comment-area mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="like-block position-relative d-flex align-items-center">
                            <div class="d-flex align-items-center">
                                <p class="mb-0">
                                    <svg width="18" class="me-1" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
                                    </svg>
                                    140 {{ __('widgets.Likes') }}
                                </p>
                                <p class="ms-3 mb-0">{{ __('widgets.comments') }}</p>
                            </div>
                        </div>
                        <div class="share-block d-flex align-items-center feather-icon me-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn">
                                <span class="ms-1">
                                    <svg width="18" class="me-1" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" />
                                    </svg>
                                    {{ __('widgets.99_Share') }}</span></a>
                        </div>
                    </div>
                    <ul class="post-comments p-0 list-inline mt-3">
                        <li class="mb-3">
                            <div class="d-flex flex-wrap">
                                <div class="user-img">
                                    <img src="{{ asset('dashboard/images/avatars/03.png') }}" alt="userimg" class="p-1 bg-primary-subtle avatar-60 rounded-circle img-fluid" loading="lazy">
                                </div>
                                <div class="comment-data-block ms-3">
                                    <h6 class="mb-2">{{ __('widgets.Monty_Carlo') }}</h6>
                                    <p class="mb-0">{{ __('widgets.Lorem_ipsum_dolor_sit_amet') }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <form class="form" action="#">
                        <div class="input-group mb-0">
                            <input type="text" class="form-control" placeholder="{{ __('widgets.Recipients_username') }}" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <button type="button" class="btn input-group-text btn-primary" id="basic-addon2">
                                <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z" fill="currentColor"></path>
                                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                    <h4 class="card-title">{{ __('widgets.Stories') }}</h4>
                </div>
            </div>
            <div class="card-body">
                <ul class="media-story m-0 p-0">
                    <li class="d-flex mb-4 align-items-center active">
                        <img src="{{ asset('dashboard/images/avatars/04.png') }}" alt="story-img" loading="lazy" class="avatar-50 rounded-circle p-1 bg-soft-danger img-fluid">
                        <div class="stories-data ms-3">
                            <h5>{{ __('widgets.Anna_Mull') }}</h5>
                            <p class="mb-0">1 {{ __('widgets.hour_ago') }}</p>
                        </div>
                    </li>
                    <li class="d-flex mb-4 align-items-center">
                        <img src="{{ asset('dashboard/images/avatars/02.png') }}" alt="story-img" loading="lazy" class="avatar-50 rounded-circle p-1 bg-soft-danger img-fluid">
                        <div class="stories-data ms-3">
                            <h5>{{ __('widgets.Ira_Membrit') }}</h5>
                            <p class="mb-0">4 {{ __('widgets.hour_ago') }}</p>
                        </div>
                    </li>
                    <li class="d-flex align-items-center">
                        <img src="{{ asset('dashboard/images/avatars/03.png') }}" alt="story-img" loading="lazy" class="avatar-50 rounded-circle p-1 bg-soft-primary img-fluid">
                        <div class="stories-data ms-3">
                            <h5>{{ __('widgets.Bob_Frapples') }}</h5>
                            <p class="mb-0">9 {{ __('widgets.hour_ago') }}</p>
                        </div>
                    </li>
                </ul>
                <a href="#" class="btn btn-primary d-block mt-4">{{ __('widgets.See_All') }}</a>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header d-flex align-items-center justify-content-between">
                <div class="header-title">
                    <h4 class="card-title">{{ __('widgets.Gallery') }}</h4>
                </div>
                <span>132 {{ __('widgets.pics') }}</span>
            </div>
            <div class="card-body">
                <div class="d-grid gap-card grid-cols-3">
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/icon/04.png') }}">
                        <img src="{{ asset('dashboard/images/icon/04.png') }}" class="img-fluid bg-info-subtle rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/shapes/02.png') }}">
                        <img src="{{ asset('dashboard/images/shapes/02.png') }}" class="img-fluid bg-primary-subtle rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/icon/08.png') }}">
                        <img src="{{ asset('dashboard/images/icon/08.png') }}" class="img-fluid bg-info-subtle rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/shapes/04.png') }}">
                        <img src="{{ asset('dashboard/images/shapes/04.png') }}" class="img-fluid bg-primary-subtle rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/icons/02.png') }}">
                        <img src="{{ asset('dashboard/images/shapes/03.png') }}" class="img-fluid bg-warning-subtle rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/shapes/06.png') }}">
                        <img src="{{ asset('dashboard/images/shapes/06.png') }}" class="img-fluid bg-soft-primary rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/icon/05.png') }}">
                        <img src="{{ asset('dashboard/images/shapes/05.png') }}" class="img-fluid bg-soft-danger rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/shapes/04.png') }}">
                        <img src="{{ asset('dashboard/images/shapes/04.png') }}" class="img-fluid bg-soft-primary rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                    <a data-fslightbox="gallery" href="{{ asset('dashboard/images/icon/01.png') }}">
                        <img src="{{ asset('dashboard/images/icon/01.png') }}" class="img-fluid bg-soft-success rounded w-100" alt="profile-image" loading="lazy">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                <div class="header-title">
                    <h4 class="card-title">{{ __('widgets.Twitter_Feeds') }}</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="twit-feed">
                    <div class="d-flex align-items-center mb-4">
                        <img src="{{ asset('dashboard/images/avatars/01.png') }}" alt="User-Profile" loading="lazy" class="theme-color-default-img  img-fluid avatar-60 rounded-pill me-3">
                        <img src="{{ asset('dashboard/images/avatars/avtar_1.png') }}" alt="User-Profile" loading="lazy" class="theme-color-purple-img img-fluid avatar-60 me-3">
                        <img src="{{ asset('dashboard/images/avatars/avtar_2.png') }}" alt="User-Profile" loading="lazy" class="theme-color-blue-img img-fluid avatar-60 me-3">
                        <img src="{{ asset('dashboard/images/avatars/avtar_4.png') }}" alt="User-Profile" loading="lazy" class="theme-color-green-img img-fluid avatar-60 me-3">
                        <img src="{{ asset('dashboard/images/avatars/avtar_5.png') }}" alt="User-Profile" loading="lazy" class="theme-color-yellow-img img-fluid avatar-60 me-3">
                        <img src="{{ asset('dashboard/images/avatars/avtar_3.png') }}" alt="User-Profile" loading="lazy" class="theme-color-pink-img img-fluid avatar-60 me-3">
                        <div class="media-support-info">
                            <h6 class="mb-0">{{ __('widgets.Anna_Sthesia') }}</h6>
                            <p class="mb-0">{{ __('widgets.@anna') }}59
                                <span class="text-primary">
                                    <svg width="15" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                                        </path>
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="media-support-body">
                        <p>{{ __('widgets.Lorem_Ipsum_is') }}</p>
                        <div class="d-flex flex-wrap mb-1">
                            <a href="#" class="twit-meta-tag pe-2">{{ __('widgets.#Html') }}</a>
                            <a href="#" class="twit-meta-tag pe-2">{{ __('widgets.#Bootstrap') }}</a>
                        </div>
                        <div class="twit-date">07 {{ __('widgets.Jan') }} 2021</div>
                    </div>
                </div>
                <hr class="my-4">
                <div class="twit-feed">
                    <div class="d-flex align-items-center mb-4">
                        <img class="rounded-pill p-1 bg-soft-primary img-fluid avatar-60 me-3" src="{{ asset('dashboard/images/avatars/03.png') }}" alt="avatar" loading="lazy">
                        <div class="media-support-info">
                            <h6 class="mb-0">{{ __('widgets.Paige_Turner') }}</h6>
                            <p class="mb-0">{{ __('widgets.@paige') }}30
                                <span class="text-primary">
                                    <svg width="15" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                                        </path>
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="media-support-body">
                        <p>{{ __('widgets.Lorem_Ipsum_is') }}</p>
                        <div class="d-flex flex-wrap mb-1">
                            <a href="#" class="twit-meta-tag pe-2">{{ __('widgets.#Js') }}</a>
                            <a href="#" class="twit-meta-tag pe-2">{{ __('widgets.#Bootstrap') }}</a>
                        </div>
                        <div class="twit-date">18 {{ __('widgets.Feb') }} 2021</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                <div class="header-title">
                    <h4 class="card-title">{{ __('widgets.Suggestions') }}</h4>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-inline m-0 p-0">
                    <li class="d-flex mb-4 align-items-center">
                        <div class="img-fluid bg-soft-warning rounded-pill"><img src="{{ asset('dashboard/images/avatars/02.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Paul_Molive') }}</h6>
                            <p class="mb-0">4 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="d-flex mb-4 align-items-center">
                        <div class="img-fluid bg-soft-danger rounded-pill"><img src="{{ asset('dashboard/images/avatars/03.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Robert_Fox') }}</h6>
                            <p class="mb-0">4 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="d-flex mb-4 align-items-center">
                        <div class="img-fluid bg-soft-dark rounded-pill"><img src="{{ asset('dashboard/images/avatars/04.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Jenny_Wilson') }}</h6>
                            <p class="mb-0">6 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="d-flex mb-4 align-items-center">
                        <div class="img-fluid bg-soft-primary rounded-pill"><img src="{{ asset('dashboard/images/avatars/05.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Cody_Fisher') }}</h6>
                            <p class="mb-0">8 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="d-flex mb-4 align-items-center">
                        <div class="img-fluid bg-soft-info rounded-pill"><img src="{{ asset('dashboard/images/avatars/06.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Bessie_Cooper') }}</h6>
                            <p class="mb-0">1 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="d-flex mb-4 align-items-center">
                        <div class="img-fluid bg-soft-warning rounded-pill"><img src="{{ asset('dashboard/images/avatars/07.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Wade_Warren') }}</h6>
                            <p class="mb-0">3 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>

                    <li class="d-flex align-items-center">
                        <div class="img-fluid bg-soft-info rounded-pill"><img src="{{ asset('dashboard/images/avatars/09.png') }}" alt="story-img" loading="lazy" class="rounded-pill avatar-40"></div>
                        <div class="ms-3 flex-grow-1">
                            <h6>{{ __('widgets.Floyd_Miles') }}</h6>
                            <p class="mb-0">2 {{ __('widgets.mutual_friends') }}</p>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                            <span class="btn-inner">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentColor="#3a57e8">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
@include('DashboardPages.widgets.share-offcanvas')
@endsection