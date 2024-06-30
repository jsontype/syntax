import Scrollbar from 'smooth-scrollbar'
import Snackbar from 'node-snackbar'
import Store from '../store/index'
import Route from '../router/index'
import counterUp from 'counterup2'
require('waypoints/lib/noframework.waypoints.min')
const $ = require('jquery')
// const DataTable = require('vanilla-datatables')
require('datatables.net')
if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
  require('owl.carousel/dist/owl.carousel')
  require('magnific-popup/dist/jquery.magnific-popup.min')
}
export const APPNAME = 'Streamit'
export const APPLOGONAME = 'STREAMIT'
export const core = {
  index () {
    this.loaderInit()
    this.activeRoute()
    this.SmoothScrollbar()
    this.bodyClassCheck()
    this.ripple()
    this.owlCarousel()
    this.onScroll()
    this.scrollTop()
    this.accordion()
    this.magnific()
    setTimeout(() => {
      this.counterPlgInit()
    }, 500)
  },
  mainIndex () {
    this.fixedHeader()
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
  scrollTop () {
    var btn = $('#back-to-top')
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
  bodyClassCheck () {
    const body = document.querySelector('body')
    const sidebar = document.getElementsByClassName('iq-sidebar')
    if (sidebar[0] !== undefined) {
      sidebar[0].classList.remove('sidebar-dark-blue')
    }
    body.classList.remove('icon-with-text')
    body.classList.remove('sidebar-main-active')
    body.classList.remove('right-column-fixed')
    body.classList.remove('two-sidebar')
    body.classList.remove('iq-page-menu-horizontal')
    body.classList.remove('top-tab-horizontal')
    switch (Route.currentRoute.meta.layout) {
      case 'mini-sidebar-right-fix':
        body.classList.add('sidebar-main-active')
        body.classList.add('right-column-fixed')
        break
      case 'nav-with-menu':
        body.classList.add('iq-page-menu-horizontal')
        break
      case 'nav-bottom-menu':
        body.classList.add('top-tab-horizontal')
        break
      case 'two-sidebar':
        body.classList.add('two-sidebar')
        break
      case 'icon-with-text':
        body.classList.add('icon-with-text')
        sidebar[0].classList.add('sidebar-dark-blue')
        break
      default:
        break
    }
  },
  initDataTable () {
    $('.table').DataTable()
  },
  loaderInit () {
    const load = document.getElementById('loading')
    animation.fadeOut(load, { duration: 0 })
    animation.fadeOut(load, { duration: 1000 })
    setTimeout(() => {
      load.classList.add('d-none')
    }, 1000)
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
  activeRoute () {
    const userProfile = document.getElementsByClassName('user-profile')
    if (userProfile[0] !== undefined) {
      userProfile[0].classList.remove('iq-show')
    }
    const obj = {
      name: Route.currentRoute.meta.name,
      breadCrumb: [
        {
          html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
          to: { name: 'dashboard.home-1' }
        },
        {
          text: Route.currentRoute.meta.name,
          href: '#'
        }
      ],
      bookmark: true
    }
    Store.dispatch('Setting/activePageAction', obj)
  },
  fixedHeader () {
    let position = 0
    if (window.pageXOffset !== undefined) { // All browsers, except IE9 and earlier
      position = window.pageYOffset
    } else { // IE9 and earlier
      position = document.documentElement.scrollTop
    }
    document.addEventListener('scroll', () => {
      let scroll = 0
      if (window.pageXOffset !== undefined) { // All browsers, except IE9 and earlier
        scroll = window.pageYOffset
      } else { // IE9 and earlier
        scroll = document.documentElement.scrollTop
      }
      const tabMenuHorizontal = document.querySelector('.tab-menu-horizontal')
      if (tabMenuHorizontal !== undefined && tabMenuHorizontal !== null) {
        if (scroll < position) {
          tabMenuHorizontal.classList.add('menu-up')
          tabMenuHorizontal.classList.remove('menu-down')
        } else {
          tabMenuHorizontal.classList.add('menu-down')
          tabMenuHorizontal.classList.remove('menu-up')
        }
        if (scroll === 0) {
          tabMenuHorizontal.classList.remove('menu-up')
          tabMenuHorizontal.classList.remove('menu-down')
        }
      }
      position = scroll
    })
  },
  ripple () {
    const waveEffectClass = document.getElementsByClassName('iq-waves-effect')
    Array.from(waveEffectClass).forEach(function (element) {
      element.addEventListener('click', function (e) {
        // Remove any old one
        const ripple = document.getElementsByClassName('ripple')
        Array.from(ripple).forEach(function (re) {
          re.remove()
        })

        // get height width without padding
        var cs = getComputedStyle(e.target)

        var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight)
        var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)

        var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth)
        var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth)

        // Element width and height minus padding and border
        const elementWidth = e.target.offsetWidth - paddingX - borderX
        const elementHeight = e.target.offsetHeight - paddingY - borderY

        const box = element.getBoundingClientRect()
        // Setup
        const posX = box.x
        const posY = box.y
        let buttonWidth = elementWidth
        let buttonHeight = elementHeight

        // Add the element
        const span = document.createElement('span')
        span.classList = 'ripple'
        e.target.prepend(span)

        // Make it round!
        if (buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth
        } else {
          buttonWidth = buttonHeight
        }
        // Get the center of the element
        const x = e.pageX - posX - buttonWidth / 2
        const y = e.pageY - posY - buttonHeight / 2

        const newRipple = document.getElementsByClassName('ripple')[0]
        if (newRipple !== undefined && newRipple !== null) {
          newRipple.style.width = buttonWidth + 'px'
          newRipple.style.height = buttonHeight + 'px'
          newRipple.style.top = y + 'px'
          newRipple.style.left = x + 'px'
          newRipple.classList.add('rippleEffect')
        }
      })
    })
  },

  fullscreen () {
    const elementExist = this.checkElement('class', 'iq-full-screen')
    if (elementExist) {
      const element = document.querySelector('.iq-full-screen')
      element.addEventListener('click', function (e) {
        if (!document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }

        const elem = element.getElementsByTagName('i')
        if (elem.classList.contain('ri-fullscreen-line')) {
          elem.classList = 'ri-fullscreen-exit-line'
        } else {
          elem.classList = 'ri-fullscreen-line'
        }
      })
    }
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
  checkClass (ele, type, className) {
    switch (type) {
      case 'addClass':
        if (!ele.hasClass(className)) {
          ele.addClass(className)
        }
        break
      case 'removeClass':
        if (ele.hasClass(className)) {
          ele.removeClass(className)
        }
        break
      case 'toggleClass':
        ele.toggleClass(className)
        break
    }
  },

  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)
        if (elements !== undefined && elements !== null && elements.length > 0) {
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

  getActiveLink (item, activeRoute) {
    let active = false
    if (item.children !== undefined) {
      item.children.filter(function (child) {
        if (child.link.name === activeRoute) {
          active = true
        }
      })
    } else {
      if (item.link.name === activeRoute) {
        active = true
      }
    }
    return active
  },
  showSnackbar (type, data = {}) {
    if (type !== null) {
      switch (type) {
        case 'success':
          Snackbar.show({ text: data, backgroundColor: '#323232' })
          break
        case 'error':
          Snackbar.show({ text: data, backgroundColor: '#b21f2d', actionTextColor: '#ffffff' })
          break
      }
    } else {
      Snackbar.show(data)
    }
  },
  Snackbar (data) {
    Snackbar.show(data)
  },
  random (length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  },
  applyDrag (arr, dragResult) {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd)
    }

    return result
  },
  generateItems (count, creator) {
    const result = []
    for (let i = 0; i < count; i++) {
      result.push(creator(i))
    }
    return result
  },
  progressDestroy (e) {
    const iqProgress = e
    if (iqProgress !== undefined && iqProgress !== null) {
      iqProgress.style.transition = 'unset'
      iqProgress.style.width = '0%'
    }
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
  counterInit (e) {
    if (e !== undefined && e !== null) {
      counterUp(e, {
        delay: 5,
        time: 100
      })
    }
  }
}

export const animation = {
  easing: {
    linear: function (progress) {
      return progress
    },
    quadratic: function (progress) {
      return Math.pow(progress, 2)
    },
    swing: function (progress) {
      return 0.5 - Math.cos(progress * Math.PI) / 2
    },
    circ: function (progress) {
      return 1 - Math.sin(Math.acos(progress))
    },
    back: function (progress, x) {
      return Math.pow(progress, 2) * ((x + 1) * progress - x)
    },
    bounce: function (progress) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    elastic: function (progress, x) {
      return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
    }
  },
  animate: function (options) {
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
  fadeOut: function (element, options) {
    const to = 1
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step: function (delta) {
        element.style.opacity = to - delta
      }
    })
  },
  fadeIn: function (element, options) {
    const to = 0
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step: function (delta) {
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
