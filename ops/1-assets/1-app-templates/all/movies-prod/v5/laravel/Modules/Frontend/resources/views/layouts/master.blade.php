<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="dark">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>{{ config('app.name', 'Laravel') }} - Responsive Bootstrap 5 Admin Dashboard Template</title>

    @include('frontend::components.partials.head.plugins')
    {{-- Vite CSS --}}
    {{ module_vite('build-frontend', 'resources/assets/sass/app.scss') }}

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap"
        rel="stylesheet">

</head>

<body class="{{ $bodyClass ?? '' }}">

    @include('frontend::components.loader-component')

    <main class="main-content">

        @include('frontend::components.partials.header-default')

        @if (isset($isBreadCrumb) && $isBreadCrumb)
            @include('frontend::components.breadcrumb-widget')
        @endif

        @yield('content')
    </main>

    @include('frontend::components.partials.footer-default')


    <div id="back-to-top" style="display: none;">
        <a class="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white" id="top" href="#top">
            <i class="fa-solid fa-chevron-up"></i>
        </a>
    </div>

@include('frontend::components.partials.setting')
    {{-- Vite JS --}}
    {{ module_vite('build-frontend', 'resources/assets/js/app.js') }}

    @include('frontend::components.partials.scripts.plugins')

    @include('frontend::components.partials.scripts.script')
</body>
