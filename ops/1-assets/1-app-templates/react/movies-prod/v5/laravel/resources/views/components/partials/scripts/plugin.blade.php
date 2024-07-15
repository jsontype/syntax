@if (isset($isTour) && $isTour)
    <!-- Tour plugin Start -->
    <script src="{{ asset('dashboard/vendor/sheperd/dist/js/sheperd.min.js') }}"></script>
    <script src="{{ asset('dashboard/js/plugins/tour.js') }}" defer></script>
@endif

@if (isset($isMasonry) && $isMasonry)
    <!-- Masonry plugin Start -->
    <script src="{{ asset('dashboard/vendor/masonry/masonry.pkgd.min.js') }}"></script>
@endif

@if (isset($isFlatpickr) && $isFlatpickr)
    <!-- Flatpickr Script -->
    <script src="{{ asset('dashboard/vendor/flatpickr/dist/flatpickr.min.js') }}"></script>
    <script src="{{ asset('dashboard/js/plugins/flatpickr.js') }}" defer></script>
@endif

@if (isset($isVectorMap) && $isVectorMap)
    <script src="{{ asset('dashboard/vendor/leaflet/leaflet.js') }}"></script>
    <script src="{{ asset('dashboard/js/charts/vectore-chart.js') }}" defer></script>
@endif

@if (isset($isChoisejs) && $isChoisejs)
    <!-- Choisejs Script -->
    <script src="{{ asset('dashboard/vendor/choiceJS/script/choices.min.js') }}"></script>
    <script src="{{ asset('dashboard/js/plugins/choice.js') }}" defer></script>
@endif

@if (isset($isSelect2) && $isSelect2)
    <!-- Select2 Script -->
    <script src="{{ asset('dashboard/js/plugins/select2.js') }}" defer></script>
@endif

@if (isset($isFormWizard) && $isFormWizard)
    <!-- Form Wizard Script -->
    <script src="{{ asset('dashboard/js/plugins/form-wizard.js') }}" defer></script>
@endif

@if (isset($isQuillEditor) && $isQuillEditor)
    <!-- Quill Editor Script -->
    <script src="{{ asset('dashboard/vendor/quill/quill.min.js') }}" async></script>
    <script src="{{ asset('dashboard/js/plugins/quill.js') }}" defer></script>
@endif

@if (isset($isCircleProgress) && $isCircleProgress)
    <!-- Circle-Progress Script -->
    <script src="{{ asset('dashboard/js/plugins/circle-progress.js') }}" async></script>
    <script src="{{ asset('dashboard/js/plugins/custom-circle-progress.js') }}" defer></script>
@endif

<!-- Slider-tab Script -->
<script src="{{ asset('dashboard/js/plugins/slider-tabs.js') }}"></script>

@if (isset($isFslightbox) && $isFslightbox)
    <!-- fslightbox Script -->
    <script src="{{ asset('dashboard/js/plugins/fslightbox.js') }}" defer></script>
@endif

@if (isset($isSweetalert) && $isSweetalert)
    <!-- Sweet-alert Script -->
    <script src="{{ asset('dashboard/vendor/sweetalert2/dist/sweetalert2.min.js') }}" async></script>
    <script src="{{ asset('dashboard/js/plugins/sweet-alert.js') }}" defer></script>
@endif

@if (isset($isNoUISlider) && $isNoUISlider)
    <!-- NoUI Slider Script -->
    <script src="{{ asset('dashboard/vendor/noUiSilder/script/nouislider.min.js') }}" async></script>
@endif

@if (isset($isUppy) && $isUppy)
    <!-- Uppy Script -->
    <script src="{{ asset('dashboard/vendor/uppy/uppy.min.js') }}"></script>
    <script src="{{ asset('dashboard/js/plugins/uppy.js') }}" defer></script>
@endif

@if (isset($isSwiperSlider) && $isSwiperSlider)
    <!-- SwiperSlider Script -->
    <script src="{{ asset('dashboard/vendor/swiperSlider/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('dashboard/js/plugins/swiper-slider.js') }}" defer></script>
@endif
