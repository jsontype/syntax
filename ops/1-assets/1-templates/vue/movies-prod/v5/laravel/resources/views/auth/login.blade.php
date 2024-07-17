@extends('layouts.auth')

@section('content')
<section class= sign-in-page style="background-image: url('{{ asset('dashboard/images/login/login.webp') }}')" >
    <x-auth-card >
    <!-- style="background-image: url('{{ asset('dashboard/images/login/login.webp') }}')" -->

        <!-- Session Status -->


        <!-- Social Login -->


        <!-- Validation Errors -->

        <div class="sign-in-page-data" >
        <div class="sign-in-from w-100 m-auto">
            <x-slot name="logo">
                <a href="/">
                    <x-application-logo />
                </a>
            </x-slot>
            <x-auth-session-status class="mb-4" :status="session('status')" />
            <x-auth-social-login />
            <x-auth-validation-errors class="mb-4" :errors="$errors" />
        <form method="POST" action="{{ $url ?? route('login') }}" class="mt-4" >
            @csrf

            <!-- Email Address -->
            <div class="mb-3">

                <x-input id="email" type="email" name="email" :value="old('email', 'admin@demo.com')" required autofocus placeholder="{{ __('Enter email') }}" />

            </div>

            <!-- Password -->
            <div class="mb-3">

                <x-input id="password"  type="password"  name="password"  required  autocomplete="current-password"  for="password" value="12345678" placeholder="password"/>

            </div>
            <div class="d-flex justify-content-between align-items-cente sign-info">

            <x-button>
                {{ __('Sign in') }}
            </x-button>

            <!-- Remember Me -->
            <div class="custom-control custom-checkbox d-inline-block"><input id="remember_me" type="checkbox" class="form-check-input" name="remember">
                <label class="form-check-label"
                for="customCheck"><span class="ms-2">{{ __('Remember me') }}</span></label></div>
            </div>

        </form>
        </div>
        </div>
        <div class="mt-3">
            <div class="d-flex justify-content-center links">Don't have an
                account?
                <a class="text-primary ms-2" href="{{route('register')}}">Sign Up</a>
             </div>
             <div class="d-flex justify-content-center links">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif
        </div>
        </div>

        <x-slot name="extra">
            @if (Route::has('register'))
                <p class="text-center text-gray-600 mt-4">
                    Do not have an account? <a href="{{ route('register') }}"
                        class="underline hover:text-gray-900">Register</a>.
                </p>
            @endif
        </x-slot>

    </x-auth-card>
    </section>
    <script type="text/javascript">
        function domId(name) {
            return document.getElementById(name)
        }

        function setLoginCredentials(type) {
            domId('email').value = domId(type + '_email').textContent
            domId('password').value = domId(type + '_password').textContent
        }
    </script>
@endsection
