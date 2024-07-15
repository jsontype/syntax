<header id="main-header">
    <div class="main-header">
       <div class="container-fluid">
          <div class="row">
             <div class="col-sm-12">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                   <a href="#" class="navbar-toggler c-toggler" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <div class="navbar-toggler-icon" data-toggle="collapse">
                         <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                         <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                         <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                      </div>
                   </a>
                   <a class="navbar-brand" href="{{route('frontend.home')}}"> <img class="img-fluid logo" src="{{asset('frontend/images/logo.png')}}"
                       alt ="streamit" /> </a>
                       <div class="mobile-more-menu">
                      <a href="javascript:void(0);" class="more-toggle" id="dropdownMenuButton"
                         data-toggle="more-toggle" aria-haspopup="true" aria-expanded="false">
                      <i class="ri-more-line"></i>
                      </a>
                      <div class="more-menu" aria-labelledby="dropdownMenuButton">
                         <div class="navbar-right position-relative">
                            <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                               <li>
                                  <a href="#" class="search-toggle">
                                  <i class="ri-search-line"></i>
                                  </a>
                                  <div class="search-box iq-search-bar">
                                     <form action="#" class="searchbox">
                                        <div class="form-group position-relative">
                                           <input type="text" class="text search-input font-size-12"
                                              placeholder="type here to search...">
                                           <i class="search-link ri-search-line"></i>
                                        </div>
                                     </form>
                                  </div>
                               </li>
                               <li class="nav-item nav-icon">
                                  <a href="#" class="search-toggle position-relative">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22"
                                        height="22" class="noti-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                           d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                                     </svg>
                                     <span class="bg-danger dots"></span>
                                  </a>
                                  <div class="iq-sub-dropdown">
                                     <div class="iq-card shadow-none m-0">
                                        <div class="iq-card-body">
                                           <a href="#" class="iq-sub-card">
                                              <div class="media align-items-center">
                                                 <img src="{{asset('frontend/images/notify/thumb-1.jpg')}}" class="img-fluid mr-3"
                                                    alt="streamit" />
                                                 <div class="media-body">
                                                    <h6 class="mb-0 ">Boop Bitty</h6>
                                                    <small class="font-size-12"> just now</small>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="#" class="iq-sub-card">
                                              <div class="media align-items-center">
                                                 <img src="{{asset('frontend/images/notify/thumb-2.jpg')}}" class="img-fluid mr-3"
                                                    alt="streamit" />
                                                 <div class="media-body">
                                                    <h6 class="mb-0 ">The Last Breath</h6>
                                                    <small class="font-size-12">15 minutes ago</small>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="#" class="iq-sub-card">
                                              <div class="media align-items-center">
                                                 <img src="{{asset('frontend/images/notify/thumb-3.jpg')}}" class="img-fluid mr-3"
                                                    alt="streamit" />
                                                 <div class="media-body">
                                                    <h6 class="mb-0 ">The Hero Camp</h6>
                                                    <small class="font-size-12">1 hour ago</small>
                                                 </div>
                                              </div>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </li>
                               <li>
                                  <a href="#" class="iq-user-dropdown search-toggle d-flex align-items-center">
                                  <img src="{{asset('frontend/images/user/user.jpg')}}" class="img-fluid avatar-40 rounded-circle"
                                     alt="user">
                                  </a>
                                  <div class="iq-sub-dropdown iq-user-dropdown">
                                     <div class="iq-card shadow-none m-0">
                                        <div class="iq-card-body p-0 pl-3 pr-3">
                                           <a href="{{route('frontend.manageprofile')}}" class="iq-sub-card setting-dropdown">
                                              <div class="media align-items-center">
                                                 <div class="right-icon">
                                                    <i class="ri-file-user-line text-primary"></i>
                                                 </div>
                                                 <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">Manage Profile</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="{{route('frontend.settings')}}" class="iq-sub-card setting-dropdown">
                                              <div class="media align-items-center">
                                                 <div class="right-icon">
                                                    <i class="ri-settings-4-line text-primary"></i>
                                                 </div>
                                                 <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">Settings</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="{{route('frontend.pricingplan1')}}" class="iq-sub-card setting-dropdown">
                                              <div class="media align-items-center">
                                                 <div class="right-icon">
                                                    <i class="ri-settings-4-line text-primary"></i>
                                                 </div>
                                                 <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">Pricing Plan</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           <form method="post" action="{{route('logout')}}">
                                             @csrf
                                       
                                            <a href="javascript:void(0)"
                                                 onclick="event.preventDefault();
                                                  this.closest('form').submit();">
                                                   {{ __('Log out') }}>
                                              <div class="media align-items-center">
                                                 <div class="right-icon">
                                                    <i class="ri-logout-circle-line text-primary"></i>
                                                 </div>
                                                 <div class="media-body ml-3">
                                                 </div>
                                              </div>
                                           </a>
                                           </form>
                                        </div>
                                     </div>
                                  </div>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <div class="menu-main-menu-container">
                         <ul id="top-menu" class="navbar-nav ml-auto">
                            <li class="menu-item ">
                               <a href="{{route('frontend.home')}}">Home</a>
                            </li>
                            <li class="menu-item">
                               <a href="{{route('frontend.movie')}}">Movies</a>
                            </li> 
                            <li class="menu-item">
                               <a href="{{route('frontend.show')}}">Tv Shows</a>
                            </li>  
                            <li class="menu-item">
                                    <a href="#">Blog</a>
                                    <ul class="sub-menu">
                                       <li class="menu-item"><a href="{{route('frontend.blog')}}">Blog</a></li>
                                       <li class="menu-item"><a href="{{route('frontend.blogdetails')}}">Blog details</a></li>
                                    </ul>
                              </li>                                                            
                            
                            <li class="menu-item">
                               <a href="#">Pages</a>
                               <ul class="sub-menu">
                                  <li class="menu-item"><a href="{{route('frontend.about')}}">About Us</a></li>
                                  <li class="menu-item "><a href="{{route('frontend.contact')}}">Contact</a></li>
                                  <li class="menu-item"><a href="{{route('frontend.faq')}}">FAQ</a></li>
                                  <li class="menu-item"><a href="{{route('frontend.privacypolicy')}}">Privacy-Policy</a></li>
                                  <li class="menu-item"><a href="#">Pricing</a>
                                  <ul class="sub-menu">
                                     <li class="menu-item"><a href="{{route('frontend.pricingplan1')}}">Pricing Plan 1</a></li>
                                     <li class="menu-item"><a href="{{route('frontend.pricingplan2')}}">Pricing Plan 2</a></li>
                                  </ul>
                               </li>
                               </ul>
                            </li>
                         </ul>
                      </div>
                   </div>
                   
                   <div class="navbar-right menu-right">
                      <ul class="d-flex align-items-center list-inline m-0">
                         <li class="nav-item nav-icon">
                            <a href="#" class="search-toggle device-search">
                            <i class="ri-search-line"></i>
                            </a>
                            <div class="search-box iq-search-bar d-search">
                               <form action="#" class="searchbox">
                                  <div class="form-group position-relative">
                                     <input type="text" class="text search-input font-size-12"
                                        placeholder="type here to search...">
                                     <i class="search-link ri-search-line"></i>
                                  </div>
                               </form>
                            </div>
                         </li>
                         <li class="nav-item nav-icon">
                            <a href="#" class="search-toggle" data-toggle="search-toggle">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
                                  class="noti-svg">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                     d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                               </svg>
                               <span class="bg-danger dots"></span>
                            </a>
                            <div class="iq-sub-dropdown">
                               <div class="iq-card shadow-none m-0">
                                  <div class="iq-card-body">
                                     <a href="#" class="iq-sub-card">
                                        <div class="media align-items-center">
                                           <img src="{{asset('frontend/images/notify/thumb-1.jpg')}}" class="img-fluid mr-3"
                                              alt="streamit" />
                                           <div class="media-body">
                                              <h6 class="mb-0 ">Boot Bitty</h6>
                                              <small class="font-size-12"> just now</small>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="#" class="iq-sub-card">
                                        <div class="media align-items-center">
                                           <img src="{{asset('frontend/images/notify/thumb-2.jpg')}}" class="img-fluid mr-3"
                                              alt="streamit" />
                                           <div class="media-body">
                                              <h6 class="mb-0 ">The Last Breath</h6>
                                              <small class="font-size-12">15 minutes ago</small>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="#" class="iq-sub-card">
                                        <div class="media align-items-center">
                                           <img src="{{asset('frontend/images/notify/thumb-3.jpg')}}" class="img-fluid mr-3"
                                              alt="streamit" />
                                           <div class="media-body">
                                              <h6 class="mb-0 ">The Hero Camp</h6>
                                              <small class="font-size-12">1 hour ago</small>
                                           </div>
                                        </div>
                                     </a>
                                  </div>
                               </div>
                            </div>
                         </li>
                         <li class="nav-item nav-icon">
                            <a href="#" class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                               data-toggle="search-toggle">
                            <img src="{{asset('frontend/images/user/user.jpg')}}" class="img-fluid avatar-40 rounded-circle" alt="user">
                            </a>
                            <div class="iq-sub-dropdown iq-user-dropdown">
                               <div class="iq-card shadow-none m-0">
                                  <div class="iq-card-body p-0 pl-3 pr-3">
                                     <a href="{{route('frontend.manageprofile')}}" class="iq-sub-card setting-dropdown">
                                        <div class="media align-items-center">
                                           <div class="right-icon">
                                              <i class="ri-file-user-line text-primary"></i>
                                           </div>
                                           <div class="media-body ml-3">
                                              <h6 class="my-0 ">Manage Profile</h6>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="{{route('frontend.settings')}}" class="iq-sub-card setting-dropdown">
                                        <div class="media align-items-center">
                                           <div class="right-icon">
                                              <i class="ri-settings-4-line text-primary"></i>
                                           </div>
                                           <div class="media-body ml-3">
                                              <h6 class="my-0 ">Settings</h6>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="{{route('frontend.pricingplan1')}}" class="iq-sub-card setting-dropdown">
                                        <div class="media align-items-center">
                                           <div class="right-icon">
                                              <i class="ri-settings-4-line text-primary"></i>
                                           </div>
                                           <div class="media-body ml-3">
                                              <h6 class="my-0 ">Pricing Plan</h6>
                                           </div>
                                        </div>
                                     </a>
                                     <form method="POST" action="{{route('logout')}}">
                                       @csrf
                                     <a href="javascript:void(0)" class="iq-sub-card setting-dropdown" onclick="event.preventDefault();
                                       this.closest('form').submit();">
                                        <div class="media align-items-center">
                                           <div class="right-icon">
                                              <i class="ri-logout-circle-line text-primary"></i>
                                           </div>
                                           <div class="media-body ml-3">
                                              <h6 class="my-0 ">Logout</h6>
                                           </div>
                                        </div>
                                     </a>
                                    </form>

                                     
                                  </div>
                               </div>
                            </div>
                         </li>
                      </ul>
                   </div>
                </nav>
                
             </div>
          </div>
       </div>
    </div>
 </header>