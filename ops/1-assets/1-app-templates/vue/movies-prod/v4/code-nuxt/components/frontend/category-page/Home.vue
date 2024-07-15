<template>
  <section class="iq-main-slider p-0">
    <Slick id="tvshows-slider" :option="sliderOption" class="iq-rtl-direction">
      <div v-for="(item,index) in sliderData" :key="index">
        <div class="shows-img">
          <img :src="item.image" class="w-100" alt="">
          <div class="shows-content">
            <h4 class="text-white mb-1">
              {{ item.title }}
            </h4>
            <div class="movie-time d-flex align-items-center">
              <div class="badge badge-secondary p-1 mr-2">
                {{ item.age }}
              </div>
              <span class="text-white">{{ item.series }}</span>
            </div>
          </div>
        </div>
      </div>
    </Slick>
    <div class="dropdown genres-box">
      <b-dropdown id="dropdownMenuButton40" menu-class="three-column">
        <template v-slot:button-content>
          <b-link href="#" style="color:#fff">
            Genres
          </b-link>
        </template>
        <b-dropdown-item href="#">
          Share
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Delete
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Punjabi
        </b-dropdown-item>
        <b-dropdown-item href="#">
          English
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Comedies
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Action
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Romance
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Dramas
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Bollywood
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Hollywood
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Children & Family
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Award-Winning
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </section>
</template>
<script>
import Slick from '../../../components/core/slider/Slick'
export default {
  name: 'Slider',
  components: {
    Slick
  },
  data () {
    return {
      sliderData: [
        { image: require('../../../assets/images/frontend/shows-banner/show-1.jpg'), title: 'The Hero Camp', age: '18+', series: '3 Seasons' },
        { image: require('../../../assets/images/frontend/shows-banner/show-2.jpg'), title: 'The Appartment', age: '17+', series: '1 Seasons' },
        { image: require('../../../assets/images/frontend/shows-banner/show-3.jpg'), title: 'The Marshal King', age: '11+', series: '3 Seasons' }
      ],
      sliderOption: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
        prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
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
