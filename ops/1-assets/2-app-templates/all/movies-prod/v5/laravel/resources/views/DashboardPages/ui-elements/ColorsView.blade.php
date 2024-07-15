@extends('layouts.app')


@section('content')
<div class="row">
    <div class="col-lg-12">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Streamit Color</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Similar to the contextual text color classes, easily set the background of an element to any contextual
                class. Anchor components will darken on hover, just like the text classes. Background utilities
                <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code>
                utilities.
             </p>
             <div class="row mt-4">
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-primary pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Primary</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-secondary pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Secondary</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-success pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Success</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-danger pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Danger</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-warning pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Warning</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-info pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Info</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center mt-0 mt-lg-3">
                   <p class="bg-light pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Light</h6>
                </div>
                <div class="col-lg-2 col-md-6 text-center mt-0 mt-lg-3">
                   <p class="bg-dark pt-5 pb-5 text-center rounded mb-2"></p>
                   <h6 class="mb-4 mb-lg-0">Dark</h6>
                </div>
             </div>
          </div>
       </div>
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Streamit Color</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Similar to the contextual text color classes, easily set the background of an element to any contextual
                class. Anchor components will darken on hover, just like the text classes. Background utilities
                <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code>
                utilities.
             </p>
             <div class="row mt-4">
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-primary-subtle pt-5 pb-5 text-center rounded font-size-18">Primary</p>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-secondary-subtle pt-5 pb-5 text-center rounded font-size-18">Secondary</p>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-success-subtle pt-5 pb-5 text-center rounded font-size-18">Success</p>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-danger-subtle pt-5 pb-5 text-center rounded font-size-18">Danger</p>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-warning-subtle pt-5 pb-5 text-center rounded font-size-18">Warning</p>
                </div>
                <div class="col-lg-2 col-md-6 text-center">
                   <p class="bg-info-subtle pt-5 pb-5 text-center rounded font-size-18">Info</p>
                </div>
                <div class="col-lg-2 col-md-6 text-center mt-0 mt-lg-3">
                   <p class="bg-dark-subtle text-white pt-5 pb-5 text-center rounded font-size-18">Dark</p>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Streamit Text Color</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
                   that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling
                   beyond underline.</strong></p>
             <p class="text-primary">.text-primary</p>
             <p class="text-secondary">.text-secondary</p>
             <p class="text-gray">.text-gray</p>
             <p class="text-success">.text-success</p>
             <p class="text-danger">.text-danger</p>
             <p class="text-warning">.text-warning</p>
             <p class="text-bg-info">.text-bg-info</p>
             <p class="text-light bg-dark">.text-light</p>
             <p class="text-dark">.text-dark</p>
             <p class="text-muted">.text-muted</p>
             <p class="text-white bg-dark">.text-white</p>
             <p class="text-black-50">.text-black-50</p>
             <p class="text-white-50 bg-dark mb-0">.text-white-50</p>
          </div>
       </div>
    </div>
    <div class="col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Streamit Text Color</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
                   that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling
                   beyond underline.</strong></p>
             <p><a href="#" class="text-primary">Primary link</a></p>
             <p><a href="#" class="text-secondary">Secondary link</a></p>
             <p><a href="#" class="text-success">Success link</a></p>
             <p><a href="#" class="text-danger">Danger link</a></p>
             <p><a href="#" class="text-warning">Warning link</a></p>
             <p><a href="#" class="text-gray">gray link</a></p>
             <p><a href="#" class="text-bg-info">bg-Info link</a></p>
             <p><a href="#" class="text-light bg-dark">Light link</a></p>
             <p><a href="#" class="text-dark">Dark link</a></p>
             <p><a href="#" class="text-muted">Muted link</a></p>
             <p class="mb-0"><a href="#" class="text-white bg-dark">White link</a></p>
          </div>
       </div>
    </div>
    <div class="col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Streamit Text Color</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
                   that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling
                   beyond underline.</strong></p>
             <p class="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded">Primary link</p>
             <p class="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded">Secondary link</p>
             <p class="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded">Success link</p>
             <p class="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded">Danger link</p>
             <p class="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded">Warning link</p>
             <p class="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded">bg-Info link</p>
             <p class="bg-dark-subtle text-dark ps-3 pe-3 pt-2 pb-2 rounded">Dark link</p>
          </div>
       </div>
    </div>
    <div class="col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Streamit Text Color</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
                   that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling
                   beyond underline.</strong></p>
             <p><a href="#" class="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Primary link</a></p>
             <p><a href="#" class="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Secondary link</a></p>
             <p><a href="#" class="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Success link</a></p>
             <p><a href="#" class="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Danger link</a></p>
             <p><a href="#" class="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Warning link</a></p>
             <p><a href="#" class="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">bg-Info link</a></p>
             <p class=""><a href="#" class="bg-dark-subtle text-dark ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Dark
                   link</a></p>
          </div>
       </div>
    </div>
 </div>
@endsection
