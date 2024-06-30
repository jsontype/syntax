import Scrollbar from 'smooth-scrollbar'
const $ = require('jquery')
let tpj
let WOW
let $skrollr
let scroll
if (typeof window !== 'undefined') {
  const $ = require('jquery')
  window.$ = $
  window.jQuery = $
  tpj = $.noConflict()
  WOW = require('wowjs')
  $skrollr = require('skrollr')
  require('slick-carousel')
  require('../js/slick-animation.min.js')
  require('owl.carousel/dist/owl.carousel')
  require('jarallax/dist/jarallax.min')
  require('isotope-layout')
  require('magnific-popup/dist/jquery.magnific-popup.min')
  require('datatables.net')
}
export const core = {
  index () {
    this.loaderInit()
    this.onScroll()
    this.toggleDropdown()
    this.SmoothScrollbar()
    this.skrollr()
    this.scrollTop()
    this.checkElement()
    this.jarallax()
    this.accordion()
    this.wowInit()
    this.isotope()
    this.owlCarousel()
    this.featureBoxEffect()
    this.magnific()
    setTimeout(() => {
      this.counterPlgInit()
    }, 500)
  },
  magnific () {
    $('.video-open').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: 'iframe_src'
      }
    })
  },
  mainIndex () {
    this.fixedHeader()
  },
  initDataTable () {
    $('.table').DataTable()
  },
  scrollTop () {
    const btn = $('#back-to-top')
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        btn.addClass('show')
      } else {
        btn.removeClass('show')
      }
    })
    btn.on('click', function (e) {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 }, '300')
    })
  },
  scrollme () {
    setTimeout(() => {
      scroll.default.init()
    }, 1050)
  },
  triggerSet () {
    const elementExist = this.checkElement('class', 'wrapper-menu')
    if (elementExist) {
      const wrapperMenu = document.querySelector('.wrapper-menu')
      const body = document.querySelector('body')
      this.sidebarMiniSetEvent(wrapperMenu, body)
    }
  },

  sidebarMiniSetEvent (element, target) {
    element.classList.toggle('open')
    target.classList.toggle('sidebar-main')
  },
  SmoothScrollbar () {
    const elementExistMain = this.checkElement('id', 'sidebar-scrollbar')
    if (elementExistMain) {
      Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
    }
    const elementExistRight = this.checkElement('id', 'right-sidebar-scrollbar')
    if (elementExistRight) {
      Scrollbar.init(document.querySelector('#right-sidebar-scrollbar'))
    }
  },
  featureBoxEffect () {
    $('.feature-box-effect').mouseenter(function () {
      $('.selected').removeClass('selected').addClass('feature-box-effect')
      $(this).removeClass('feature-box-effect').addClass('selected')
    })
  },
  progressInit (e) {
    const iqProgress = e
    if (iqProgress !== undefined && iqProgress !== null && iqProgress !== undefined) {
      iqProgress.style.transition = 'width 2s ease 0s'
      iqProgress.style.width = iqProgress.getAttribute('data-value') + '%'
    }
  },
  progressInitVerticle (e) {
    const iqProgress = e
    if (iqProgress !== undefined && iqProgress !== null && iqProgress !== undefined) {
      iqProgress.style.width = '100%'
      iqProgress.style.transition = 'height 2s ease 0s'
      iqProgress.style.height = iqProgress.getAttribute('data-value') + '%'
    }
  },
  counterPlgInit () {
    let waypointInit
    Array.from(document.getElementsByClassName('counter')).forEach((c) => {
      waypointInit = new Waypoint({
        element: c,
        handler: (direction) => {
          if (direction === 'down') {
            this.counterInit(c)
          }
        },
        offset: 'bottom-in-view'
      })
    })
    return waypointInit
  },
  loaderInit () {
    $('#load').fadeOut()
    $('#loading').delay(1000).fadeOut('slow')
  },

  onScroll () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('header').addClass('menu-sticky animated slideInDown')
      } else {
        $('header').removeClass('menu-sticky animated slideInDown')
      }
    })
    $('.nav-link').click(function (event) {
      event.preventDefault()
    })
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh')
    })
  },

  wowInit () {
    const elementExist = this.checkElement('class', 'wow')

    if (elementExist) {
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init()
    }
  },

  toggleDropdown () {
    $('#main-header .menu-item .toggledrop').off('click')
    if ($(window).width() < 992) {
      $('#main-header .menu-item .toggledrop').on('click', function (e) {
        e.preventDefault()
        $(this).closest('li').find('.sub-menu').toggle('d-block')
      })
    }
    $(window).on('resize', function () {
      'use strict'
      $('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on(
        'click',
        function () {
          $(this).closest('li').find('.sub-menu').toggle('d-block')
        }
      )
      $('#main-header .menu-item .toggledrop').off('click')
      if ($(window).width() < 992) {
        $('#main-header .menu-item .toggledrop').on('click', function (e) {
          e.preventDefault()
          $(this).closest('li').find('.sub-menu').toggle('d-block')
        })
      }
    })
    $('.nav-item.dropdown').mouseenter(function () {
      $(this).addClass('menu-show')
    })

    $('.nav-item.dropdown').mouseleave(function () {
      $(this).removeClass('menu-show')
    })
  },
  isotope () {
    /* ------------------------
          2 Isotope
    -------------------------- */
    const elementExist = this.checkElement('class', 'isotope')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.isotope').isotope({
        itemSelector: '.iq-grid-item'
      })

      // filter items on button click
      $('.isotope-filters').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter')
        $('.isotope').isotope({
          resizable: true,
          filter: filterValue,
          layoutMode: 'cellsByRow'
        })
        $('.isotope-filters button').removeClass('active')
        $(this).addClass('active')
      })
    }

    /* ------------------------
          3 Masonry
    -------------------------- */

    const elementExist1 = this.checkElement('class', 'iq-masonry-block')
    if (elementExist1) {
      const $msnry = $('.iq-masonry-block .iq-masonry')
      if ($msnry) {
        const $filter = $('.iq-masonry-block .isotope-filters')
        $msnry.isotope({
          percentPosition: true,
          resizable: true,
          itemSelector: '.iq-masonry-block .iq-masonry-item',
          masonry: {
            gutterWidth: 0
          }
        })

        // bind filter button click
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter')
          $msnry.isotope({
            filter: filterValue
          })
        })

        $filter.each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup)
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.active').removeClass('active')
            $(this).addClass('active')
          })
        })
      }
    }
  },
  skrollr () {
    // const $skrollr = window.skrollr
    $skrollr.init().destroy()
    $skrollr.init({
      forceHeight: false,
      easings: {
        easeOutBack (p, s) {
          s = 1.70158
          p = p - 1
          return p * p * ((s + 1) * p + s) + 1
        }
      },
      mobileCheck () {
        return false
      }
    })
  },

  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)

        if (
          elements !== undefined &&
          elements !== null &&
          elements.length > 0
        ) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }

    return found
  },
  jarallax () {
    // eslint-disable-next-line no-undef
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    })
  },
  accordion () {
    $('.iq-accordion .iq-accordion-block .iq-accordion-details').hide()
    $('.iq-accordion .iq-accordion-block:first').addClass('iq-active').children().slideDown('slow')
    $('.iq-accordion .iq-accordion-block').on('click', function () {
      if ($(this).children('div.iq-accordion-details ').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('iq-active').children('div.iq-accordion-details ').slideUp('slow')
        $(this).toggleClass('iq-active').children('div.iq-accordion-details ').slideDown('slow')
      }
    })
  },
  progressBar () {
    $('.progressbar-circle').each(function () {
      const elementPos = $(this).offset().top
      const topOfWindow = $(window).scrollTop()
      const percent = $(this).find('.circle').attr('data-percent')
      const animate = $(this).data('animate')
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true)
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 10,
          fill: {
            color: '#6f73f0'
          }
        }).stop()
        $(this).find('.circle.purple-hover').circleProgress({
          fill: {
            color: '#6f73f0'
          }
        })
        $(this).find('.circle.org-hover').circleProgress({
          fill: {
            color: '#ff796d'
          }
        })
        $(this).find('.circle.green-hover').circleProgress({
          fill: {
            color: '#33e2a0'
          }
        })
      }
    })
  },

  progress () {
    $('.iq-progress-bar > span').each(function () {
      const jQuerythis = $(this)
      const width = $(this).data('percent')
      jQuerythis.css({
        transition: 'width 2s'
      })
      setTimeout(function () {
        jQuerythis.appear(function () {
          jQuerythis.css('width', width + '%')
        })
      }, 500)
    })
  },
  // magnific () {
  //   $('.popup-gallery').magnificPopup({
  //     delegate: 'a.popup-img',
  //     tLoading: 'Loading image #%curr%...',
  //     type: 'image',
  //     mainClass: 'mfp-img-mobile',
  //     gallery: {
  //       navigateByImgClick: true,
  //       enabled: true,
  //       preload: [0, 1]
  //     },
  //     image: {
  //       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //     }
  //   })

  //   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  //     type: 'iframe',
  //     disableOn: 700,
  //     mainClass: 'mfp-fade',
  //     preloader: false,
  //     removalDelay: 160,
  //     fixedContentPos: false
  //   })
  // },
  owlCarousel () {
    const elementExist = this.checkElement('class', 'owl-carousel')
    if (elementExist) {
      $('.owl-carousel').each(function () {
        const $carousel = $(this)
        $carousel.owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 4
            }
          }
        })
      })
    }
  },
  activeTabPane () {
    $('li a').click(function (e) {
      e.preventDefault()
      $('a').removeClass('active1')
      $(this).addClass('active1')
    })
  },
  pricingProcess () {
    const count_tabs = $('#count-tabs').val()
    for (var i = 0; i <= count_tabs; i++) {
      var maxnumber = $('#number_user_' + i).val()
      $('#user_range_' + i).range({
        min: 1,
        max: maxnumber,
        start: 1,
        step: 1,
        input: '#user_text_' + i
      })
    }
    for (var i = 0; i <= count_tabs; i++) {
      var maxnumber = $('#number_time' + i).val()
      $('#time_range_' + i).range({
        min: 1,
        max: maxnumber,
        start: 1,
        step: 1,
        input: '#time_text_' + i
      })
    }
    $('.input-range').on('click mousemove', function () {
      const check = $(this).attr('id')
      const id = $(this).attr('id').match(/\d+/)
      const user_range = $('#user_range_' + id)
      const time_range = $('#time_range_' + id)
      const user_text = $('#user_text_' + id)
      const time_text = $('#time_text_' + id)
      const total = $('#total_' + id)
      const base = $('#base_' + id)
    })
    $('.price-checkbox').on('click', function () {
      const a = []
      const id = $(this).attr('primary').match(/\d+/)
      let price = 0
      const user_range = $('#user_range_' + id)
      const time_range = $('#time_range_' + id)
      const user_text = $('#user_text_' + id)
      const time_text = $('#time_text_' + id)
      const total = $('#total_' + id)
      const base = $('#base_' + id)
      $('.chk_' + id + ':checked').each(function () {
        price += parseInt($(this).val())
      })
      base.val(price)
      total.val(user_text.val() * time_text.val() * base.val())
      console.log(price)
    })
  }
}

