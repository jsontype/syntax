<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="iq-pricing-card">
          <div class="table-responsive iq-pricing pt-2">
            <table id="my-table" class="table" data-active="premium">
              <thead>
                <tr>
                  <th class="text-center iq-price-head" />
                  <th class="text-center iq-price-head free">
                    <div :class="`iq-price-box  ${pricingClass == 'free' ? 'active' : ''}`" @click="chnage('free')">
                      <h3 class="iq-price-rate text-white">
                        $0<small> / Month</small>
                      </h3>
                      <span class="type">Free</span>
                    </div>
                  </th>
                  <th class="text-center iq-price-head premium">
                    <div :class="`iq-price-box  ${pricingClass == 'premium' ? 'active' : ''}`" @click="chnage('premium')">
                      <h3 class="iq-price-rate text-white">
                        $39<small> / 3 Months</small>
                      </h3>
                      <span class="type">Premium</span>
                    </div>
                  </th>
                  <th class="text-center iq-price-head basic">
                    <div :class="`iq-price-box ${pricingClass == 'basic' ? 'active' : ''}`" @click="chnage('basic')">
                      <h3 class="iq-price-rate text-white">
                        $19<small> / Month</small>
                      </h3>
                      <span class="type">Basic</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pricing,index) in pricingLists" :key="index">
                  <th class="text-center" scope="row">
                    {{ pricing.title }}
                  </th>
                  <td :class="`text-center iq-child-cell ${pricingClass == 'free' ? 'active' : ''}`">
                    <i :class="pricing.icon" />
                  </td>
                  <td :class="`text-center iq-child-cell ${pricingClass == 'premium' ? 'active' : ''}`">
                    <i :class="pricing.icon1" />
                  </td>
                  <td :class="`text-center iq-child-cell ${pricingClass == 'basic' ? 'active' : ''}`">
                    <i :class="pricing.icon2" />
                  </td>
                </tr>
                <tr>
                  <th class="text-center" scope="row">
                    Video Quality
                  </th>
                  <td :class="`text-center iq-child-cell ${pricingClass == 'free' ? 'active' : ''}`">
                    SD(480p)
                  </td>
                  <td :class="`text-center iq-child-cell ${pricingClass == 'premium' ? 'active' : ''}`">
                    FHD(1080p)
                  </td>
                  <td :class="`text-center iq-child-cell ${pricingClass == 'basic' ? 'active' : ''}`">
                    HD(720p)
                  </td>
                </tr>
                <tr>
                  <th class="text-center iq-price-footer" />
                  <td class="text-center iq-price-footer">
                    <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                      <nuxt-link to="/AuthPages/Default/SignUp1" class="btn btn-hover iq-button">
                        Subscribe
                      </nuxt-link>
                    </div>
                  </td>
                  <td class="text-center iq-price-footer active">
                    <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                      <nuxt-link to="/AuthPages/Default/SignUp1" class="btn btn-hover iq-button">
                        Subscribe
                      </nuxt-link>
                    </div>
                  </td>
                  <td class="text-center iq-price-footer">
                    <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                      <nuxt-link to="/AuthPages/Default/SignUp1" class="btn btn-hover iq-button">
                        Subscribe
                      </nuxt-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PricingPlan1List',
  data () {
    return {
      pricingClass: 'premium',
      pricingLists: [
        {
          title: 'Ad Free Entertainment',
          icon: 'fa fa-times-circle',
          icon1: 'fa fa-check-circle',
          icon2: 'fa fa-times-circle'
        },
        {
          title: 'American Tv Shows',
          icon: 'fa fa-times-circle',
          icon1: 'fa fa-check-circle',
          icon2: 'fa fa-check-circle'
        },
        {
          title: 'Hollywood Movies',
          icon: 'fa fa-times-circle',
          icon1: 'fa fa-check-circle',
          icon2: 'fa fa-check-circle'
        },
        {
          title: 'New Movies',
          icon: 'fa fa-times-circle',
          icon1: 'fa fa-check-circle',
          icon2: 'fa fa-check-circle'
        },
        {
          title: 'Streamit Special',
          icon: 'fa fa-times-circle',
          icon1: 'fa fa-check-circle',
          icon2: 'fa fa-times-circle'
        }
      ]
    }
  },
  methods: {
    chnage (value) {
      this.pricingClass = value
    },
    checkActive (value) {
      if (this.pricingClass === value) {
        return 'active'
      }
    }
  }
}
</script>
