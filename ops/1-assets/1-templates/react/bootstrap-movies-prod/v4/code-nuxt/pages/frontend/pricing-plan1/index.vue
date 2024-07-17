<template>
  <div>
    <breadcrumb name="Pricing Plan 1" />
    <main id="main" class="site-main">
      <PricingPlan1List />
    </main>
  </div>
</template>
<script>
import PricingPlan1List from '../../../components/frontend/PricingPlan1/PricingPlan1List'
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
export default {
  name: 'PricingPlan1',
  layout: 'FrontendLayout',
  components: {
    PricingPlan1List,
    breadcrumb
  }

}
</script>
