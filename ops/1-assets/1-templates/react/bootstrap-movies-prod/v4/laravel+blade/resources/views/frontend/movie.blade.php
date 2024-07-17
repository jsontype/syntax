<x-layouts.frontend>
        <body>

         
         <section class="iq-main-slider p-0">
            <div id="tvshows-slider" class="iq-rtl-direction">
               <div>
                  <a href="{{route('frontend.moviedetails')}}">
                     <div class="shows-img">
                        <img src="{{asset('frontend/images/movie-banner/1.jpg')}}" class="w-100" alt="">
                        <div class="shows-content">
                           <h4 class="text-white mb-1">Open Dead Shot</h4>
                           <div class="movie-time d-flex align-items-center">
                              <div class="badge badge-secondary p-1 mr-2">13+</div>
                              <span class="text-white">2h 20m</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
               <div>
                  <a href="{{route('frontend.moviedetails')}}">
                     <div class="shows-img">
                        <img src="{{asset('frontend/images/movie-banner/2.jpg')}}" class="w-100" alt="">
                        <div class="shows-content">
                           <h4 class="text-white mb-1">Jumbo Queen</h4>
                           <div class="movie-time d-flex align-items-center">
                              <div class="badge badge-secondary p-1 mr-2">9+</div>
                              <span class="text-white">2h 40m</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
               <div>
                  <a href="{{route('frontend.moviedetails')}}">
                     <div class="shows-img">
                        <img src="{{asset('frontend/images/movie-banner/3.jpg')}}" class="w-100" alt="">
                        <div class="shows-content">
                           <h4 class="text-white mb-1">The Lost Journey</h4>
                           <div class="movie-time d-flex align-items-center">
                              <div class="badge badge-secondary p-1 mr-2">20+</div>
                              <span class="text-white">2h 15m</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>         
            </div>
            <div class="dropdown genres-box">
               <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Genres
               </button>
               <div class="dropdown-menu three-column" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Hindi</a>
                  <a class="dropdown-item" href="#">Tamil</a>
                  <a class="dropdown-item" href="#">Punjabi</a>
                  <a class="dropdown-item" href="#">English</a>
                  <a class="dropdown-item" href="#">Comedies</a>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Romance</a>
                  <a class="dropdown-item" href="#">Dramas</a>
                  <a class="dropdown-item" href="#">Bollywood</a>
                  <a class="dropdown-item" href="#">Hollywood</a>
                  <a class="dropdown-item" href="#">Children & Family</a>
                  <a class="dropdown-item" href="#">Award-Winning</a>
               </div>
            </div>
         </section>

         <div class="main-content">
            <section id="iq-favorites">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">
                           <h4 class="main-title">Bollywood Blockbusters</h4>
                        </div>
                        <div class="favorites-contens">
                           <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/upcoming/01.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">The Last Breath</a></h6>
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
                                             <li>
                                                 <span><i class="ri-heart-fill"></i></span>
                                                 <span class="count-box">19+</span>
                                              </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Last Night</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">22+</div>
                                             <span class="text-white">2h 15m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">1980</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">25+</div>
                                             <span class="text-white">3h</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Looters</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">11+</div>
                                             <span class="text-white">2h 45m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Vugotronic</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">9+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
            <section id="iq-upcoming-movie">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">
                           <h4 class="main-title">Best Bengali Movies</h4>
                        </div>
                        <div class="upcoming-contens">
                           <ul class="favorites-slider list-inline row p-0 mb-0 iq-rtl-directionp">
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/01.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">The Illusion</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">10+</div>
                                             <span class="text-white">3h 15m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                               
                                              </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/02.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Burning</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">13+</div>
                                             <span class="text-white">2h 20m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                               
                                              </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/03.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Hubby Kubby</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">9+</div>
                                             <span class="text-white">2h 40m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                               
                                              </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/04.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Open Dead Shot</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">16+</div>
                                             <span class="text-white">1h 40m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
                                                <li><span><i class="ri-add-line"></i></span></li>
                               
                                              </ul>
                                       </div>
                                    </div>
                              </li>
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/05.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Jumboo Queen</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">15+</div>
                                             <span class="text-white">3h</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
            <section id="iq-suggestede">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">
                           <h4 class="main-title">Movies We Recommend</h4>
                        </div>
                        <div class="suggestede-contens">
                           <ul class="list-inline favorites-slider row p-0 mb-0 iq-rtl-direction">
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/movies/06.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">The Lost Journey</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">20+</div>
                                             <span class="text-white">2h 15m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Boop Bitty</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">11+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Unknown Land</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">17+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Blood Block</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">13+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
                                          <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Champions</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">13+</div>
                                             <span class="text-white">2h 30m</span>
                                          </div>
                                          <div class="hover-buttons">
<a href="{{route('frontend.moviedetails')}}" role="button" class="btn btn-hover iq-button" tabindex="0">
                                          <i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now
                                          </a>
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
                                                 <li>
                                                     <span><i class="ri-heart-fill"></i></span>
                                                     <span class="count-box">19+</span>
                                                  </li>
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
         
         <div id="back-to-top">
            <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
         </div>
    </body>
        
</x-layouts.frontend>