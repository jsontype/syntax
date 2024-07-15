<template>
    <b-row>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Modal components</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="mb-1">Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
            <!-- Button trigger modal -->
            <b-button variant="primary me-2 btn btn-primary mt-2" @click="modal = true">Launch demo modal</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            <b-modal v-model="modalstatic" title="Modal title" no-close-on-backdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
            <b-modal v-model="modalscroll" scrollable title="Modal title">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Modal Scrolling</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
            <!-- Button trigger modal -->
            <b-button variant="primary me-2 btn btn-primary mt-2" @click="modalscroll = true">Launch demo modal</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            <b-modal v-model="modalstatic" title="Modal title" no-close-on-backdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
            <b-modal v-model="modalscroll" scrollable title="Modal title">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Optional sizes</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <div class="d-flex flex-wrap">
              <p class="mb-1">Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
              <!-- Extra large modal -->
              <b-button variant="btn btn-primary mt-2 me-1" @click="modalextralarge = true">Extra large modal</b-button>
              <b-modal v-model="modalextralarge" size="xl" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>

              <!-- Large modal -->
              <b-button variant="btn btn-primary mt-2 me-1" @click="modallarge = true">Large modal</b-button>
              <b-modal v-model="modallarge" size="lg" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>

              <!-- Small modal -->
              <b-button variant="btn btn-primary mt-2" @click="modalsmall = true">Small modal</b-button>
              <b-modal v-model="modalsmall" size="sm" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Scrolling long content</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
            <!-- Button trigger modal -->
            <b-button variant="primary me-2 primary me-2 btn btn-primary mt-2" @click="modalscroll = true">Launch demo modal</b-button>
            <b-modal v-model="modalscroll" scrollable title="Modal title">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Vertically centered</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="mb-1">Add <code class="highlighter-rouge">.modal-dialog-centered</code> to <code class="highlighter-rouge">.modal-dialog</code> to vertically center the modal.</p>
            <!-- Button trigger modal -->
            <b-button variant="primary me-1 btn btn-primary mt-2" @click="modal = true">Launch demo modal</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
            <b-modal v-model="modalstatic" title="Modal title" no-close-on-backdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
            <b-modal v-model="modalscroll" scrollable title="Modal title" ok-title="Save changes" cancel-title="Close">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
            <b-button variant="primary me-2 primary me-2 btn btn-primary mt-2" @click="modalscroll = true">Vertically centered scrollable modal</b-button>
            <b-modal v-model="modalscroll" scrollable title="Modal title" ok-title="Save changes" cancel-title="Close">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Using the grid</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="mb-1">
              Utilize the Bootstrap grid system within a modal by nesting
              <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.
            </p>
            <b-button type="button" variant="btn btn-primary mt-2" @click="gridSystemModal = true">Launch demo modal</b-button>
            <b-modal v-model="gridSystemModal" title="Grids in modals" ok-title="Save changes" cancel-title="Close">
              <div class="iq-example-row">
                <div class="container-fluid">
                  <b-row class="mb-3">
                    <b-col md="4">.col-md-4</b-col>
                    <b-col md="4" class="ml-auto">.col-md-4 .ml-auto</b-col>
                  </b-row>
                  <b-row class="mb-3">
                    <b-row md="3" class="ml-auto">.col-md-3 .ml-auto</b-row>
                    <b-row md="2" class="ml-auto">.col-md-2 .ml-auto</b-row>
                  </b-row>
                  <b-row class="mb-3">
                    <b-col md="6" class="ml-auto">.col-md-6 .ml-auto</b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="9">
                      Level 1: .col-sm-9
                      <b-row>
                        <b-col md="8" sm="6">Level 2: .col-8 .col-sm-6</b-col>
                        <b-col sm="6" class="col-4">Level 2: .col-4 .col-sm-6</b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-modal>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col sm="12" lg="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Fullscreen Modal</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.</p>
            <b-button variant="primary" class="btn btn-primary mb-2 me-1" @click="modalfullscreen = true">Full screen</b-button>
            <b-modal v-model="modalfullscreen" fullscreen dialog-class="testt" title="Full screen modal" ok-title="Save changes" cancel-title="Close">
              <p class="my-4">...</p>
            </b-modal>
            <b-button variant="btn btn-primary mb-2 me-1" @click="modal = true">Full screen below sm</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            <b-button variant="btn btn-primary mb-2 me-1" @click="modal = true">Full screen below md</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            <b-button variant="btn btn-primary mb-2 me-1" @click="modal = true">Full screen below lg</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            <b-button variant="btn btn-primary mb-2 me-1" @click="modal = true">Full screen below xl</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
            <b-button variant="btn btn-primary mb-2 me-1" @click="modal = true">Full screen below xxl</b-button>
            <b-modal v-model="modal" title="Modal title" ok-title="Save changes" cancel-title="Close"> ... </b-modal>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>
<script setup>
import { ref } from 'vue';
const modal = ref(false);
const modalstatic = ref(false);
const modalscroll = ref(false);
const modalfullscreen = ref(false);
const modalextralarge = ref(false);
const modallarge = ref(false);
const modalsmall = ref(false);
const gridSystemModal = ref(false);
</script>
