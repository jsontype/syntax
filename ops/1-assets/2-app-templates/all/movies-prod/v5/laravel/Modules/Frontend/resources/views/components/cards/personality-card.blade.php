<img src="{{ $image }}" alt="personality" class="img-fluid object-cover mb-4 rounded" loading="lazy" />
<div class="text-center">
    <h6 class="mb-0">
        <a href="{{ route('frontend.cast_details') }}"
            class="font-size-14 text-decoration-none cast-title text-capitalize">{{ $title }}</a>
    </h6>
    <a href="{{ route('frontend.cast_details') }}"
        class="font-size-14 text-decoration-none text-capitalize text-body">{{ $category }}</a>
</div>
