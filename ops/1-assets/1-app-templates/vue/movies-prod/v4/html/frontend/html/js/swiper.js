jQuery('.swiper-nav').on('click touch', function (e) {
	e.preventDefault();
	let arrow = jQuery(this);
	if (!arrow.hasClass('animate')) {
		arrow.addClass('animate');
		setTimeout(() => {
			arrow.removeClass('animate');
		}, 1600);
	}
});
// home page slider start
if (document.querySelectorAll('[data-swiper="home-banner-slider"]').length) {
	const options = {
		centeredSlides: false,
		slidesPerView:1,
		loop: true,
		spaceBetween: 10,
		navigation: { 
			nextEl: '#home-banner-slider-next', 
			prevEl: '#home-banner-slider-prev' ,
			},
			responsive: [
				{
					breakpoint: 992,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
				}
			],
			on: {
				init: () => {
					animationInit()
				},
				slideChangeTransitionStart: function () {
					animationInit()
				}
			}
	} 
	let swiper = new Swiper('[data-swiper="home-banner-slider"]',options);
}
//   home page slider end

//movie slider start
if (document.querySelectorAll('[data-swiper="common-slider"]').length) {
	const options = {
		centeredSlides: false,
		loop: true,
		// autoplay: 
        //   {
        //     delay: 2000,
        // },
		slidesPerView: 4,
		watchSlidesProgress: true,
		spaceBetween: 20,
        navigation: {
			clickable: true,
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: { slidesPerView: 1 },
			320: { slidesPerView: 2 },
			767: { slidesPerView: 3 },
			1400: { slidesPerView: 4 },
			1500: { slidesPerView: 4 }
		},
	} 
	let swiper = new Swiper('[data-swiper="common-slider"]',options);
	document.addEventListener('ChangeMode', (e) => {
        if (e.detail.rtl === 'rtl' || e.detail.rtl === 'ltr') {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('[data-swiper="common-slider"]',options);
            }, 500);
        }
        })
    }
//movie slider end

//inner page banner slider start
if (document.querySelectorAll('[data-swiper="banner-detail-slider"]').length) {
	const options = {
	centeredSlides: true,
	grabCursor: true,
	loop: true,
	navigation: {
	nextEl: ".swiper-banner-button-prev",
	prevEl: ".swiper-banner-button-next"
	},
	breakpoints: {
		0: {
		slidesPerView: 1.2,
		},
		1200: {
		slidesPerView: 1.2,
		}
	},
	}
	document.addEventListener('ChangeMode', (e) => {
        if (e.detail.rtl === 'rtl' || e.detail.rtl === 'ltr') {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('[data-swiper="banner-detail-slider"]',options);
            }, 500);
        }
        })
	let swiper = new Swiper('[data-swiper="banner-detail-slider"]',options);
}
//inner page banner slider end

//vericle slider start
function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = window.innerWidth <= 0 ? 'vertical' : 'horizontal';
	return direction;
 }
const sliderThumbs = new Swiper('[data-swiper="slider-thumbs"] [data-swiper="slider-thumbs-inner"]', { 
  direction: 'vertical', 
  spaceBetween: 24,
  slidesPerView: 4,
  loop:true,
  loopedSlides: 8,
  slideToClickedSlide: true,
  navigation: { 
	  nextEl: '.slider-next', 
	  prevEl: '.slider-prev', 
  },
  breakpoints: {
	  0:{ 
		  direction: 'horizontal',
		  slidesPerView: 1,
	  },
	  768:{ 
		  direction: 'vertical',
		  slidesPerView: 4,
	  }
  },
});
const sliderImages = new Swiper('[data-swiper="slider-images"] [data-swiper="slider-images-inner"]', { 
  direction: 'vertical', 
  slidesPerView: 1, 
  loop:true,
  loopedSlides: 8,
  mousewheel: true, 
  navigation: { 
	  nextEl: '.swiper-button-prev', 
	  prevEl: '.swiper-button-next'
  },
  effect: 'fade',
  breakpoints: {
	  0:{ 
		  direction: 'horizontal',
	  },
	 768:{ 
		  direction: 'vertical',
	  }
  },
});
sliderImages.controller.control = sliderThumbs;
sliderThumbs.controller.control = sliderImages;

//gallary slider start
if (document.querySelectorAll('[data-swiper="gallery-top"]').length && document.querySelectorAll('[data-swiper="gallery-bottom"]').length) {
	const options = {
		slidesPerView: 5,
		loop: true,
		loopedSlides: 4,
		centeredSlides: true,
		slideToClickedSlide: true,
		touchRatio: 0.2,
		breakpoints: {
			0: {
			slidesPerView: 3
			},
			1000: {
			slidesPerView: 5
			}
		},
		navigation: {
			nextEl: '.swiper-arrow.swiper-button-next',
			prevEl: '.swiper-arrow.swiper-button-prev',
		},
	}
    let galleryTop = new Swiper('[data-swiper="gallery-top"]',options);

	const options1 = {
		spaceBetween: 32,
		slidesPerView: 1,
		loop: true,
		loopedSlides: 4,
		effect: 'fade'
	}
	let galleryThumbs = new Swiper('[data-swiper="gallery-bottom"]',options1);
	galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}
	
//gallary slider end