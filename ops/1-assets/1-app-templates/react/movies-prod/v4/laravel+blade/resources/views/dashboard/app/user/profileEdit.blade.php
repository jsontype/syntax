<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
           <div class="col-lg-12">
              <div class="iq-card">
                 <div class="iq-card-body p-0">
                    <div class="iq-edit-list">
                       <ul class="iq-edit-profile d-flex nav nav-pills">
                          <li class="col-md-3 p-0">
                             <a class="nav-link active" data-toggle="pill" href="#personal-information">
                                Personal Information
                             </a>
                          </li>
                          <li class="col-md-3 p-0">
                             <a class="nav-link" data-toggle="pill" href="#chang-pwd">
                                Change Password
                             </a>
                          </li>
                          <li class="col-md-3 p-0">
                             <a class="nav-link" data-toggle="pill" href="#emailandsms">
                                Email and SMS
                             </a>
                          </li>
                          <li class="col-md-3 p-0">
                             <a class="nav-link" data-toggle="pill" href="#manage-contact">
                                Manage Contact
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
           <div class="col-lg-12">
              <div class="iq-edit-list-data">
                 <div class="tab-content">
                    <div class="tab-pane fade active show" id="personal-information" role="tabpanel">
                       <div class="iq-card">
                          <div class="iq-card-header d-flex justify-content-between">
                             <div class="iq-header-title">
                                <h4 class="card-title">Personal Information</h4>
                             </div>
                          </div>
                          <div class="iq-card-body">
                             <form>
                                <div class="form-group row align-items-center">
                                   <div class="col-md-12">
                                      <div class="profile-img-edit">
                                         <img class="profile-pic" src="{{ asset('dashboard/images/user/11.png') }}" alt="profile-pic">
                                         <div class="p-image">
                                            <i class="ri-pencil-line upload-button"></i>
                                            <input class="file-upload" type="file" accept="image/*"/>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class=" row align-items-center">
                                   <div class="form-group col-sm-6">
                                      <label for="fname">First Name:</label>
                                      <input type="text" class="form-control" id="fname" value="Barry">
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label for="lname">Last Name:</label>
                                      <input type="text" class="form-control" id="lname" value="Tech">
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label for="uname">User Name:</label>
                                      <input type="text" class="form-control" id="uname" value="Barry@01">
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label for="cname">City:</label>
                                      <input type="text" class="form-control" id="cname" value="Atlanta">
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label class="d-block">Gender:</label>
                                      <div class="custom-control custom-radio custom-control-inline">
                                         <input type="radio" id="customRadio6" name="customRadio1" class="custom-control-input" checked="">
                                         <label class="custom-control-label" for="customRadio6"> Male </label>
                                      </div>
                                      <div class="custom-control custom-radio custom-control-inline">
                                         <input type="radio" id="customRadio7" name="customRadio1" class="custom-control-input">
                                         <label class="custom-control-label" for="customRadio7"> Female </label>
                                      </div>
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label>Date Of Birth:</label>
                                      <input class="form-control date-input basicFlatpickr" type="text" value="2020-12-18">
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label>Marital Status:</label>
                                      <select class="form-control" id="exampleFormControlSelect1">
                                         <option selected="">Single</option>
                                         <option>Married</option>
                                         <option>Widowed</option>
                                         <option>Divorced</option>
                                         <option>Separated </option>
                                      </select>
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label>Age:</label>
                                      <select class="form-control" id="exampleFormControlSelect2">
                                         <option>12-18</option>
                                         <option>19-32</option>
                                         <option selected="">33-45</option>
                                         <option>46-62</option>
                                         <option>63 > </option>
                                      </select>
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label>Country:</label>
                                      <select class="form-control" id="exampleFormControlSelect3">
                                         <option>Caneda</option>
                                         <option>Noida</option>
                                         <option selected="">USA</option>
                                         <option>India</option>
                                         <option>Africa</option>
                                      </select>
                                   </div>
                                   <div class="form-group col-sm-6">
                                      <label>State:</label>
                                      <select class="form-control" id="exampleFormControlSelect4">
                                         <option>California</option>
                                         <option>Florida</option>
                                         <option selected="">Georgia</option>
                                         <option>Connecticut</option>
                                         <option>Louisiana</option>
                                      </select>
                                   </div>
                                   <div class="form-group col-sm-12">
                                      <label>Address:</label>
                                      <textarea class="form-control" name="address" rows="5" style="line-height: 22px;">
