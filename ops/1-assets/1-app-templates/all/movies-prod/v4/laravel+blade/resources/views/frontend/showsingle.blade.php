<x-layouts.frontend>
<body>
    <section class="banner-wrapper overlay-wrapper iq-main-slider">
        <div class="banner-caption">
           <div class="position-relative mb-4">
              <a href="{{route('frontend.showdetails')}}" class="d-flex align-items-center">
                 <div class="play-button">
                    <i class="fa fa-play"></i>
                 </div>
                 <h4 class="w-name text-white font-weight-700">Watch latest Episode</h4>
              </a>
           </div>
           <ul class="list-inline p-0 m-0 share-icons music-play-lists">
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
     </section>
     <!-- Banner End -->
     <!-- MainContent -->
     <div class="main-content">
        <section class="movie-detail container-fluid">
           <div class="row">
              <div class="col-lg-12">
                 <div class="trending-info g-border">
                    <h1 class="trending-text big-title text-uppercase mt-0">The Hero Camp</h1>
                    <ul class="p-0 list-inline d-flex align-items-center movie-content">
                       <li class="text-white">Action</li>
                       <li class="text-white">Drama</li>
                    </ul>
                    <div class="d-flex align-items-center text-white text-detail">
                       <span class="badge badge-secondary p-3">18+</span>
                       <span class="ml-3">3 Seasons</span>
                       <span class="trending-year">2020</span>
                    </div>
                    <div class="d-flex align-items-center series mb-4">
                       <a href="javascript:void();"><img src="{{asset('frontend/images/trending/trending-label.png')}}" class="img-fluid"
                             alt=""></a>
                       <span class="text-gold ml-3">#2 in Series Today</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                       industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                       unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                       survived not only five centuries.</p>
                 </div>
              </div>
           </div>
        </section>
        <section class="container-fluid seasons">
           <div class="iq-custom-select d-inline-block sea-epi s-margin">
              <select name="cars" class="form-control season-select">
                 <option value="season1">Season 1</option>
                 <option value="season2">Season 2</option>
                 <option value="season3">Season 3</option>
              </select>
           </div>
           <ul class="trending-pills d-flex nav nav-pills align-items-center text-center s-margin" role="tablist">
              <li class="nav-item">
                 <a class="nav-link active show" data-toggle="pill" href="#episodes" role="tab"
                    aria-selected="true">Episodes</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" data-toggle="pill" href="#popularclips" role="tab" aria-selected="false">Popular
                    Clips</a>
              </li>
           </ul>
           <div class="tab-content">
              <div id="episodes" class="tab-pane fade active show" role="tabpanel">
                 <div class="block-space">
                    <div class="row">
                       <div class="col-1-5 col-md-6 iq-mb-30">
                          <div class="epi-box">
                             <div class="epi-img position-relative">
                                <img src="{{asset('frontend/images/episodes/01.jpg')}}" class="img-fluid img-zoom" alt="">
                                <div class="episode-number">1</div>
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
                                <div class="episode-number">2</div>
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
                                <div class="episode-number">3</div>
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
                                <div class="episode-number">4</div>
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
                                <div class="episode-number">5</div>
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
                                <div class="episode-number">6</div>
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
                                <div class="episode-number">7</div>
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
                                <div class="episode-number">8</div>
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
                                <div class="episode-number">9</div>
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
                                <div class="episode-number">10</div>
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
              <div id="popularclips" class="tab-pane fade" role="tabpanel">
                 <div class="block-space">
                    <div class="row">
                       <div class="col-1-5 col-md-6 iq-mb-30">
                          <div class="epi-box">
                             <div class="epi-img position-relative">
                                <img src="{{asset('frontend/images/episodes/01.jpg')}}" class="img-fluid img-zoom" alt="">
                                <div class="episode-number">1</div>
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
                                <div class="episode-number">2</div>
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
                                <div class="episode-number">3</div>
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
                                <div class="episode-number">4</div>
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
                                <div class="episode-number">5</div>
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
           </div>
        </section>
     </div>

     <div id="back-to-top">
        <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
     </div>



</body>


</x-layouts.frontend>