<template>
  <vue-slick :options="option">
    <slot />
  </vue-slick>
</template>
<script>
import VueSlick from 'vue-slick'
export default {
  name: 'Slick',
  components: {
    VueSlick
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 9,
          slidesToScroll: 1,
          focusOnSelect: true,
          responsive: [{
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30',
              slidesToShow: 3
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '15',
              slidesToShow: 1
            }
          }],
          nextArrow: '<a href="#" class="ri-arrow-left-s-line left"></a>',
          prevArrow: '<a href="#" class="ri-arrow-right-s-line right"></a>'
        }
      }
    }
  }
}
</script>
