<x-layouts.GuestLayout>
    <body>
        <section class="sign-in-page">
            <div class="container">
               <div class="row justify-content-center align-items-center height-self-center">
                  <div class="col-lg-5 col-md-12 align-self-center">
                     <div class="sign-user_card ">                    
                        <div class="sign-in-page-data">
                           <div class="sign-in-from w-100 m-auto">
                              <h3 class="mb-3 text-center">Reset Password</h3>
                              <p class="text-body">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                              <form class="mt-4" action="{{route('frontend.home')}}">
                                 <div class="form-group">                                 
                                    <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" autocomplete="off" required>
                                 </div>                           
                                 <div class="d-inline-block w-100">
                                 <a href="{{route('login')}}" class="btn btn-primary float-right">Reset Password</a>
                              </div>             
                              </form>
                           </div>
                        </div>                    
                     </div>
                  </div>
               </div>
               <!-- Sign in END -->
               <!-- color-customizer -->
            </div>
         </section>
    </body>
</x-layouts.GuestLayout>