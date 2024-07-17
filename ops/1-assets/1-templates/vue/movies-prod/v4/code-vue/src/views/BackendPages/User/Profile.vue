<template>
  <b-container fluid>
    <div class="row profile-content">
      <div class="col-12 col-md-12 col-lg-4">
        <div class="iq-card">
            <div class="iq-card-body profile-page">
              <div class="profile-header">
                  <div class="cover-container text-center">
                    <img src="../../../assets/images/user/1.jpg" alt="profile-bg" class="rounded-circle img-fluid">
                    <div class="profile-detail mt-3">
                        <h3>Barry Tech</h3>
                        <p class="text-primary">Web designer</p>
                        <p>Phasellus faucibus mollis pharetra. Proin blandit ac massa.Morbi nulla dolor, ornare at commodo non, feugiat non nisi.</p>
                    </div>
                    <div class="iq-social d-inline-block align-items-center">
                        <ul class="list-inline d-flex p-0 mb-0 align-items-center">
                          <li>
                              <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 facebook"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 youtube"><i class="fab fa-youtube" aria-hidden="true"></i></a>
                          </li>
                          <li >
                              <a href="#" class="avatar-40 rounded-circle bg-primary pinterest"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
              <div class="iq-header-title">
                  <h4 class="card-title mb-0">Personal Details</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <ul class="list-inline p-0 mb-0">
                  <li>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-sm-6">
                          <h6>Birthday</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="mb-0">3rd March</p>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-sm-6">
                          <h6>Address</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="mb-0">Landon</p>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-sm-6">
                          <h6>Phone</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="mb-0">(010)987 543 201</p>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-sm-6">
                          <h6>Email</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="mb-0">Barry@example.com</p>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-sm-6">
                          <h6>Twitter</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="mb-0">@Barry</p>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="row align-items-center justify-content-between mb-3">
                        <div class="col-sm-6">
                          <h6>Facebook</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="mb-0">@Barry_Tech</p>
                        </div>
                    </div>
                  </li>
              </ul>
            </div>
        </div>
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
              <div class="iq-header-title">
                  <h4 class="card-title mb-0">Skill Progress</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <ul class="list-inline p-0 mb-0">
                  <li>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h6>Biography</h6>
                        <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                           <Progressbar :value="70" color="primary" />
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h6>Horror</h6>
                        <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                          <Progressbar :value="80" color="danger" />
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h6>Comic Book</h6>
                        <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                          <Progressbar :value="85" color="info" />
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center justify-content-between">
                        <h6>Adventure</h6>
                        <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                          <Progressbar :value="72" color="success" />
                        </div>
                    </div>
                  </li>
              </ul>
            </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-8">
        <div class="row">
            <div class="col-md-6">
              <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                    <div class="iq-header-title">
                        <h4 class="card-title mb-0">  </h4>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    <ul class="list-inline p-0 mb-0">
                        <li class="d-flex mb-4 align-items-center">
                          <div class="profile-icon bg-secondary"><span><i class="ri-file-3-fill"></i></span></div>
                          <div class="media-support-info ml-3">
                              <h6>Documentation</h6>
                              <p class="mb-0">48kb</p>
                          </div>
                          <div class="iq-card-toolbar">
                            <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                              <template v-slot:button-content>
                                <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                              </template>
                              <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Share</b-dropdown-item>
                              <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>Delete</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </li>
                        <li class="d-flex mb-4 align-items-center">
                          <div class="profile-icon bg-secondary"><span><i class="ri-image-fill"></i></span></div>
                          <div class="media-support-info ml-3">
                              <h6>Images</h6>
                              <p class="mb-0">204kb</p>
                          </div>
                          <div class="iq-card-toolbar">
                            <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                              <template v-slot:button-content>
                                <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                              </template>
                              <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Share</b-dropdown-item>
                              <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>Delete</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </li>
                        <li class="d-flex mb-4 align-items-center">
                          <div class="profile-icon bg-secondary"><span><i class="ri-video-fill"></i></span></div>
                          <div class="media-support-info ml-3">
                              <h6>Videos</h6>
                              <p class="mb-0">509kb</p>
                          </div>
                          <div class="iq-card-toolbar">
                              <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                              <template v-slot:button-content>
                                <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                              </template>
                              <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Share</b-dropdown-item>
                              <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>Delete</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </li>
                        <li class="d-flex mb-4 align-items-center">
                          <div class="profile-icon bg-secondary"><span><i class="ri-file-3-fill"></i></span></div>
                          <div class="media-support-info ml-3">
                              <h6>Resources</h6>
                              <p class="mb-0">48kb</p>
                          </div>
                          <div class="iq-card-toolbar">
                              <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                              <template v-slot:button-content>
                                <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                              </template>
                              <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Share</b-dropdown-item>
                              <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>Delete</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </li>
                        <li class="d-flex align-items-center">
                          <div class="profile-icon bg-secondary"><span><i class="ri-refresh-line"></i></span></div>
                          <div class="media-support-info ml-3">
                              <h6>Celine Dion</h6>
                              <p class="mb-0">204kb</p>
                          </div>
                          <div class="iq-card-toolbar">
                              <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                              <template v-slot:button-content>
                                <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                              </template>
                              <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Share</b-dropdown-item>
                              <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>Delete</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                    <div class="iq-header-title">
                        <h4 class="card-title mb-0">Top Books</h4>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    <ul class="list-inline p-0 mb-0">
                        <li>
                          <div class="iq-details mb-2">
                              <span class="title">Adventure</span>
                              <div class="percentage float-right text-primary">95 <span>%</span></div>
                              <div class="iq-progress-bar-linear d-inline-block w-100">
                                <Progressbar :value="95" color="primary" />
                              </div>
                          </div>
                        </li>
                        <li>
                          <div class="iq-details mb-2">
                              <span class="title">Horror</span>
                              <div class="percentage float-right text-warning">72 <span>%</span></div>
                              <div class="iq-progress-bar-linear d-inline-block w-100">
                                <Progressbar :value="72" color="warning" />
                              </div>
                          </div>
                        </li>
                        <li>
                        <div class="iq-details mb-2">
                          <span class="title">Comic Book</span>
                          <div class="percentage float-right text-info">75 <span>%</span></div>
                          <div class="iq-progress-bar-linear d-inline-block w-100">
                              <Progressbar :value="75" color="info" />
                          </div>
                        </div>
                    </li>
                    <li>
                        <div class="iq-details mb-2">
                          <span class="title">Biography</span>
                          <div class="percentage float-right text-danger">70 <span>%</span></div>
                          <div class="iq-progress-bar-linear d-inline-block w-100">
                              <Progressbar :value="70" color="danger" />
                          </div>
                        </div>
                    </li>
                    <li>
                        <div class="iq-details">
                          <span class="title">Mystery</span>
                          <div class="percentage float-right text-success">80 <span>%</span></div>
                          <div class="iq-progress-bar-linear d-inline-block w-100">
                             <Progressbar :value="80" color="success" />
                          </div>
                        </div>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
        </div>
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
              <div class="iq-header-title">
                <h4 class="card-title mb-0">Daily Sales</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                  <template v-slot:button-content>
                    <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                  </template>
                  <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
                </b-dropdown>
              </div>
          </div>
          <div class="iq-card-body">
            <ul class="perfomer-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img class="img-fluid avatar-50 rounded-circle" src="../../../assets/images/user/06.jpg" alt=""></div>
                <div class="media-support-info ml-3">
                    <h5>Reading on the World</h5>
                    <p class="mb-0">Lorem Ipsum is simply dummy test</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                    <span class="text-dark"><b>+$82</b></span>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img class="img-fluid avatar-50 rounded-circle" src="../../../assets/images/user/07.jpg" alt=""></div>
                <div class="media-support-info ml-3">
                    <h5>Little Black Book</h5>
                    <p class="mb-0">Lorem Ipsum is simply dummy test</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                    <span class="text-dark"><b>+$90</b></span>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="user-img img-fluid"><img class="img-fluid avatar-50 rounded-circle" src="../../../assets/images/user/08.jpg" alt=""></div>
                <div class="media-support-info ml-3">
                    <h5>See the More Story</h5>
                    <p class="mb-0">Lorem Ipsum is simply dummy test</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-cener">
                    <span class="text-dark"><b>+$85</b></span>
                </div>
              </li>
          </ul>
        </div>
        </div>
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
              <div class="iq-header-title">
                  <h4 class="card-title mb-0">Top Products</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                  <template v-slot:button-content>
                    <b-link href="#" class="font-size-24"><i class="ri-more-line"></i></b-link>
                  </template>
                  <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div class="iq-card-body">
            <ul class="perfomer-lists m-0 p-0">
              <li class="row mb-3 align-items-center justify-content-between">
                  <div class="col-md-8">
                    <h5>Find The Wave Book</h5>
                    <p class="mb-0">General Book</p>
                  </div>
                  <div class="col-md-4 text-right">
                    <div class="iq-card-header-toolbar d-flex align-items-center">
                        <span class="text-primary mr-3"><b>+$92</b></span>
                        <div class="iq-progress-bar-linear d-inline-block mt-1 w-100">
                          <Progressbar :value="92" color="primary" />
                        </div>
                    </div>
                  </div>
              </li>
              <li class="row align-items-center justify-content-between">
                  <div class="col-md-8">
                    <h5>A man with those Faces</h5>
                    <p class="mb-0">Biography Book</p>
                  </div>
                  <div class="col-md-4 text-right">
                    <div class="iq-card-header-toolbar d-flex align-items-center">
                        <span class="text-danger mr-3"><b>+$85</b></span>
                        <div class="iq-progress-bar-linear d-inline-block mt-1 w-100">
                          <Progressbar :value="85" color="danger" />
                        </div>
                    </div>
                  </div>
              </li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
import { core } from '../../../config/pluginInit'
export default {
  name: 'Profile',
  mounted () {
    core.index()
  },
  data () {
    return {
    }
  }
}
</script>
