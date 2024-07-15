@extends('layouts.guest')
@section('content')
<section class="sign-in-page" style="background-image: url('{{ asset('dashboard/images/login/login.webp') }}')">
    <div class="container">
       <div class="row justify-content-center align-items-center height-self-center">
          <div class="col col-lg-5 col-md-12 align-self-center form-padding">
             <div class="sign-user_card">
                <div class="sign-in-page-data">
                   <div class="sign-in-from w-100 m-auto">
                      <h2 class="mb-2">{{__('authentication.account_de_activate')}}</h2>
                      <p class="">{{__('authentication.details')}}</p>

                      <form class="mt-4" action="">
                         <div class="form-group">
                            <label for="email">{{__('authentication.account_email')}}</label>
                            <input class="form-control" id="email" type="email" aria-describedby="email"
                               placeholder="{{__('authentication.xyz@example')}}"></input>
                         </div>
                         <div class="form-group mt-3">
                            <label for="name">{{__('authentication.username')}}</label>
                            <input class="form-control" id="name" type="text" aria-describedby="name" placeholder="{{__('authentication.xyz')}}">
                            </input>
                         </div>
                         <button class="btn btn-primary mt-2">{{__('authentication.de_activate')}}</button>
                      </form>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
 @endsection
