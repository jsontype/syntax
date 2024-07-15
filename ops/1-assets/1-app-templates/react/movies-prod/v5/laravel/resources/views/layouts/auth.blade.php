<!DOCTYPE html>
<html lang="en"  class="theme-fs-md">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Auth</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('frontend/images/favicon.ico') }}" />
    <!-- Scripts -->
    @vite(['resources/css/app.scss', 'public/dashboard/scss/streamit.scss', 'public/dashboard/scss/dashboard-custom.scss', 'public/dashboard/scss/customizer.scss', 'public/dashboard/scss/pro.scss', 'public/dashboard/scss/rtl.scss', 'public/dashboard/scss/custom.scss', 'resources/js/app.js'])

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap"
        rel="stylesheet">
</head>

<body class="dark theme-color-default sign-in-page" style="background: url({{ asset('dashboard/images/login/login.jpg') }}) no-repeat scroll 0 0; background-size: cover">
    @yield('content')

    @include('components.partials.scripts.script')
</body>

</html>
