<x-layouts.frontend>
    <body>
        <section class="m-profile manage-p">
            <div class="container h-100">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-lg-10">
                        <div class="sign-user_card">
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="upload_profile d-inline-block">
                                    <img src="{{asset('frontend/images/user/user.jpg')}}" class="profile-pic rounded-circle img-fluid" alt="user">
                                    <div class="p-image">
                                        <i class="ri-pencil-line upload-button"></i>
                                        <input class="file-upload" type="file" accept="image/*">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-10 device-margin">
                                    <div class="profile-from">
                                        <h4 class="mb-3">Manage Profile</h4>
                                        <form class="mt-4" action="">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control mb-0" id="exampleInputl2"
                                                    placeholder="Enter Your Name" autocomplete="off" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Date of Birth</label>
                                                <input type="text" class="form-control date-input basicFlatpickr mb-0" placeholder="Select Date" id="exampleInputPassword2"
                                                required>
                                            </div>
                                            <div class="form-group d-flex flex-md-row flex-column">
                                                <div class="iq-custom-select d-inline-block manage-gen">
                                                    <select name="cars" class="form-control pro-dropdown">
                                                        <option value="female">Female</option>
                                                        <option value="male">Male</option>
                                                    </select>
                                                </div>
                                                <div class="iq-custom-select d-inline-block lang-dropdown manage-dd">
                                                    <select name="cars" class="form-control pro-dropdown" id="lang"
                                                        multiple="multiple">
                                                        <option value="english">English</option>
                                                        <option value="hindi">Hindi</option>
                                                        <option value="gujarati">Gujarati</option>
                                                        <option value="bengali">Bengali</option>
                                                        <option value="marathi">Marathi</option>
                                                        <option value="tamil">Tamil</option>
                                                        <option value="kannada">Kannada</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <a href="#" class="btn btn-hover">Save</a>
                                                <a href="#" class="btn btn-link">Cancel</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="back-to-top">
            <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
        </div>
    </body>
</x-layouts.frontend>