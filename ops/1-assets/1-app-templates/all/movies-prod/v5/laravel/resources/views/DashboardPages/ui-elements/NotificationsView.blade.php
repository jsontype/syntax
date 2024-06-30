@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Notifications</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a
                single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
             <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                   <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                      <rect width="100%" height="100%" fill="#e50914"></rect>
                   </svg>
                   <strong class="me-auto">Bootstrap</strong>
                   <small>11 mins ago</small>
                   <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">
                   </button>
                </div>
                <div class="toast-body">
                   Hello, world! This is a toast message.
                </div>
             </div>
          </div>
       </div>
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Stacking</h4>
             </div>
          </div>
          <div class="card-body">
             <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>
             <div class="toast fade show mb-2" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                   <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                      <rect width="100%" height="100%" fill="#e50914"></rect>
                   </svg>
                   <strong class="me-auto">Bootstrap</strong>
                   <small class="text-muted">just now</small>
                   <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">

                   </button>
                </div>
                <div class="toast-body">
                   See? Just like this.
                </div>
             </div>
             <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                   <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                      <rect width="100%" height="100%" fill="#e50914"></rect>
                   </svg>
                   <strong class="me-auto">Bootstrap</strong>
                   <small class="text-muted">2 seconds ago</small>
                   <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">

                   </button>
                </div>
                <div class="toast-body">
                   Heads up, toasts will stack automatically
                </div>
             </div>
          </div>
       </div>
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Notifications horizontally and/or vertically </h4>
             </div>
          </div>
          <div class="card-body">
             <p>You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>
             <div class="p-3 ">
                <!-- Flexbox container for aligning the toasts -->
                <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center"
                   style="min-height: 200px;">
                   <!-- Then put toasts within -->
                   <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                      <div class="toast-header">
                         <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                            role="img">
                            <rect width="100%" height="100%" fill="#e50914"></rect>
                         </svg>
                         <strong class="me-auto">Bootstrap</strong>
                         <small>11 mins ago</small>
                         <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">

                         </button>
                      </div>
                      <div class="toast-body">
                         Hello, world! This is a toast message.
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Notifications</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers
                that support the <code>backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under
                a toast.</p>
             <div class="p-3 ">
                <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                   <div class="toast-header">
                      <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                         <rect width="100%" height="100%" fill="#e50914"></rect>
                      </svg>
                      <strong class="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>
                      <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">
                      </button>
                   </div>
                   <div class="toast-body">
                      Hello, world! This is a toast message.
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Stacking Placement</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the
                top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on
                the <code>.toast</code>.</p>
             <div class=" p-3">
                <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                   <div class="toast fade show" style="position: relative; top: 0; right: 0;">
                      <div class="toast-header">
                         <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                            role="img">
                            <rect width="100%" height="100%" fill="#e50914"></rect>
                         </svg>
                         <strong class="me-auto">Bootstrap</strong>
                         <small>11 mins ago</small>
                         <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">

                         </button>
                      </div>
                      <div class="toast-body">
                         Hello, world! This is a toast message.
                      </div>
                   </div>
                </div>
             </div>
             <p class="mt-3">For systems that generate more notifications, consider using a wrapping element so they can
                easily stack.</p>
             <div class=" p-3 mt-3">
                <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                   <!-- Position it -->
                   <div style="position: relative; top: 0; right: 0;">
                      <!-- Then put toasts within -->
                      <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                         <div class="toast-header">
                            <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                               xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                               role="img">
                               <rect width="100%" height="100%" fill="#e50914"></rect>
                            </svg>
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">

                            </button>
                         </div>
                         <div class="toast-body">
                            Hello, world! This is a toast message.
                         </div>
                      </div>
                      <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                         <div class="toast-header">
                            <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                               xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                               role="img">
                               <rect width="100%" height="100%" fill="#e50914"></rect>
                            </svg>
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="ms-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close">

                            </button>
                         </div>
                         <div class="toast-body">
                            Hello, world! This is a toast message.
                         </div>
                      </div>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </div>
    <div class="col-sm-12">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Notifications</h4>
             </div>
          </div>
          <div class="card-body">
             <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a
                single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
             <div class="d-flex flex-wrap justify-content-around">
                <div class="toast fade show bg-primary text-white border-0 mt-3" role="alert" aria-live="assertive"
                   aria-atomic="true">
                   <div class="toast-header bg-primary text-white">
                      <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                         <rect width="100%" height="100%" fill="#fff"></rect>
                      </svg>
                      <strong class="me-auto text-white">Bootstrap</strong>
                      <small>11 mins ago</small>
                      <button type="button" class="ms-2 mb-1 btn-close btn-close-white text-white" data-dismiss="toast"
                         aria-label="Close">
                      </button>
                   </div>
                   <div class="toast-body">
                      Hello, world! This is a toast message.
                   </div>
                </div>
                <div class="toast fade show bg-success text-white border-0 mt-3" role="alert" aria-live="assertive"
                   aria-atomic="true">
                   <div class="toast-header bg-success text-white">
                      <svg class="bd-placeholder-img rounded me-2" width="20" height="20"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                         <rect width="100%" height="100%" fill="#fff"></rect>
                      </svg>
                      <strong class="me-auto text-white">Bootstrap</strong>
                      <small>11 mins ago</small>
                      <button type="button" class="ms-2 mb-1 btn-close btn-close-white text-white" data-dismiss="toast"
                         aria-label="Close">
                      </button>
                   </div>
                   <div class="toast-body">
                      Hello, world! This is a toast message.
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
@endsection
