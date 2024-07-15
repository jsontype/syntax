@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-sm-12 col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Basic Alerts</h4>
             </div>
          </div>
          <div class="card-body">
             <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
             </p>
             <div class="alert alert-success alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-thumbs-up"></i></span>
                <span> This is a success alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-info alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-bell"></i></span>
                <span> This is a info alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-warning alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-bell"></i></span>
                <span> This is a warning alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-danger alert-dismissible fade show " role="alert">
                <span><i class="far fa-life-ring"></i></span>
                <span> This is a danger alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
          </div>
       </div>
    </div>
    <div class="col-sm-12 col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Basic Alerts With Icons</h4>
             </div>
          </div>
          <div class="card-body">
             <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill3" fill="currentColor" viewBox="0 0 16 16">
                   <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                   <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </symbol>
                <symbol id="exclamation-triangle-fill01" fill="currentColor" viewBox="0 0 16 16">
                   <path
                      d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </symbol>
             </svg>
             <div class="alert alert-primary d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#info-fill" />
                </svg>
                <div>
                   An example alert with an icon
                </div>
             </div>
             <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#check-circle-fill3" />
                </svg>
                <div>
                   An example success alert with an icon
                </div>
             </div>
             <div class="alert alert-warning d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#exclamation-triangle-fill01" />
                </svg>
                <div>
                   An example warning alert with an icon
                </div>
             </div>
             <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#exclamation-triangle-fill01" />
                </svg>
                <div>
                   An example danger alert with an icon
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
 <div class="row">
    <div class="col-sm-12 col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Basic Line Alerts</h4>
             </div>
          </div>
          <div class="card-body">
             <div class="alert alert-solid alert-success alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-thumbs-up"></i></span>
                <span> This is a success alert—check it out!</span>
                <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-solid alert-info alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-bell"></i></span>
                <span> This is a info alert—check it out!</span>
                <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-solid alert-warning alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-bell"></i></span>
                <span> This is a warning alert—check it out!</span>
                <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-solid alert-danger alert-dismissible fade show " role="alert">
                <span><i class="far fa-life-ring"></i></span>
                <span> This is a danger alert—check it out!</span>
                <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
          </div>
       </div>
    </div>
    <div class="col-sm-12 col-lg-6">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Basic Line Alerts With Icons</h4>
             </div>
          </div>
          <div class="card-body">
             <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill4" fill="currentColor" viewBox="0 0 16 16">
                   <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </symbol>
                <symbol id="info-fill2" fill="currentColor" viewBox="0 0 16 16">
                   <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </symbol>
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                   <path
                      d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </symbol>
             </svg>
             <div class="alert alert-solid alert-primary d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#info-fill2" />
                </svg>
                <div>
                   An example alert alert-solid with an icon
                </div>
             </div>
             <div class="alert alert-solid alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#check-circle-fill4" />
                </svg>
                <div>
                   An example success alert alert-solid with an icon
                </div>
             </div>
             <div class="alert alert-solid alert-warning d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#exclamation-triangle-fill" />
                </svg>
                <div>
                   An example warning alert alert-solid with an icon
                </div>
             </div>
             <div class="alert alert-solid alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                   <use xlink:href="#exclamation-triangle-fill" />
                </svg>
                <div>
                   An example danger alert alert-solid with an icon
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
 <div class="row">
    <div class="col-sm-12">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">Alerts With Background</h4>
             </div>
          </div>
          <div class="card-body">
             <div class="alert alert-left alert-success alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-thumbs-up"></i></span>
                <span> This is a success alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-top alert-info alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-bell"></i></span>
                <span> This is a info alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-right alert-warning alert-dismissible fade show mb-3" role="alert">
                <span><i class="fas fa-bell"></i></span>
                <span> This is a warning alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
             <div class="alert alert-bottom alert-danger alert-dismissible fade show " role="alert">
                <span><i class="far fa-life-ring"></i></span>
                <span> This is a danger alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
          </div>
       </div>
    </div>
    <div class="col-lg-12">
       <div class="card">
          <div class="card-header d-flex justify-content-between">
             <div class="header-title">
                <h4 class="card-title">For Banner</h4>
             </div>
          </div>
          <div class="card-body">
             <div class="alert alert-warning rounded-0 alert-dismissible fade show " role="alert">
                <span><i class="far fa-life-ring"></i></span>
                <span> This is a warning alert—check it out!</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>

             <div class="alert alert-warning alert-solid rounded-0 alert-dismissible fade show " role="alert">
                <span><i class="far fa-life-ring"></i></span>
                <span> This is a warning alert—check it out!</span>
                <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
          </div>
       </div>
    </div>
 </div>
@endsection
