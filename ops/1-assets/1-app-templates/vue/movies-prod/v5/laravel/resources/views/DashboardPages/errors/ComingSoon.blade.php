@extends('layouts.guest')

@section('content')
<div class="wrapper vh-100">
    <div class="iq-comingsoon pt-5 h-100 d-flex align-items-center">
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <div class="col-sm-8 text-center">
                    <div class="iq-comingsoon-info">
                        <a href="/app">
                            <img src="{{asset('dashboard/images/logo-full.png')}}" class="img-fluid w-25" alt="" loading="lazy">
                        </a>
                        <h2 class="mt-4 mb-1">Stay tunned, we're launching very soon</h2>
                        <p>We are working very hard to give you the best experience possible!</p>
                        <ul class="countdown d-flex align-items-center list-inline row"
                            data-date="sep 02 2022 20:20:22">
                            <li class="col-md-6 col-lg-3">
                                <div class="card">
                                    <div class="card-body"><span data-days>300</span>Days</div>
                                </div>
                            </li>
                            <li class="col-md-6 col-lg-3">
                                <div class="card">
                                    <div class="card-body"><span data-hours>15</span>Hours</div>
                                </div>
                            </li>
                            <li class="col-md-6 col-lg-3">
                                <div class="card">
                                    <div class="card-body"><span data-minutes>40</span>Minutes</div>
                                </div>
                            </li>
                            <li class="col-md-6 col-lg-3">
                                <div class="card">
                                    <div class="card-body"><span data-seconds>10</span>Seconds</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="col-lg-4">
                    <form class="iq-comingsoon-form mt-5">
                        <div class="form-group">
                            <input id="exampleInputEmail1" type="email" class="form-control comming mb-0"
                                placeholder="Enter email address" />
                            <button type="submit" class="btn btn-primary p-2">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
