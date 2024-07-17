<template>
  <section id="home" class="iq-main-slider p-0 iq-rtl-direction">
    <Slick id="home-slider" class="slider m-0 p-0" :option="homeSliderOption" @init="navAnimateButton" @reInit="navAnimateButton">
      <div v-for="(data,index) in sliderData" :key="index" class="slide slick-bg s-bg-1" :style="'background: url('+data.src+'); padding: 100px 0 50px;width:100%; background-size: cover;background-position: center center; background-repeat: no-repeat; height: 100vh; position: relative; z-index: 1;'">
        <b-container fluid class="position-relative h-100">
          <div class="slider-inner h-100">
            <b-row class="align-items-center  h-100 iq-ltr-direction">
              <b-col xl="6" lg="12" md="12">
                <a href="#">
                  <div class="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
                    <img src="../../../assets/images/logo-full.png" class="c-logo" alt="streamit">
                  </div>
                </a>
                <h1
                  class="slider-text big-title title text-uppercase"
                  data-animation-in="fadeInLeft"
                  data-delay-in="0.6"
                >
                  {{ data.title }}
                </h1>
                <div class="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                  <div class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                    <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <i class="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i class="fa fa-star-half" aria-hidden="true" />
                      </li>
                    </ul>
                    <span class="text-white ml-2">4.7(lmdb)</span>
                  </div>
                  <span class="badge badge-secondary  p-2 mt-2 mt-md-3">{{ data.age }}+</span>
                  <span class="ml-3 mt-2 mt-md-3">{{ data.sesson }}</span>
                </div>
                <p data-animation-in="fadeInUp" data-delay-in="1.2">
                  {{ data.text }}
                </p>
                <div class="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                  <div class="text-primary title starring">
                    Starring: <span class="text-body">Karen Gilchrist, James Earl Jones</span>
                  </div>
                  <div class="text-primary title genres">
                    Genres: <span class="text-body">Action</span>
                  </div>
                  <div class="text-primary title tag">
                    Tag: <span class="text-body">Action, Adventure, Horror</span>
                  </div>
                </div>
                <div class="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                  <nuxt-link to="/frontend/show-detail" class="btn btn-hover">
                    <i
                      class="fa fa-play mr-2"
                      aria-hidden="true"
                    />Play Now
                  </nuxt-link>
                  <nuxt-link to="/frontend/show-detail" class="btn btn-link">
                    More details
                  </nuxt-link>
                </div>
              </b-col>
              <b-col xl="5" lg="12" md="12" class="trailor-video text-center">
                <a :href="require('../../../assets/video/trailer.mp4')" class="video-open playbtn">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7"
                    xml:space="preserve"
                  >
                    <polygon
                      class="triangle"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />
                    <circle
                      class="circle"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                  <span class="w-trailor">Watch Trailer</span>
                </a>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>
    </Slick>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol
        id="circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44 44"
        width="44px"
        height="44px"
        fill="none"
        stroke="currentColor"
      >
        <circle id="test" r="20" cy="22" cx="22" />
      </symbol>
    </svg>
  </section>
</template>
<script>
import Slick from '../../core/slider/Slick'
export default {
  name: 'Home',
  components: {
    Slick
  },
  data () {
    return {
      sliderData: [
        { title: 'SAIL COASTER', age: '16', sesson: '2h 40m', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", src: require('@/assets/images/frontend/slider/slider2.jpg') },
        { title: 'bushland', age: '18', sesson: '2 Seasons', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", src: require('@/assets/images/frontend/slider/slider1.jpg') },
        { title: 'THE ARMY', age: '18', sesson: '3h', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", src: require('@/assets/images/frontend/slider/slider3.jpg') }
      ],
      homeSliderOption: {
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false
            }
          }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    navAnimateButton (event, slider) {
      const nav = document.getElementsByClassName('slick-nav')
      Array.from(nav, (elem) => {
        elem.addEventListener('click', (e) => {
          elem.classList.add('animate')
          setTimeout(() => {
            elem.classList.remove('animate')
          }, 1600)
        })
      })
    }
  }
}
</script>
