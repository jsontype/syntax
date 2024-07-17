<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="dark">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>{{ config('app.name', 'Laravel') }} - Responsive Bootstrap 5 Admin Dashboard Template</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('frontend/images/favicon.ico') }}" />
    {{-- Vite CSS --}}
    {{ module_vite('build-frontend', 'resources/assets/sass/app.scss') }}

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap"
        rel="stylesheet">
    <!-- font-awesome css -->
    <link rel="stylesheet" href="{{ asset('frontend/vendor/font-awesome/css/all.min.css') }}" />
</head>

<body class="{{ $bodyClass ?? '' }}">

    @include('frontend::components.loader-component')

    <main class="main-content">

        @yield('content')

    </main>

    @include('frontend::components.partials.setting')
    {{-- Vite JS --}}
    {{ module_vite('build-frontend', 'resources/assets/js/app.js') }}

    @include('frontend::components.partials.scripts.script')
</body>