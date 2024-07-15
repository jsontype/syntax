<x-layouts.GuestLayout>
   <section class="sign-in-page">
      <div class="container h-100">
         <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-6 col-sm-12 col-12 ">
               <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                     <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-0">Reset Password</h3>
                        <p class="text-white">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form class="mt-4" action="{{ route('login') }}" data-toggle="validator">
                           <div class="form-group">
                             <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Email address" autocomplete="off" required>                                
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
      </div>
   </section>
</x-layouts.GuestLayout>