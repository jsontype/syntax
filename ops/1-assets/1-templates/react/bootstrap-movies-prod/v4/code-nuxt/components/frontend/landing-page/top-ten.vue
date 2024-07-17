<template>
  <section id="iq-topten">
    <b-container fluid>
      <b-row>
        <b-col sm="12" class="overflow-hidden">
          <div class="iq-main-header d-flex align-items-center justify-content-between" />
          <div class="topten-contens">
            <h4 class="main-title iq-title topten-title">
              Top 10 in India
            </h4>
            <Slick id="top-ten-slider" class="list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction" :option="sliderOption1">
              <li v-for="(slider,index) in topTenSlider" :key="index" class="slick-bg">
                <img :src="slider" class="img-fluid w-100" alt="">
              </li>
            </Slick>
            <div class="vertical_s">
              <Slick id="top-ten-slider-nav" class="list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction" :option="sliderOption2">
                <li v-for="(item,index1) in topTenNavSlider " :key="index1" class="">
                  <div class="block-images position-relative">
                    <nuxt-link to="/frontend/movie-detail">
                      <img :src="item.image" class="img-fluid w-100" alt="">
                    </nuxt-link>
                    <div class="block-description">
                      <h6>{{ item.title }}</h6>
                      <div class="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                        <div class="badge badge-secondary p-1 mr-2">
                          {{ item.age }}
                        </div>
                        <span class="text-white">{{ item.time }}</span>
                      </div>
                      <div class="hover-buttons">
                        <nuxt-link to="/frontend/movie-detail" class="btn btn-hover" tabindex="0">
                          <i class="fa fa-play mr-1" aria-hidden="true" /> Play Now
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </li>
              </Slick>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Slick from '../../../components/core/slider/Slick'
export default {
  name: 'Top',
  components: {
    Slick
  },
  data () {
    return {
      topTenSlider: [
        require('../../../assets/images/frontend/top-10/01.jpg'),
        require('../../../assets/images/frontend/top-10/02.jpg'),
        require('../../../assets/images/frontend/top-10/03.jpg'),
        require('../../../assets/images/frontend/top-10/04.jpg'),
        require('../../../assets/images/frontend/top-10/05.jpg'),
        require('../../../assets/images/frontend/top-10/06.jpg')
      ],
      topTenNavSlider: [
        { image: require('../../../assets/images/frontend/top-10/01.jpg'), title: 'The Illusion', age: '10+', time: '3h 15m' },
        { image: require('../../../assets/images/frontend/top-10/02.jpg'), title: 'Burning', age: '13+', time: '3h 15m' },
        { image: require('../../../assets/images/frontend/top-10/03.jpg'), title: 'Hubby Kubby', age: '15+', time: '2h 15m' },
        { image: require('../../../assets/images/frontend/top-10/04.jpg'), title: 'Open Dead Shot', age: '18+', time: '3h 15m' },
        { image: require('../../../assets/images/frontend/top-10/05.jpg'), title: 'Jumbo Queen', age: '6+', time: '4h 15m' },
        { image: require('../../../assets/images/frontend/top-10/06.jpg'), title: 'The Lost Journey', age: '10+', time: '3h 15m' }
      ],
      sliderOption1: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#top-ten-slider-nav',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              asNavFor: false,
              arrows: true,
              nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
              prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>'
            }
          }
        ]
      },
      sliderOption2: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#top-ten-slider',
        dots: false,
        arrows: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        centerMode: false,
        nextArrow: '<button class="NextArrow"><i class="ri-arrow-down-s-line"></i></button>',
        prevArrow: '<button class="PreArrow"><i class="ri-arrow-up-s-line"></i></button>',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              asNavFor: false
            }
          }
        ]
      }
    }
  },
  mounted () {
  }
}
</script>
