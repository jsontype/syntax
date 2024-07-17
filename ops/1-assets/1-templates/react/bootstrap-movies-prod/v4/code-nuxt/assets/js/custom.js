/* eslint-disable no-undef */
/*

Template: Sofbox - Responsive Software Landing Page
Author: iqonicthemes.in
Version: 3.0

*/

/* ----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Back To Top
3.Hide Menu
4.Accordion
5.Header
6.Magnific Popup
7.Countdown
8.Search Style
9.Wow Animation
10.Panorama Animation
11.Fullpage Viewer
12.Owl Carousel
13.Contact From
14.Bootstrap Carousel and Animate.css
------------------------------------------------
Index Of Script
---------------------------------------------- */
$(document).ready(function () {
  /* ------------------------
    Page Loader
    -------------------------- */
  // jQuery("#load").fadeOut();
  // jQuery("#loading").delay(0).fadeOut("slow");

  /* ------------------------
    Back To Top
    -------------------------- */
  $('#back-to-top').fadeOut()
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 250) {
      $('#back-to-top').fadeIn(1400)
    } else {
      $('#back-to-top').fadeOut(400)
    }
  })

  // scroll body to 0px on click
  /* $('#top').on('click', function() {
        // $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); */

  /* ------------------------
    Hide Menu
    -------------------------- */
  // $(".navbar a").on("click", function(event) {
  //     $(".navbar-collapse").collapse('hide');
  // });

  /* ------------------------
    Accordion
    -------------------------- */
  $('.iq-accordion .iq-accordion .accordion-details').hide()
  $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow')
  $('.iq-accordion .iq-accordion').on('click', function () {
    if ($(this).children('div').is(':hidden')) {
      $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow')
      $(this).toggleClass('accordion-active').children('div').slideDown('slow')
    }
  })

  /* ------------------------
    Header
    -------------------------- */
  // $('.navbar-nav li a').on('click', function(e) {
  //   e.preventDefault();
  //     var anchor = $(this);
  //     $('html, body').stop().animate({
  //         scrollTop: $(anchor.attr('href')).offset().top - 0
  //     }, 1500);
  // });
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('menu-sticky')
    } else {
      $('header').removeClass('menu-sticky')
    }
  })

  /* ------------------------
    Amazing Tab
    -------------------------- */
  $('#iq-amazing-tab').on('click', 'a', function () {
    $('#iq-amazing-tab  li a.active1').removeClass('active1')
    $(this).addClass('active1')
  })

  /* ------------------------
  Img Skrollr
  -------------------------- */
  /* var mySkrollr = skrollr.init({
    forceHeight: false,
    easings: {
      easeOutBack: function(p, s) {
        s = 1.70158;
        p = p - 1;
        return (p * p * ((s + 1) * p + s) + 1);
      }
    },
    mobileCheck: function() {
      //hack - forces mobile version to be off
      return false;
    }
  }); */

  /* ------------------------
    widget
    -------------------------- */
  $('.iq-widget-menu > ul > li > a').on('click', function () {
    const checkElement = $(this).next()
    $('.iq-widget-menu li').removeClass('active')
    $(this).closest('li').addClass('active')
    if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active')
      checkElement.slideUp('normal')
    }
    if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('.iq-widget-menu ul ul:visible').slideUp('normal')
      checkElement.slideDown('normal')
    }
    if ($(this).closest('li').find('ul').children().length === 0) {
      return true
    } else {
      return false
    }
  })

  /* ------------------------
    counter
    -------------------------- */
  // $('.timer').countTo();
  /* ------------------------
    Screenshots silder
    -------------------------- */
  /* var slide = $('.slider-single');
  var slideTotal = slide.length - 1;
  var slideCurrent = -1;

  function slideInitial() {
    slide.addClass('proactivede');
    setTimeout(function() {
      slideRight();
    }, 500);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);

    }

    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('proactivede')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('proactive')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }

  var left = $('.slider-left');
  var right = $('.slider-right');
  left.on('click', function() {
    slideLeft();
  });
  right.on('click', function() {
    slideRight();
  });
  slideInitial();

*/

  // $('.popup-gallery').magnificPopup({
  //   delegate: 'a.popup-img',
  //   tLoading: 'Loading image #%curr%...',
  //   type: 'image',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     navigateByImgClick: true,
  //     enabled: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //   }
  // });

  // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  //   type: 'iframe',
  //   disableOn: 700,
  //   mainClass: 'mfp-fade',
  //   preloader: false,
  //   removalDelay: 160,
  //   fixedContentPos: false
  // });
  /* --------------------------
  bootstrap menu index-12
  --------------------------- */

  $(window).on('scroll', function (e) {
    if ($('#how-it-works').length && $('#great-screenshots').length) {
      if ($(this).scrollTop() >= ($('#how-it-works').offset().top - 2000)) {
        $('#great-screenshots ul li').children('a[aria-selected=true]').addClass('active')
        e.preventDefault()
      }
    }
  })

  /* ------------------------
    Wow Animation
    -------------------------- */
  /* var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init(); */

  /* ------------------------
    Owl Carousel
    -------------------------- */
  /* $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    }); */
})
