<template>
  <div>
    <Loader />
    <nuxt />
  </div>
</template>
<script>
import Loader from '../components/core/loader/Loader'
// import logo from '../assets/images/logo.png'
import { core } from '../assets/app/app'
export default {
  name: 'Default',
  components: {
    Loader
  },
  data () {
    return {
      options: {
        slidesPerView: 1,
        loop: true
      }
    }
  },
  mounted () {
    core.index()
  }
}
</script>
<style>
@import url('../assets/css/custom.css');
@import url('../assets/css/backend/variable.css');
@import url('../assets/css/backend/dark.css');
@import url('../assets/css/backend/responsive.css');
@import url('../assets/css/backend/style.css');
@import url('../assets/css/backend/typography.css');
</style>
