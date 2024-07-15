<div class="iq-watching-block">
    <div class="block-images position-relative">
        <div class="iq-image-box overly-images">
            <a href="movie-detail" class="d-block">
                <img src="{{ $imagePath }}" alt="movie-card" class="img-fluid object-cover w-100 d-block border-0"
                    loading="lazy">
            </a>
        </div>
        <div class="iq-preogress">
            <span class="data-left-timing font-size-14 fw-500 text-lowercase">{{ $dataLeftTime }}</span>
            <div class="progress" role="progressbar" aria-label="Example 2px high" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100" style="height: 1px">
                <div class="progress-bar" style="width: {{ $progressValue }}"></div>
            </div>
        </div>
    </div>
</div>
