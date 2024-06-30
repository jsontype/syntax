(function (jQuery) {
  "use strict";
  callCardSwiper();

  jQuery(".swiper-nav").on("click touch", function (e) {
    e.preventDefault();
    let arrow = jQuery(this);
    if (!arrow.hasClass("animate")) {
      arrow.addClass("animate");
      setTimeout(() => {
        arrow.removeClass("animate");
      }, 1600);
    }
  });

  // common card slider start
  function callCardSwiper() {
    window.swiperInit = [];
    jQuery(document)
      .find(".swiper.swiper-card")
      .each(function (index) {
        let slider = jQuery(this);

        var sliderAutoplay = slider.data("autoplay");
        var swiper;

        var breakpoint = {
          // when window width is >= 0px
          0: {
            slidesPerView: slider.data("mobile-sm"),
            spaceBetween: 0,
          },
          576: {
            slidesPerView: slider.data("mobile"),
            spaceBetween: 0,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: slider.data("tab"),
            spaceBetween: 0,
          },
          // when window width is >= 1025px
          1025: {
            slidesPerView: slider.data("laptop"),
            spaceBetween: 0,
          },
          // when window width is >= 1500px
          1500: {
            slidesPerView: slider.data("slide"),
            spaceBetween: 0,
          },
        };

        if (slider.data("navigation")) {
          var navigationVal = {
            nextEl: slider.find(".swiper-button-next")[0],
            prevEl: slider.find(".swiper-button-prev")[0],
          };
        } else {
          var navigationVal = false;
        }

        if (slider.data("pagination")) {
          var paginationVal = {
            el: slider.find(".swiper-pagination")[0],
            dynamicBullets: true,
            clickable: true,
          };
        } else {
          var paginationVal = false;
        }

        var sw_config = {
          loop: slider.data("loop"),
          speed: 1000,
          spaceBetween: 0,
          slidesPerView: slider.data("slide"),
          centeredSlides: slider.data("center"),
          mousewheel: slider.data("mousewheel"),
          autoplay: sliderAutoplay,
          effect: slider.data("effect"),
          navigation: navigationVal,
          pagination: paginationVal,
          breakpoints: breakpoint,
          on: {
            init: function () {
              swiper = this; // Assign the swiper object when it initializes
              addCustomClassToVisibleSlides(swiper, slider); // Add custom class to visible slides initially
            },
            transitionEnd: function () {
              swiper = this; // Assign the swiper object when the transition ends
              addCustomClassToVisibleSlides(swiper, slider); // Add custom class to visible slides on transition end
            },
          },
        };

        function addCustomClassToVisibleSlides(swiper, slider) {
          if (swiper) {
            // Remove the custom classes from all slides
            slider.find(".swiper-slide").removeClass("swiper-active last");

            // Get the position and dimensions of the slider container
            var sliderRect = slider[0].getBoundingClientRect();

            var lastVisibleSlide = null;

            // Loop through slides and add class to visible ones
            swiper.slides.forEach(function (slide) {
              var slideRect = slide.getBoundingClientRect();

              // Check if at least 50% of the slide is visible
              if (
                slideRect.left >= sliderRect.left &&
                slideRect.right <= sliderRect.right
              ) {
                // The slide is fully visible
                jQuery(slide).addClass("swiper-active");
                lastVisibleSlide = slide;
              }
            });

            // Add the 'last' class to the last visible slide with 'swiper-active' class
            if (lastVisibleSlide) {
              jQuery(lastVisibleSlide).addClass("last");
            }
          }
        }
        const uuid = _.uniqueId("swiper");
        window.swiperInit = [
          ...window.swiperInit,
          { init: {}, config: {}, elem: null, id: null },
        ];
        window.swiperInit[index].id = uuid;
        window.swiperInit[index].init = new Swiper(slider[0], sw_config); // Initialize swiper here
        window.swiperInit[index].config = sw_config;
        window.swiperInit[index].elem = slider[0];
        document.addEventListener("theme_scheme_direction", (e) => {
          window.swiperInit[index].init.destroy(true, true);
          setTimeout(() => {
            window.swiperInit[index].init = new Swiper(
              window.swiperInit[index].elem,
              window.swiperInit[index].config
            );
          }, 500);
        });
      });
  }
  // common card slider end

  // home page slider start
  if (document.querySelectorAll('[data-swiper="home-banner-slider"]').length) {
    const options = {
      centeredSlides: false,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: "#home-banner-slider-next",
        prevEl: "#home-banner-slider-prev",
      },
      responsive: [
        {
          breakpoint: 992,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        },
      ],
    };
    let homeSwiper = new Swiper('[data-swiper="home-banner-slider"]', options);

    document.addEventListener("theme_scheme_direction", (e) => {
      homeSwiper.destroy(true, true);
      setTimeout(() => {
        homeSwiper = new Swiper('[data-swiper="home-banner-slider"]', options);
      }, 500);
    });
  }
  //   home page slider end

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 0 ? "vertical" : "horizontal";
    return direction;
  }
  function verticleSlider() {
    if (typeof Swiper !== "undefined") {
      const slider_thumb = {
        direction: "vertical",
        spaceBetween: 24,
        slidesPerView: 3,
        loop: true,
        loopedSlides: 8,
        slideToClickedSlide: true,
        navigation: {
          nextEl: ".vertical-slider-next",
          prevEl: ".vertical-slider-prev",
        },
        breakpoints: {
          0: {
            direction: "horizontal",
            slidesPerView: 1,
          },
          768: {
            direction: "vertical",
            slidesPerView: 3,
          },
        },
      };
      const slider_img = {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        loopedSlides: 8,
        mousewheel: false,
        effect: "fade",
        breakpoints: {
          0: {
            direction: "horizontal",
          },
          992: {
            direction: "vertical",
          },
        },
      };

      let sliderThumbs = new Swiper(
        '[data-swiper="slider-thumbs"] [data-swiper="slider-thumbs-inner"]',
        slider_thumb
      );

      let sliderImages = new Swiper(
        '[data-swiper="slider-images"] [data-swiper="slider-images-inner"]',
        slider_img
      );

      sliderImages.controller.control = sliderThumbs;
      sliderThumbs.controller.control = sliderImages;

      document.addEventListener("theme_scheme_direction", (e) => {
        sliderThumbs.destroy(true, true);
        sliderImages.destroy(true, true);
        setTimeout(() => {
          sliderThumbs = new Swiper(
            '[data-swiper="slider-thumbs"] [data-swiper="slider-thumbs-inner"]',
            slider_thumb
          );
          sliderImages = new Swiper(
            '[data-swiper="slider-images"] [data-swiper="slider-images-inner"]',
            slider_img
          );
          sliderImages.controller.control = sliderThumbs;
          sliderThumbs.controller.control = sliderImages;
        }, 500);
      });
    }
  }

  // Call the function to initialize the Swipers
  verticleSlider();

  //vericle thumb slider end

  // ott thumb slider start
  function ottThumbSlider() {
    if (typeof Swiper !== "undefined") {
      const slider_thumb = {
        direction: "horizontal",
        spaceBetween: 24,
        slidesPerView: 2,
        loop: true,
        loopedSlides: 8,
        slideToClickedSlide: true,
        autoplay: true,
        navigation: {
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        },
        breakpoints: {
          0: {
            direction: "horizontal",
            slidesPerView: 1,
          },
          768: {
            direction: "horizontal",
            slidesPerView: 2,
          },
        },
      };

      const slider_img = {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        loopedSlides: 8,
        mousewheel: false,
        effect: "fade",
      };
      let sliderThumbsOtt = new Swiper(
        '[data-swiper="slider-thumbs-ott"] [data-swiper="slider-thumbs-inner-ott"]',
        slider_thumb
      );
      let sliderImagesOtt = new Swiper(
        '[data-swiper="slider-images-ott"] [data-swiper="slider-images-inner-ott"]',
        slider_img
      );

      sliderImagesOtt.controller.control = sliderThumbsOtt;
      sliderThumbsOtt.controller.control = sliderImagesOtt;

      document.addEventListener("theme_scheme_direction", (e) => {
        sliderThumbsOtt.destroy(true, true);
        sliderImagesOtt.destroy(true, true);
        setTimeout(() => {
          sliderThumbsOtt = new Swiper(
            '[data-swiper="slider-thumbs-ott"] [data-swiper="slider-thumbs-inner-ott"]',
            slider_thumb
          );
          sliderImagesOtt = new Swiper(
            '[data-swiper="slider-images-ott"] [data-swiper="slider-images-inner-ott"]',
            slider_img
          );
          sliderImagesOtt.controller.control = sliderThumbsOtt;
          sliderThumbsOtt.controller.control = sliderImagesOtt;
        }, 500);
      });
    }
  }

  ottThumbSlider();
  // ott thumb slider end

  // tab with slider start
  if (
    document.querySelectorAll('[data-swiper="gallery-top"]').length &&
    document.querySelectorAll('[data-swiper="gallery-bottom"]').length
  ) {
    const options = {
      slidesPerView: 5,
      loop: true,
      loopedSlides: 4,
      centeredSlides: true,
      slideToClickedSlide: true,
      touchRatio: 0.2,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        479: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl: ".swiper-arrow.swiper-button-next",
        prevEl: ".swiper-arrow.swiper-button-prev",
      },
    };

    let galleryTop = new Swiper('[data-swiper="gallery-top"]', options);

    const options1 = {
      spaceBetween: 32,
      slidesPerView: 1,
      loop: true,
      loopedSlides: 4,
      effect: "fade",
      on: {
        slideChange: function () {
          // Get the currently active slide index in the gallery-bottom Swiper
          var activeSlideIndex = this.activeIndex;

          // Find the active slide element
          var activeSlide = this.slides[activeSlideIndex];
          const mainUUID = generateUUID();
          $(activeSlide).find(".iq-custom-tab").attr("id", mainUUID);
          $(activeSlide).find(".tab-content").attr("id", mainUUID);
          $(activeSlide)
            .find(".iq-custom-tab .nav-link")
            .each(function () {
              const thisId = $(this).attr("id");
              const thisTarget = $(this).attr("data-bs-target");
              const target = $(activeSlide).find(thisTarget);
              const uuid = generateUUID();
              const newtargetID = thisTarget.replace("#", "");
              target.attr("id", newtargetID + "-" + uuid);
              target.attr("aria-labelledby", thisId + "-" + uuid);
              $(this).attr("data-bs-target", "#" + newtargetID + "-" + uuid);
              $(this).attr("id", thisId + "-" + uuid);
              $(this).attr("aria-controls", target.attr("id"));
            });

          $(activeSlide)
            .find(".iq-custom-tab .nav-link")
            .each(function () {
              const tabTrigger = new bootstrap.Tab(this);
              this.addEventListener("click", (event) => {
                event.preventDefault();
                tabTrigger.show();
              });
            });
        },
      },
    };

    let galleryThumbs = new Swiper('[data-swiper="gallery-bottom"]', options1);
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    document.addEventListener("theme_scheme_direction", (e) => {
      galleryTop.destroy(true, true);
      galleryThumbs.destroy(true, true);
      setTimeout(() => {
        galleryTop = new Swiper('[data-swiper="gallery-top"]', options);
        galleryThumbs = new Swiper('[data-swiper="gallery-bottom"]', options1);
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
      }, 500);
    });
  }

  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  //inner page banner slider start
  if (
    document.querySelectorAll('[data-swiper="banner-detail-slider"]').length
  ) {
    const options = {
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-banner-button-next",
        prevEl: ".swiper-banner-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        1200: {
          slidesPerView: 1.2,
        },
      },
    };
    let swiper = new Swiper('[data-swiper="banner-detail-slider"]', options);
    document.addEventListener("theme_scheme_direction", (e) => {
      swiper.destroy(true, true);
      setTimeout(() => {
        swiper = new Swiper('[data-swiper="banner-detail-slider"]', options);
      }, 500);
    });
  }

  function productThumbslider() {
    if (typeof Swiper !== "undefined") {
      const slider_thumb = {
        direction: "horizontal",
        spaceBetween: 24,
        slidesPerView: 4,
        loop: true,
        loopedSlides: 8,
        slideToClickedSlide: true,
        autoplay: false,
        navigation: {
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        },
        breakpoints: {
          0: {
            direction: "horizontal",
            slidesPerView: 2,
          },
          479: {
            direction: "horizontal",
            slidesPerView: 3,
          },
          768: {
            direction: "horizontal",
            slidesPerView: 4,
          },
        },
      };

      const slider_img = {
        direction: "horizontal",
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        loopedSlides: 8,
        mousewheel: false,
        effect: "fade",
      };
      let sliderThumbsProduct = new Swiper(
        '[data-swiper="slider-thumbs-product"]',
        slider_thumb
      );
      let sliderProductImages = new Swiper(
        '[data-swiper="slider-prodcut-images"]',
        slider_img
      );

      sliderProductImages.controller.control = sliderThumbsProduct;
      sliderThumbsProduct.controller.control = sliderProductImages;

      document.addEventListener("theme_scheme_direction", (e) => {
        sliderThumbsProduct.destroy(true, true);
        sliderProductImages.destroy(true, true);
        setTimeout(() => {
          sliderThumbsProduct = new Swiper(
            '[data-swiper="slider-thumbs-product"]',
            slider_thumb
          );
          sliderProductImages = new Swiper(
            '[data-swiper="slider-prodcut-images"]',
            slider_img
          );
          sliderProductImages.controller.control = sliderThumbsProduct;
          sliderThumbsProduct.controller.control = sliderProductImages;
        }, 500);
      });
    }
  }
  productThumbslider();
})(jQuery);
