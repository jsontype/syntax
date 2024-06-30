<template>
 <main id="main" class="site-main">
  <Team/>
  <ContactUs/>
  <Work/>
</main>
</template>
<script>
import { core } from '../../config/pluginInit'
import ContactUs from './AboutPages/ContactUs.vue'
import Team from './AboutPages/Team.vue'
import Work from './AboutPages/Work.vue'
export default {
  name: 'About',
  components: {
    ContactUs,
    Team,
    Work
  },
  mounted () {
    core.index()
  }
}
</script>
