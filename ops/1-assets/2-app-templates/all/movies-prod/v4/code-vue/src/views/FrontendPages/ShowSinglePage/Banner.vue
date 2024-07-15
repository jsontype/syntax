<template>
   <section class="banner-wrapper overlay-wrapper iq-main-slider">
      <div class="banner-caption">
         <div class="position-relative mb-4">
            <router-link :to="{ name: 'landing-page.category-detail' }" class="d-flex align-items-center">
               <div class="play-button">
                  <i class="fa fa-play"></i>
               </div>
               <h4 class="w-name text-white font-weight-700">Watch latest Episode</h4>
            </router-link>
         </div>
         <ul class="list-inline p-0 m-0 share-icons music-play-lists">
            <li><span><i class="ri-add-line"></i></span></li>
            <li><span><i class="ri-heart-fill"></i></span></li>
            <li class="share">
               <span><i class="ri-share-fill"></i></span>
               <div class="share-box">
                  <div class="d-flex align-items-center">
                     <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                     <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                     <a href="#" class="share-ico"><i class="ri-links-fill"></i></a>
                  </div>
               </div>
            </li>
         </ul>
      </div>
   </section>
</template>
<script>
export default {
  name: 'Banner',
  components: {
  },
  mounted () {
  },
  data () {
    return {
    }
  }
}
</script>
