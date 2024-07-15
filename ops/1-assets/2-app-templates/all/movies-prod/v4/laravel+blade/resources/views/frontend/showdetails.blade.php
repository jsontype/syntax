<x-layouts.frontend>

<body>
    <div class="video-container iq-main-slider">
        <video class="video d-block" controls loop>
           <source src="{{asset('frontend/video/sample-video.mp4')}}" type="video/mp4">
        </video>
     </div>
     <!-- Banner End -->
     <!-- MainContent -->
     <div class="main-content">
        <section class="movie-detail container-fluid">
           <div class="row">
              <div class="col-lg-12">
                 <div class="trending-info season-info g-border">
                    <h4 class="trending-text big-title text-uppercase mt-0">The Hero Camp</h4>
                    <div class="d-flex align-items-center text-white text-detail episode-name mb-0">
                       <span>S1E01</span>
                       <span class="trending-year">Lorem Ipsum is dummy text</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                       industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                       unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                       survived not only five centuries.</p>
                    <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
                       <li><span><i class="ri-add-line"></i></span></li>
                       <li><span><i class="ri-heart-fill"></i></span></li>
                       <li class="share">
                          <span><i class="ri-share-fill"></i></span>
                          <div class="share-box">
                             <div class="d-flex align-items-center">
                                <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-links-fill"></i></a>
                             </div>
                          </div>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>
        <section id="iq-favorites">
           <div class="container-fluid">
              <div class="block-space">
                 <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                       <div class="iq-main-header d-flex align-items-center justify-content-between">
                          <h4 class="main-title">Latest Episodes</h4>
                          <a href="{{route('frontend.showsingle')}}" class="text-primary">View all</a>
                       </div>
                    </div>
                 </div>
                 <div class="row">
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/01.jpg')}}" class="img-fluid img-zoom" alt="">
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/02.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/03.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/04.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/05.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/06.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/07.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/08.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/09.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                    <div class="col-1-5 col-md-6 iq-mb-30">
                       <div class="epi-box">
                          <div class="epi-img position-relative">
                             <img src="{{asset('frontend/images/episodes/10.jpg')}}" class="img-fluid img-zoom" alt="">
                             
                             <div class="episode-play-info">
                                <div class="episode-play">
                                   <a href="{{route('frontend.showdetails')}}">
                                      <i class="ri-play-fill"></i>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div class="epi-desc p-3">
                             <div class="d-flex align-items-center justify-content-between">
                                <span class="text-white">11 Aug 20</span>
                                <span class="text-primary">30m</span>
                             </div>
                             <a href="{{route('frontend.showdetails')}}">
                                <h6 class="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                                </h6>
                             </a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
     </div>
</body>

</x-layouts.frontend>