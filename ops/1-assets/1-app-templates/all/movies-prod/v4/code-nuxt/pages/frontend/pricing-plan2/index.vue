<template>
  <div>
    <breadcrumb name="Pricing Plan 2" />
    <main id="main" class="site-main">
      <PricingPlan2List />
    </main>
  </div>
</template>
<script>
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import PricingPlan2List from '../../../components/frontend/PricingPlan2/PricingPlan2List'
export default {
  name: 'PricingPlan2',
  layout: 'FrontendLayout',
  components: {
    PricingPlan2List,
    breadcrumb
  }
}
</script>
