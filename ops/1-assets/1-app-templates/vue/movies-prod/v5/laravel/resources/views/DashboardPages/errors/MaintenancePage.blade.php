@extends('layouts.guest')

@section('content')
    {{-- <div class="wrapper"> --}}
    <div class="mt-0 iq-maintenance">
        <div class="p-0 container-fluid">
            <div class="no-gutters row">
                <div class="text-center col-sm-12">
                    <div class=""><img src="{{ asset('dashboard/images/error/02.png') }}" class="img-fluid" loading="lazy"
                            alt="">
                        <h3 class="mt-4 mb-1">We are Currently Performing Maintenance</h3>
                        <p>Please check back in sometime.</p>
                    </div>
                </div>
            </div>
            <div class="mt-3 container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div class="card-body "> <i class="ri-3x text-primary"><i
                                        class="fa-regular fa-window-maximize"></i></i>
                                <h5 class="card-title mt-1">Why is the Site Down?</h5>
                                <p class="mb-0">It is a long established fact that a reader will be distracted by the
                                    readable content of
                                    a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div class="card-body "> <i class="ri-3x text-primary"><i class="fa-regular fa-clock"></i></i>
                                <h5 class="card-title mt-1">What is the Downtime?</h5>
                                <p class="mb-0">It is a long established fact that a reader will be distracted by the
                                    readable content of
                                    a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div class="card-body "> <i class="ri-3x text-primary"><i
                                        class="fa-solid fa-circle-info"></i></i>
                                <h5 class="card-title mt-1">Do you need Support?</h5>
                                <p class="mb-0">It is a long established fact that a reader will be distracted by the
                                    readable content of
                                    a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- </div> --}}
@endsection
