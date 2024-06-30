<template>
  <section id="iq-upcoming-movie">
    <b-container fluid>
      <b-row>
        <b-col sm="12" class="overflow-hidden">
          <div class="iq-main-header d-flex align-items-center justify-content-between">
            <div>
              <h4 class="main-title">
                Upcoming Movies
              </h4>
            </div>
            <div class="d-flex slick-aerrow-block">
              <button
                class="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style="display: block;"
                @click="prev()"
              />
              <button
                class="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style="display: block;"
                @click="next()"
              />
            </div>
          </div>
          <div class="upcoming-contens">
            <VueSlickCarousel ref="dSlick" class="favorites-slider list-inline row p-0 mb-0 iq-rtl-direction" v-bind="upCommingSliderOption">
              <li v-for="(item,index) in upComming" :key="index" class="slide-item">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img :src="item.image" class="img-fluid" alt="">
                  </div>
                  <div class="block-description">
                    <h6 class="iq-title">
                      <nuxt-link to="/frontend/movie-detail">
                        {{ item.title }}
                      </nuxt-link>
                    </h6>
                    <div class="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                      <div class="badge badge-secondary p-1 mr-2">
                        {{ item.age }}
                      </div>
                      <span class="text-white">{{ item.time }}</span>
                    </div>
                    <div class="hover-buttons">
                      <nuxt-link to="/frontend/movie-detail" role="button" class="btn btn-hover">
                        <i class="fa fa-play mr-1" aria-hidden="true" />
                        Play Now
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="block-social-info">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="ri-share-fill" /></span>
                        <div class="share-box">
                          <div class="d-flex align-items-center">
                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill" /></a>
                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill" /></a>
                            <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="ri-heart-fill" /></span>
                        <span class="count-box">19+</span>
                      </li>
                      <li><span><i class="ri-add-line" /></span></li>
                    </ul>
                  </div>
                </div>
              </li>
            </VueSlickCarousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: 'Upcomming',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      upComming: [
        { image: require('../../../assets/images/frontend/upcoming/01.jpg'), title: 'The Last Breath', age: '5+', time: '2h 30m' },
        { image: require('../../../assets/images/frontend/upcoming/02.jpg'), title: 'Last Night', age: '22+', time: '2h 30m' },
        { image: require('../../../assets/images/frontend/upcoming/03.jpg'), title: '1980', age: '25+', time: '2h 30m' },
        { image: require('../../../assets/images/frontend/upcoming/03.jpg'), title: '1980', age: '25+', time: '2h 30m' },
        { image: require('../../../assets/images/frontend/upcoming/03.jpg'), title: '1980', age: '25+', time: '2h 30m' }
      ],
      upCommingSliderOption: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
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
  mounted () {
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