export const animation = {
  easing: {
    linear (progress) {
      return progress
    },
    quadratic (progress) {
      return Math.pow(progress, 2)
    },
    swing (progress) {
      return 0.5 - Math.cos(progress * Math.PI) / 2
    },
    circ (progress) {
      return 1 - Math.sin(Math.acos(progress))
    },
    back (progress, x) {
      return Math.pow(progress, 2) * ((x + 1) * progress - x)
    },
    bounce (progress) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    elastic (progress, x) {
      return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
    }
  },
  animate (options) {
    const start = new Date()
    const id = setInterval(function () {
      const timePassed = new Date() - start
      let progress = timePassed / options.duration
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      const delta = options.delta(progress)
      options.step(delta)
      if (progress === 1) {
        clearInterval(id)
      }
    }, options.delay || 10)
  },
  fadeOut (element, options) {
    const to = 1
    this.animate({
      duration: options.duration,
      delta (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step (delta) {
        element.style.opacity = to - delta
      }
    })
  },
  fadeIn (element, options) {
    const to = 0
    this.animate({
      duration: options.duration,
      delta (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step (delta) {
        element.style.opacity = to + delta
      }
    })
  }
}

export const flatpickerSetting = {
  wrap: true,
  altFormat: 'j M Y',
  altInput: true,
  dateFormat: 'Y-m-d'
}


// rtl mode
{/* <div class="rtl-box">
      <button type="button" class="btn btn-light rtl-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
      </button>
      <div class="rtl-panel">
         <ul class="present">
            <li class="dir-btn" data-value="ltr"><a href="">LTR</a></li>
            <li class="dir-btn" data-value="rtl"><a href="">RTL</a></li>
         </ul>
      </div>
   </div> */}

   //ltr css
//    .rtl-box {position: fixed;top: 115px;right: -00px; background-color: var(--white);}
// .rtl-btn{ position: absolute; left: -35px; padding: 0em; background-color: black; border:2px solid black;}
// .present{margin: 0; padding:0.938em;}
// .present li a{ display: block; border: 1px solid rgb(82, 79, 79); text-align: center; padding: 0.313em 1.5em; }
// .present li{ list-style: none; }

//rtl css
// [dir="rtl"] .rtl-box {left: 0px; right: unset;}
// [dir="rtl"] .rtl-btn {right: -35px;}
