d<template>
    <section class="m-profile manage-p">
        <b-container class="h-100">
            <b-row class="align-items-center justify-content-center h-100">
                <b-col lg="10">
                    <div class="sign-user_card">
                        <b-row>
                            <b-col lg="2">
                                <div class="upload_profile d-inline-block">
                                <img src="../../../assets/images/frontend/user/user.jpg" class="profile-pic rounded-circle img-fluid" alt="user">
                                <div class="p-image">
                                    <i class="ri-pencil-line upload-button"></i>
                                    <input class="file-upload" type="file" accept="image/*">
                                </div>
                                </div>
                            </b-col>
                            <b-col lg="10" class="device-margin">
                                <div class="profile-from">
                                    <h4 class="mb-3">Manage Profile</h4>
                                    <b-form class="mt-4">
                                        <b-form-group>
                                            <label>Name</label>
                                            <b-form-input type="text" class="form-control mb-0" id="exampleInputl2"
                                                placeholder="Enter Your Name" autocomplete="off" required />
                                        </b-form-group>
                                        <b-form-group >
                                            <label>Date of Birth</label>
                                            <flat-pickr value="" :config="config" class="form-control date-input basicFlatpickr mb-0" placeholder="Select Date" />
                                        </b-form-group>
                                        <b-form-group>
                                            <div class="form-group d-flex flex-md-row flex-column">
                                                <div class="iq-custom-select d-inline-block manage-dd vselect">
                                                    <V-select :options="sessonOption1" value="" v-model="selected"></V-select>
                                                </div>
                                                <div class="iq-custom-select d-inline-block lang-dropdown manage-dd vselect">
                                                    <V-select v-model="likeselect" value="" :options="likeSection"></V-select>
                                                </div>
                                            </div>
                                        </b-form-group>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-hover">Save</a>
                                            <a href="#" class="btn btn-link">Cancel</a>
                                        </div>
                                    </b-form>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
import { core } from '../../../config/pluginInit'
export default {
  name: 'ManageProfile',
  components: {
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      selected: 1,
      likeselect: 0,
      config: {
        dateFormat: 'Y-m-d'
      },
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
  }
}
</script>
<style scoped>
.vselect{
    border: 1px solid white;
}
</style>