37 Cardinal Lane
Petersburg, VA 23803
United States of America
Zip Code: 85001
                                      </textarea>
                                   </div>
                                </div>
                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <button type="reset" class="btn iq-bg-danger">Cancel</button>
                             </form>
                          </div>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="chang-pwd" role="tabpanel">
                       <div class="iq-card">
                          <div class="iq-card-header d-flex justify-content-between">
                             <div class="iq-header-title">
                                <h4 class="card-title">Change Password</h4>
                             </div>
                          </div>
                          <div class="iq-card-body">
                             <form>
                                <div class="form-group">
                                   <label for="cpass">Current Password:</label>
                                   <a href="javascripe:void();" class="float-right">Forgot Password</a>
                                   <input type="Password" class="form-control" id="cpass" value="">
                                </div>
                                <div class="form-group">
                                   <label for="npass">New Password:</label>
                                   <input type="Password" class="form-control" id="npass" value="">
                                </div>
                                <div class="form-group">
                                   <label for="vpass">Verify Password:</label>
                                   <input type="Password" class="form-control" id="vpass" value="">
                                </div>
                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <button type="reset" class="btn iq-bg-danger">Cancel</button>
                             </form>
                          </div>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="emailandsms" role="tabpanel">
                       <div class="iq-card">
                          <div class="iq-card-header d-flex justify-content-between">
                             <div class="iq-header-title">
                                <h4 class="card-title">Email and SMS</h4>
                             </div>
                          </div>
                          <div class="iq-card-body">
                             <form>
                                <div class="form-group row align-items-center">
                                   <label class="col-8 col-md-3" for="emailnotification">Email Notification:</label>
                                   <div class="col-4 col-md-9 custom-control custom-switch">
                                      <input type="checkbox" class="custom-control-input" id="emailnotification" checked="">
                                      <label class="custom-control-label" for="emailnotification"></label>
                                   </div>
                                </div>
                                <div class="form-group row align-items-center">
                                   <label class="col-8 col-md-3" for="smsnotification">SMS Notification:</label>
                                   <div class="col-4 col-md-9 custom-control custom-switch">
                                      <input type="checkbox" class="custom-control-input" id="smsnotification" checked="">
                                      <label class="custom-control-label" for="smsnotification"></label>
                                   </div>
                                </div>
                                <div class="form-group row align-items-center">
                                   <label class="col-md-3" for="npass">When To Email</label>
                                   <div class="col-md-9">
                                      <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" id="email01">
                                         <label class="custom-control-label" for="email01">You have new notifications.</label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" id="email02">
                                         <label class="custom-control-label" for="email02">You're sent a direct message</label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" id="email03" checked="">
                                         <label class="custom-control-label" for="email03">Someone adds you as a connection</label>
                                      </div>
                                   </div>
                                </div>
                                <div class="form-group row align-items-center">
                                   <label class="col-md-3" for="npass">When To Escalate Emails</label>
                                   <div class="col-md-9">
                                      <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" id="email04">
                                         <label class="custom-control-label" for="email04"> Upon new order.</label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" id="email05">
                                         <label class="custom-control-label" for="email05"> New membership approval</label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" id="email06" checked="">
                                         <label class="custom-control-label" for="email06"> Member registration</label>
                                      </div>
                                   </div>
                                </div>
                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <button type="reset" class="btn iq-bg-danger">Cancel</button>
                             </form>
                          </div>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="manage-contact" role="tabpanel">
                       <div class="iq-card">
                          <div class="iq-card-header d-flex justify-content-between">
                             <div class="iq-header-title">
                                <h4 class="card-title">Manage Contact</h4>
                             </div>
                          </div>
                          <div class="iq-card-body">
                             <form>
                                <div class="form-group">
                                   <label for="cno">Contact Number:</label>
                                   <input type="text" class="form-control" id="cno" value="001 2536 123 458">
                                </div>
                                <div class="form-group">
                                   <label for="email">Email:</label>
                                   <input type="text" class="form-control" id="email" value="Barryjone@demo.com">
                                </div>
                                <div class="form-group">
                                   <label for="url">Url:</label>
                                   <input type="text" class="form-control" id="url" value="https://getbootstrap.com">
                                </div>
                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                <button type="reset" class="btn iq-bg-danger">Cancel</button>
                             </form>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
</x-layouts.dashboard>