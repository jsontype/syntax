<template>
<section id="parallex" class="parallax-window">
   <b-container class="h-100" fluid>
      <b-row class="align-items-center justify-content-center h-100 parallaxt-details">
         <b-col lg="4" class="r-mb-23">
            <div class="text-left">
               <a href="#;">
                  <img src="../../../../assets/images/frontend/parallax/parallax-logo.png" class="img-fluid" alt="bailey">
               </a>
               <div class="parallax-ratting d-flex align-items-center mt-3 mb-3">
                  <ul
                     class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                     <li><a href="#" class="text-primary"><i class="fa fa-star"
                        aria-hidden="true"></i></a></li>
                     <li><a href="#" class="pl-2 text-primary"><i class="fa fa-star"
                        aria-hidden="true"></i></a></li>
                     <li><a href="#" class="pl-2 text-primary"><i class="fa fa-star"
                        aria-hidden="true"></i></a></li>
                     <li><a href="#" class="pl-2 text-primary"><i class="fa fa-star"
                        aria-hidden="true"></i></a></li>
                     <li><a href="#" class="pl-2 text-primary"><i class="fa fa-star-half-o"
                        aria-hidden="true"></i></a></li>
                  </ul>
                  <span class="text-white ml-3">9.2 (lmdb)</span>
               </div>
               <div class="movie-time d-flex align-items-center mb-3 iq-ltr-direction">
                  <div class="badge badge-secondary mr-3">13+</div>
                  <h6 class="text-white">2h 30m</h6>
               </div>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
               <div class="parallax-buttons">
                  <router-link :to="{ name: 'landing-page.movie-detail' }" class="btn btn-hover">Play Now</router-link>
                  <router-link :to="{ name: 'landing-page.movie-detail' }" class="btn btn-link">More details</router-link>
               </div>
            </div>
         </b-col>
         <b-col lg="8">
            <div class="parallax-img">
               <router-link :to="{ name: 'landing-page.movie-detail' }">
                  <img src="../../../../assets/images/frontend/parallax/p1.jpg" class="img-fluid w-100" alt="bailey" />
               </router-link>
            </div>
         </b-col>
      </b-row>
   </b-container>
</section>
</template>
<script>

export default {
  name: 'Details',
  components: {
  },
  mounted () {
  }
}
</script>
