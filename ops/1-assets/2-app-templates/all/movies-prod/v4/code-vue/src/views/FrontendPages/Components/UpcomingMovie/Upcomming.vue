<template>
<section id="iq-upcoming-movie">
   <b-container fluid >
      <b-row >
         <b-col sm="12" class="overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
               <h4 class="main-title">Upcoming Movies</h4>
               <router-link :to="{ name: 'landing-page.show-category' }" class="iq-view-all">View All</router-link>
            </div>
            <div class="upcoming-contens">
               <Slick class="favorites-slider list-inline row p-0 mb-0 iq-rtl-direction" ref="dSlick" :option="upCommingSliderOption">
                  <li class="slide-item" v-for="(item,index) in upComming" :key="index">

                        <div class="block-images position-relative">
                           <div class="img-box">
                              <img :src="item.image" class="img-fluid" alt="">
                           </div>
                           <div class="block-description">
                              <h6 class="iq-title"> <router-link :to="{ name: 'landing-page.movie-detail' }">{{item.title}}</router-link></h6>
                              <div class="movie-time d-flex align-items-center my-2 iq-ltr-direction ">
                                 <div class="badge badge-secondary p-1 mr-2">{{item.age}}</div>
                                 <span class="text-white">{{item.time}}</span>
                              </div>
                              <div class="hover-buttons">
                                 <router-link :to="{ name: 'landing-page.movie-detail' }" role="button" class="btn btn-hover iq-button"><i class="fa fa-play mr-1" aria-hidden="true"></i>
                                 Play Now
                                 </router-link>
                              </div>
                           </div>
                           <div class="block-social-info">
                              <ul class="list-inline p-0 m-0 music-play-lists">
                                 <li class="share">
                                    <span><i class="ri-share-fill"></i></span>
                                    <div class="share-box">
                                       <div class="d-flex align-items-center">
                                          <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                                          <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                                          <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <span><i class="ri-heart-fill"></i></span>
                                    <span class="count-box">19+</span>
                                 </li>
                                 <li><span><i class="ri-add-line"></i></span></li>
                              </ul>
                           </div>
                        </div>

                  </li>
               </Slick>
            </div>
         </b-col>
      </b-row>
   </b-container>
</section>
</template>
<script>

export default {
  name: 'Upcomming',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      upComming: [
        { image: require('../../../../assets/images/frontend/upcoming/01.jpg'), title: 'The Last Breath', age: '5+', time: '2h 30m' },
        { image: require('../../../../assets/images/frontend/upcoming/02.jpg'), title: 'Shadow', age: '22+', time: '2h 15m' },
        { image: require('../../../../assets/images/frontend/upcoming/03.jpg'), title: 'Another Danger', age: '25+', time: '3h' },
        { image: require('../../../../assets/images/frontend/upcoming/04.jpg'), title: '1980', age: '11+', time: '2h 45m' },
        { image: require('../../../../assets/images/frontend/upcoming/05.jpg'), title: 'Vugotronic', age: '9+', time: '2h 30m' }
      ],
      upCommingSliderOption: {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-chevron-right"></i></div>',
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  methods: {
    next () {
      this.$refs.dSlick.next()
    },
    prev () {
      this.$refs.dSlick.prev()
    }
  }
}
</script>
