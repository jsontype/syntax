{{-- <x-guest-layout>
    <section class="login-content">
        <div class="container-fluid h-100">
           <div class="row justify-content-center align-items-center height-self-center">
              <div class="col-md-5 col-sm-12 col-12 align-self-center">
                 <div class="sign-user_card">
                    <div class="logo-detail">
                          <div class="d-flex align-items-center"><img src="{{asset('images/logo.png')}}" class="img-fluid rounded-normal light-logo logo" alt="logo"> <h4 class="logo-title ml-3">NotePlus</h4></div>
                    </div> 
                    <h3 class="mb-2">Success !</h3>
                    <p class="cnf-mail m-auto mb-1">A email has been send to youremail@domain.com. Please check for an
                       email from company and click
                       on the included link to reset your password.</p>
                    <div class="d-inline-block w-100">
                       <a href="{{route('dashboard.1')}}" class="btn btn-primary mt-3">Back to Home<a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
</x-guest-layout> --}}

<x-layouts.GuestLayout>
   <section class="sign-in-page">
      <div class="container h-100">
         <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-6 col-sm-12 col-12 ">
               <div class="sign-user_card ">
                 <div class="sign-in-page-data">
                   <div class="sign-in-from w-100 m-auto">
                     <img src="{{ asset('dashboard/images/login/mail.png ')}}" width="80"  alt="">
                      <h3 class="mt-3 mb-0">Success !</h3>
                      <p class="text-white">A email has been send to <a href="https://iqonic.design/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5f26302a2d3a323e36331f3b30323e3631713c303271">[email&#160;protected]</a> Please check for an email from company and click on the included link to reset your password.</p>
                     <div class="d-inline-block w-100">
                         <a href="{{ route('dashboard.home') }}" class="btn btn-primary mt-3">Back to Home</a>
                     </div>
                   </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</x-layouts.GuestLayout>