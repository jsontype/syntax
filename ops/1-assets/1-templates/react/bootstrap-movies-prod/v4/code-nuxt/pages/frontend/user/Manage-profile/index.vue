<template>
  <section class="m-profile manage-p">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-lg-10">
          <div class="sign-user_card">
            <div class="row">
              <div class="col-lg-2">
                <div class="upload_profile d-inline-block">
                  <img src="../../../../assets/images/frontend/user/user.jpg" class="profile-pic rounded-circle img-fluid" alt="user">
                  <div class="p-image">
                    <i class="ri-pencil-line upload-button" />
                    <input class="file-upload" type="file" accept="image/*">
                  </div>
                </div>
              </div>
              <div class="col-lg-10 device-margin">
                <div class="profile-from">
                  <h4 class="mb-3">
                    Manage Profile
                  </h4>
                  <form class="mt-4" action="index.html">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        id="exampleInputl2"
                        type="text"
                        class="form-control mb-0"
                        placeholder="Enter Your Name"
                        autocomplete="off"
                        required
                      >
                    </div>
                    <div class="form-group">
                      <label>Date of Birth</label>
                      <input
                        id="exampleInputPassword2"
                        type="text"
                        class="form-control date-input basicFlatpickr mb-0"
                        placeholder="Select Date"
                        required
                      >
                    </div>
                    <div class="form-group d-flex flex-md-row flex-column">
                      <div class="iq-custom-select d-inline-block manage-dd vselect">
                        <V-select v-model="selected" :options="sessonOption1" value="" />
                      </div>
                      <div class="iq-custom-select d-inline-block lang-dropdown manage-dd vselect">
                        <V-select v-model="likeselect" value="" :options="likeSection" />
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
</template>
<script>
import { core } from '../../../../assets/app/app'
export default {
  layout: 'FrontendLayout',
  name: 'ManageProfile',
  components: {
  },
  data () {
    return {
      selected: 1,
      likeselect: 0,
      sessonOption1: [
        { id: 1, value: 'female', text: 'Female' },
        { id: 2, value: 'male', text: 'Male' }
      ],
      likeSection: [
        { id: 0, value: 'langauge preference', text: 'Language Preference' },
        { id: 1, value: 'english', text: 'English' },
        { id: 2, value: 'hindi', text: 'Hindi' },
        { id: 3, value: 'gujarati', text: 'Gujarati' },
        { id: 4, value: 'bengali', text: 'Bengali' },
        { id: 5, value: 'marathi', text: 'Marathi' },
        { id: 6, value: 'tamil', text: 'Tamil' },
        { id: 7, value: 'kannada', text: 'Kannada' }

      ]
    }
  },
  mounted () {
    core.index()
  }
}
</script>
