<template>
    <div class="container">
      <div class="row">
         <div class="col-lg-12 col-sm-12">
            <div class="iq-pricing-card-two">
                  <div class="table-responsive iq-pricing pt-2">
                     <table id="my-table" class="table" data-active="premium">
                        <thead>
                              <tr>
                                 <th class="text-center iq-price-head"></th>
                                    <th class="text-center iq-price-head free">
                                          <div class="iq-price-box">
                                             <span class="">Free</span>
                                          </div>
                                    </th>
                                    <th class="text-center iq-price-head premium">
                                          <div class="iq-price-box">
                                             <span class="">Premium</span>
                                          </div>
                                    </th>
                                    <th class="text-center iq-price-head basic">
                                          <div class="iq-price-box">
                                             <span class="">Basic</span>
                                          </div>
                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(pricing ,index) in pricingList" :key="index">
                              <th class="text-left" scope="row"> {{pricing.title}}</th>
                              <td class="text-center iq-child-cell">
                                 <i :class="pricing.icon"></i>
                              </td>
                              <td class="text-center iq-child-cell">
                                 <i :class="pricing.icon1"></i>
                              </td>
                              <td class="text-center iq-child-cell">
                                 <i :class="pricing.icon2"></i>
                              </td>
                        </tr>
                        <tr>
                           <th class="text-left" scope="row"> Video Quality</th>
                           <td class="text-center iq-child-cell">
                              SD(480p)
                           </td>
                           <td class="text-center iq-child-cell">
                              FHD(1080p)
                           </td>
                           <td class="text-center iq-child-cell">
                              HD(720p)
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div class="iq-price-bottom">
                  <div class="iq-select-price row">
                     <div class="col-lg-4 col-md-6 col-sm-12">
                        <div :class="`iq-price-rate-wrap ${checkActive('free')}`"  @click="chnage('free')" >
                           <i class="fa fa-check-square iq-rtl-direction"></i>
                              <div class="iq-price-label">
                                 <span class="type1">Free</span>
                                    <h3 class="iq-price-rate text-white">$0<small> / Month</small></h3>
                              </div>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-6 col-sm-12">
                        <div :class="`iq-price-rate-wrap ${checkActive('premium')}`"  @click="chnage('premium')" >
                           <i class="fa fa-check-square iq-rtl-direction"></i>
                              <div class="iq-price-label">
                                 <span class="type1">Premium</span>
                                    <h3 class="iq-price-rate text-white">$39<small> / 3 Months</small></h3>
                              </div>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-6 col-sm-12">
                        <div :class="`iq-price-rate-wrap ${checkActive('basic')}`"  @click="chnage('basic')" >
                           <i class="fa fa-check-square"></i>
                              <div class="iq-price-label">
                                 <span class="type1">Basic</span>
                                 <h3 class="iq-price-rate text-white">$19<small> / Month</small></h3>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                     <router-link :to="{name:'auth1.sign-up1'}" class="btn btn-hover iq-button">Subscribe</router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>
</template>
<script>
export default {
  name: 'PricingPlan2',
  data () {
    return {
      pricingClass: 'premium',
      pricingList: [
        {
          title: 'Ad Free Entertainment',
          icon: 'fa fa-times-circle',
          icon1: 'far fa-check-circle',
          icon2: 'fa fa-times-circle'
        },
        {
          title: 'American Tv Shows',
          icon: 'fa fa-times-circle',
          icon1: 'far fa-check-circle',
          icon2: 'far fa-check-circle'
        },
        {
          title: 'Hollywood Movies',
          icon: 'fa fa-times-circle',
          icon1: 'far fa-check-circle',
          icon2: 'far fa-check-circle'
        },
        {
          title: 'New Movies',
          icon: 'fa fa-times-circle',
          icon1: 'far fa-check-circle',
          icon2: 'far fa-check-circle'
        },
        {
          title: 'Streamit Special',
          icon: 'fa fa-times-circle',
          icon1: 'far fa-check-circle',
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
