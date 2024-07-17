<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        @include('partials.frontend._head')
        @include('partials.dashboard._head')

    </head>
    <body class=" " >
        <div id="loading">
            @include('partials.frontend._body_loader')
        </div>
        
            {{ $slot }}
        
         {{-- @include('partials.frontend._scripts') --}}
         @include('partials.dashboard._scripts')
         
        

  .
</html>
