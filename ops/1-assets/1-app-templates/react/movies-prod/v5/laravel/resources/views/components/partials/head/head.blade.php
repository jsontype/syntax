<link rel="shortcut icon" href="{{ asset('dashboard/images/favicon.ico') }}">
@if (isset($isTour) && $isTour)
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/sheperd/dist/css/sheperd.css') }}" />
@endif
@if (isset($isFlatpickr) && $isFlatpickr)
    <!-- Flatpickr css -->
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/flatpickr/dist/flatpickr.min.css') }}" />
@endif
@if (isset($isChoisejs) && $isChoisejs)
    <!-- Choisejs css -->
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/choiceJS/style/choices.min.css') }}" />
@endif
@if (isset($isVectorMap) && $isVectorMap)
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/leaflet/leaflet.css') }}" />
@endif
@if (isset($isSweetalert) && $isSweetalert)
    <!-- Sweetlaert2 css -->
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/sweetalert2/dist/sweetalert2.min.css') }}" />
@endif
@if (isset($isQuillEditor) && $isQuillEditor)
    <!-- Quill Editor css -->
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/quill/quill.snow.css') }}" />
@endif
@if (isset($isNoUISlider) && $isNoUISlider)
    <!-- NoUI Slider css -->
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/noUiSilder/style/nouislider.min.css') }}" />
@endif

{{-- select --}}
<link rel="stylesheet" href="{{ asset('dashboard/vendor/select2/dist/css/select2.min.css') }}" />

@if (isset($isFullCalendar) && $isFullCalendar)
    <!-- Fullcalender CSS -->
    <link rel='stylesheet' href="{{ asset('dashboard/vendor/fullcalendar/core/main.css') }}" />
    <link rel='stylesheet' href="{{ asset('dashboard/vendor/fullcalendar/daygrid/main.css') }}" />
    <link rel='stylesheet' href="{{ asset('dashboard/vendor/fullcalendar/timegrid/main.css') }}" />
    <link rel='stylesheet' href="{{ asset('dashboard/vendor/fullcalendar/list/main.css') }}" />
@endif
@if (isset($isUppy) && $isUppy)
    <!-- Uppy Css -->
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/uppy/uppy.min.css') }}" />
@endif


@if (isset($isSwiperSlider) && $isSwiperSlider)
    <link rel="stylesheet" href="{{ asset('dashboard/vendor/swiperSlider/swiper-bundle.min.css') }}" />
@endif

<!-- Google Font -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap"
    rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
