<div class="trending-info mt-4 pt-0 pb-4">
    <div class="row">
        <div class="col-md-9 col-12 mb-auto">
            <div class="d-block d-lg-flex align-items-center">
                <h2 class="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block"
                    style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');"
                    data-animation-in="fadeInLeft" data-delay-in="0.6" style="opacity: 1; animation-delay: 0.6s">
                    {{ $moveName }}
                </h2>
                <div class="slider-ratting d-flex align-items-center ms-lg-3 ms-0">
                    <ul
                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star-half" aria-hidden="true"></i></li>
                    </ul>
                    <span class="text-white ms-2">{{ $imdbRating }} (imdb)</span>
                </div>
            </div>
            <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                <li class="trending-list"><a class="text-primary"
                        href="{{route('frontend.view_all')}}">{{__('frontendhome.action')}}</a></li>
                <li class="trending-list"><a class="text-primary"
                        href="{{route('frontend.view_all')}}">{{__('frontendhome.adventure')}}</a></li>
                <li class="trending-list"><a class="text-primary"
                        href="{{route('frontend.view_all')}}">{{__('otthome.drama')}}</a></li>
            </ul>
            <div class="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                <span class="badge bg-secondary">{{ $movieType }}</span>
                <span class="ms-3 font-Weight-500 genres-info">{{ $movieDuration }}</span>
                <span class="trending-year trending-year-list font-Weight-500 genres-info">
                    {{ $movieReleased }}
                </span>
            </div>
            <div class="d-flex align-items-center gap-4 flex-wrap mb-4">
                <ul class="list-inline p-0 share-icons music-play-lists mb-n2 mx-n2">
                    <li class="share">
                        <span><i class="fa-solid fa-share-nodes"></i></span>
                        <div class="share-box">
                            <svg width="15" height="40" viewBox="0 0 15 40" class="share-shape" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                    fill="#191919"></path>
                            </svg>
                            <div class="d-flex align-items-center">
                                <a href="#" class="share-ico"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" class="share-ico"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" class="share-ico"><i class="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                    </li>
                    <li><span><i class="fa-solid fa-heart"></i></span></li>
                    <li><span><i class="fa-solid fa-plus"></i></span></li>
                    <li><span><a href="./assets/images/video/trailer.mp4" download><i
                                    class="fa-solid fa-download"></i></a></span></li>
                </ul>
                <div class="movie-detail-select">
                    <select name="movieselect" class="form-control movie-select select2-basic-single js-states">
                        <option value="1">Playlist</option>
                        <option value="2">Zombie Island</option>
                        <option value="3">Sand Dust</option>
                        <option value="4">Jumbo Queen</option>
                    </select>
                </div>
            </div>
            <ul class="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                <li class="iq-tag-title text-primary mb-0">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    Tags:
                </li>
                <li><a class="title" href="{{route('frontend.view_all')}}">{{__('frontendhome.action')}}</a><span
                        class="text-secondary">,</span></li>
                <li><a class="title" href="{{route('frontend.view_all')}}">{{__('frontendhome.adventure')}}</a><span
                        class="text-secondary">,</span>
                </li>
                <li><a class="title" href="{{ route('frontend.view_all') }}">{{__('otthome.drama')}}</a></li>
            </ul>
        </div>
        <div class="trailor-video col-md-3 col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right">
            <a data-fslightbox="html5-video" href="https://www.youtube.com/watch?v=QCGq1epI9pQ"
                class="video-open playbtn block-images position-relative playbtn_thumbnail">
                <img src="{{ asset('frontend/images/genre/01.webp') }} "
                    class="attachment-medium-large size-medium-large wp-post-image" alt="" loading="lazy" />
                <span class="content btn btn-transparant iq-button">
                    <i class="fa fa-play me-2 text-white"></i>
                    <span>{{__('frontenddetail_page.trailer_link')}}</span>
                </span>
            </a>
        </div>
    </div>
</div>