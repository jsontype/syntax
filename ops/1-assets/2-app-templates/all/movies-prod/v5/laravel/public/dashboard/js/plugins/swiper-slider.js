(function () {
    "use strict";

if (document.querySelectorAll('#qui-dashboard').length > 0) {
    const options = {
        centeredSlides: false,
        loop: false,
        slidesPerView: 4,
        autoplay:false,
        spaceBetween: 32,
        breakpoints: {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
            1400: { slidesPerView: 1 },
            1500: { slidesPerView: 1 },
            1920: { slidesPerView: 1 },
            2040: { slidesPerView: 1 },
            2440: { slidesPerView: 1 }
        },
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        }
    }

    let swiper = new Swiper('#qui-dashboard',options);

    document.addEventListener('theme_scheme_direction', (e) => {
      swiper.destroy(true, true)
      setTimeout(() => {
          swiper = new Swiper('#qui-dashboard',options);
      }, 500);
    })
}
if (document.querySelectorAll('#top-dashboard').length > 0) {
    const options = {
        centeredSlides: false,
        loop: true,
        slidesPerView: 3,
        autoplay:false,
        spaceBetween: 24,
        breakpoints: {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 1 },
            991: { slidesPerView: 2 },
            1400: { slidesPerView: 2 },
            1500: { slidesPerView: 3 },
            1920: { slidesPerView: 3 },
            2040: { slidesPerView: 3 },
            2440: { slidesPerView: 3 }
        },
        pagination: {
            el: '.swiper-pagination-dot',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        }
    }

    let swiper = new Swiper('#top-dashboard',options);

    document.addEventListener('theme_scheme_direction', (e) => {
      swiper.destroy(true, true)
      setTimeout(() => {
          swiper = new Swiper('#top-dashboard',options);
      }, 500);
    })
}

if (document.querySelectorAll('[data-swiper="top-slider"]').length) {
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
			1024: { slidesPerView: 4 },
			1400: { slidesPerView: 4 },
			1500: { slidesPerView: 4 }
		},
	} 
	let swiper = new Swiper('[data-swiper="top-slider"]',options);
	document.addEventListener('ChangeMode', (e) => {
        if (e.detail.rtl === 'rtl' || e.detail.rtl === 'ltr') {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('[data-swiper="top-slider"]',options);
            }, 500);
        }
	})
}

})(jQuery);
