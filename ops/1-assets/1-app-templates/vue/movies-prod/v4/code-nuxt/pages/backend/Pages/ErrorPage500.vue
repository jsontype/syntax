<template>
  <div class="container pt-5">
    <div class="row no-gutters height-self-center">
      <div class="col-sm-12 text-center align-self-center">
        <div class="iq-error position-relative">
          <img :src="image500" class="img-fluid iq-error-img" alt="500">
          <h1 class="text-in-box">
            500
          </h1>
          <h2 class="mb-0">
            Oops! This Page is Not Found.
          </h2>
          <p>The requested page dose not exist.</p>
          <button class="btn btn-primary mt-3" @click="$router.go(-1)">
            <i class="ri-home-4-line" />Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { core } from '../../../assets/app/app'

export default {
  name: 'ErrorPage500',
  data () {
    return {
      image500: require('../../../assets/images/error/500.png')
    }
  },
  mounted () {
    core.index()
  }
}
</script>
