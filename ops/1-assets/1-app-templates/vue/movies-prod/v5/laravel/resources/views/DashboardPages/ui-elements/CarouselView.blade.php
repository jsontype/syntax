@extends('layouts.app')

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Slides only</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
                        <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
                    </p>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {{-- public/dashboard/images/page-img/01.jpg --}}
                            <div class="carousel-item active">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Slides With Controls</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
                        <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
                    </p>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Slides With Indicators</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
                        <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
                    </p>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Slides With Captions</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
                        <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
                    </p>
                    <div class="bd-example">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active">
                                </li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                        alt="#" loading="lazy">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4 class="text-black">First slide label</h4>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                        alt="#" loading="lazy">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4 class="text-black">Second slide label</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                        alt="#" loading="lazy">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4 class="text-black">Third slide label</h4>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Slides With Crossfade</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
                        <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
                    </p>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('/dashboard/images/page-img/01.jpg') }}" class="d-block w-100"
                                    alt="#" loading="lazy">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
