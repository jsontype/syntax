<div class="iq-card card-hover">
    <div class="block-images position-relative w-100">
        <div class="img-box w-100">
            <a href="movie-detail" class="position-absolute top-0 bottom-0 start-0 end-0"></a>
            <img src="{{ $cardImage }}" alt="movie-card" class="img-fluid object-cover w-100 d-block border-0"
                loading="lazy" />
        </div>
        <div class="card-description with-transition">
            <div class="cart-content">
                <div class="content-left">
                    <h5 class="iq-title text-capitalize">
                        <a href="movie-detail">{{ $cardTitle }}</a>
                    </h5>
                    <div class="movie-time d-flex align-items-center my-2">
                        <span class="movie-time-text font-normal">{{ $movieTime }}</span>
                    </div>
                </div>
                <div class="watchlist">
                    <a href="playlist" class="watch-list-not">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="icon-10">
                            <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                        <span class="watchlist-label"> {{__('otthome.watchlist')}} </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="block-social-info align-items-center">
            <ul class="p-0 m-0 d-flex gap-2 music-play-lists">
                <li class="share position-relative d-flex align-items-center text-center mb-0">
                    <span class="w-100 h-100 d-inline-block bg-transparent">
                        <i class="fas fa-share-alt"></i>
                    </span>
                    <div class="share-wrapper">
                        <div class="share-boxs d-inline-block">
                            <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                    fill="#191919"></path>
                            </svg>
                            <div class="overflow-hidden">
                                <a href="" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fas fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="share position-relative d-flex align-items-center text-center mb-0">
                    <span class="w-100 h-100 d-inline-block bg-transparent">
                        <i class="fa-regular fa-heart"></i>
                    </span>
                    <div class="share-wrapper">
                        <div class="share-boxs d-inline-block">
                            <svg width="15" height="40" class="share-shape" viewBox="0 0 15 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                    fill="#191919"></path>
                            </svg>
                            <div class="overflow-hidden">
                                <span>+51</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="iq-button">
                <a href="movie-detail" class="btn text-uppercase position-relative rounded-circle">
                    <i class="fa-solid fa-play ms-0"></i>
                </a>
            </div>
        </div>
    </div>
</div>