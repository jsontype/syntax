<div class="episode-block">
    <div class="block-image position-relative">
        <a href="{{ route('frontend.episode') }}">
            <img src="{{ $showImg }}" class="img-fluid img-zoom" alt="showImg-{{ $id }}" loading="lazy">
        </a>
        <div class="episode-number">{{ $showEpisod }}</div>
        <div class="episode-play">
            <a href="{{ route('frontend.episode') }}" tabindex="0"><i class="fa-solid fa-play"></i></a>
        </div>
    </div>
    <div class="epi-desc p-3">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <span class="border-gredient-left text-white rel-date">{{ $episodDate }}</span>
            <span class="text-primary run-time">{{ $episodTime }}</span>
        </div>
        <a href="{{ route('frontend.episode') }}">
            <h5 class="epi-name text-white mb-0">{{ $episodTitle }}</h5>
        </a>
    </div>
</div>
