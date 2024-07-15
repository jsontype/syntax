<div class="swiper-slide {{ $movieCard }} p-0">
    <div class="movie-banner-image">
        <img src="{{ $imagePath }}" alt="movie-banner-image" loading="lazy">
    </div>
    <div class="shows-content h-100">
        <div class="row align-items-center h-100">
            <div class="col-lg-7 col-md-12">
                <h1 class="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two" style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');" data-animation-in="fadeInLeft" data-delay-in="0.6">
                    {{ $movieTitle }}
                </h1>
                <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style="opacity: 1;">
                    <div class="slider-ratting d-flex align-items-center gap-3">
                        <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                                <i class="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fa fa-star-half" aria-hidden="true"></i>
                            </li>
                        </ul>
                        <span class="text-white">
                            {{ $movieRange }}
                        </span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                        <span class="badge bg-secondary p-2">
                            <i class="fa fa-eye"></i>
                            {{ $movieCate }}
                        </span>
                        <span class="font-size-6">
                            <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-time font-normal">
                            {{ $movieTime }}
                        </span>
                        <span class="font-size-6">
                            <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="trending-year font-normal">
                            {{ $movieYear }}
                        </span>
                    </div>
                    <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">
                        {{ $movieText }}
                    </p>
                </div>
                <div class="iq-button" data-animation-in="fadeInUp" data-delay-in="1.2">
                    <a href="{{ $buttonUrl }}" class="btn text-uppercase position-relative">
                        <span class="button-text">{{__('otthome.play_now')}}</span>
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block position-relative">
                <a data-fslightbox="html5-video" href="{{ asset('frontend/images/video/trailer.mp4') }}" class="video-open playbtn text-decoration-none" tabindex="0">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                        <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                        </polygon>
                        <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                        </circle>
                    </svg>
                    <span class="w-trailor text-uppercase"> {{__('frontendhome.watch_trailer')}} </span>
                </a>
            </div>
        </div>
    </div>
</div>