<x-layouts.frontend>
    <body>
        <div class="video-container iq-main-slider">
            <video class="video d-block" controls loop>
               <source src="{{asset('frontend/video/sample-video.mp4')}}" type="video/mp4">
            </video>
         </div>
         <!-- Banner End -->
         <!-- MainContent -->
         <div class="main-content movi">
            <section class="movie-detail container-fluid">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="trending-info g-border">
                        <h1 class="trending-text big-title text-uppercase mt-0">The Illusion</h1>
                        <ul class="p-0 list-inline d-flex align-items-center movie-content">
                           <li class="text-white">Action</li>
                           <li class="text-white">Drama</li>
                           <li class="text-white">Thriller</li>
                        </ul>
                        <div class="d-flex align-items-center text-white text-detail">
                           <span class="badge badge-secondary p-3">13+</span>
                           <span class="ml-3">3h 15m</span>
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
            <section id="iq-favorites" class="s-margin iq-rtl-direction">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">                     
                           <h4 class="main-title"><a href="{{route('frontend.movie')}}">More Like This</a></h4>                     
                        </div>
                        <div class="favorites-contens">
                           <ul class="list-inline favorites-slider row p-0 mb-0">
                              <li class="slide-item">
                                 
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/06.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">The Lost Journey</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">20+</div>
                                             <span class="text-white">2h 15m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play
                                                Now</span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/07.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Boop Bitty</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">11+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play
                                                Now</span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/08.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Unknown Land</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">17+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play
                                                Now</span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/09.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Blood Block</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">13+</div>
                                             <span class="text-white">2h 40m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play
                                                Now</span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/10.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Champions</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">13+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play
                                                Now</span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="iq-upcoming-movie" class="iq-rtl-direction">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">                     
                           <h4 class="main-title"><a href="{{route('frontend.movie')}}">Upcoming Movies</a></h4>
                        </div>
                        <div class="upcoming-contens">
                           <ul class="favorites-slider list-inline  row p-0 mb-0">
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/upcoming/01.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">The Last Breath</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">5+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play Now
                                             </span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                 
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/upcoming/02.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Last Night</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">22+</div>
                                             <span class="text-white">2h 15m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play Now
                                             </span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/upcoming/03.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">1980</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">25+</div>
                                             <span class="text-white">3h</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play Now
                                             </span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/upcoming/04.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Looters</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">11+</div>
                                             <span class="text-white">2h 45m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play Now
                                             </span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/upcoming/05.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Vugotronic</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">9+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                                Play Now
                                             </span>
                                          </div>
                                       </div>
                                       <div class="block-social-info">
                                          <ul class="list-inline p-0 m-0 music-play-lists">
                                                <li class="share">
                                                    <span><i class="ri-share-fill"></i></span>
                                                    <div class="share-box">
                                                       <div class="d-flex align-items-center">
                                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                                       </div>
                                                    </div>
                                                 </li>
                                                <li><span><i class="ri-heart-fill"></i></span>
                                              <span class="count-box">19+</span></li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                                             </ul>
                                       </div>
                                    </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
    </body>
</x-layouts.frontend>