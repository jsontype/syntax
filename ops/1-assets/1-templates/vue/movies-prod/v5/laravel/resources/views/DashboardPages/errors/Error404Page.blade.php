@extends('layouts.guest')

@section('content')
    <div class="wrapper">
        <div class="pt-5 container vh-100">
            <div class="no-gutters height-self-center row h-100">
                <div class="text-center align-self-center col-sm-12">
                    <div class="iq-error position-relative">
                        <img src="{{ asset('dashboard/images/error/404.png') }}" class="img-fluid iq-error-img" alt=""
                            loading="lazy">
                        <h2 class="mb-0 mt-4">Oops! This Page is Not Found.</h2>
                        <p>The requested page dose not exist.</p><a class="btn btn-primary mt-3" href="{{route('login')}}"><i
                                class="ri-home-4-line"></i>Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
