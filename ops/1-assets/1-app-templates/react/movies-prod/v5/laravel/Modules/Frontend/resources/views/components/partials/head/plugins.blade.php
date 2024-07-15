<!-- Favicon -->
<link rel="shortcut icon" href="{{ asset('frontend/images/favicon.ico') }}" />

<!-- font-awesome css -->
<link rel="stylesheet" href="{{ asset('frontend/vendor/font-awesome/css/all.min.css') }}" />

<!-- Iconly css -->
<link rel="stylesheet" href="{{ asset('frontend/vendor/iconly/css/style.css') }}" />

<!-- Animate css -->
<link rel="stylesheet" href="{{ asset('frontend/vendor/animate.min.css') }}" />

@if (isset($isSwiperSlider) && $isSwiperSlider)
    <!-- SwiperSlider css -->
    <link rel="stylesheet" href="{{ asset('frontend/vendor/swiperSlider/swiper.min.css') }}">
@endif

@if (isset($isFlatpickr) && $isFlatpickr)
    <!-- Flatpickr css -->
    <link rel="stylesheet" href="{{ asset('frontend/vendor/flatpickr/dist/flatpickr.min.css') }}" />
@endif

@if (isset($isSweetalert) && $isSweetalert)
    <!-- Sweetlaert2 css -->
    <link rel="stylesheet" href="{{ asset('frontend/vendor/sweetalert2/sweetalert2.min.css') }}" />
@endif

@if (isset($isVideoJs) && $isVideoJs)
    <link rel="stylesheet" href="{{ asset('frontend/vendor/video/video-js.css') }}" />
@endif

@if (isset($isNoUISlider) && $isNoUISlider)
    <!-- NoUI Slider css -->
    <link rel="stylesheet" href="{{ asset('frontend/vendor/noUiSilder/style/nouislider.min.css') }}" />
@endif
