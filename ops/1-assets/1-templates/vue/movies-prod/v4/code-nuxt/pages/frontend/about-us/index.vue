<template>
  <div>
    <breadcrumb name="About Us" />
    <main id="main" class="site-main">
      <Team />
      <ContactUs />
      <Work />
    </main>
  </div>
</template>
<script>
// import { core } from '../../../assets/app/app'
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import ContactUs from '../../../components/frontend/about-pages/ContactUs.vue'
import Team from '../../../components/frontend/about-pages/Team.vue'
import Work from '../../../components/frontend/about-pages/Work.vue'
export default {
  layout: 'FrontendLayout',
  name: 'About',
  components: {
    ContactUs,
    Team,
    Work,
    breadcrumb
  },
  mounted () {
    // core.index()
  }
}
</script>
