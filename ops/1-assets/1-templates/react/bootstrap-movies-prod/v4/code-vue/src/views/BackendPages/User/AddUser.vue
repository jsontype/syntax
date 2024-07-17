<template>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <b-row>
          <b-col lg="3">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Add New User</h4>
              </template>
              <template v-slot:body>
                <b-form-group>
                  <div class="add-img-user profile-img-edit">
                    <b-img class="profile-pic height-150 width-150" fluid :src="user.profile_image" alt="profile-pic" />
                    <input type="hidden" v-model="user.profile_image">
                    <div class="p-image">
                      <b-button variant="none" class="upload-button iq-bg-primary position-relative">
                        <input type="file" @change="previewImage" class="h-100 position-absolute" accept="image/*" style="opacity: 0;" />
                        File Upload
                      </b-button>
                    </div>
                  </div>
                  <div class="img-extension mt-3">
                    <div class="d-inline-block align-items-center">
                      <span>Only</span>
                      <b-link href="javascript:void();">.jpg</b-link>
                      <b-link href="javascript:void();">.png</b-link>
                      <b-link href="javascript:void();">.jpeg</b-link>
                      <span>allowed</span>
                    </div>
                  </div>
                </b-form-group>
                <b-form-group
                  label="Facebook Url:"
                  label-for="furl"
                >
                  <b-form-input v-model="user.facebook_url" id="furl" name="furl" placeholder="Facebook Url"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Twitter Url:"
                  label-for="turl"
                >
                  <b-form-input v-model="user.twitter_url" id="turl" name="turl" placeholder="Twitter Url"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Instagram Url:"
                  label-for="turl"
                >
                  <b-form-input id="instaurl" name="instaurl" placeholder="Instagram Url"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Linkedin Url:"
                  label-for="lurl"
                >
                  <b-form-input id="lurl" placeholder="Linkedin Url"></b-form-input>
                </b-form-group>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="9">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">New User Information</h4>
              </template>
              <template v-slot:body>
                <div class="new-user-info">
                  <b-row>
                    <b-form-group class="col-md-6" label="First Name:" label-for="fname">
                      <ValidationProvider name="First name" rules="required" v-slot="{ errors }">
                        <b-form-input v-model="user.fname" type="text" placeholder="First Name" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>
                    <b-form-group class="col-md-6" label="Last Name:" label-for="lname">
                      <ValidationProvider name="Last name" rules="required" v-slot="{ errors }">
                        <b-form-input v-model="user.lname" type="text" placeholder="Last Name" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>
                    <b-form-group class="col-md-6"
                                  label="Street Address 1:"
                                  label-for="add1"
                    >
                      <b-form-input v-model="user.address1" type="text" name="add1" id="add1" placeholder="Street Address 1"></b-form-input>
                    </b-form-group>
                    <b-form-group class="col-md-6"
                                  label="Street Address 2:"
                                  label-for="add2"
                    >
                      <b-form-input v-model="user.address2" type="text" name="add2" id="add2" placeholder="Street Address 2"></b-form-input>
                    </b-form-group>
                    <b-form-group class="col-md-6"
                                  label="Company Name:"
                                  label-for="cname"
                    >
                      <b-form-input v-model="user.company_name" type="text" name="cname" id="cname" placeholder="Company Name"></b-form-input>
                    </b-form-group>
                    <b-form-group class="col-sm-6"
                                  label-for="selectcountry"
                                  label="Country:">
                      <b-form-select v-model="user.country"  plain :options="countries" id="selectcountry">
                        <template v-slot:first>
                          <b-form-select-option :value="null">Select Country</b-form-select-option>
                        </template>
                      </b-form-select>
                    </b-form-group>
                    <b-form-group class="col-md-6"
                                  label="Town/City:"
                                  label-for="city"
                    >
                      <b-form-input  v-model="user.city" type="text" name="city" id="city" placeholder="Town/City"></b-form-input>
                    </b-form-group>
                    <b-form-group class="col-md-6" label="Pin Code:" label-for="pno">
                      <b-form-input  v-model="user.pincode" type="text" name="pno" id="pno" placeholder="Pin Code"></b-form-input>
                    </b-form-group>
                  </b-row>
                  <hr>
                  <h5 class="mb-3">Security</h5>
                  <b-row>
                  <b-form-group class="col-md-6" label="User Name:" label-for="uname">
                    <ValidationProvider name="User Name" rules="required" v-slot="{ errors }">
                      <b-form-input v-model="user.username" type="text" placeholder="User Name" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group class="col-md-6" label="Email:" label-for="uname">
                    <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                      <b-form-input v-model="user.email" type="text" placeholder="Email" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group class="col-md-6" label="User Role:" label-for="selectuserrole">
                    <b-form-select plain v-model="user.role" :options="roles" id="selectuserrole">
                      <template v-slot:first>
                        <b-form-select-option :value="null">Select</b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-form-group>
                  <b-form-group class="col-md-6" label="Mobile Number:" label-for="mobno">
                    <ValidationProvider name="Mobile Number" rules="required" v-slot="{ errors }">
                      <b-form-input v-model="user.mobile_no" type="text" placeholder="Mobile Number" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group class="col-md-6" label="Password:" label-for="pass">
                    <ValidationProvider name="Password" rules="required|confirmed:repeat_password" v-slot="{ errors }">
                      <b-form-input v-model="user.password" type="password" placeholder="Password" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group class="col-md-6" label="Repeat Password:" label-for="rpass">
                    <ValidationProvider vid="repeat_password" name="Repeat Password" rules="required" v-slot="{ errors }">
                      <b-form-input v-model="user.repeat_password" type="password" placeholder="Repeat Password" :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                </b-row>
                <div class="checkbox">
                  <label><input class="mr-2" type="checkbox">I agree terms & conditions.</label>
                </div>
                <b-button variant="primary" type="submit">Add New User</b-button>
              </div>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'AddUser',
  mounted () {
    core.index()
  },
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
        profile_image: require('../../assets/images/user/09.jpg'),
        mobile_no: '',
        country: '',
        city: '',
        pincode: '',
        role: ''
      },
      roles: [
        { text: 'Web Designer', value: 'Web Designer' },
        { text: 'Web Developer', value: 'Web Developer' },
        { text: 'Tester', value: 'Tester' },
        { text: 'Php Developer', value: 'Php Developer' },
        { text: 'Ios Developer', value: 'Ios Developer' }
      ],
      countries: [
        { value: 'Canada', text: 'Canada' },
        { value: 'Niada', text: 'Niada' },
        { value: 'USA', text: 'USA' },
        { value: 'India', text: 'India' },
        { value: 'Africa', text: 'Africa' }
      ],
      users: []
    }
  },
  computed: {
    fullName: function () {
      return this.user.fname + ' ' + this.user.lname
    }
  },
  methods: {
    onSubmit () {
      this.$router.replace('/user/user-list')
    },
    previewImage: function (event) {
      const input = event.target

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.user.profile_image = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>
