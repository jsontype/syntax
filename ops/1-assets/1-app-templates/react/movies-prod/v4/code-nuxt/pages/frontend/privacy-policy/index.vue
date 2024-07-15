<template>
  <div>
    <breadcrumb name="Privacy Policy" />
    <main id="main" class="site-main">
      <PrivacyPolicyDetail />
    </main>
  </div>
</template>
<script>
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import PrivacyPolicyDetail from '../../../components/frontend/PrivacyPolicy/PrivacyPolicyDetail'
export default {
  name: 'PrivacyPolicy',
  layout: 'FrontendLayout',
  components: {
    PrivacyPolicyDetail,
    breadcrumb
  }
}
</script>
