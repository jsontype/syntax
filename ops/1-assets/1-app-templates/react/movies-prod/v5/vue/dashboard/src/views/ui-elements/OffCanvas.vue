<template>
    <b-row>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Offcanvas components</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the .show class on an element with the .offcanvas class.</p>
            <ul class="list-inline p-0 m-0 mb-2">
              <li><code>.offcanvas</code> hides content (default)</li>
              <li><code>.offcanvas.show</code> shows content</li>
            </ul>
            <a class="btn btn-primary mb-2 me-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" @click="offcanvas = true"> Link with href </a>
            <b-button variant="primary mb-2" type="button" @click="offcanvas = true">Button with data-bs-target</b-button>
            <b-offcanvas v-model="offcanvas" class="offcanvasleft" placement="start" title="Offcanvas">
              <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
              <b-dropdown class="mt-3" text="Dropdown button ">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </b-offcanvas>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Offcanvas Link Or Dropdown</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Scrolling the element is disabled when an offcanvas and its backdrop are visible. Use the data-bs-scroll attribute to toggle scrolling and data-bs-backdrop to toggle the backdrop.</p>
            <b-button variant="primary" class="mb-2 me-1" type="button" @click="offcanvasScroll = true">Enable body scrolling</b-button>
            <b-button variant="primary" class="mb-2 me-1" type="button" @click="offcanvasDefault = true">Enable backdrop (default)</b-button>
            <b-button variant="primary" class="mb-2" type="button" @click="offcanvaswithbackdrop = true">Enable both scrolling & backdrop</b-button>

            <b-offcanvas v-model="offcanvasScroll" class="offcanvasscroll" placement="start" title="Colored with scrolling" :backdrop="false" :body-scrolling="true">Try scrolling the rest of the page to see this option in action.</b-offcanvas>
            <b-offcanvas v-model="offcanvasDefault" class="offcanvasscroll" placement="start" title="Offcanvas with backdrop">Try scrolling the rest of the page to see this option in action.</b-offcanvas>
            <b-offcanvas v-model="offcanvaswithbackdrop" class="offcanvasscroll" placement="start" title="Backdroped with scrolling" :backdrop="true" :body-scrolling="true">Try scrolling the rest of the page to see this option in action.</b-offcanvas>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Offcanvas Placement</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>There’s no default placement for offcanvas components, so you must add one of the modifier classes below;</p>
            <ul class="list-inline p-0">
              <li><code>.offcanvas-start</code> places offcanvas on the left of the viewport (shown above)</li>
              <li><code>.offcanvas.end</code> places offcanvas on the right of the viewport</li>
              <li><code>.offcanvas.top</code> places offcanvas on the top of the viewport</li>
              <li><code>.offcanvas.bottom</code> places offcanvas on the bottom of the viewport</li>
            </ul>
            <b-button variant="primary" class="mb-2 me-1" type="button" @click="offcanvasTop = true">Toggle top offcanvas</b-button>
            <b-button variant="primary" class="mb-2 me-1" type="button" @click="offcanvasEnd = true">Toggle end offcanvas</b-button>
            <b-button variant="primary" class="mb-2 me-1" type="button" @click="offcanvasBottom = true">Toggle bottom offcanvas</b-button>
            <b-button variant="primary" class="mb-2" type="button" @click="offcanvasStart = true">Toggle start offcanvas</b-button>

            <b-offcanvas v-model="offcanvasTop" class="offcanvastop" placement="top" title="Offcanvas top"> Try scrolling the rest of the page to see this option in action. </b-offcanvas>
            <b-offcanvas v-model="offcanvasEnd" class="offcanvasright" placement="end" title="Offcanvas end">Try scrolling the rest of the page to see this option in action.</b-offcanvas>
            <b-offcanvas v-model="offcanvasBottom" class="offcanvasbottom" placement="bottom" title="Offcanvas bottom">Try scrolling the rest of the page to see this option in action.</b-offcanvas>
            <b-offcanvas v-model="offcanvasStart" class="offcanvasleft" placement="start" title="Offcanvas start"> Try scrolling the rest of the page to see this option in action. </b-offcanvas>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>

<script setup>
import { ref } from 'vue';
const offcanvas = ref(false);
const offcanvasTop = ref(false);
const offcanvasStart = ref(false);
const offcanvasDefault = ref(false);
const offcanvasEnd = ref(false);
const offcanvasBottom = ref(false);
const offcanvasScroll = ref(false);
const offcanvaswithbackdrop = ref(false);
</script>
