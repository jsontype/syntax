<template>
  <div>
    <Loader />
    <section class="sign-in-page">
      <router-view></router-view>
    </section>
    <modeswitch />
  </div>
</template>
<script>
import Loader from '../components/core/loader/Loader'
import logo from '../assets/images/logo.png'
import { core } from '../config/pluginInit'
export default {
  name: 'AuthLayout',
  components: {
    Loader
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      options: {
        slidesPerView: 1,
        loop: true
      },
      logo: logo
      // bgImageURL: bgImage
    }
  }
}
</script>
<style lang="scss">
@import url("../assets/css/custom.css");
@import url("../assets/css/developer.css");
@import "../assets/scss/frontend.scss";
</style>
