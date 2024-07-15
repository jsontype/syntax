<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col md="12">
          <div class="iq-terms-of-use">
            <div class="mb-3">
              <h4 class="mb-3">1. {{ "terms_of_uses.description_service" }}</h4>
              <p class="my-3">{{ "terms_of_uses.desc1" }}</p>
              <p class="mb-2">{{ "terms_of_uses.desc2" }}</p>

              <p class="mb-2">{{ "terms_of_uses.desc3" }}</p>

              <p class="mb-2">{{ "terms_of_uses.desc4" }}</p>
              <br /><br />
              <h4>{{ "terms_of_uses.streamit_website" }}:</h4>
              <br />
              <ul>
                <li>{{ "terms_of_uses.google_chrome" }}</li>
                <li>{{ "terms_of_uses.firefox" }}</li>
                <li>{{ "terms_of_uses.safari" }}</li>
                <li>{{ "terms_of_uses.cookies_enabled" }}</li>
              </ul>

              <br />
            </div>
            <div class="mb-3">
              <h4 class="mb-3">
                2. {{ "terms_of_uses.subscription_service" }}
              </h4>
              <p class="mb-2">{{ "terms_of_uses.desc2" }}</p>
              <p class="mb-0">{{ "terms_of_uses.desc5" }}</p>
              <br />

              <p class="mb-0">{{ "terms_of_uses.desc6" }}</p>
              <br />
            </div>
            <div class="mb-3">
              <h4 class="mb-3">3. {{ "terms_of_uses.third_party_payment" }}</h4>
              <p class="">{{ "terms_of_uses.desc7" }}</p>
              <br />
            </div>
            <div class="mb-3">
              <h4 class="mb-3">4. {{ "terms_of_uses.childrens_privacy" }}</h4>
              <p class="">{{ "terms_of_uses.desc8" }}</p>
              <br />
            </div>
            <div class="mb-0">
              <h4 class="mb-3">
                5. {{ "terms_of_uses.data_transfer" }} &amp;
                {{ "terms_of_uses.processing_globally" }}
              </h4>
              <p class="mb-0">{{ "terms_of_uses.desc9" }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Terms Of Use");
</script>
