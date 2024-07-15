@if (isset($linkButton) && $linkButton)
    <div class="iq-button ">
        <a href="{{ $buttonUrl }}" class="btn text-capitalize position-relative">
            <span class="button-text">{{ $buttonTitle }}</span>
        </a>
    </div>
@endif
<div class="iq-button">
    <a href="{{ $buttonUrl}}" class="btn text-uppercase position-relative">
        <span class="button-text">{{ $buttonTitle}}</span>
        <i class="fa-solid fa-play"></i>
    </a>
</div>



