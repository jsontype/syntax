@extends('layouts.app')

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Responsive images</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width:
                            100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with
                        the parent element.</p>
                    <img src="{{ asset('dashboard/images/page-img/07.jpg') }}" class="img-fluid" alt="Responsive image" loading="lazy">
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Equal-width multi-row</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you
                        want the columns to break to a new line. Make the breaks responsive by mixing the
                        <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display
                            utilities</a>.
                    </p>
                    <div class="d-flex align-items-start">
                        <img src="{{ asset('dashboard/images/page-img/15.jpg') }}" class="img-fluid avatar-70 me-3" alt="#" loading="lazy">
                        <div class="flex-grow-1">
                            <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    <div class="d-flex align-items-start mt-2">
                        <img src="{{ asset('dashboard/images/page-img/16.jpg') }}" class="img-fluid avatar-70 me-3" alt="#" loading="lazy">
                        <div class="flex-grow-1">
                            <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            <div class="d-flex align-items-start mt-3">
                                <a class="me-3" href="#">
                                    <img src="{{ asset('dashboard/images/page-img/17.jpg') }}" class="avatar-70 img-fluid" alt="#" loading="lazy">
                                </a>
                                <div class="flex-grow-1">
                                    <h5 class="mt-0">Media heading</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Order</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Change the order of content in media objects by modifying the HTML itself, or by adding some
                        custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>
                    <div class="d-flex align-items-center mb-5">
                        <div class="">
                            <h5 class="mt-0 mb-1">Media object</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src="{{ asset('dashboard/images/page-img/18.jpg') }}" class="ms-3 img-fluid avatar-70" alt="#" loading="lazy">
                    </div>
                    <div class="d-flex align-items-center mb-5">
                        <div class="">
                            <h5 class="mt-0 mb-1">Center-aligned media</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src="{{ asset('dashboard/images/page-img/19.jpg') }}" class="align-self-center ms-3 img-fluid avatar-70" alt="#" loading="lazy">
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="">
                            <h5 class="mt-0 mb-1">Bottom-aligned media</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src="{{ asset('dashboard/images/page-img/20.jpg') }}" class="align-self-end ms-3 img-fluid avatar-70" alt="#" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Image thumbnails</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>In addition to our <a href="/docs/4.3/utilities/borders/">border-radius utilities</a>, you can
                        use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
                    <img src="{{ asset('dashboard/images/page-img/10.jpg') }}" class="img-thumbnail" alt="Responsive image" loading="lazy">
                    <img src="{{ asset('dashboard/images/page-img/11.jpg') }}" class="rounded ms-3" alt="Responsive image" loading="lazy">
                    <img src="{{ asset('dashboard/images/page-img/12.jpg') }}" class="rounded-circle ms-3 mt-3" alt="Responsive image" loading="lazy">
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Image thumbnails</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>In addition to our <a href="/docs/4.3/utilities/borders/">border-radius utilities</a>, you can
                        use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
                    <div class="d-flex justify-content-between">
                        <img src=" {{ asset('dashboard/images/page-img/13.jpg') }}" class=" mt-2 img-fluid rounded" alt="Responsive image">
                        <img src="{{ asset('dashboard/images/page-img/12.jpg') }}" class=" mt-2 img-fluid rounded float-right" alt="Responsive image">
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Media object</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
                    <div class="d-flex align-items-center mb-4">
                        <img src="{{ asset('dashboard/images/page-img/21.jpg') }}" class="align-self-start me-3 img-fluid avatar-70" alt="#" loading="lazy">
                        <div class="">
                            <h5 class="mt-0">Top-aligned media</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <img src="{{ asset('dashboard/images/page-img/22.jpg') }}" class="align-self-center me-3 img-fluid avatar-70" alt="#" loading="lazy">
                        <div class="">
                            <h5 class="mt-0">Center-aligned media</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <img src="{{ asset('dashboard/images/page-img/23.jpg') }}" class="align-self-end me-3 img-fluid avatar-70" alt="#" loading="lazy">
                        <div class="">
                            <h5 class="mt-0">Bottom-aligned media</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Media list</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Because the media object has so few structural requirements, you can also use these classes on
                        list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the
                        <code>.list-unstyled</code> to remove any browser default list styles, and then apply
                        <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever
                        needed to fine tune.
                    </p>
                    <ul class="list-unstyled">
                        <li class="d-flex align-items-center">
                            <img src="{{ asset('dashboard/images/page-img/24.jpg') }}" class="me-3 img-fluid avatar-70" alt="#" loading="lazy">
                            <div class="">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                        <li class="d-flex align-items-center my-4">
                            <img src="{{ asset('dashboard/images/page-img/15.jpg') }}" class="me-3 img-fluid avatar-70" alt="#" loading="lazy">
                            <div class="">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                        <li class="d-flex align-items-center">
                            <img src="{{ asset('dashboard/images/page-img/16.jpg') }}" class="me-3 img-fluid avatar-70" alt="#" loading="lazy">
                            <div class="">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection