@if (isset($isFlatpickr) && $isFlatpickr)
    <!-- Flatpickr Script -->
    <script src="{{ asset('frontend/vendor/flatpickr/dist/flatpickr.min.js') }}"></script>
    <script src="{{ asset('frontend/js/plugins/flatpickr.js') }}" defer></script>
@endif

@if (isset($isSweetalert) && $isSweetalert)
    <!-- Sweet-alert Script -->
    <script src="{{ asset('frontend/vendor/sweetalert2/sweetalert2.min.js') }}" async></script>
    <script src="{{ asset('frontend/js/plugins/sweet-alert.js') }}" defer></script>
@endif

@if (isset($isSwiperSlider) && $isSwiperSlider)
    <!-- SwiperSlider Script -->
    <script src="{{ asset('frontend/vendor/swiperSlider/swiper.min.js') }}"></script>
@endif

@if (isset($isVideoJs) && $isVideoJs)
    <script src="{{ asset('frontend/vendor/video/video.min.js') }}"></script>
    <script src="{{ asset('frontend/vendor/videojs-youtube-master/youtube.js') }}"></script>
@endif

@if (isset($isSelect2) && $isSelect2)
    <!-- Select2 Script -->
    <script src="{{ asset('frontend/js/plugins/select2.js') }}" defer></script>
@endif

@if (isset($isNoUISlider) && $isNoUISlider)
    <!-- NoUI Slider Script -->
    <script src="{{ asset('frontend/vendor/noUiSilder/script/nouislider.min.js') }}"></script>
    <script src="{{ asset('frontend/js/plugins/nouslider.js') }}" defer></script>
@endif

@if (isset($isFslightbox) && $isFslightbox)
    <!-- fslightbox Script -->
    <script src="{{ asset('frontend/js/plugins/fslightbox.js') }}" defer></script>
@endif
