<template>
  <div class="container pt-5 ltr">
    <div class="row no-gutters height-self-center">
      <div class="col-sm-12 text-center align-self-center">
        <div class="iq-error position-relative">
          <img :src="image404" class="img-fluid iq-error-img mb-4" alt="404" v-if="$route.params.code === '404'">
          <img :src="image500" class="img-fluid iq-error-img mb-1" alt="500" v-else>
          <h1 v-if="$route.params.code === '500'" class="text-in-box">500</h1>
          <h2 class="mb-0">Oops! This Page is Not Found.</h2>
          <p>The requested page is internal server error.</p>
          <button @click="$router.go(-1)" class="btn btn1 mt-3"><i class="ri-home-4-line"></i>Back to Home</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'ErrorPage',
  mounted () {
    core.index()
  },
  data () {
    return {
      image404: require('../../assets/images/error/404.png'),
      image500: require('../../assets/images/error/500.png')
    }
  }
}
</script>
<style scoped>
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;
}
</style>
