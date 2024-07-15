<x-layouts.frontend>
    <body>
        

         <section class="iq-main-slider p-0">
            <div id="tvshows-slider" class="iq-rtl-direction">
               <div>
                  <a href="{{route('frontend.showdetails')}}">
                     <div class="shows-img">
                        <img src="{{asset('frontend/images/shows-banner/show-1.jpg')}}" class="w-100" alt="">
                        <div class="shows-content">
                           <h4 class="text-white mb-1">The Hero Camp</h4>
                           <div class="movie-time d-flex align-items-center">
                              <div class="badge badge-secondary p-1 mr-2">18+</div>
                              <span class="text-white">3 Seasons</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
               <div>
                  <a href="{{route('frontend.showdetails')}}">
                     <div class="shows-img">
                        <img src="{{asset('frontend/images/shows-banner/show-2.jpg')}}" class="w-100" alt="">
                        <div class="shows-content">
                           <h4 class="text-white mb-1">The Appartment</h4>
                           <div class="movie-time d-flex align-items-center">
                              <div class="badge badge-secondary p-1 mr-2">17+</div>
                              <span class="text-white">1 Season</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
               <div>
                  <a href="{{route('frontend.showdetails')}}">
                     <div class="shows-img">
                        <img src="{{asset('frontend/images/shows-banner/show-3.jpg')}}" class="w-100" alt="">
                        <div class="shows-content">
                           <h4 class="text-white mb-1">The Marshal King</h4>
                           <div class="movie-time d-flex align-items-center">
                              <div class="badge badge-secondary p-1 mr-2">11+</div>
                              <span class="text-white">3 Seasons</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>         
            </div>
            <div class="dropdown genres-box">
               <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Genres
               </button>
               <div class="dropdown-menu three-column" aria-labelledby="dropdownMenuButton2">
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
                           <h4 class="main-title">Popular Shows</h4>
                        </div>
                        <div class="favorites-contens">
                           <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction ">
                              <li class="slide-item">
                                 
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/tvthrillers/01.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Day of Darkness</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">15+</div>
                                             <span class="text-white">2 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/02.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">My True Friends</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">7+</div>
                                             <span class="text-white">2 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/03.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Arrival 1999</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">11+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/04.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Night Mare</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">18+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/05.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">The Marshal King</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">17+</div>
                                             <span class="text-white">1 Season</span>
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
                           <h4 class="main-title">Best Of International Shows</h4>
                        </div>
                        <div class="upcoming-contens">
                           <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/tvthrillers/06.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Last Track</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">19+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/07.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Dino Land</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">9+</div>
                                             <span class="text-white">2 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/08.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Mission Moon</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">18+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/03.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Arrival 1999</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">11+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/05.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">The Marshal King</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">17+</div>
                                             <span class="text-white">1 Season</span>
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
                           <h4 class="main-title">Shows We Recommend</h4>
                        </div>
                        <div class="suggestede-contens">
                           <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">
                              <li class="slide-item">
                                    <div class="block-images position-relative">
                                       <div class="img-box">
                                          <img src="{{asset('frontend/images/tvthrillers/01.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Day of Darkness</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">15+</div>
                                             <span class="text-white">2 Seasons</span>
                                          </div>
                                          <div class="hover-buttons">
                                             <span class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i> Play Now
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
                                          <img src="{{asset('frontend/images/tvthrillers/08.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Mission Moon</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">18+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/05.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">The Marshal King</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">17+</div>
                                             <span class="text-white">1 Season</span>
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
                                          <img src="{{asset('frontend/images/tvthrillers/04.jpg')}}" class="img-fluid" alt="">
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="{{route('frontend.moviedetails')}}">Knight Mare</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <div class="badge badge-secondary p-1 mr-2">18+</div>
                                             <span class="text-white">3 Seasons</span>
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
                                       <img src="{{asset('frontend/images/tvthrillers/02.jpg')}}" class="img-fluid" alt="">
                                    </div>
                                    <div class="block-description">
                                       <h6 class="iq-title"><a href="{{route('frontend.showdetails')}}">Friends</a></h6>
                                       <div class="movie-time d-flex align-items-center my-2">
                                          <div class="badge badge-secondary p-1 mr-2">14+</div>
                                          <span class="text-white">10 Seasons</span>
                                       </div>
                                       <div class="hover-buttons">
                                          <span class="btn btn-hover iq-button"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                          Play Now</span>
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

         <div id="back-to-top">
            <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
         </div>
    </body>
</x-layouts.frontend>