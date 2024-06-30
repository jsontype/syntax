<template>
  <div>
    <Loader />
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Loader from '../components/core/loader/Loader'
import { core } from '../config/pluginInit'
export default {
  name: 'BlankLayout',
  components: {
    Loader
  },
  mounted () {
    core.mainIndex()
  }
}
</script>
<style  lang="scss">
@import url("../assets/css/custom.css");
@import url("../assets/css/developer.css");
@import "../assets/scss/backend.scss";
  .modal-backdrop {
    opacity: .5;
  }
</style>
