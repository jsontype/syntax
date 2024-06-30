@extends('layouts.app')

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Offcanvas components</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>
                        Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the
                        .show class on an element with the .offcanvas class.
                    </p>
                    <ul class="list-inline p-0 m-0 mb-2">
                        <li><code>.offcanvas</code> hides content (default)</li>
                        <li><code>.offcanvas.show</code> shows content</li>
                    </ul>
                    <a class="btn btn-primary mb-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                        aria-controls="offcanvasExample">
                        Link with href
                    </a>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Button with data-bs-target
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                Some text as placeholder. In real life you can have the elements you have chosen.
                                Like, text, images, lists, etc.
                            </div>
                            <div class="dropdown mt-3">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown">
                                    Dropdown button
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Offcanvas Link Or Dropdown</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Scrolling the element is disabled when an offcanvas and its backdrop are visible. Use the
                        data-bs-scroll attribute to toggle scrolling and data-bs-backdrop to toggle the backdrop.</p>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body
                        scrolling</button>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable
                        backdrop (default)</button>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable
                        both scrolling & backdrop</button>

                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop"
                        aria-labelledby="offcanvasWithBackdropLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                        id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling
                            </h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Offcanvas Placement</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>There’s no default placement for offcanvas components, so you must add one of the modifier
                        classes below;</p>
                    <ul class="list-inline p-0">
                        <li><code>.offcanvas-start</code> places offcanvas on the left of the viewport (shown above)
                        </li>
                        <li><code>.offcanvas.end</code> places offcanvas on the right of the viewport</li>
                        <li><code>.offcanvas.top</code> places offcanvas on the top of the viewport</li>
                        <li><code>.offcanvas.bottom</code> places offcanvas on the bottom of the viewport</li>
                    </ul>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>
                    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop"
                        aria-labelledby="offcanvasTopLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            Try scrolling the rest of the page to see this option in action.
                        </div>
                    </div>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1">Toggle end
                        offcanvas</button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1"
                        aria-labelledby="offcanvasRightLabel1">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel1">Offcanvas end</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            Try scrolling the rest of the page to see this option in action.
                        </div>
                    </div>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasEnd1" aria-controls="offcanvasEnd1">Toggle bottom
                        offcanvas</button>
                    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasEnd1"
                        aria-labelledby="offcanvasEndLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body small">
                            Try scrolling the rest of the page to see this option in action.
                        </div>
                    </div>
                    <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasStart1" aria-controls="offcanvasStart1">Toggle start
                        offcanvas</button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasStart1"
                        aria-labelledby="offcanvasStartLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasStartLabel">Offcanvas statrt</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body small">
                            Try scrolling the rest of the page to see this option in action.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection