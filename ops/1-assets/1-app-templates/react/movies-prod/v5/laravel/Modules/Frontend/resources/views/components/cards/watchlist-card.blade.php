@if (isset($isWatchlist2) && $isWatchlist2)
    <div class="watchlist-warpper card-style-two">
        <div class="block-images d-flex align-items-center flex-wrap gap-2 gap-md-3">
            <div class="img-box">
                <a href="{{ route('frontend.video_detail') }}" class="position-absolute top-0 bottom-0 start-0 end-0"></a>
                <img src="{{ $cardImage }}" alt="movie-card" class="img-fluid object-cover d-block border-0"
                    loading="lazy" />
            </div>
            <div class="card-description">
                <h5 class="text-capitalize fw-500"> <a href="">{{ $cardTitle }}</a> </h5>
                <div class="seperator d-flex align-items-center">
                    <span class="text-body fw-semibold font-size-12 text-capitalize">{{ $views }}</span>
                    <span class="circle circle-small"></span>
                    <span class="text-body fw-semibold font-size-12 text-capitalize">{{ $duration }}</span>
                </div>
            </div>
        </div>
    </div>
@else
    <div class="watchlist-warpper card-hover-style-two">
        <div class="block-images position-relative w-100">
            <div class="img-box">
                <a href="watchlist-detail" class="position-absolute top-0 bottom-0 start-0 end-0"></a>
                <img src="{{ $cardImage }}" alt="movie-card" class="img-fluid object-cover w-100 d-block border-0"
                    loading="lazy" />
            </div>
            <div class="card-description">
                <h5 class="text-capitalize fw-500"> <a href="">{{ $cardTitle }}</a> </h5>
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center gap-1 font-size-12">
                        <i class="fa-solid fa-earth-americas text-primary"></i>
                        <span class="text-body fw-semibold text-capitalize">{{ $category }}</span>
                    </div>
                    <div class="d-flex align-items-center gap-1 font-size-12">
                        <i class="fa-regular fa-eye text-primary"></i>
                        <span class="text-body fw-semibold text-capitalize">{{ $views }}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endif
