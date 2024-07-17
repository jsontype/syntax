<template>
  <!-- loader Start -->
  <div id="loading" :style="style">
    <div id="loading-center" />
  </div>
  <!-- loader END -->
</template>
<script>
import { mapGetters } from 'vuex'
import lightLoader from '../../../assets/images/loader.gif'
import { animation } from '../../../assets/app/app'
export default {
  name: 'Loader',
  props: {
    dark: { type: Boolean, default: false }
  },
  computed: {
    style () {
      return `background: var(--iq-body-bg) url(${lightLoader}) no-repeat scroll center center;background-size: 15%;`
    },
    ...mapGetters({
      darkMode: 'Setting/darkModeState'
    })
  },
  watch: {
    $route (to, from) {
      // eslint-disable-next-line no-mixed-operators
      if (to.meta.layout !== undefined && from.meta.layout === undefined || to.meta.layout === undefined && from.meta.layout !== undefined || to.meta.layout !== undefined && from.meta.layout !== undefined) {
        const load = document.getElementById('loading')
        animation.fadeIn(load, { duration: 150 })
        load.classList.remove('d-none')
      }
    }
  },
  mounted () {
  }
}
</script>
