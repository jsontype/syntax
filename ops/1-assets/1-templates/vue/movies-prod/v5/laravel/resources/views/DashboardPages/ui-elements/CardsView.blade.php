@extends('layouts.app',['isMasonry'=>'true'])

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-sm-3">
            <div class="card mb-3">
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. </p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card mb-3">
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. </p>
                    <p>It is a long established fact that a the readable content of a page when looking at its layout.
                    </p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card mb-3">
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card mb-3">
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. </p>
                    <a href="#" class="btn btn-primary btn-block">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. </p>
                    <a href="#" class="btn btn-primary btn-block">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                            a ante.</p>
                        <footer class="blockquote-footer mt-2">Someone famous in <cite title="Source Title">Source
                                Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary btn-block">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 text-center">
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary btn-block">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 text-end">
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary btn-block">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="card mb-3">
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card mb-3">
                <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img" alt="#" loading="lazy">
                <div class="card-img-overlay">
                    <h4 class="card-title text-white">Card title</h4>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3 class="mt-4 mb-3">Horizontal Card</h3>
        </div>
        <div class="col-lg-6">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="{{ asset('dashboard/images/page-img/08.jpg') }}" class="card-img" alt="#" loading="lazy">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in.
                                a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card mb-3">
                <div class="row no-gutters flex-row-reverse">
                    <div class="col-md-4">
                        <img src="{{ asset('/dashboard/images/page-img/09.jpg') }}" class="card-img" alt="#" loading="lazy">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-end">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in.
                                a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3 class="mt-4 mb-3">Card Colored Styles</h3>
        </div>
        <div class="col-lg-4">
            <div class="card text-white bg-primary mb-3">
                <div class="card-body">
                    <h4 class="card-title text-white">Primary card title</h4>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" class="text-white">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 text-white bg-secondary">
                <div class="card-body">
                    <h4 class="card-title text-white">Secondary card title</h4>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" class="text-white">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 text-white bg-success">
                <div class="card-body">
                    <h4 class="card-title text-white">Success card title</h4>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" class="text-white">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 text-white bg-danger">
                <div class="card-body">
                    <h4 class="card-title text-white">Danger card title</h4>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" class="text-white">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-4 text-white bg-warning">
                <div class="card-body">
                    <h4 class="card-title text-white">Warning card title</h4>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" class="text-white">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-4 text-white bg-info">
                <div class="card-body">
                    <h4 class="card-title text-white">Info card title</h4>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" class="text-white">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3 class="mt-3 mb-3">Border Card</h3>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 border-primary">
                <div class="card-body text-primary">
                    <h4 class="card-title text-primary">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title text to build on the card
                        title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 border-secondary">
                <div class="card-body text-secondary">
                    <h4 class="card-title text-secondary">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title text to build on the card
                        title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 border-success">
                <div class="card-body text-success">
                    <h4 class="card-title text-success">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title text to build on the card
                        title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 border-danger">
                <div class="card-body text-danger">
                    <h4 class="card-title text-danger">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title text to build on the card
                        title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 border-warning">
                <div class="card-body text-warning">
                    <h4 class="card-title text-warning">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title text to build on the card
                        title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3 border-info">
                <div class="card-body text-info">
                    <h4 class="card-title text-info">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title text to build on the card
                        title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3 class="mt-4 mb-3">Card groups</h3>
        </div>
        <div class="col-sm-12">
            <div class="card-group mb-3">
                <div class="card">
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    {{-- <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#"
                    loading="lazy"> --}}
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    {{-- <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#"
                    loading="lazy"> --}}
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="card-group mb-3">
                <div class="card">
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    {{-- <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#"
                    loading="lazy"> --}}
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12">
            <h3 class="mb-3">Card Masonry Columns</h3>
            <div class="row" data-masonry='{"percentPosition": true }'>
                <div class="col-sm-6 col-lg-4">
                    <div class="card mb-3">
                        <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                        <div class="card-body">
                            <h4 class="card-title">Card title that wraps to a new line</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card mb-3">
                        <blockquote class="blockquote mb-0 card-body">
                            <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.</p>
                            <footer class="blockquote-footer">
                                <small class="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card mb-3">
                        <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional
                                content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card bg-primary text-white text-center mb-3">
                        <blockquote class="blockquote mb-0 card-body">
                            <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.</p>
                            <footer class="blockquote-footer">
                                <small class="text-white">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card text-center mb-3">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This card has a regular title and short paragraphy of text below it.
                            </p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card mb-3">
                        <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="card-img-top" alt="#" loading="lazy">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card text-end mb-3">
                        <blockquote class="blockquote card-body mb-0">
                            <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.</p>
                            <footer class="blockquote-footer">
                                <small class="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is another card with title and supporting text below. This card
                                has some additional content to make it slightly taller overall.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection
