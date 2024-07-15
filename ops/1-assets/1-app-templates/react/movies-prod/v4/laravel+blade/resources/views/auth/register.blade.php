<x-layouts.GuestLayout>
   
    
   <section class="sign-in-page">
       <div class="container">
          <div class="row justify-content-center align-items-center height-self-center">
             <div class="col-lg-7 col-md-12 align-self-center">
                <div class="sign-user_card ">                    
                   <div class="sign-in-page-data">
                      <div class="sign-in-from w-100 m-auto">
                          <!-- Session Status -->
                         <x-auth-session-status class="mb-4" :status="session('status')" />

                         <!-- Validation Errors -->
                         <x-auth-validation-errors class="mb-4" :errors="$errors" />
                         <form method="post" action="{{ route('register') }}" data-toggle="validator" class="">
                            {{csrf_field()}}
                            <div class="row">
                               <div class="col-md-6">
                                  <div class="form-group">
                                     <label>Username</label>
                                     <input type="text" class="form-control mb-0" name="user_name" value="{{old('user_name')}}" id="username" required autocomplete="off" placeholder="Enter username ">
                                  </div>
                               </div>
                               <div class="col-md-6">
                                  <div class="form-group">  
                                     <label>E-mail</label>                               
                                     <input type="email" class="form-control mb-0" name="email" value="{{old('email')}}" id="email" required autocomplete="off" placeholder=" Enter email">
                                  </div>
                               </div>
                               <div class="col-md-6">
                                  <div class="form-group">
                                     <label>First Name</label>
                                     <input type="text" class="form-control mb-0" name="first_name" value="{{old('first_name')}}"  required  autocomplete="off" placeholder="Enter First Name ">
                                  </div>
                               </div>
                               <div class="col-md-6">
                                  <div class="form-group">  
                                     <label>Last Name</label>                               
                                     <input type="text" class="form-control mb-0" name="last_name" value="{{old('last_name')}}" id="lastname" required autocomplete="off" placeholder=" Enter Last Name">
                                  </div>
                               </div>
                               <div class="col-md-6">
                                  <div class="form-group">   
                                     <label>Password</label>                              
                                     <input type="password" class="form-control mb-0" name="password" required autocomplete="new-password" placeholder=" Enter Password">
                                  </div>
                               </div>
                               <div class="col-md-6">
                                  <div class="form-group"> 
                                     <label>Repeat Password</label>                                
                                     <input type="password" class="form-control mb-0" name="password_confirmation" required autocomplete="off" placeholder=" Confirm Password">
                                  </div>
                               </div>
                               
                            </div>
                            <div class="custom-control custom-radio mt-2">
                               <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                               <label class="custom-control-label" for="customRadio1">Premium-$39 / 3 Months
                                  with a 5 day free trial</label>
                             </div>
                             <div class="custom-control custom-radio mt-2">
                               <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                               <label class="custom-control-label" for="customRadio2"> Basic- $19 / 1 Month</label>
                             </div>
                             <div class="custom-control custom-radio mt-2">
                               <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                               <label class="custom-control-label" for="customRadio3">Free-Free</label>
                             </div>
                             
                             <button type="submit" class="btn btn-primary my-2">Sign Up</button>     
                            <div class="mt-3 ">
                               <div class="d-flex justify-content-center links">
                               Already have an Account &nbsp;<a href="{{route('login')}}" class="text-primary">Sign In</a>
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
