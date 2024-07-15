@extends('layouts.auth')

@section('content')
<section class= sign-up-page style="background-image: url('{{ asset('dashboard/images/login/login.webp') }}')" >
    <x-auth-card>
        <!-- Validation Errors -->

        <!-- Social login -->
        
        <x-auth-social-login />
        <div class="sign-in-page-data">
            <div class="sign-in-from w-100 m-auto">
                <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('register') }}">
            @csrf
            <div class="row">
            <!-- contect  -->
            <div class="col-md-6">
                <div class="mb-3">
                    <x-label for="mobile" :value="__('Contact No')" />

                    <x-input id="mobile" type="number" name="mobile" required placeholder="Enter your mobile number" />

                </div>
                </div>

            <!-- email add -->
            <div class="col-md-6">
                <div class="mb-3">
                    <x-label for="email" :value="__('E-mail')" />

                    <x-input id="email" type="email" name="email" :value="old('email')" required placeholder="Enter email"  />
                </div>
                </div>


            <!-- firdt name -->
            <div class="col-md-6">
                <div class="mb-3">
                <x-label for="first_name" :value="__('First Name')" />

                <x-input id="first_name" type="text" name="first_name" :value="old('first_name')" required autofocus placeholder=" First name" />

                </div>
            </div>
            <!-- last name  -->
            <div class="col-md-6">
                <div class="mb-3">
                <x-label for="last_name" :value="__('Last Name')" />

                <x-input id="last_name" type="text" name="last_name" :value="old('last_name')" required autofocus placeholder="Your Last Name" />

                </div>
            </div>

            <!-- Password -->
            <div class="col-md-6">
            <div class="mb-3">
                <x-label for="password" :value="__('Password')" />

                <x-input id="password" type="password" name="password" required autocomplete="new-password" placeholder=" Password" />

            </div>
            </div>

            <!-- Confirm Password -->
            <div class="col-md-6">
            <div class="mb-b">
                <x-label for="password_confirmation" :value="__('Repeat Password')" />

                <x-input id="password_confirmation" type="password" name="password_confirmation" required placeholder=" Password" />

            </div>
            </div>
            </div>
            <div class="form-check my-2"><input type="radio" id="customRadio1" name="customRadio"
                class="form-check-input"><label class="form-check-label" for="customRadio1">Premium-$39 /
                3 Months with a 5 day free trial</label></div>
          <div class="form-check"><input type="radio" id="customRadio2" name="customRadio"
                class="form-check-input"><label class="form-check-label" for="customRadio2"> Basic- $19 /
                1 Month</label></div>
          <div class="form-check"><input type="radio" id="customRadio3" name="customRadio"
                class="form-check-input"><label class="form-check-label"
                for="customRadio3">Free-Free</label></div>
                <x-button class="btn btn-btn btn-primary my-2">
                    {{ __('Sign Up') }}
                </x-button>
            </div>
        </form>
        </div>
        </div>
        <div class="mt-3">
            <div class="d-flex justify-content-center links">Already have an account? <a class="text-primary ms-2"
                  href="{{route('login')}}">Sign In</a> </div>
         </div>

        <x-slot name="extra">
            <span>
                {{ __('Already registered?') }} <a href="{{ route('login') }}">Login</a>.
            </span>
        </x-slot>

    </x-auth-card>
    </section>
@endsection
