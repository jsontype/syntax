<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
           <div class="col-sm-12 col-lg-12">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Simple Wizard</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <form id="form-wizard1" class="text-center mt-4">
                       <ul id="top-tab-list" class="p-0">
                          <li class="active" id="account">
                             <a href="javascript:void();">
                                <i class="ri-lock-unlock-line"></i><span>Account</span>
                             </a>
                          </li>
                          <li id="personal">
                             <a href="javascript:void();">
                                <i class="ri-user-fill"></i><span>Personal</span>
                             </a>
                          </li>
                          <li id="payment">
                             <a href="javascript:void();">
                                <i class="ri-camera-fill"></i><span>Image</span>
                             </a>
                          </li>
                          <li id="confirm">
                             <a href="javascript:void();">
                                <i class="ri-check-fill"></i><span>Finish</span>
                             </a>
                          </li>
                       </ul>
                       <!-- fieldsets -->
                       <fieldset>
                          <div class="form-card text-left">
                             <div class="row">
                                <div class="col-7">
                                   <h3 class="mb-4">Account Information:</h3>
                                </div>
                                <div class="col-5">
                                   <h2 class="steps">Step 1 - 4</h2>
                                </div>
                             </div>
                             <div class="row">
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Email: *</label>
                                      <input type="email" class="form-control" name="email" placeholder="Email Id" />
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Username: *</label>
                                      <input type="text" class="form-control" name="uname" placeholder="UserName" />
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Password: *</label>
                                      <input type="password" class="form-control" name="pwd" placeholder="Password" />
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Confirm Password: *</label>
                                      <input type="password" class="form-control" name="cpwd" placeholder="Confirm Password" />
                                   </div>
                                </div>
                             </div>
                          </div>
                          <button type="button" name="next" class="btn btn-primary next action-button float-right" value="Next" >Next</button>
                       </fieldset>
                       <fieldset>
                          <div class="form-card text-left">
                             <div class="row">
                                <div class="col-7">
                                   <h3 class="mb-4">Personal Information:</h3>
                                </div>
                                <div class="col-5">
                                   <h2 class="steps">Step 2 - 4</h2>
                                </div>
                             </div>
                             <div class="row">
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>First Name: *</label>
                                      <input type="text" class="form-control" name="fname" placeholder="First Name" />
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Last Name: *</label>
                                      <input type="text" class="form-control" name="lname" placeholder="Last Name" />
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Contact No.: *</label>
                                      <input type="text" class="form-control" name="phno" placeholder="Contact No." />
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Alternate Contact No.: *</label>
                                      <input type="text" class="form-control" name="phno_2" placeholder="Alternate Contact No." />
                                   </div>
                                </div>
                             </div>
                          </div>
                          <button type="button" name="next" class="btn btn-primary next action-button float-right" value="Next" >Next</button>
                          <button type="button" name="previous" class="btn btn-dark previous action-button-previous float-right mr-3" value="Previous" >Previous</button>
                       </fieldset>
                       <fieldset>
                          <div class="form-card text-left">
                             <div class="row">
                                <div class="col-7">
                                   <h3 class="mb-4">Image Upload:</h3>
                                </div>
                                <div class="col-5">
                                   <h2 class="steps">Step 3 - 4</h2>
                                </div>
                             </div>
                             <div class="form-group">
                                <label>Upload Your Photo:</label>
                                <input type="file" class="form-control" name="pic" accept="image/*">
                             </div>
                             <div class="form-group">
                                <label>Upload Signature Photo:</label>
                                <input type="file" class="form-control" name="pic-2" accept="image/*">
                             </div>
                          </div>
                          <button type="button" name="next" class="btn btn-primary next action-button float-right" value="Submit" >Submit</button>
                          <button type="button" name="previous" class="btn btn-dark previous action-button-previous float-right mr-3" value="Previous" >Previous</button>
                       </fieldset>
                       <fieldset>
                          <div class="form-card">
                             <div class="row">
                                <div class="col-7">
                                   <h3 class="mb-4 text-left">Finish:</h3>
                                </div>
                                <div class="col-5">
                                   <h2 class="steps">Step 4 - 4</h2>
                                </div>
                             </div>
                             <br><br>
                             <h2 class="text-success text-center"><strong>SUCCESS !</strong></h2>
                             <br>
                             <div class="row justify-content-center">
                                <div class="col-3"> <img src="{{ asset('dashboard/images/page-img/img-success.png') }}" class="fit-image" alt="fit-image"> </div>
                             </div>
                             <br><br>
                             <div class="row justify-content-center">
                                <div class="col-7 text-center">
                                   <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
                                </div>
                             </div>
                          </div>
                       </fieldset>
                    </form>
                 </div>
              </div>
           </div>
        </div>
     </div>
</x-layouts.dashboard>