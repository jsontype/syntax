<template>
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
          <div id="personal-information" class="tab-pane fade active show" role="tabpanel">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">
                    Personal Information
                  </h4>
                </div>
              </div>
              <div class="iq-card-body">
                <form>
                  <div class="form-group row align-items-center">
                    <div class="col-md-12">
                      <div class="profile-img-edit">
                        <img class="profile-pic" src="../../../assets/images/user/11.png" alt="profile-pic">
                        <div class="p-image">
                          <i class="ri-pencil-line upload-button" />
                          <input class="file-upload" type="file" accept="image/*">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" row align-items-center">
                    <div class="form-group col-sm-6">
                      <label for="fname">First Name:</label>
                      <input id="fname" type="text" class="form-control" value="Bni">
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="lname">Last Name:</label>
                      <input id="lname" type="text" class="form-control" value="Jhon">
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="uname">User Name:</label>
                      <input id="uname" type="text" class="form-control" value="Bni@01">
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="cname">City:</label>
                      <input id="cname" type="text" class="form-control" value="Atlanta">
                    </div>
                    <div class="form-group col-sm-6">
                      <label class="d-block">Gender:</label>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input id="customRadio6" type="radio" name="customRadio1" class="custom-control-input" checked="">
                        <label class="custom-control-label" for="customRadio6"> Male </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input id="customRadio7" type="radio" name="customRadio1" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio7"> Female </label>
                      </div>
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="dob">Date Of Birth:</label>
                      <input id="dob" class="form-control" value="1984-01-24">
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Marital Status:</label>
                      <select id="exampleFormControlSelect1" class="form-control">
                        <option selected="">
                          Single
                        </option>
                        <option>Married</option>
                        <option>Widowed</option>
                        <option>Divorced</option>
                        <option>Separated </option>
                      </select>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Age:</label>
                      <select id="exampleFormControlSelect2" class="form-control">
                        <option>12-18</option>
                        <option>19-32</option>
                        <option selected="">
                          33-45
                        </option>
                        <option>46-62</option>
                        <option>63 > </option>
                      </select>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Country:</label>
                      <select id="exampleFormControlSelect3" class="form-control">
                        <option>Caneda</option>
                        <option>Noida</option>
                        <option selected="">
                          USA
                        </option>
                        <option>India</option>
                        <option>Africa</option>
                      </select>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>State:</label>
                      <select id="exampleFormControlSelect4" class="form-control">
                        <option>California</option>
                        <option>Florida</option>
                        <option selected="">
                          Georgia
                        </option>
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
                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" class="btn iq-bg-danger">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="chang-pwd" class="tab-pane fade" role="tabpanel">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">
                    Change Password
                  </h4>
                </div>
              </div>
              <div class="iq-card-body">
                <form>
                  <div class="form-group">
                    <label for="cpass">Current Password:</label>
                    <a href="javascripe:void();" class="float-right">Forgot Password</a>
                    <input id="cpass" type="Password" class="form-control" value="">
                  </div>
                  <div class="form-group">
                    <label for="npass">New Password:</label>
                    <input id="npass" type="Password" class="form-control" value="">
                  </div>
                  <div class="form-group">
                    <label for="vpass">Verify Password:</label>
                    <input id="vpass" type="Password" class="form-control" value="">
                  </div>
                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" class="btn iq-bg-danger">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="emailandsms" class="tab-pane fade" role="tabpanel">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">
                    Email and SMS
                  </h4>
                </div>
              </div>
              <div class="iq-card-body">
                <form>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="emailnotification">Email Notification:</label>
                    <div class="col-md-9 custom-control custom-switch">
                      <input id="emailnotification" type="checkbox" class="custom-control-input" checked="">
                      <label class="custom-control-label" for="emailnotification" />
                    </div>
                  </div>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="smsnotification">SMS Notification:</label>
                    <div class="col-md-9 custom-control custom-switch">
                      <input id="smsnotification" type="checkbox" class="custom-control-input" checked="">
                      <label class="custom-control-label" for="smsnotification" />
                    </div>
                  </div>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="npass">When To Email</label>
                    <div class="col-md-9">
                      <div class="custom-control custom-checkbox">
                        <input id="email01" type="checkbox" class="custom-control-input">
                        <label class="custom-control-label" for="email01">You have new notifications.</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input id="email02" type="checkbox" class="custom-control-input">
                        <label class="custom-control-label" for="email02">You're sent a direct message</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input id="email03" type="checkbox" class="custom-control-input" checked="">
                        <label class="custom-control-label" for="email03">Someone adds you as a connection</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="npass">When To Escalate Emails</label>
                    <div class="col-md-9">
                      <div class="custom-control custom-checkbox">
                        <input id="email04" type="checkbox" class="custom-control-input">
                        <label class="custom-control-label" for="email04"> Upon new order.</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input id="email05" type="checkbox" class="custom-control-input">
                        <label class="custom-control-label" for="email05"> New membership approval</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input id="email06" type="checkbox" class="custom-control-input" checked="">
                        <label class="custom-control-label" for="email06"> Member registration</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" class="btn iq-bg-danger">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="manage-contact" class="tab-pane fade" role="tabpanel">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">
                    Manage Contact
                  </h4>
                </div>
              </div>
              <div class="iq-card-body">
                <form>
                  <div class="form-group">
                    <label for="cno">Contact Number:</label>
                    <input id="cno" type="text" class="form-control" value="001 2536 123 458">
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input id="email" type="text" class="form-control" value="Bnijone@demo.com">
                  </div>
                  <div class="form-group">
                    <label for="url">Url:</label>
                    <input id="url" type="text" class="form-control" value="https://getbootstrap.com">
                  </div>
                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" class="btn iq-bg-danger">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { core } from '../../../assets/app/app'

export default {
  layout: 'BackendLayout',
  name: 'ProfileEdit',
  data () {
    return {
      user: {
        fname: '',
        lname: '',
        name: '',
        username: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        company_name: '',
        profile_image: require('../../../assets/images/user/11.png'),
        mobile_no: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        role: '',
        gender: '',
        dob: '',
        url: ''
      },
      currentPassword: '',
      countries: [
        { value: 'Canada', text: 'Canada' },
        { value: 'Niada', text: 'Niada' },
        { value: 'USA', text: 'USA' },
        { value: 'India', text: 'India' },
        { value: 'Africa', text: 'Africa' }
      ],
      states: [
        { value: 'California', text: 'California' },
        { value: 'Florida', text: 'Florida' },
        { value: 'Georgia', text: 'Georgia' },
        { value: 'Connecticut', text: 'Connecticut' },
        { value: 'Louisiana', text: 'Louisiana' }
      ]
    }
  },
  mounted () {
    // core.index()
  },
  methods: {
    onSubmit () {
      this.user.name = this.user.fname + ' ' + this.user.lname
      this.$router.replace('/user/user-list')
    },
    previewImage (event) {
      const input = event.target

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.user.profile_image = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    changePassword () {
    }
  }
}
</script>
